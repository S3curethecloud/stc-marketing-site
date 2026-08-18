import Link from "next/link";
import Container from "@/components/layout/Container";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Enterprise AI Security Services",
  description:
    "SecureTheCloud provides enterprise AI security architecture, cloud governance, secure AI adoption, compliance readiness, regulated workflow architecture, and executive advisory services.",
  path: "/services",
});

const buyers = [
  "CISOs and security leaders",
  "CTOs and CIOs",
  "AI and data leaders",
  "Cloud and platform engineering teams",
  "Healthcare and regulated-operations leaders",
  "GRC, risk, privacy, and compliance teams",
] as const;

const engagementModel = [
  {
    step: "01",
    title: "Assess",
    body:
      "Clarify business goals, AI use cases, risk exposure, cloud posture, compliance expectations, stakeholder needs, and implementation constraints.",
  },
  {
    step: "02",
    title: "Architect",
    body:
      "Design the target-state AI security, cloud governance, identity, policy, data, workflow, and evidence architecture.",
  },
  {
    step: "03",
    title: "Govern",
    body:
      "Translate security and compliance needs into governance models, control mappings, operating decisions, and policy-backed implementation guidance.",
  },
  {
    step: "04",
    title: "Validate",
    body:
      "Stress-test architecture decisions against threat models, regulatory expectations, delivery realities, and operational edge cases.",
  },
  {
    step: "05",
    title: "Implement",
    body:
      "Prepare build-ready designs, phased roadmaps, backlog inputs, architecture decision records, and delivery guardrails for client teams.",
  },
] as const;

