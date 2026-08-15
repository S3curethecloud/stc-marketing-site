import Link from "next/link";
import Container from "@/components/layout/Container";
import { siteConfig } from "@/content/site";

const valueStrip = [
  "AI Security Architecture",
  "Cloud Governance",
  "Secure AI Adoption",
  "Regulated Environments",
  "Client Delivery",
  "Implementation Ready",
] as const;

const clientMarks = [
  "Healthcare Network",
  "Financial Services Group",
  "Cloud Platform Team",
  "AI Product Organization",
  "Regulated Operations",
] as const;

const metrics = [
  {
    value: "Secure-by-design",
    label: "architecture patterns for AI-enabled operations",
  },
  {
    value: "Governance-ready",
    label: "roadmaps, controls, and evidence models",
  },
  {
    value: "Implementation-focused",
    label: "technical designs delivery teams can build from",
  },
] as const;

const services = [
  {
    number: "01",
    title: "Enterprise AI Security Architecture",
    body:
      "Design secure-by-default AI architectures that protect data, models, agents, tools, and workflow integrity.",
    href: "/services#ai-security-architecture",
  },
  {
    number: "02",
    title: "Cloud Governance and Platform Security",
    body:
      "Establish governance, identity, policy, secrets, and platform controls across multi-cloud environments.",
    href: "/services#cloud-governance",
  },
  {
    number: "03",
    title: "Secure AI Adoption Strategy",
    body:
      "Build organization-wide strategies for safe, scalable, compliant, and business-aligned AI adoption.",
    href: "/services#secure-ai-adoption",
  },
  {
    number: "04",
    title: "AI Governance and Compliance Readiness",
    body:
      "Align AI initiatives to NIST AI RMF, OWASP LLM risks, SOC 2 readiness, and internal policies.",
    href: "/services#governance-compliance",
  },
  {
    number: "05",
    title: "Healthcare and Regulated AI Workflows",
    body:
      "Design secure, reviewable AI workflows for healthcare, behavioral health, and high-compliance environments.",
    href: "/services#regulated-ai",
  },
  {
    number: "06",
    title: "Executive Advisory and Solution Design",
    body:
      "Partner with leaders to define vision, roadmaps, investment priorities, and implementation-ready architecture.",
    href: "/services#executive-advisory",
  },
] as const;

