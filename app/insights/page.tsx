import Container from "@/components/layout/Container";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Insights",
  description:
    "SecureTheCloud perspectives on AI governance, secure agent architecture, cloud governance, healthcare AI, and regulated AI adoption.",
  path: "/insights",
});

const insights = [
  {
    type: "Perspective",
    title: "Building AI governance that scales with enterprise ambition",
    body:
      "Why enterprise AI adoption needs architecture, controls, evidence, and operating models before production risk expands.",
  },
  {
    type: "Architecture",
    title: "Designing secure agent architectures for the enterprise era",
    body:
      "A practical view of identity, tool use, policy gates, AI gateways, and runtime boundaries for agentic systems.",
  },
  {
    type: "Cloud Governance",
    title: "Modernizing cloud platforms for secure AI innovation",
    body:
      "How cloud governance, workload identity, secrets, and platform controls shape safe AI-enabled operations.",
  },
  {
    type: "Regulated AI",
    title: "Implementing AI in regulated industries with confidence",
    body:
      "How healthcare, finance, and high-compliance teams can move from experimentation to governed AI workflows.",
  },
] as const;

export default function InsightsPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-24 md:py-28">
          <p className="text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
            Insights
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl">
            What we think about secure AI transformation.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Perspectives for leaders building secure AI organizations across cloud, compliance, healthcare, and enterprise operations.
          </p>
        </Container>
      </section>

      <section className="bg-[#030711] py-16 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {insights.map((insight) => (
              <article
                key={insight.title}
                className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.2),transparent_16rem)] p-8 shadow-2xl shadow-black/10"
              >
                <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-300">
                  {insight.type}
                </p>
                <h2 className="mt-5 text-3xl font-black tracking-tight text-white">
                  {insight.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-400">
                  {insight.body}
                </p>
                <p className="mt-8 text-sm font-bold text-violet-300">Read perspective →</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
