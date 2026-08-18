# RB-25 — Production Experience Validation

Status: IN PROGRESS

Purpose: validate the live SecureTheCloud marketing site as a production system after RB-24 through RB-24E hardening. This phase is observational and defect-driven only. It does not introduce redesigns, new marketing features, or new information architecture.

## Release standard

If no material defects remain after this validation, the current SecureTheCloud marketing site is classified as **production-baseline complete**.

Any issue discovered in RB-25 must be recorded as a production defect and fixed surgically. Opportunistic redesign is out of scope.

## Viewport matrix

Validate the live domain at:

- 375 px
- 390 px
- 430 px
- 768 px
- desktop (1024–1440 px)
- wide desktop

For each viewport confirm:

- no horizontal overflow
- no clipped headings, labels, controls, or links
- readable line lengths and section spacing
- header/footer integrity
- mobile navigation behavior
- primary CTA visibility and target correctness
- form controls remain inside their containing width
- visible keyboard focus states

## Journey 1 — Service-led buyer

Path:

`/services` → relevant industry → architecture note → `/evidence` → contextual consultation

Validate:

- service decision triggers and deliverables are readable
- internal links resolve to the intended page/anchor
- consultation link carries the expected `focus` and `from` context
- `/request-demo` preselects the correct consultation area
- user can override the preselected area

## Journey 2 — Industry-led buyer

Path:

`/industries` → related service → technical authority / insight → evidence → consultation

Validate:

- industry context remains inside SecureTheCloud until optional source provenance
- evidence pathways are clear without requiring GitHub
- consultation context is preserved

## Journey 3 — Insight-led technical evaluator

Path:

`/insights` → architecture note → related service / industry → evidence → consultation

Validate:

- architecture-note navigation has no dead end
- leadership and engineering decision content is readable on mobile
- related routes and consultation context resolve correctly

## Journey 4 — Evidence-led due diligence

Path:

`/evidence` → related service → architecture note → consultation

Optional deep technical path:

`/evidence` → public source repository

Validate:

- GitHub is secondary provenance, not the primary buyer journey
- every public source repository opens the intended repository in a new tab
- no broken repository URLs
- enterprise-facing evidence titles remain distinct from underlying repository names

## Career journey

Validate:

`/careers` → role page → express interest → `/careers/join` → success

Confirm:

- role detail typography matches the restrained enterprise system
- 375/390/430 mobile pages have no clipping or overflow
- role context is carried into the talent intake where applicable
- career intake controls fit within the viewport
- success state is reachable and styled consistently

## Consultation conversion validation

Validate entry into `/request-demo` from:

- service
- industry
- insight
- evidence
- global Request consultation CTA

Confirm:

- contextual `focus` mapping is correct
- source context is preserved
- no-context direct visit remains valid
- all required fields enforce browser validation
- no sensitive-data guidance is visible
- submit/loading/error states are usable with keyboard and screen-reader announcements

### Controlled real Formspree test

Perform exactly one production test submission using a controlled test identity and clearly label the problem statement as an RB-25 production validation message.

Do not submit passwords, credentials, PHI, customer records, secrets, or production-sensitive information.

Pass criteria:

- Formspree accepts the request
- user is routed to `/request-demo/success`
- the expected fields and source context arrive in the controlled destination

## Production platform checks

Verify directly against `https://securethecloud.dev`:

- HTTPS and redirect behavior
- `Strict-Transport-Security`
- `X-Content-Type-Options`
- `X-Frame-Options` or equivalent CSP framing policy
- `Referrer-Policy`
- `Permissions-Policy`
- `Content-Security-Policy`
- Formspree is allowed by CSP
- `robots.txt`
- `sitemap.xml`
- `/evidence` present in sitemap
- `/request-demo/success` excluded from sitemap and noindexed

## Metadata / browser surface checks

Validate representative pages for:

- title
- meta description
- canonical URL
- favicon
- Open Graph title/description/image behavior
- Twitter/X card metadata where configured
- no duplicate or malformed canonical values

Representative pages:

- `/`
- `/services`
- `/industries`
- `/insights`
- `/evidence`
- `/company`
- `/careers`
- `/request-demo`

## Accessibility observation

Keyboard-only validation:

- skip / navigation sequence is coherent
- menu button is reachable and operable
- dropdown/mobile navigation is usable without pointer input
- visible focus is never suppressed
- primary/secondary CTAs are distinguishable
- inputs, selects, and textareas have associated labels
- error/loading messages are announced through the existing live regions

## Defect log

Record only observed production defects.

| ID | Severity | Viewport / route | Observation | Expected | Status |
| --- | --- | --- | --- | --- | --- |
| RB25-D001 | — | — | No defects recorded yet | — | OPEN VALIDATION |

Severity guidance:

- P0: security, data exposure, inaccessible conversion, or production outage
- P1: broken primary journey, broken form, broken navigation, material mobile overflow
- P2: degraded but usable production experience
- P3: minor visual or copy defect with no journey impact

## Exit criteria

RB-25 is complete only when:

- all viewport classes have been manually inspected
- all four buyer journeys pass
- career journey passes
- consultation preselection passes from all supported contexts
- one controlled Formspree production submission passes
- response headers and production metadata pass
- external evidence links pass
- keyboard/focus observation passes
- all P0/P1/P2 defects are resolved or explicitly accepted
- Production Assurance and Cloudflare Pages remain green

Final classification on success:

**SecureTheCloud marketing site — PRODUCTION-BASELINE COMPLETE**
