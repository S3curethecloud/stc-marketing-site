import Link from "next/link";
import Container from "@/components/layout/Container";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Services",
  description:
    "Enterprise AI security architecture, cloud governance, secure AI adoption, compliance readiness, regulated AI workflow, and executive advisory services.",
  path: "/services",
});

const services = [
  {
    id: "ai-security-architecture",
    title: "Enterprise AI Security Architecture",
    body:
      "Design secure-by-default AI systems across LLM applications, agentic workflows, RAG pipelines, AI gateways, MCP gateways, model access, data flows, and runtime controls.",
    points: [
      "AI security architecture reviews",
      "LLM, RAG, and agentic threat modeling",
      "AI gateway and MCP gateway patterns",
      "Tool-use, identity, and authorization design",
    ],
  },
  {
    id: "cloud-governance",
    title: "Cloud Governance and Platform Security",
    body:
      "Establish governance, identity, policy, secrets, infrastructure, and platform controls across AWS, Azure, GCP, Kubernetes, and distributed cloud environments.",
    points: [
      "Cloud governance architecture",
      "IAM and workload identity design",
      "Kubernetes and runtime security patterns",
      "Secrets, policy, and control-plane design",
    ],
  },
  {
    id: "secure-ai-adoption",
    title: "Secure AI Adoption Strategy",
    body:
      "Help executives and technical leaders move from AI experiments to governed implementation through risk-tiered adoption plans and build-ready roadmaps.",
    points: [
      "Secure AI readiness assessments",
      "Use-case risk tiering",
      "Pilot-to-production architecture planning",
      "Operating model and governance roadmaps",
    ],
  },
  {
    id: "governance-compliance",
    title: "AI Governance and Compliance Readiness",
    body:
      "Translate security, privacy, compliance, and audit expectations into practical AI governance architecture and evidence-ready control models.",
    points: [
      "NIST AI RMF alignment",
      "OWASP LLM risk mapping",
      "SOC 2 readiness evidence models",
      "Policy-to-control traceability",
    ],
  },
  {
    id: "regulated-ai",
    title: "Healthcare and Regulated AI Workflows",
    body:
      "Design secure, reviewable, human-in-the-loop AI workflows for healthcare, behavioral health, financial services, and high-compliance environments.",
    points: [
      "Clinical and regulated workflow architecture",
      "Human review and approval patterns",
      "Sensitive-data handling models",
      "Audit-ready workflow design",
    ],
  },
  {
    id: "executive-advisory",
    title: "Executive Advisory and Solution Design",
    body:
      "Partner with leaders to shape AI transformation initiatives, investment priorities, client workshops, delivery plans, and implementation-ready solution architectures.",
    points: [
      "Executive workshops",
      "Architecture decision records",
      "Proposal and SOW shaping",
      "Implementation-ready technical design",
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-24 md:py-28">
          <p className="text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
            Services
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl">
            Secure AI, cloud governance, and implementation-ready architecture.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We help enterprises turn ambiguous AI, security, cloud, and compliance needs into scalable technical designs that delivery teams can implement.
          </p>
        </Container>
      </section>

      <section className="bg-[#030711] py-16 md:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article
                id={service.id}
                key={service.id}
                className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 shadow-2xl shadow-black/10"
              >
                <h2 className="text-3xl font-black tracking-tight text-white">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-400">{service.body}</p>
                <ul className="mt-6 grid gap-3 text-sm text-slate-300">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-1 text-cyan-300">✦</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-violet-400/20 bg-gradient-to-r from-violet-950/50 to-cyan-950/30 p-8">
            <h2 className="text-3xl font-black text-white">Ready to shape a secure AI initiative?</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              Bring us the business goal, technical ambiguity, security constraints, and compliance pressure. We will help translate it into an architecture and delivery path.
            </p>
            <Link
              href="/request-demo"
              className="mt-6 inline-flex rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-bold text-white"
            >
              Request Consultation →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
