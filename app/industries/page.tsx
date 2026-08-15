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
    title: "Healthcare",
    body:
      "Secure AI workflow architecture for clinical, behavioral health, telehealth, intake, charting, and sensitive-data environments.",
  },
  {
    id: "financial-services",
    title: "Financial Services",
    body:
      "AI governance, cloud control models, audit-ready evidence, and secure architecture for high-trust financial operations.",
  },
  {
    id: "technology",
    title: "Technology and SaaS",
    body:
      "Secure AI platform patterns, agentic workflows, RAG systems, AI gateways, and cloud-native governance for product teams.",
  },
  {
    id: "retail",
    title: "Retail",
    body:
      "Secure AI adoption for customer operations, workforce productivity, data workflows, and governed automation.",
  },
  {
    id: "regulated",
    title: "Regulated Environments",
    body:
      "Governance-first AI architecture for organizations operating under security, privacy, compliance, and audit pressure.",
  },
] as const;

export default function IndustriesPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-24 md:py-28">
          <p className="text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
            Industries
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl">
            Secure AI architecture for high-trust environments.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We support organizations where AI adoption must be governed, explainable, secure, and ready for real operational constraints.
          </p>
        </Container>
      </section>

      <section className="bg-[#030711] py-16 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => (
              <article
                id={industry.id}
                key={industry.id}
                className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 shadow-2xl shadow-black/10"
              >
                <h2 className="text-3xl font-black tracking-tight text-white">
                  {industry.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-400">
                  {industry.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
