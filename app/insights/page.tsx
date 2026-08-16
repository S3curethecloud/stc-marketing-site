import Link from "next/link";
import Container from "@/components/layout/Container";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Insights",
  description:
    "SecureTheCloud perspectives on AI governance, secure agent architecture, cloud governance, healthcare AI, regulated AI adoption, and enterprise AI security.",
  path: "/insights",
});

const featured = [
  {
    type: "Perspective",
    title: "Why secure AI adoption needs architecture before acceleration",
    body:
      "Enterprise AI initiatives fail when strategy, security, cloud governance, data flows, and implementation reality are treated as separate conversations.",
    href: "/insights",
  },
  {
    type: "Architecture Note",
    title: "Designing secure agentic systems with explicit control boundaries",
    body:
      "Agentic AI requires identity, tool-use governance, authorization paths, prompt-injection defenses, and evidence trails before it can safely operate near enterprise workflows.",
    href: "/insights",
  },
] as const;

const insights = [
  {
    category: "AI Governance",
    title: "Building AI governance that scales with enterprise ambition",
    body:
      "How to align AI use cases, policies, controls, and operating decisions before adoption spreads faster than governance can follow.",
    readTime: "6 min read",
    href: "/insights",
  },
  {
    category: "Architecture",
    title: "Designing secure agent architectures for the enterprise era",
    body:
      "A practical view of identity, tool access, runtime boundaries, AI gateways, MCP gateways, and evidence capture.",
    readTime: "7 min read",
    href: "/insights",
  },
  {
    category: "Cloud Governance",
    title: "Modernizing cloud platforms for secure AI innovation",
    body:
      "How cloud governance, workload identity, secrets, infrastructure, and platform controls shape safe AI-enabled operations.",
    readTime: "5 min read",
    href: "/insights",
  },
  {
    category: "Regulated AI",
    title: "Implementing AI in regulated industries with confidence",
    body:
      "How healthcare, finance, and high-compliance teams can move from experimentation to governed AI workflows.",
    readTime: "6 min read",
    href: "/insights",
  },
  {
    category: "Healthcare AI",
    title: "Designing reviewable AI workflows for clinical environments",
    body:
      "Why human review, sensitive-data handling, workflow boundaries, and audit readiness matter in healthcare AI adoption.",
    readTime: "5 min read",
    href: "/insights",
  },
  {
    category: "Compliance",
    title: "Turning AI risk frameworks into buildable control architecture",
    body:
      "How NIST AI RMF, OWASP LLM risks, SOC 2 readiness, and internal governance can become practical delivery artifacts.",
    readTime: "8 min read",
    href: "/insights",
  },
] as const;

const themes = [
  "AI governance",
  "Secure agent architecture",
  "Cloud governance",
  "Healthcare AI",
  "Regulated workflows",
  "Implementation readiness",
] as const;

export default function InsightsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[#030711]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.25),transparent_30rem),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.18),transparent_30rem)]" />
        <Container className="relative py-24 md:py-28">
          <p className="text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
            Insights
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl">
            What we think about secure AI transformation.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Perspectives for leaders building secure AI organizations across cloud, compliance, healthcare, and enterprise operations.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {themes.map((theme) => (
              <span
                key={theme}
                className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100"
              >
                {theme}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#050816] py-16 md:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {featured.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                aria-label={`Read perspective: ${item.title}`}
                className="group relative overflow-hidden rounded-[2.25rem] border border-violet-400/20 bg-[linear-gradient(135deg,rgba(88,28,135,0.62),rgba(3,7,17,0.88))] p-8 shadow-2xl shadow-violet-950/30 transition-transform hover:-translate-y-1 hover:border-cyan-300/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
              >
                <div className="absolute inset-y-0 right-0 hidden w-[45%] bg-[radial-gradient(circle_at_60%_50%,rgba(56,189,248,0.24),transparent_16rem)] md:block" />
                <div className="relative">
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-300">
                    {item.type}
                  </p>
                  <h2 className="mt-5 text-3xl font-black tracking-tight text-white md:text-4xl">
                    {item.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                    {item.body}
                  </p>
                  <p className="mt-8 text-sm font-black text-violet-200 transition-transform group-hover:translate-x-1">
                    Read perspective -&gt;
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#030711] py-16 md:py-24">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.45em] text-violet-300">
              Research and perspectives
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Guidance for leaders moving AI from experimentation to governed implementation.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {insights.map((insight) => (
              <Link
                key={insight.title}
                href={insight.href}
                aria-label={`Read insight: ${insight.title}`}
                className="group min-h-[310px] rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_15rem)] p-6 shadow-2xl shadow-black/10 transition-transform hover:-translate-y-1 hover:border-cyan-300/30 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
              >
                <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
                  {insight.category}
                </p>
                <h3 className="mt-5 text-2xl font-black leading-8 text-white">
                  {insight.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {insight.body}
                </p>
                <div className="mt-8 flex items-center justify-between text-sm font-bold">
                  <span className="text-slate-500">{insight.readTime}</span>
                  <span className="text-violet-300 transition-transform group-hover:translate-x-1">
                    Read -&gt;
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-[2.25rem] border border-white/10 bg-white/[0.035] p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.45em] text-violet-300">
                  Need a custom briefing?
                </p>
                <h2 className="mt-5 text-3xl font-black tracking-tight text-white md:text-4xl">
                  Turn an AI security question into an executive-ready architecture discussion.
                </h2>
              </div>
              <div>
                <p className="text-base leading-7 text-slate-400">
                  We support architecture briefings for leadership teams evaluating AI security, cloud governance, regulated workflows, and implementation readiness.
                </p>
                <Link
                  href="/request-demo"
                  className="mt-6 inline-flex rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-black text-white"
                >
                  Request Consultation
                  <span className="ml-2" aria-hidden="true">-&gt;</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
