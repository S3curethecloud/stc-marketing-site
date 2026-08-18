import Link from "next/link";
import Container from "@/components/layout/Container";
import { siteConfig } from "@/content/site";
import { insightArticles } from "@/content/insights";

const focusAreas = [
  {
    title: "AI security architecture",
    body: "Secure-by-design patterns for GenAI, RAG, agents, gateways, identity, data boundaries, and runtime controls.",
    href: "/services#ai-security-architecture",
  },
  {
    title: "Cloud governance",
    body: "Identity, policy, secrets, platform controls, and operating models across distributed cloud environments.",
    href: "/services#cloud-governance",
  },
  {
    title: "AI governance and evidence",
    body: "Policy-backed control models, traceability, observability, evaluation evidence, and compliance readiness.",
    href: "/services#governance-compliance",
  },
  {
    title: "Regulated AI workflows",
    body: "Reviewable, human-governed AI workflows for healthcare and other high-compliance environments.",
    href: "/services#regulated-ai",
  },
] as const;

const approach = [
  ["01", "Discover", "Clarify the business goal, operating environment, data sensitivity, regulatory obligations, and implementation constraints."],
  ["02", "Architect", "Define trust boundaries, identity flows, platform patterns, policy controls, retrieval authorization, and evidence requirements."],
  ["03", "Implement", "Translate decisions into reference architecture, ADRs, control configurations, backlog-ready guidance, and delivery artifacts."],
  ["04", "Validate", "Review policy behavior, observability, security assumptions, operational readiness, and governance handoffs before production."],
] as const;

const featuredInsights = insightArticles.slice(0, 3);

function ArchitectureSignal() {
  return (
    <div className="border border-white/10 bg-[#07101d] p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Architecture view</p>
      <div className="mt-8 grid gap-0 border border-white/10 sm:grid-cols-2">
        {["AI gateway", "Identity & policy", "Retrieval controls", "Evidence & observability"].map((item, index) => (
          <div key={item} className="flex min-h-24 items-center justify-between border-b border-white/10 px-5 py-5 last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0">
            <span className="text-sm font-medium text-slate-200">{item}</span>
            <span className="text-xs text-cyan-300">0{index + 1}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-xl text-sm leading-6 text-slate-400">
        The model is intentionally simple: authorization and policy decisions happen before AI is allowed to access enterprise data, tools, or sensitive workflows.
      </p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Enterprise AI architecture and security</p>
              <h1 className="mt-5 max-w-4xl text-[2.3rem] font-semibold leading-[1.04] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.6rem]">
                Lead secure AI adoption with enterprise-grade architecture.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                SecureTheCloud helps enterprises design, govern, and operationalize AI systems across cloud, security, identity, data, and regulated environments.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href={siteConfig.primaryCta.href} className="inline-flex min-h-12 items-center justify-center bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200">
                  Request architecture consultation
                  <span className="ml-2" aria-hidden="true">-&gt;</span>
                </Link>
                <Link href="/services" className="inline-flex min-h-12 items-center text-sm font-semibold text-slate-200 hover:text-cyan-200">
                  Explore services
                  <span className="ml-2" aria-hidden="true">-&gt;</span>
                </Link>
              </div>
            </div>
            <ArchitectureSignal />
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#050816]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">What we solve</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">Architecture and governance for AI programs operating under real constraints.</h2>
          </div>
          <div className="mt-10 grid border-t border-white/10 md:grid-cols-2">
            {focusAreas.map((area, index) => (
              <Link key={area.title} href={area.href} className={`group border-b border-white/10 py-7 md:px-6 ${index % 2 === 0 ? "md:border-r" : ""}`}>
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-200">{area.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">{area.body}</p>
                <span className="mt-5 inline-flex text-sm font-medium text-cyan-300">Learn more -&gt;</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">How we work</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">From ambiguity to implementation-ready decisions.</h2>
              <p className="mt-5 text-base leading-7 text-slate-400">A repeatable architecture process that connects executive intent, technical constraints, governance, and delivery.</p>
            </div>
            <div className="border-t border-white/10">
              {approach.map(([number, title, body]) => (
                <div key={number} className="grid gap-3 border-b border-white/10 py-6 sm:grid-cols-[3rem_10rem_1fr] sm:items-start">
                  <span className="text-xs font-semibold text-cyan-300">{number}</span>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-6 text-slate-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#050816]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Insights</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">Architecture perspectives for enterprise AI leaders.</h2>
            </div>
            <Link href="/insights" className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">View all insights -&gt;</Link>
          </div>

          <div className="mt-10 grid gap-px bg-white/10 lg:grid-cols-3">
            {featuredInsights.map((article) => (
              <article key={article.slug} className="bg-[#050816] p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">{article.eyebrow}</p>
                <h3 className="mt-4 text-xl font-semibold leading-7 text-white">{article.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-400">{article.description}</p>
                <div className="mt-6 text-xs text-slate-500">{article.date} · {article.readTime}</div>
                <Link href={`/insights/${article.slug}`} className="mt-5 inline-flex text-sm font-semibold text-slate-200 hover:text-cyan-200">Read perspective -&gt;</Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#030711]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="grid gap-8 border-y border-white/10 py-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Engage SecureTheCloud</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">Bring us the architecture decision that is slowing the program down.</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">We will help clarify the security boundaries, governance decisions, technical patterns, and implementation path.</p>
            </div>
            <Link href={siteConfig.primaryCta.href} className="inline-flex min-h-12 items-center justify-center bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-200">
              Request consultation
              <span className="ml-2" aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