const services = [
  {
    id: "ai-security-architecture",
    eyebrow: "Secure AI Architecture",
    title: "Enterprise AI Security Architecture",
    body:
      "We design secure-by-default architectures for enterprise AI systems, LLM applications, RAG pipelines, agentic workflows, AI gateways, MCP gateways, model access, data flows, and runtime controls.",
    triggers: [
      "Your AI pilots are moving toward production without a shared security architecture.",
      "Agents, RAG, model APIs, or tool-calling introduce new trust boundaries that are not yet governed.",
      "Security, cloud, data, and AI teams are making architecture decisions independently.",
    ],
    scope: [
      "Current-state architecture and trust-boundary review",
      "Identity, authorization, model, data, retrieval, tool, and runtime control design",
      "Threat modeling for LLM, RAG, agentic, gateway, and MCP patterns",
      "Target-state reference architecture and implementation sequencing",
    ],
    deliverables: [
      "Secure AI reference architecture",
      "LLM, RAG, and agentic threat model",
      "AI gateway and MCP gateway security patterns",
      "Identity, authorization, and tool-use control model",
      "Architecture decision records and implementation roadmap",
    ],
    decisionOutcome:
      "Leadership and engineering teams leave with an agreed target architecture, explicit trust boundaries, and a build sequence that can enter security review and delivery planning.",
    buyers: ["CISO", "CTO", "AI leader", "Security architect"],
    related: [
      { label: "Architecture perspective", href: "/architecture" },
      {
        label: "Secure agent architecture insight",
        href: "/insights/designing-secure-agent-architectures-for-the-enterprise-era",
      },
    ],
  },
  {
    id: "cloud-governance",
    eyebrow: "Cloud Governance",
    title: "Cloud Governance and Platform Security",
    body:
      "We help organizations establish governance, identity, policy, secrets, infrastructure, and platform controls across AWS, Azure, GCP, Kubernetes, and distributed cloud environments.",
    triggers: [
      "AI adoption is exposing inconsistent identity, secrets, policy, network, or logging controls across cloud environments.",
      "Platform teams need reusable guardrails instead of one-off security reviews.",
      "Multi-cloud or Kubernetes growth has created unclear ownership and control-plane boundaries.",
    ],
    scope: [
      "Cloud control-plane and governance posture review",
      "IAM, workload identity, secrets, policy, logging, and environment-boundary design",
      "Platform and Kubernetes security pattern definition",
      "Operating-model and control-ownership alignment",
    ],
    deliverables: [
      "Cloud governance architecture",
      "IAM and workload identity model",
      "Kubernetes and platform security patterns",
      "Secrets, policy, and control-plane design",
      "Multi-cloud governance operating model",
    ],
    decisionOutcome:
      "Platform and security leaders gain a reusable governance model that clarifies where controls live, who owns them, and how delivery teams consume approved patterns.",
    buyers: ["CIO", "CTO", "Platform leader", "Cloud security leader"],
    related: [
      { label: "Cloud modernization insight", href: "/insights/modernizing-cloud-platforms-for-secure-ai-innovation" },
      { label: "Security architecture", href: "/security" },
    ],
  },
  {
    id: "secure-ai-adoption",
    eyebrow: "Secure Adoption",
    title: "Secure AI Adoption Strategy",
    body:
      "We help executives and delivery teams move from AI experimentation to governed implementation with clear priorities, risk-tiered use cases, and build-ready adoption roadmaps.",
    triggers: [
      "AI demand is growing faster than governance and platform readiness.",
      "Leadership has many use cases but no consistent way to prioritize risk, value, and implementation feasibility.",
      "Pilot activity exists, but the path to production ownership and controls is unclear.",
    ],
    scope: [
      "AI use-case portfolio and stakeholder review",
      "Risk-tiering and control-intensity model",
      "Pilot-to-production readiness criteria",
      "Adoption roadmap aligned to platform, security, governance, and delivery dependencies",
    ],
    deliverables: [
      "Secure AI adoption roadmap",
      "AI use-case risk tiering",
      "Pilot-to-production security plan",
      "Stakeholder decision framework",
      "Executive and technical workshop outputs",
    ],
    decisionOutcome:
      "Executives gain a prioritized adoption path with clear gates, owners, dependencies, and criteria for moving AI use cases toward production.",
    buyers: ["CIO", "CTO", "AI transformation leader", "Business sponsor"],
    related: [
      {
        label: "Architecture before acceleration",
        href: "/insights/why-secure-ai-adoption-needs-architecture-before-acceleration",
      },
      { label: "Explore enterprise use cases", href: "/use-cases" },
    ],
  },
  {
    id: "governance-compliance",
    eyebrow: "AI Governance",
    title: "AI Governance and Compliance Readiness",
    body:
      "We translate AI security, privacy, compliance, and audit expectations into practical governance architecture and evidence-ready control models.",
    triggers: [
      "AI policy exists, but engineering teams do not know what controls to implement.",
      "Risk, legal, privacy, security, and delivery teams use different control language.",
      "Leadership needs traceable evidence that governance decisions are connected to system behavior.",
    ],
    scope: [
      "Governance operating-model and policy review",
      "Framework-to-control mapping for applicable AI and security expectations",
      "Control ownership, evidence-source, and testing-path definition",
      "Governance workflow design for intake, exception, review, and production readiness",
    ],
    deliverables: [
      "NIST AI RMF alignment model",
      "OWASP LLM risk mapping",
      "SOC 2 readiness evidence model",
      "Policy-to-control traceability",
      "AI governance operating model",
    ],
    decisionOutcome:
      "Governance and engineering teams gain a shared control model that can be reviewed, implemented, evidenced, and evolved without claiming certification or audit completion.",
    buyers: ["GRC leader", "CISO", "Compliance leader", "Privacy leader"],
    related: [
      {
        label: "Buildable control architecture",
        href: "/insights/turning-ai-risk-frameworks-into-buildable-control-architecture",
      },
      { label: "Enterprise trust model", href: "/security" },
    ],
  },
  {
    id: "regulated-ai",
    eyebrow: "Regulated Workflows",
    title: "Healthcare and Regulated AI Workflow Architecture",
    body:
      "We design secure, reviewable, human-in-the-loop AI workflows for healthcare, behavioral health, financial services, and high-compliance environments.",
    triggers: [
      "AI will touch sensitive, regulated, clinical, financial, or customer-impacting workflows.",
      "Human review responsibilities are unclear or are not represented in the technical design.",
      "Teams need auditability and data-minimization controls before production use.",
    ],
    scope: [
      "Workflow, data-sensitivity, and human-oversight analysis",
      "Review, approval, escalation, and exception-path design",
      "Identity, data-access, logging, evidence, and retention control definition",
      "Integration architecture for approved systems and operating boundaries",
    ],
    deliverables: [
      "Sensitive-data workflow architecture",
      "Human review and approval patterns",
      "Clinical or regulated workflow control model",
      "Audit-ready evidence and documentation flow",
      "Secure integration and operating model",
    ],
    decisionOutcome:
      "Business, compliance, and engineering stakeholders gain a reviewable workflow design that makes human accountability, sensitive-data handling, and evidence responsibilities explicit.",
    buyers: ["Healthcare operator", "Clinical technology leader", "CISO", "Compliance leader"],
    related: [
      {
        label: "Clinical workflow architecture insight",
        href: "/insights/designing-reviewable-ai-workflows-for-clinical-environments",
      },
      {
        label: "Regulated AI implementation insight",
        href: "/insights/implementing-ai-in-regulated-industries-with-confidence",
      },
    ],
  },
  {
    id: "executive-advisory",
    eyebrow: "Advisory",
    title: "Executive Advisory and Solution Design",
    body:
      "We partner with leaders to shape AI transformation initiatives, investment priorities, client workshops, delivery plans, and implementation-ready solution architectures.",
    triggers: [
      "Leadership needs an independent architecture view before committing investment or platform direction.",
      "A major AI initiative needs alignment across executive, security, cloud, data, and delivery stakeholders.",
      "A business concept needs to become a credible technical roadmap, proposal, or implementation plan.",
    ],
    scope: [
      "Executive and technical discovery workshops",
      "Architecture options, trade-offs, dependency, and risk analysis",
      "Investment, sequencing, and delivery-model framing",
      "Translation of strategy into technical artifacts and implementation decisions",
    ],
    deliverables: [
      "Executive architecture workshop",
      "Business case and solution narrative",
      "Delivery roadmap and phased plan",
      "Proposal and SOW shaping support",
      "Board, C-suite, and technical stakeholder materials",
    ],
    decisionOutcome:
      "Leaders gain a defensible decision package that connects business intent to architecture choices, delivery implications, and the next investment or implementation decision.",
    buyers: ["CEO", "CIO", "CTO", "CISO", "AI program sponsor"],
    related: [
      { label: "Enterprise architecture", href: "/architecture" },
      { label: "Secure AI adoption perspective", href: "/insights" },
    ],
  },
] as const;

