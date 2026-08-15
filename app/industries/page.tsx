import Link from "next/link";
import Container from "@/components/layout/Container";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Industries",
  description:
    "SecureTheCloud supports healthcare, financial services, technology, retail, public sector, and regulated enterprise environments with secure AI and cloud governance architecture.",
  path: "/industries",
});

const industries = [
  {
    id: "healthcare",
    title: "Healthcare and Behavioral Health",
    body:
      "Secure AI architecture for clinical, behavioral health, telehealth, intake, charting, care operations, and sensitive-data workflows.",
    challenges: [
      "Protect sensitive patient and operational data",
      "Keep clinicians and reviewers in control",
      "Design AI workflows with auditability and human review",
      "Prepare cloud and AI systems for regulated delivery",
    ],
    services: [
      "Healthcare AI workflow architecture",
      "HIPAA-sensitive AI design review",
      "Clinical intake and charting workflow governance",
      "Secure cloud and integration architecture",
    ],
  },
  {
    id: "financial-services",
    title: "Financial Services",
    body:
      "Governance-ready AI and cloud architecture for financial institutions, fintech teams, risk operations, and high-trust data environments.",
    challenges: [
      "Control model, data, and workflow risk",
      "Align AI initiatives to governance and audit expectations",
      "Secure cloud and identity patterns across distributed teams",
      "Support explainability and evidence for risk review",
    ],
    services: [
      "AI governance and risk architecture",
      "Cloud security and platform governance",
      "Policy-to-control traceability",
      "Executive and technical architecture workshops",
    ],
  },
  {
    id: "technology",
    title: "Technology and SaaS",
    body:
      "Secure AI product and platform architecture for SaaS, cloud-native, platform engineering, and AI-enabled product organizations.",
    challenges: [
      "Design secure agentic workflows and AI-enabled products",
      "Protect customer data across LLM and RAG systems",
      "Govern tool use, access, and platform integrations",
      "Move fast without losing security architecture discipline",
    ],
    services: [
      "AI product security architecture",
      "RAG and LLM application threat modeling",
      "AI gateway and MCP gateway design",
      "Cloud-native governance patterns",
    ],
  },
  {
    id: "retail",
    title: "Retail and Customer Operations",
    body:
      "Secure AI adoption for customer operations, workforce productivity, data workflows, personalization, and governed automation.",
    challenges: [
      "Protect customer and operational data",
      "Govern AI-assisted customer and workforce workflows",
      "Prepare AI pilots for scaled enterprise adoption",
      "Align business speed with security and compliance needs",
    ],
    services: [
      "Secure AI adoption roadmap",
      "Customer workflow AI governance",
      "Cloud and data control architecture",
      "Implementation-ready operating model",
    ],
  },
  {
    id: "regulated",
    title: "Public Sector and Regulated Environments",
    body:
      "Governance-first AI architecture for organizations operating under security, privacy, compliance, procurement, and audit pressure.",
    challenges: [
      "Maintain accountability across complex stakeholders",
      "Design secure AI workflows with explicit review paths",
      "Prepare documentation for policy and compliance review",
      "Modernize cloud and AI adoption without increasing risk",
    ],
    services: [
      "Regulated AI workflow architecture",
      "Compliance-ready evidence model",
      "Executive and stakeholder alignment",
      "Secure implementation roadmap",
    ],
  },
] as const;

const patterns = [
  "Sensitive data",
  "Cloud modernization",
  "AI governance",
  "Human review",
  "Audit evidence",
  "Implementation readiness",
] as const;

export default function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[#030711]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.25),transparent_30rem),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.18),transparent_30rem)]" />
        <Container className="relative py-24 md:py-28">
          <p className="text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
            Industries
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl">
            Secure AI architecture for high-trust environments.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We support organizations where AI adoption must be governed, explainable, secure, and ready for real operational constraints.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {patterns.map((pattern) => (
              <span
                key={pattern}
                className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100"
              >
                {pattern}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#030711] py-16 md:py-24">
        <Container>
          <div className="grid gap-6">
            {industries.map((industry) => (
              <article
                id={industry.id}
                key={industry.id}
                className="rounded-[2.25rem] border border-white/10 bg-[#060a15] p-6 shadow-2xl shadow-black/10 md:p-8"
              >
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-300">
                      Industry focus
                    </p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-4xl">
                      {industry.title}
                    </h2>
                    <p className="mt-5 text-base leading-7 text-slate-400">{industry.body}</p>
                    <Link
                      href="/request-demo"
                      className="mt-7 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-black text-white hover:border-cyan-300/60 hover:text-cyan-200"
                    >
                      Discuss this industry
                      <span className="ml-2" aria-hidden="true">-&gt;</span>
                    </Link>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
                      <h3 className="text-sm font-black uppercase tracking-[0.28em] text-violet-300">
                        Common challenges
                      </h3>
                      <ul className="mt-5 grid gap-3">
                        {industry.challenges.map((challenge) => (
                          <li key={challenge} className="flex gap-3 text-sm leading-6 text-slate-300">
                            <span className="mt-1 text-cyan-300">✦</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
                      <h3 className="text-sm font-black uppercase tracking-[0.28em] text-violet-300">
                        How we help
                      </h3>
                      <ul className="mt-5 grid gap-3">
                        {industry.services.map((service) => (
                          <li key={service} className="flex gap-3 text-sm leading-6 text-slate-300">
                            <span className="mt-1 text-cyan-300">✦</span>
                            <span>{service}</span>
                          </li>
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
    </>
  );
}
