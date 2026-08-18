import Link from "next/link";
import Container from "@/components/layout/Container";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Industries",
  description:
    "SecureTheCloud helps healthcare, financial services, technology, retail, and regulated organizations design secure AI and cloud architectures for real operating constraints.",
  path: "/industries",
});

const industries = [
  {
    id: "healthcare",
    title: "Healthcare and Behavioral Health",
    body:
      "Secure AI architecture for clinical, behavioral health, telehealth, intake, charting, care operations, and sensitive-data workflows.",
    triggers: [
      "AI is entering clinical or patient-adjacent workflows",
      "Sensitive data may reach models, retrieval systems, or automation",
      "Human review, traceability, and operational accountability are required",
    ],
    priorities: [
      "Separate AI-generated drafts from approved records",
      "Constrain identity, retrieval, and sensitive-data access",
      "Design explicit review, escalation, and exception paths",
      "Capture evidence for architecture, security, and compliance review",
    ],
    artifacts: [
      "Healthcare AI reference architecture",
      "Workflow and trust-boundary diagrams",
      "Threat model and data-flow review",
      "Control and evidence map",
      "Implementation readiness plan",
    ],
    serviceHref: "/services#regulated-ai",
    insightHref: "/insights/designing-reviewable-ai-workflows-for-clinical-environments",
  },
  {
    id: "financial-services",
    title: "Financial Services",
    body:
      "Governance-ready AI and cloud architecture for financial institutions, fintech teams, risk operations, and high-trust data environments.",
    triggers: [
      "AI decisions or outputs will influence regulated business processes",
      "Risk, compliance, security, and engineering need a shared control model",
      "Model, data, identity, and workflow evidence must withstand review",
    ],
    priorities: [
      "Map policy obligations to technical controls and accountable owners",
      "Constrain model, data, and tool access by business context",
      "Create evidence paths for high-impact decisions and exceptions",
      "Separate experimentation from governed production patterns",
    ],
    artifacts: [
      "AI governance control map",
      "Identity and authorization model",
      "Architecture decision records",
      "Evidence and audit model",
      "Production readiness roadmap",
    ],
    serviceHref: "/services#governance-compliance",
    insightHref: "/insights/turning-ai-risk-frameworks-into-buildable-control-architecture",
  },
  {
    id: "technology",
    title: "Technology and SaaS",
    body:
      "Secure AI product and platform architecture for SaaS, cloud-native, platform engineering, and AI-enabled product organizations.",
    triggers: [
      "GenAI or agents are becoming part of a customer-facing product",
      "RAG, tool use, or MCP-style integrations increase authorization complexity",
      "Teams need reusable security patterns without slowing delivery",
    ],
    priorities: [
      "Treat agents and AI services as governed workload identities",
      "Authorize retrieval and tool use before context reaches the model",
      "Define gateway, policy, secrets, and observability boundaries",
      "Standardize secure patterns product teams can reuse",
    ],
    artifacts: [
      "AI platform reference architecture",
      "Agent and tool-use threat model",
      "RAG authorization pattern",
      "Gateway and policy design",
      "Implementation ADR package",
    ],
    serviceHref: "/services#ai-security-architecture",
    insightHref: "/insights/designing-secure-agentic-systems-with-explicit-control-boundaries",
  },
  {
    id: "retail",
    title: "Retail and Customer Operations",
    body:
      "Secure AI adoption for customer operations, workforce productivity, data workflows, personalization, and governed automation.",
    triggers: [
      "AI pilots are moving toward customer or workforce production workflows",
      "Business teams need speed while security teams need enforceable boundaries",
      "Customer, workforce, or operational data requires controlled use",
    ],
    priorities: [
      "Classify use cases by data sensitivity and business impact",
      "Define approved AI interaction and escalation patterns",
      "Protect customer and operational data across integrations",
      "Create reusable implementation and governance patterns",
    ],
    artifacts: [
      "Secure AI adoption roadmap",
      "Workflow risk classification",
      "Cloud and data control model",
      "Governed integration pattern",
      "Operating model and handoff plan",
    ],
    serviceHref: "/services#secure-ai-adoption",
    insightHref: "/insights/why-secure-ai-adoption-needs-architecture-before-acceleration",
  },
  {
    id: "regulated",
    title: "Public Sector and Regulated Environments",
    body:
      "Governance-first AI architecture for organizations operating under security, privacy, compliance, procurement, and audit pressure.",
    triggers: [
      "AI adoption requires formal review across multiple stakeholders",
      "Policy requirements must become implementation and evidence requirements",
      "Cloud or AI modernization is constrained by assurance and procurement processes",
    ],
    priorities: [
      "Make control ownership and review paths explicit",
      "Translate governance obligations into buildable architecture",
      "Design evidence capture before production rollout",
      "Create implementation patterns that survive operational handoff",
    ],
    artifacts: [
      "Regulated AI reference architecture",
      "Policy-to-control traceability",
      "Evidence register and review model",
      "Stakeholder decision package",
      "Secure implementation roadmap",
    ],
    serviceHref: "/services#regulated-ai",
    insightHref: "/insights/implementing-ai-in-regulated-industries-with-confidence",
  },
] as const;