const proofPoints = [
  {
    value: "Architecture-first",
    body:
      "We do not start with tool hype. We start with business goals, operating constraints, security boundaries, and implementation realities.",
  },
  {
    value: "Governance-ready",
    body:
      "Our deliverables are designed to support security review, compliance discussion, executive alignment, and delivery planning.",
  },
  {
    value: "Build-oriented",
    body:
      "We produce reference architectures, ADRs, control models, roadmaps, and backlog-ready implementation guidance.",
  },
] as const;

const deliveryModes = [
  {
    title: "Advisory decision support",
    body:
      "For executives and architecture leaders who need options, trade-offs, risk framing, and a clear recommendation before committing investment or platform direction.",
  },
  {
    title: "Architecture definition",
    body:
      "For teams that need target-state designs, trust boundaries, control models, ADRs, threat models, evidence requirements, and integration decisions.",
  },
  {
    title: "Implementation-ready engineering",
    body:
      "For delivery teams that need phased roadmaps, backlog-ready requirements, reference patterns, control configurations, validation criteria, and engineering handoff artifacts.",
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[#030711]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.25),transparent_30rem),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.18),transparent_30rem)]" />
        <Container className="relative py-16 sm:py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.34em] text-cyan-300 sm:text-sm sm:tracking-[0.45em]">
                Enterprise AI Security Services
              </p>
              <h1 className="mt-5 max-w-5xl text-[2.55rem] font-black leading-[0.98] tracking-tight text-white sm:text-5xl md:text-7xl">
                Turn AI ambition into governed implementation.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                SecureTheCloud helps enterprise teams design AI security architecture, cloud governance, secure adoption strategies, and implementation-ready technical designs across distributed client environments.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/request-demo"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-black text-white shadow-2xl shadow-violet-950/40 sm:w-auto"
                >
                  Request Architecture Consultation
                  <span className="ml-2" aria-hidden="true">-&gt;</span>
                </Link>
                <a
                  href="#services"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white hover:border-cyan-300/60 hover:text-cyan-200 sm:w-auto"
                >
                  Explore services
                  <span className="ml-2" aria-hidden="true">-&gt;</span>
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-violet-950/20 sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-violet-300 sm:text-sm sm:tracking-[0.35em]">
                Built for buyers
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {buyers.map((buyer) => (
                  <div
                    key={buyer}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-bold text-slate-200"
                  >
                    <span className="mr-2 text-cyan-300">✦</span>
                    {buyer}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#050816] py-12 md:py-16">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {proofPoints.map((point) => (
              <article
                key={point.value}
                className="rounded-[2rem] border border-cyan-300/20 bg-white/[0.03] p-5 sm:p-6"
              >
                <h2 className="text-xl font-black text-cyan-300 sm:text-2xl">{point.value}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{point.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#030711] py-14 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.34em] text-violet-300 sm:text-sm sm:tracking-[0.45em]">
                Engagement model
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Assess. Architect. Govern. Validate. Implement.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-400">
                Our work is structured to move clients from uncertainty to implementation-ready direction without losing security, governance, or compliance discipline.
              </p>
            </div>

            <div className="grid gap-4">
              {engagementModel.map((item) => (
                <article
                  key={item.step}
                  className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 sm:p-6 md:grid-cols-[5rem_1fr] md:gap-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 text-sm font-black text-white sm:h-14 sm:w-14">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white sm:text-2xl">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-[#050816] py-14 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.34em] text-violet-300 sm:text-sm sm:tracking-[0.45em]">
              Engagement depth
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Advisory when you need a decision. Engineering depth when you need to build.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              Engagements vary by program maturity, risk, scope, and delivery ownership. We make the expected depth explicit rather than forcing every client into the same consulting package.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {deliveryModes.map((mode) => (
              <article key={mode.title} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                <h3 className="text-xl font-black text-white">{mode.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{mode.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="services" className="border-b border-white/10 bg-white/[0.02] py-14 md:py-24">
        <Container>
          <div className="mb-10 max-w-3xl md:mb-12">
            <p className="text-xs font-black uppercase tracking-[0.34em] text-violet-300 sm:text-sm sm:tracking-[0.45em]">
              Service portfolio
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Services designed for enterprise AI adoption under real constraints.
            </h2>
          </div>

          <div className="grid gap-6">
            {services.map((service) => (
              <article
                id={service.id}
                key={service.id}
                className="scroll-mt-28 rounded-[2.25rem] border border-white/10 bg-[#060a15] p-5 shadow-2xl shadow-black/10 sm:p-6 md:p-8"
              >
                <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-300">
                      {service.eyebrow}
                    </p>
                    <h3 className="mt-4 text-3xl font-black tracking-tight text-white md:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-slate-400">{service.body}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.buyers.map((buyer) => (
                        <span
                          key={buyer}
                          className="rounded-full border border-violet-300/20 bg-violet-500/10 px-3 py-1 text-xs font-bold text-violet-200"
                        >
                          {buyer}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 rounded-[1.5rem] border border-cyan-300/15 bg-cyan-400/[0.035] p-5">
                      <h4 className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
                        This is for you when
                      </h4>
                      <ul className="mt-4 grid gap-3">
                        {service.triggers.map((trigger) => (
                          <li key={trigger} className="flex gap-3 text-sm leading-6 text-slate-300">
                            <span className="mt-1 text-cyan-300">→</span>
                            <span>{trigger}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
                      <h4 className="text-xs font-black uppercase tracking-[0.28em] text-violet-300">
                        Engagement scope
                      </h4>
                      <ul className="mt-5 grid gap-3">
                        {service.scope.map((item) => (
                          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                            <span className="mt-1 text-violet-300">✦</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
                      <h4 className="text-xs font-black uppercase tracking-[0.28em] text-violet-300">
                        Typical deliverables
                      </h4>
                      <ul className="mt-5 grid gap-3">
                        {service.deliverables.map((deliverable) => (
                          <li key={deliverable} className="flex gap-3 text-sm leading-6 text-slate-300">
                            <span className="mt-1 text-cyan-300">✦</span>
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-[1.75rem] border border-emerald-300/15 bg-emerald-400/[0.035] p-5 md:col-span-2">
                      <h4 className="text-xs font-black uppercase tracking-[0.28em] text-emerald-300">
                        Decision / implementation outcome
                      </h4>
                      <p className="mt-4 text-sm leading-6 text-slate-300">{service.decisionOutcome}</p>
                    </div>

                    <div className="flex flex-col gap-3 rounded-[1.75rem] border border-white/10 bg-black/20 p-5 md:col-span-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                      <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {service.related.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-black text-cyan-300 hover:text-cyan-200"
                          >
                            {item.label} <span aria-hidden="true">-&gt;</span>
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/request-demo"
                        className="inline-flex min-h-12 items-center justify-center rounded-full border border-violet-300/25 bg-violet-500/10 px-5 py-3 text-sm font-black text-white hover:border-cyan-300/50 hover:text-cyan-200"
                      >
                        Request Architecture Consultation
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#030711] py-14 md:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2.25rem] border border-violet-400/20 bg-[linear-gradient(135deg,rgba(88,28,135,0.62),rgba(3,7,17,0.88))] p-6 shadow-2xl shadow-violet-950/30 sm:p-8 md:p-10">
            <div className="absolute inset-y-0 right-0 hidden w-[50%] bg-[radial-gradient(circle_at_55%_50%,rgba(56,189,248,0.22),transparent_18rem)] lg:block" />
            <div className="relative max-w-4xl">
              <p className="text-xs font-black uppercase tracking-[0.34em] text-violet-200 sm:text-sm sm:tracking-[0.45em]">
                Architecture consultation
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Bring us the business goal, technical ambiguity, and security pressure.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                We will help translate it into secure architecture, governance decisions, implementation guidance, and a delivery path your teams can act on.
              </p>
              <Link
                href="/request-demo"
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-black text-white sm:w-auto"
              >
                Request Architecture Consultation
                <span className="ml-2" aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