const insights = [
  {
    eyebrow: "AI Governance",
    title: "Building AI governance that scales with enterprise ambition",
  },
  {
    eyebrow: "Architecture",
    title: "Designing secure agent architectures for the enterprise era",
  },
  {
    eyebrow: "Cloud Modernization",
    title: "Modernizing cloud platforms for secure AI innovation",
  },
  {
    eyebrow: "Regulated AI",
    title: "Implementing AI in regulated industries with confidence",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[#030711]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.25),transparent_30rem),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.2),transparent_32rem),radial-gradient(circle_at_70%_75%,rgba(236,72,153,0.14),transparent_26rem)]" />
        <Container className="relative py-24 sm:py-28 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
                Enterprise AI Security Services
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                Lead secure AI adoption with enterprise-grade architecture.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                SecureTheCloud helps enterprises design and implement secure AI systems with confidence. We deliver AI security architecture, cloud governance, secure AI adoption, and implementation-ready technical design across distributed client environments.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={siteConfig.primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-bold text-white shadow-2xl shadow-violet-950/40 transition-transform hover:-translate-y-0.5"
                >
                  Request Consultation
                  <span className="ml-2" aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
                >
                  Explore Services
                  <span className="ml-2" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-cyan-950/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(168,85,247,0.38),transparent_19rem),radial-gradient(circle_at_70%_60%,rgba(34,211,238,0.22),transparent_22rem)]" />
              <div className="relative h-full min-h-[380px] rounded-[2rem] border border-cyan-300/20 bg-[#050816]/70 p-8">
                <div className="absolute right-8 top-8 h-28 w-28 rounded-[2rem] border border-cyan-300/30 bg-cyan-300/10 blur-sm" />
                <div className="absolute bottom-10 right-12 h-44 w-44 rounded-full border border-fuchsia-300/30 bg-fuchsia-500/10 blur-xl" />
                <div className="grid h-full place-items-center">
                  <div className="relative">
                    <div className="absolute -inset-20 rounded-full bg-gradient-to-r from-cyan-400/20 via-violet-500/30 to-fuchsia-500/20 blur-3xl" />
                    <div className="relative rounded-[2.5rem] border border-white/15 bg-black/40 p-8 shadow-2xl">
                      <div className="grid gap-4">
                        {["AI Gateway", "Cloud Governance", "Policy Controls", "Evidence Architecture"].map((item) => (
                          <div
                            key={item}
                            className="flex items-center justify-between gap-8 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4"
                          >
                            <span className="text-sm font-semibold text-white">{item}</span>
                            <span className="h-3 w-3 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/60" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#050816]">
        <Container className="grid gap-3 py-5 md:grid-cols-3 lg:grid-cols-6">
          {valueStrip.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-bold text-white"
            >
              <span className="mr-2 text-cyan-300">✦</span>
              {item}
            </div>
          ))}
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#030711] py-16 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.45em] text-violet-300">
                Trusted by leaders. Proven in practice.
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Enterprise outcomes that drive confidence.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-400">
                Client names and formal references can be surfaced with approval. The front page is structured to show real client proof, delivery outcomes, and sector credibility without overstating relationships.
              </p>
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {clientMarks.map((mark) => (
                  <div
                    key={mark}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center text-xs font-black uppercase tracking-[0.18em] text-slate-300"
                  >
                    {mark}
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.value}
                    className="rounded-3xl border border-cyan-300/20 bg-white/[0.03] p-6 shadow-2xl shadow-black/10"
                  >
                    <div className="text-2xl font-black text-cyan-300">{metric.value}</div>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#030711] py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.45em] text-violet-300">
                What we do
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
                End-to-end services for secure AI transformation.
              </h2>
              <Link
                href="/services"
                className="mt-8 inline-flex text-sm font-bold text-cyan-300 hover:text-cyan-200"
              >
                View all services
                <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/10 transition-transform hover:-translate-y-1 hover:border-cyan-300/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 text-sm font-black text-white shadow-lg shadow-violet-950/30">
                    {service.number}
                  </div>
                  <h3 className="mt-6 text-xl font-black tracking-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{service.body}</p>
                  <div className="mt-6 text-2xl text-violet-300 transition-transform group-hover:translate-x-1">
                    →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#030711] pb-16 md:pb-24">
        <Container>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-violet-950/20">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[360px] p-8 md:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_55%,rgba(56,189,248,0.2),transparent_20rem),radial-gradient(circle_at_75%_65%,rgba(236,72,153,0.2),transparent_22rem)]" />
                <div className="relative">
                  <p className="text-sm font-black uppercase tracking-[0.45em] text-violet-300">
                    Client success story
                  </p>
                  <h2 className="mt-5 max-w-2xl text-4xl font-black tracking-tight text-white">
                    Accelerated secure AI adoption across a distributed enterprise.
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
                    We help client teams modernize cloud governance, define AI security architecture, and prepare secure AI use cases for implementation across complex business environments.
                  </p>
                  <Link
                    href="/insights"
                    className="mt-8 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white hover:border-cyan-300/50 hover:text-cyan-200"
                  >
                    View perspective
                    <span className="ml-2" aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              <div className="grid border-t border-white/10 lg:border-l lg:border-t-0">
                {[
                  ["Faster", "architecture alignment for AI initiatives"],
                  ["Lower", "policy ambiguity across security and compliance teams"],
                  ["Clearer", "implementation roadmaps for engineering delivery"],
                ].map(([value, label]) => (
                  <div key={value} className="border-b border-white/10 p-8 last:border-b-0">
                    <div className="text-3xl font-black text-cyan-300">{value}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.45em] text-violet-300">
                What we think
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-white">
                Insights for leaders building secure AI organizations.
              </h2>
              <Link href="/insights" className="mt-8 inline-flex text-sm font-bold text-cyan-300">
                Visit all insights
                <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {insights.map((insight) => (
                <article
                  key={insight.title}
                  className="min-h-[220px] rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.22),transparent_11rem)] p-6"
                >
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                    {insight.eyebrow}
                  </p>
                  <h3 className="mt-5 text-lg font-black leading-6 text-white">
                    {insight.title}
                  </h3>
                  <p className="mt-8 text-sm font-bold text-violet-300">Read more →</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#030711] py-16 md:py-24">
        <Container>
          <div className="overflow-hidden rounded-[2rem] border border-violet-400/20 bg-[radial-gradient(circle_at_70%_50%,rgba(56,189,248,0.18),transparent_24rem),linear-gradient(135deg,rgba(88,28,135,0.5),rgba(3,7,17,0.88))] p-8 shadow-2xl shadow-violet-950/30 md:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.45em] text-violet-200">
                Careers
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Build what&apos;s next. Secure AI systems that power the enterprise era.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300">
                Join a team of builders, architects, and strategists solving complex AI, cloud, governance, and security challenges for ambitious organizations.
              </p>
              <Link
                href="/careers"
                className="mt-8 inline-flex rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-bold text-white"
              >
                Explore Careers
                <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