const architecturePerspectives = [
  {
    label: "Healthcare architecture perspective",
    title: "AI-assisted documentation without giving the model authority over the record",
    situation:
      "A clinical team wants AI to summarize intake context and prepare documentation while preserving clinician accountability and sensitive-data boundaries.",
    response:
      "Separate AI-generated drafts from approved records, authorize data retrieval before model context is assembled, require clinician review, and capture evidence for the draft-to-approval path.",
    artifacts:
      "Workflow diagram, trust boundaries, authorization model, threat model, review controls, evidence requirements, and implementation ADRs.",
    decision:
      "Leadership can decide whether the workflow is ready for a governed pilot and which controls must exist before broader deployment.",
  },
  {
    label: "Financial services architecture perspective",
    title: "Turning AI policy into an engineering control model",
    situation:
      "Security, risk, compliance, and platform teams agree on AI principles but do not yet share an implementation model for access, evidence, exceptions, and production approval.",
    response:
      "Map policy statements to enforceable architecture controls, named owners, evidence sources, review gates, and production patterns that engineering teams can consume.",
    artifacts:
      "Control map, responsibility model, architecture decisions, evidence register, exception workflow, and production readiness criteria.",
    decision:
      "The organization can move from policy alignment to a buildable governance baseline with clear ownership and evidence expectations.",
  },
  {
    label: "SaaS architecture perspective",
    title: "Securing agent and tool use before it becomes product authority",
    situation:
      "A SaaS product is adding agentic workflows that can retrieve customer context and call internal or external tools.",
    response:
      "Treat the agent as a governed workload identity, scope tools by policy and context, validate retrieval authorization, isolate secrets, and record tool calls and policy outcomes.",
    artifacts:
      "Agent trust model, tool authorization matrix, gateway design, prompt-injection threat model, observability requirements, and implementation patterns.",
    decision:
      "Product and security leaders can define the minimum control plane required before the agent is allowed to influence production workflows.",
  },
] as const;

export default function IndustriesPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Industries
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            Architecture for environments where AI has to survive real scrutiny.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            SecureTheCloud works with high-trust environments where data sensitivity, operational accountability, security review, and implementation constraints shape what responsible AI adoption actually looks like.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            <span>Sensitive data</span>
            <span>Human review</span>
            <span>Identity and authorization</span>
            <span>Audit evidence</span>
            <span>Implementation readiness</span>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Industry architecture priorities
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Start with the operating constraints, then design the AI system.
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {industries.map((industry) => (
              <article id={industry.id} key={industry.id} className="py-10 sm:py-12">
                <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {industry.title}
                    </h2>
                    <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">{industry.body}</p>
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
                      <Link href={industry.serviceHref} className="text-cyan-300 hover:text-cyan-200">
                        Related service -&gt;
                      </Link>
                      <Link href={industry.insightHref} className="text-slate-300 hover:text-white">
                        Read perspective -&gt;
                      </Link>
                    </div>
                  </div>

                  <div className="grid gap-8 md:grid-cols-3">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                        Engage us when
                      </h3>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                        {industry.triggers.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                        Architecture priorities
                      </h3>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                        {industry.priorities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                        Typical artifacts
                      </h3>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                        {industry.artifacts.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#050816]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">
              Architecture perspectives
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              What an enterprise architecture engagement can look like.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-400">
              The scenarios below are illustrative architecture patterns, not customer case studies or claims. They show how SecureTheCloud approaches common enterprise design problems and the artifacts that support a decision.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            {architecturePerspectives.map((perspective) => (
              <article key={perspective.title} className="border-t border-white/15 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  {perspective.label}
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-7 text-white">{perspective.title}</h3>

                <dl className="mt-6 space-y-5 text-sm leading-6">
                  <div>
                    <dt className="font-semibold text-white">Situation</dt>
                    <dd className="mt-1 text-slate-400">{perspective.situation}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-white">Architecture response</dt>
                    <dd className="mt-1 text-slate-400">{perspective.response}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-white">Artifacts</dt>
                    <dd className="mt-1 text-slate-400">{perspective.artifacts}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-white">Decision supported</dt>
                    <dd className="mt-1 text-slate-400">{perspective.decision}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#030711]">
        <Container className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Architecture consultation
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Bring us the constraint, workflow, or decision that is slowing secure adoption.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-400">
              We can help frame the trust boundaries, controls, artifacts, and implementation decisions required to move from AI ambition to a defensible architecture.
            </p>
          </div>
          <Link
            href="/request-demo"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#021018] hover:bg-cyan-200"
          >
            Request Architecture Consultation
          </Link>
        </Container>
      </section>
    </>
  );
}
