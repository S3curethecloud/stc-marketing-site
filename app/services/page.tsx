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
    outcomes: [
      "Secure AI reference architecture",
      "LLM, RAG, and agentic threat model",
      "AI gateway and MCP gateway security patterns",
      "Identity, authorization, and tool-use control model",
      "Architecture decision records and implementation roadmap",
    ],
    buyers: ["CISO", "CTO", "AI leader", "Security architect"],
  },
  {
    id: "cloud-governance",
    eyebrow: "Cloud Governance",
    title: "Cloud Governance and Platform Security",
    body:
      "We help organizations establish governance, identity, policy, secrets, infrastructure, and platform controls across AWS, Azure, GCP, Kubernetes, and distributed cloud environments.",
    outcomes: [
      "Cloud governance architecture",
      "IAM and workload identity model",
      "Kubernetes and platform security patterns",
      "Secrets, policy, and control-plane design",
      "Multi-cloud governance operating model",
    ],
    buyers: ["CIO", "CTO", "Platform leader", "Cloud security leader"],
  },
  {
    id: "secure-ai-adoption",
    eyebrow: "Secure Adoption",
    title: "Secure AI Adoption Strategy",
    body:
      "We help executives and delivery teams move from AI experimentation to governed implementation with clear priorities, risk-tiered use cases, and build-ready adoption roadmaps.",
    outcomes: [
      "Secure AI adoption roadmap",
      "AI use-case risk tiering",
      "Pilot-to-production security plan",
      "Stakeholder decision framework",
      "Executive and technical workshop outputs",
    ],
    buyers: ["CIO", "CTO", "AI transformation leader", "Business sponsor"],
  },
  {
    id: "governance-compliance",
    eyebrow: "AI Governance",
    title: "AI Governance and Compliance Readiness",
    body:
      "We translate AI security, privacy, compliance, and audit expectations into practical governance architecture and evidence-ready control models.",
    outcomes: [
      "NIST AI RMF alignment model",
      "OWASP LLM risk mapping",
      "SOC 2 readiness evidence model",
      "Policy-to-control traceability",
      "AI governance operating model",
    ],
    buyers: ["GRC leader", "CISO", "Compliance leader", "Privacy leader"],
  },
  {
    id: "regulated-ai",
    eyebrow: "Regulated Workflows",
    title: "Healthcare and Regulated AI Workflow Architecture",
    body:
      "We design secure, reviewable, human-in-the-loop AI workflows for healthcare, behavioral health, financial services, and high-compliance environments.",
    outcomes: [
      "Sensitive-data workflow architecture",
      "Human review and approval patterns",
      "Clinical or regulated workflow control model",
      "Audit-ready evidence and documentation flow",
      "Secure integration and operating model",
    ],
    buyers: ["Healthcare operator", "Clinical technology leader", "CISO", "Compliance leader"],
  },
  {
    id: "executive-advisory",
    eyebrow: "Advisory",
    title: "Executive Advisory and Solution Design",
    body:
      "We partner with leaders to shape AI transformation initiatives, investment priorities, client workshops, delivery plans, and implementation-ready solution architectures.",
    outcomes: [
      "Executive architecture workshop",
      "Business case and solution narrative",
      "Delivery roadmap and phased plan",
      "Proposal and SOW shaping support",
      "Board, C-suite, and technical stakeholder materials",
    ],
    buyers: ["CEO", "CIO", "CTO", "CISO", "AI program sponsor"],
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

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[#030711]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.25),transparent_30rem),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.18),transparent_30rem)]" />
        <Container className="relative py-24 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
                Enterprise AI Security Services
              </p>
              <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl">
                Turn AI ambition into governed implementation.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                SecureTheCloud helps enterprise teams design AI security architecture, cloud governance, secure adoption strategies, and implementation-ready technical designs across distributed client environments.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/request-demo"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-black text-white shadow-2xl shadow-violet-950/40"
                >
                  Request Consultation
                  <span className="ml-2" aria-hidden="true">-&gt;</span>
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white hover:border-cyan-300/60 hover:text-cyan-200"
                >
                  Explore services
                  <span className="ml-2" aria-hidden="true">-&gt;</span>
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-violet-950/20">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-violet-300">
                Built for buyers
              </p>
              <div className="mt-5 grid gap-3">
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

      <section className="border-b border-white/10 bg-[#050816] py-14 md:py-16">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {proofPoints.map((point) => (
              <article
                key={point.value}
                className="rounded-[2rem] border border-cyan-300/20 bg-white/[0.03] p-6"
              >
                <h2 className="text-2xl font-black text-cyan-300">{point.value}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{point.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#030711] py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.45em] text-violet-300">
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
                  className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:grid-cols-[5rem_1fr]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 text-sm font-black text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className="border-y border-white/10 bg-white/[0.02] py-16 md:py-24">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.45em] text-violet-300">
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
                className="rounded-[2.25rem] border border-white/10 bg-[#060a15] p-6 shadow-2xl shadow-black/10 md:p-8"
              >
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-300">
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
                  </div>

                  <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
                    <h4 className="text-sm font-black uppercase tracking-[0.28em] text-violet-300">
                      Typical outputs
                    </h4>
                    <ul className="mt-5 grid gap-3">
                      {service.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-3 text-sm leading-6 text-slate-300">
                          <span className="mt-1 text-cyan-300">✦</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#030711] py-16 md:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2.25rem] border border-violet-400/20 bg-[linear-gradient(135deg,rgba(88,28,135,0.62),rgba(3,7,17,0.88))] p-8 shadow-2xl shadow-violet-950/30 md:p-10">
            <div className="absolute inset-y-0 right-0 hidden w-[50%] bg-[radial-gradient(circle_at_55%_50%,rgba(56,189,248,0.22),transparent_18rem)] lg:block" />
            <div className="relative max-w-4xl">
              <p className="text-sm font-black uppercase tracking-[0.45em] text-violet-200">
                Consultation funnel
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Bring us the business goal, technical ambiguity, and security pressure.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                We will help translate it into secure architecture, governance decisions, implementation guidance, and a delivery path your teams can act on.
              </p>
              <Link
                href="/request-demo"
                className="mt-8 inline-flex rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-black text-white"
              >
                Request Consultation
                <span className="ml-2" aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
