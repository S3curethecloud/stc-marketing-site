import Link from "next/link";
import Container from "@/components/layout/Container";
import {
  featuredInsightCards,
  researchInsightCards,
} from "@/content/insights";
import { getInsightAuthority } from "@/content/insight-authority";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Insights",
  description:
    "SecureTheCloud architecture briefs on AI governance, secure agent systems, cloud controls, regulated AI, healthcare workflows, and implementation-ready control design.",
  path: "/insights",
});

const taxonomy = [
  "Enterprise architecture briefs",
  "Agentic AI architecture notes",
  "AI governance operating models",
  "Cloud platform architecture",
  "Regulated AI architecture",
  "Control architecture",
] as const;

export default function InsightsPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Technical authority
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            Architecture thinking for leaders and engineers building governed AI systems.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            These notes focus on design decisions, control implications, evidence, implementation artifacts, and the operating tradeoffs behind secure enterprise AI.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            {taxonomy.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#050816]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">
              Featured architecture notes
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Start with the decision, not the technology trend.
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {featuredInsightCards.map((item) => {
              const authority = getInsightAuthority(item.slug);
              return (
                <article key={item.slug} className="border-t border-white/15 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                    {authority?.taxonomy ?? item.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-8 text-white sm:text-3xl sm:leading-9">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-400">{item.description}</p>
                  {authority ? (
                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Problem</p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{authority.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Architecture principle</p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{authority.architecturePrinciple}</p>
                      </div>
                    </div>
                  ) : null}
                  <Link
                    href={`/insights/${item.slug}`}
                    className="mt-6 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                  >
                    Read architecture note -&gt;
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#030711]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Knowledge base
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Problem → principle → controls → evidence → implementation.
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {researchInsightCards.map((insight) => {
              const authority = getInsightAuthority(insight.slug);
              return (
                <article key={insight.slug} className="grid gap-5 py-8 md:grid-cols-[0.8fr_1.2fr_auto] md:items-start md:gap-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                      {authority?.taxonomy ?? insight.category}
                    </p>
                    <p className="mt-2 text-xs text-slate-500">{insight.readTime}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold leading-7 text-white sm:text-2xl sm:leading-8">
                      {insight.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">{insight.description}</p>
                    {authority ? (
                      <p className="mt-4 text-sm leading-6 text-slate-300">
                        <span className="font-semibold text-white">Decision focus:</span>{" "}
                        {authority.leadershipDecisions[0]}
                      </p>
                    ) : null}
                  </div>
                  <Link
                    href={`/insights/${insight.slug}`}
                    className="text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                  >
                    Open note -&gt;
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300">
                Architecture briefing
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Turn a difficult AI design question into an architecture decision.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-400">
                Bring the workflow, control gap, architecture tradeoff, or production blocker. We can help frame the decision, required artifacts, and implementation path.
              </p>
            </div>
            <Link
              href="/request-demo"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#021018] hover:bg-cyan-200"
            >
              Request Architecture Consultation
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
