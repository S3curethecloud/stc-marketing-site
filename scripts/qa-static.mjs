import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "out");

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

function pass(message) {
  console.log(`PASS: ${message}`);
}

if (!fs.existsSync(outDir)) {
  console.error("FAIL: out/ does not exist. Run `npm run build` first.");
  process.exit(1);
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const htmlFiles = walk(outDir).filter((file) => file.endsWith(".html"));
const htmlByRoute = new Map();

function routeForFile(file) {
  const relative = path.relative(outDir, file).replaceAll(path.sep, "/");
  if (relative === "index.html") return "/";
  if (relative.endsWith("/index.html")) return `/${relative.slice(0, -"/index.html".length)}`;
  return `/${relative.slice(0, -".html".length)}`;
}

for (const file of htmlFiles) {
  htmlByRoute.set(routeForFile(file), fs.readFileSync(file, "utf8"));
}

if (htmlFiles.length === 0) fail("static export contains no HTML files");
else pass(`static export contains ${htmlFiles.length} HTML pages`);

const requiredRoutes = [
  "/",
  "/services",
  "/industries",
  "/insights",
  "/evidence",
  "/company",
  "/request-demo",
];

for (const route of requiredRoutes) {
  if (!htmlByRoute.has(route)) fail(`required route missing from export: ${route}`);
  else pass(`required route exported: ${route}`);
}

const routeIds = new Map();
for (const [route, html] of htmlByRoute) {
  routeIds.set(route, new Set([...html.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1])));
}

function normalizeInternalHref(href, currentRoute) {
  if (
    !href ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("javascript:") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//")
  ) return null;

  const [withoutHash, hash = ""] = href.split("#", 2);
  const clean = withoutHash.split("?", 1)[0];
  let route;
  if (!clean) route = currentRoute;
  else if (clean.startsWith("/")) route = clean;
  else {
    const base = currentRoute === "/" ? "/" : `${currentRoute}/`;
    route = path.posix.normalize(path.posix.join(base, clean));
    if (!route.startsWith("/")) route = `/${route}`;
  }
  if (route.length > 1 && route.endsWith("/")) route = route.slice(0, -1);
  return { route, hash };
}

let checkedLinks = 0;
for (const [currentRoute, html] of htmlByRoute) {
  const hrefs = [...html.matchAll(/\shref=["']([^"']+)["']/g)].map((match) => match[1]);
  for (const href of hrefs) {
    const target = normalizeInternalHref(href, currentRoute);
    if (!target) continue;
    checkedLinks += 1;
    if (!htmlByRoute.has(target.route)) {
      fail(`${currentRoute} links to missing internal route ${href}`);
      continue;
    }
    if (target.hash && !routeIds.get(target.route)?.has(target.hash)) {
      fail(`${currentRoute} links to missing anchor ${href}`);
    }
  }
}
if (!process.exitCode) pass(`validated ${checkedLinks} internal route/anchor references`);

const metadataExempt = new Set(["/404"]);
for (const [route, html] of htmlByRoute) {
  if (metadataExempt.has(route)) continue;
  if (!/<title>[^<]+<\/title>/i.test(html)) fail(`${route} is missing a document title`);
  if (!/<meta[^>]+name=["']description["'][^>]+content=["'][^"']+["']/i.test(html) &&
      !/<meta[^>]+content=["'][^"']+["'][^>]+name=["']description["']/i.test(html)) {
    fail(`${route} is missing a meta description`);
  }
  if (!/<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/securethecloud\.dev/i.test(html) &&
      !/<link[^>]+href=["']https:\/\/securethecloud\.dev[^"']*["'][^>]+rel=["']canonical["']/i.test(html)) {
    fail(`${route} is missing a SecureTheCloud canonical URL`);
  }
}
if (!process.exitCode) pass("validated title, description, and canonical metadata coverage");

const sitemapPath = path.join(outDir, "sitemap.xml");
const robotsPath = path.join(outDir, "robots.txt");
if (!fs.existsSync(sitemapPath)) fail("sitemap.xml missing from export");
if (!fs.existsSync(robotsPath)) fail("robots.txt missing from export");

if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, "utf8");
  for (const route of requiredRoutes) {
    if (!sitemap.includes(`https://securethecloud.dev${route === "/" ? "" : route}`)) {
      fail(`sitemap missing required route: ${route}`);
    }
  }
  if (sitemap.includes("/request-demo/success")) fail("sitemap must not include consultation success page");
  else pass("sitemap includes buyer routes and excludes consultation success page");
}

const requestHtml = htmlByRoute.get("/request-demo") ?? "";
if (!requestHtml.includes("Architecture consultation intake")) fail("consultation intake content missing from static export");
else pass("consultation intake is present in static export");

const formSource = fs.readFileSync(path.join(root, "components/forms/DemoRequestForm.tsx"), "utf8");
const formContractChecks = [
  ["Formspree action", "https://formspree.io/f/mzdjyodg"],
  ["consultation area field", 'name="consultationArea"'],
  ["buyer role field", 'name="buyerRole"'],
  ["timeline field", 'name="timeline"'],
  ["problem statement field", 'name="problemStatement"'],
  ["source-context field", 'name="source"'],
  ["query context parsing", "useSearchParams"],
];
for (const [label, token] of formContractChecks) {
  if (!formSource.includes(token)) fail(`consultation form contract missing ${label}`);
}
if (!process.exitCode) pass("consultation form contract and contextual routing are present");

const headersPath = path.join(root, "public/_headers");
if (!fs.existsSync(headersPath)) {
  fail("public/_headers is missing");
} else {
  const headers = fs.readFileSync(headersPath, "utf8").toLowerCase();
  for (const header of [
    "strict-transport-security:",
    "x-content-type-options:",
    "x-frame-options:",
    "referrer-policy:",
    "permissions-policy:",
    "content-security-policy:",
  ]) {
    if (!headers.includes(header)) fail(`security header declaration missing: ${header}`);
  }
  if (!headers.includes("https://formspree.io")) fail("CSP does not permit the configured Formspree endpoint");
  else if (!process.exitCode) pass("security header contract includes required controls and Formspree allowance");
}

if (process.exitCode) {
  console.error("\nRB-24 static assurance FAILED.");
  process.exit(process.exitCode);
}
console.log("\nRB-24 static assurance PASSED.");
