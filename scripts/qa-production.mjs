const baseUrl = (process.env.QA_BASE_URL || "https://securethecloud.dev").replace(/\/$/, "");

const checks = [
  ["/", "SecureTheCloud"],
  ["/services", "Services"],
  ["/industries", "Industries"],
  ["/insights", "Technical"],
  ["/evidence", "Evidence"],
  ["/company", "Company"],
  ["/request-demo", "Architecture consultation intake"],
];

let failed = false;
function fail(message) {
  failed = true;
  console.error(`FAIL: ${message}`);
}
function pass(message) {
  console.log(`PASS: ${message}`);
}

async function fetchText(pathname, options = {}) {
  const response = await fetch(`${baseUrl}${pathname}`, {
    redirect: "follow",
    headers: {
      "user-agent": "SecureTheCloud-RB24-QA/1.0",
      "cache-control": "no-cache",
      ...(options.headers || {}),
    },
    ...options,
  });
  return { response, text: await response.text() };
}

console.log(`RB-24 production assurance target: ${baseUrl}`);

for (const [pathname, marker] of checks) {
  try {
    const { response, text } = await fetchText(pathname);
    if (!response.ok) {
      fail(`${pathname} returned HTTP ${response.status}`);
      continue;
    }
    if (!text.toLowerCase().includes(marker.toLowerCase())) {
      fail(`${pathname} did not contain expected marker: ${marker}`);
      continue;
    }
    pass(`${pathname} returned ${response.status} and expected content`);
  } catch (error) {
    fail(`${pathname} request failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}

try {
  const { response } = await fetchText("/");
  const requiredHeaders = [
    "strict-transport-security",
    "x-content-type-options",
    "x-frame-options",
    "referrer-policy",
    "permissions-policy",
    "content-security-policy",
  ];
  for (const header of requiredHeaders) {
    if (!response.headers.get(header)) fail(`production response missing security header: ${header}`);
  }
  if (requiredHeaders.every((header) => response.headers.get(header))) {
    pass("production response exposes required security headers");
  }
} catch (error) {
  fail(`security-header check failed: ${error instanceof Error ? error.message : String(error)}`);
}

try {
  const { response, text } = await fetchText("/robots.txt");
  if (!response.ok) fail(`robots.txt returned HTTP ${response.status}`);
  else if (!text.includes("Sitemap:")) fail("robots.txt does not advertise the sitemap");
  else pass("robots.txt is reachable and advertises sitemap");
} catch (error) {
  fail(`robots.txt check failed: ${error instanceof Error ? error.message : String(error)}`);
}

try {
  const { response, text } = await fetchText("/sitemap.xml");
  if (!response.ok) fail(`sitemap.xml returned HTTP ${response.status}`);
  else {
    for (const route of ["/services", "/industries", "/insights", "/evidence", "/company", "/request-demo"]) {
      if (!text.includes(`${baseUrl}${route}`)) fail(`production sitemap missing ${route}`);
    }
    if (text.includes("/request-demo/success")) fail("production sitemap includes consultation success page");
    else pass("production sitemap contains buyer routes and excludes success page");
  }
} catch (error) {
  fail(`sitemap check failed: ${error instanceof Error ? error.message : String(error)}`);
}

try {
  const { response, text } = await fetchText("/request-demo/success");
  if (!response.ok) fail(`consultation success page returned HTTP ${response.status}`);
  else if (!/name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(text) &&
           !/content=["'][^"']*noindex[^"']*["'][^>]+name=["']robots["']/i.test(text)) {
    fail("consultation success page is missing noindex metadata");
  } else pass("consultation success page is noindex");
} catch (error) {
  fail(`success-page indexing check failed: ${error instanceof Error ? error.message : String(error)}`);
}

for (const focus of ["ai-security", "cloud-governance", "secure-adoption", "governance", "regulated", "advisory"]) {
  try {
    const { response } = await fetchText(`/request-demo?focus=${encodeURIComponent(focus)}&from=qa-rb24`);
    if (!response.ok) fail(`contextual consultation route failed for focus=${focus}: HTTP ${response.status}`);
    else pass(`contextual consultation route resolves for focus=${focus}`);
  } catch (error) {
    fail(`contextual consultation route failed for focus=${focus}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (process.env.QA_FORM_SUBMIT === "1") {
  const testEmail = process.env.QA_TEST_EMAIL;
  if (!testEmail) {
    fail("QA_FORM_SUBMIT=1 requires QA_TEST_EMAIL to avoid sending an untraceable test submission");
  } else {
    const formData = new FormData();
    formData.set("fullName", "RB-24 Production QA");
    formData.set("email", testEmail);
    formData.set("company", "SecureTheCloud QA");
    formData.set("role", "Production assurance test");
    formData.set("buyerRole", "Other");
    formData.set("consultationArea", "Other / not sure yet");
    formData.set("timeline", "Exploring for future planning");
    formData.set("problemStatement", "RB-24 controlled production QA submission. Safe to discard.");
    formData.set("environmentContext", "No sensitive data. Automated production assurance test.");
    formData.set("source", "securethecloud.dev:rb-24-production-qa");
    formData.set("requestType", "enterprise consultation");

    try {
      const response = await fetch("https://formspree.io/f/mzdjyodg", {
        method: "POST",
        headers: { Accept: "application/json", "user-agent": "SecureTheCloud-RB24-QA/1.0" },
        body: formData,
      });
      if (!response.ok) fail(`controlled Formspree submission returned HTTP ${response.status}`);
      else pass("controlled Formspree production submission accepted");
    } catch (error) {
      fail(`controlled Formspree submission failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
} else {
  console.log("SKIP: live Formspree submission (set QA_FORM_SUBMIT=1 and QA_TEST_EMAIL to run intentionally)");
}

if (failed) {
  console.error("\nRB-24 production assurance FAILED.");
  process.exit(1);
}
console.log("\nRB-24 production assurance PASSED.");
