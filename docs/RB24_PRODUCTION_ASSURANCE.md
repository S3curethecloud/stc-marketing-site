# RB-24 — Production Assurance & Conversion QA

## Purpose

RB-24 is the release-assurance layer for the SecureTheCloud marketing site after the RB-18 through RB-23 architecture, credibility, authority, evidence, and buyer-journey changes.

The goal is not another redesign. The goal is to prove that the production system behaves as intended across routes, links, metadata, security controls, consultation context, static export, and responsive buyer journeys.

## Automated release gates

### Static export assurance

Run:

```bash
npm run qa:static
```

This performs a production Next.js static build and then validates the generated `out/` tree for:

- required buyer routes
- internal route integrity
- cross-page anchor integrity
- page titles
- meta descriptions
- canonical URLs
- sitemap coverage
- exclusion of `/request-demo/success` from the sitemap
- consultation intake presence
- contextual consultation form contract
- required browser security header declarations
- Formspree allowance in the CSP

### Production smoke assurance

Run after deployment:

```bash
npm run qa:production
```

Optional target override:

```bash
QA_BASE_URL=https://preview.example.dev npm run qa:production
```

This validates:

- primary production routes return successful responses
- expected page content is present
- security headers are emitted by the deployed site
- robots and sitemap are reachable
- buyer routes are present in the production sitemap
- the consultation success page remains `noindex`
- all supported contextual consultation focus routes resolve

### Controlled Formspree submission

A real Formspree test is intentionally opt-in because it creates a real submission.

Run only when a disposable/traceable QA recipient is available:

```bash
QA_FORM_SUBMIT=1 \
QA_TEST_EMAIL=qa@example.com \
npm run qa:production
```

The generated request is clearly marked `RB-24 Production QA`, contains no sensitive data, and uses source context `securethecloud.dev:rb-24-production-qa`.

Do not enable this flag in ordinary CI unless the resulting test inquiries are expected and managed.

## Manual responsive acceptance matrix

Automated HTTP checks do not replace visual QA. Before declaring a production release complete, verify the following viewports in an actual browser:

| Viewport | Required checks |
| --- | --- |
| 375px | No horizontal overflow; brand lockup intact; navigation operable; hero wrapping intentional; forms usable; primary CTA thumb-friendly |
| 390px | Same as 375px; consultation context visible without layout shift |
| 430px | Card/list spacing balanced; no excessive whitespace; footer clean |
| 768px | Tablet header/CTA hierarchy correct; content grids transition cleanly; no clipped architecture/evidence content |
| 1024–1440px | Desktop nav stable; editorial spacing consistent; no oversized typography regression |
| Wide desktop | Content remains constrained; line length remains readable; no stretched panels or empty visual zones |

## Buyer-journey acceptance tests

Validate at least one path from each entry point:

### Service-led journey

1. Open `/services`.
2. Choose a service.
3. Follow its industry pathway.
4. Follow its architecture-note pathway.
5. Open related Evidence.
6. Start an Architecture Consultation.
7. Confirm the consultation area is carried forward correctly.

### Industry-led journey

1. Open `/industries`.
2. Select an industry architecture section.
3. Follow the related service.
4. Follow a technical authority note.
5. Open Evidence.
6. Start a consultation and confirm context.

### Insight-led journey

1. Open `/insights` and select an architecture note.
2. Confirm service, industry, and Evidence pathways are present.
3. Follow each pathway and verify the destination is relevant.
4. Start a consultation and verify the expected focus is preselected.

### Evidence-led journey

1. Open `/evidence`.
2. Inspect at least one public repository link.
3. Follow a related service and architecture note.
4. Start a consultation and verify context.

## Metadata and search acceptance

Verify:

- every primary page has a unique title and description
- canonical URLs point to `https://securethecloud.dev`
- `/request-demo/success` is not indexed
- `robots.txt` advertises the sitemap
- `sitemap.xml` contains current buyer-facing routes
- no stale or removed marketing routes are linked internally

## Security acceptance

Production responses should include:

- `Strict-Transport-Security`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy`
- `Permissions-Policy`
- `Content-Security-Policy`

The CSP must continue to permit the configured Formspree endpoint while avoiding unnecessary third-party origins.

## Claims and evidence acceptance

RB-24 must preserve the following standing rules:

- no invented customer logos
- no fabricated outcome metrics
- no implied production deployments where only public labs exist
- no SOC 2 certification claim from SOC 2-aligned readiness evidence
- public repositories demonstrate technical method, not customer outcomes
- mock, simulated, lab-safe, or deterministic evidence remains identified as such

## Release decision

RB-24 is complete only when:

- `npm run qa` passes
- Cloudflare Pages production deployment passes
- `npm run qa:production` passes against the deployed target
- the responsive matrix has been visually checked
- one contextual consultation journey has been exercised end to end
- an intentional Formspree test has been completed when production form delivery itself is part of the release scope

If any gate fails, fix the specific regression rather than redesigning unrelated parts of the site.
