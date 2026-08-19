import Link from "next/link";
import Container from "@/components/layout/Container";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Enterprise AI Security Services",
  description:
    "SecureTheCloud provides enterprise AI security architecture, cloud governance, secure AI adoption, compliance readiness, regulated workflow architecture, and executive advisory services.",
  path: "/services",
});

const engagementDepth = [
  { title: "Advisory decision support", body: "Clarify priorities, tradeoffs, risk, operating constraints, and investment direction before committing to an architecture path." },
  { title: "Architecture definition", body: "Define target-state patterns, boundaries, control models, design decisions, and cross-functional responsibilities." },
  { title: "Implementation-ready engineering", body: "Translate architecture into ADRs, control specifications, backlog guidance, integration patterns, and delivery artifacts." },
] as const;

const services = [
  {
    id: "ai-security-architecture",
    focus: "ai-security",
    eyebrow: "AI security architecture",
    title: "Enterprise AI Security Architecture",
    body: "Secure-by-default architecture for GenAI, RAG, agentic systems, AI gateways, model access, enterprise data, and runtime controls.",
    triggers: ["AI pilots are moving toward production without a shared security architecture.", "Agent, tool, model, or retrieval access paths are difficult to govern consistently.", "Security, platform, and AI teams need one implementable target state."],
    scope: "Trust boundaries, identity, authorization, data movement, retrieval, tool use, gateways, runtime policy, observability, and evidence.",
    deliverables: ["Secure AI reference architecture", "LLM / RAG / agent threat model", "AI gateway and MCP security patterns", "Identity and authorization model", "ADRs and implementation roadmap"],
    outcome: "A defensible target architecture that engineering, security, governance, and leadership can use to make consistent implementation decisions.",
    related: [["Technology and SaaS context", "/industries#technology"], ["Agentic AI architecture note", "/insights/designing-secure-agentic-systems-with-explicit-control-boundaries"], ["Inspectable technical evidence", "/evidence"]],
  },
  {
    id: "cloud-governance",
    focus: "cloud-governance",
    eyebrow: "Cloud governance",
    title: "Cloud Governance and Platform Security",
    body: "Governance architecture for identity, policy, secrets, infrastructure, workloads, and shared platform controls across distributed cloud environments.",
    triggers: ["Cloud growth has created inconsistent identity, policy, or platform-security patterns.", "AI workloads are introducing new secrets, data, networking, and workload-identity requirements.", "Platform teams need reusable guardrails instead of one-off security reviews."],
    scope: "AWS, Azure, GCP, Kubernetes, workload identity, policy enforcement, secrets, shared services, and control-plane governance.",
    deliverables: ["Cloud governance architecture", "IAM and workload identity model", "Platform security patterns", "Secrets and policy design", "Multi-cloud operating model"],
    outcome: "A coherent governance model that reduces architecture ambiguity and gives delivery teams reusable platform guardrails.",
    related: [["Technology and SaaS context", "/industries#technology"], ["Cloud platform architecture note", "/insights/modernizing-cloud-platforms-for-secure-ai-innovation"], ["Inspectable technical evidence", "/evidence"]],
  },
  {
    id: "secure-ai-adoption",
    focus: "secure-adoption",
    eyebrow: "Secure adoption",
    title: "Secure AI Adoption Strategy",
    body: "A practical path from AI experimentation to governed enterprise adoption with risk-tiered use cases, decision criteria, and implementation sequencing.",
    triggers: ["Leadership wants to scale AI but teams do not share one risk or architecture model.", "Use cases are accumulating faster than security and governance decisions can keep up.", "The organization needs a credible pilot-to-production path."],
    scope: "Use-case prioritization, risk tiering, adoption sequencing, operating model, decision forums, architecture dependencies, and production-readiness criteria.",
    deliverables: ["Secure AI adoption roadmap", "Use-case risk tiering", "Pilot-to-production plan", "Stakeholder decision framework", "Executive and technical workshop outputs"],
    outcome: "A prioritized adoption plan that connects business ambition to the architecture, controls, ownership, and sequencing required for production.",
    related: [["Retail and customer operations", "/industries#retail"], ["Secure adoption architecture brief", "/insights/why-secure-ai-adoption-needs-architecture-before-acceleration"], ["Inspectable technical evidence", "/evidence"]],
  },
  {
    id: "governance-compliance",
    focus: "governance",
    eyebrow: "AI governance",
    title: "AI Governance and Compliance Readiness",
    body: "Translate AI risk, privacy, security, and audit expectations into policy-backed control models and evidence-ready operating practices.",
    triggers: ["AI policies exist but are not connected to technical enforcement or evidence.", "GRC and engineering teams are using different language for the same risks.", "Reviewers need traceability from policy to architecture, controls, and evidence."],
    scope: "Governance operating model, control mapping, policy decisions, evidence architecture, review workflows, exceptions, and readiness assessments.",
    deliverables: ["NIST AI RMF alignment model", "OWASP LLM risk mapping", "SOC 2 readiness evidence model", "Policy-to-control traceability", "AI governance operating model"],
    outcome: "A governance model that can be discussed with leadership, implemented by technical teams, and supported with traceable evidence.",
    related: [["Financial services context", "/industries#financial-services"], ["Control architecture brief", "/insights/turning-ai-risk-frameworks-into-buildable-control-architecture"], ["Governance evidence", "/evidence"]],
  },
  {
    id: "regulated-ai",
    focus: "regulated",
    eyebrow: "Regulated workflows",
    title: "Healthcare and Regulated AI Workflow Architecture",
    body: "Secure, reviewable AI workflows for environments where sensitive data, human oversight, and auditability are design requirements.",
    triggers: ["AI is entering workflows that handle sensitive or regulated information.", "Human review, approval, escalation, or evidence requirements are unclear.", "Business workflow design and technical control design need to be aligned."],
    scope: "Sensitive-data flows, human-in-the-loop controls, approval paths, integration boundaries, evidence capture, exception handling, and operating procedures.",
    deliverables: ["Sensitive-data workflow architecture", "Human review and approval patterns", "Regulated workflow control model", "Evidence and documentation flow", "Secure integration operating model"],
    outcome: "A workflow architecture that makes review, accountability, sensitive-data handling, and operational control explicit before implementation.",
    related: [["Healthcare context", "/industries#healthcare"], ["Clinical workflow architecture note", "/insights/designing-reviewable-ai-workflows-for-clinical-environments"], ["Inspectable technical evidence", "/evidence"]],
  },
  {
    id: "executive-advisory",
    focus: "advisory",
    eyebrow: "Executive advisory",
    title: "Executive Advisory and Solution Design",
    body: "Architecture-led advisory for leaders shaping AI transformation, investment priorities, client programs, and implementation decisions.",
    triggers: ["Leadership needs a technically credible point of view before funding or committing to a path.", "A complex initiative needs alignment across executives, security, cloud, data, and delivery teams.", "A solution narrative or roadmap needs enough architecture depth to be actionable."],
    scope: "Executive workshops, target-state framing, architecture options, delivery sequencing, investment tradeoffs, proposal shaping, and stakeholder alignment.",
    deliverables: ["Executive architecture workshop", "Solution narrative and options", "Delivery roadmap", "Proposal / SOW shaping support", "Leadership and technical stakeholder materials"],
    outcome: "A clearer decision path with architecture, tradeoffs, sequencing, and implementation expectations made explicit for stakeholders.",
    related: [["How we think", "/insights"], ["What you can inspect", "/evidence"], ["Who we are", "/company"]],
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Services / Decision paths</p>
            <h1 className="mt-5 text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.5rem]">Architecture services for secure AI programs operating under real constraints.</h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">We help senior technology, security, cloud, AI, and governance leaders turn ambiguous requirements into clear architecture decisions, control models, and implementation-ready direction.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/request-demo?from=services" className="inline-flex min-h-12 items-center justify-center bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-200">Request architecture consultation -&gt;</Link>
              <a href="#services" className="inline-flex min-h-12 items-center text-sm font-semibold text-slate-200 hover:text-cyan-200">Review service areas -&gt;</a>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#050816]">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Engagement depth</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">Not every engagement needs the same level of intervention.</h2><p className="mt-5 text-base leading-7 text-slate-400">We scale from decision support to implementation-ready engineering based on the problem, team maturity, risk, and delivery context.</p></div>
            <div className="border-t border-white/10">{engagementDepth.map((item) => <div key={item.title} className="border-b border-white/10 py-6"><h3 className="text-lg font-semibold text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{item.body}</p></div>)}</div>
          </div>
        </Container>
      </section>

      <section id="services" className="bg-[#030711]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Service architecture</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">Know when to engage us, what we will work through, and what your teams will receive.</h2></div>

          <div className="mt-12 border-t border-white/10">
            {services.map((service) => (
              <article id={service.id} key={service.id} className="border-b border-white/10 py-10 sm:py-12">
                <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{service.eyebrow}</p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">{service.title}</h3>
                    <p className="mt-4 text-base leading-7 text-slate-400">{service.body}</p>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Decision / implementation outcome</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{service.outcome}</p>
                    <Link href={`/request-demo?focus=${service.focus}&from=services-${service.id}`} className="mt-6 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200">Request this architecture consultation -&gt;</Link>
                  </div>

                  <div className="border-t border-white/10">
                    <div className="grid gap-7 border-b border-white/10 py-6 md:grid-cols-2 md:gap-10">
                      <div>
                        <h4 className="text-sm font-semibold text-white">When to engage</h4>
                        <ul className="mt-4 space-y-2.5 text-sm leading-6 text-slate-400">
                          {service.triggers.map((item) => <li key={item}>— {item}</li>)}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-white">What you receive</h4>
                        <ul className="mt-4 space-y-2.5 text-sm leading-6 text-slate-400">
                          {service.deliverables.map((item) => <li key={item}>— {item}</li>)}
                        </ul>
                      </div>
                    </div>

                    <div className="py-6">
                      <h4 className="text-sm font-semibold text-white">Relevant technical depth</h4>
                      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">{service.scope}</p>
                      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                        {service.related.map(([label, href]) => (
                          <Link
                            key={href}
                            href={href}
                            className="text-sm font-medium text-slate-300 hover:text-cyan-200"
                          >
                            {label} -&gt;
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
