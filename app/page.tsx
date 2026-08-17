import Link from "next/link";
import Container from "@/components/layout/Container";
import { siteConfig } from "@/content/site";
import { homepageInsightCards } from "@/content/insights";

const valueStrip = [
  { icon: "shield", title: "AI Security", body: "Architecture" },
  { icon: "cloud", title: "Cloud", body: "Governance" },
  { icon: "spark", title: "Secure AI", body: "Adoption" },
  { icon: "tower", title: "Regulated", body: "Environments" },
  { icon: "people", title: "Client", body: "Delivery" },
  { icon: "code", title: "Implementation", body: "Ready" },
] as const;

const trustPillars = [
  {
    label: "Architecture",
    title: "Secure-by-design foundations",
    body: "Reference architectures for AI platforms, RAG, agents, identity, data boundaries, and cloud integration.",
  },
  {
    label: "Governance",
    title: "Policy-backed control",
    body: "Operating models and controls that connect AI risk, identity, policy, compliance, and business ownership.",
  },
  {
    label: "Runtime",
    title: "Controls where AI operates",
    body: "AI gateway, retrieval authorization, agent and tool boundaries, secrets, observability, and runtime enforcement patterns.",
  },
  {
    label: "Evidence",
    title: "Trust that can be demonstrated",
    body: "Traceable decisions, logs, evaluation results, policy outcomes, and implementation evidence designed for review.",
  },
] as const;

const capabilitySignals = [
  "Secure GenAI & Agentic AI",
  "AI Gateway & Runtime Controls",
  "Secure RAG & Knowledge Systems",
  "Identity, Policy & Secrets",
  "Evidence & Observability",
  "Regulated Cloud Environments",
] as const;

const services = [
  {
    number: "01",
    title: "Enterprise AI Security Architecture",
    body: "Design secure-by-default AI architectures that protect data, models, agents, tools, and workflow integrity.",
    href: "/services#ai-security-architecture",
  },
  {
    number: "02",
    title: "Cloud Governance and Platform Security",
    body: "Establish governance, identity, policy, secrets, and platform controls across multi-cloud environments.",
    href: "/services#cloud-governance",
  },
  {
    number: "03",
    title: "Secure AI Adoption Strategy",
    body: "Build organization-wide strategies for safe, scalable, compliant, and business-aligned AI adoption.",
    href: "/services#secure-ai-adoption",
  },
  {
    number: "04",
    title: "AI Governance and Compliance Readiness",
    body: "Align AI initiatives to NIST AI RMF, OWASP LLM risks, SOC 2 readiness, and internal policies.",
    href: "/services#governance-compliance",
  },
  {
    number: "05",
    title: "Healthcare and Regulated AI Workflows",
    body: "Design secure, reviewable AI workflows for healthcare, behavioral health, and high-compliance environments.",
    href: "/services#regulated-ai",
  },
  {
    number: "06",
    title: "Executive Advisory and Solution Design",
    body: "Partner with leaders to define vision, roadmaps, investment priorities, and implementation-ready architecture.",
    href: "/services#executive-advisory",
  },
] as const;

const deliveryPattern = [
  {
    number: "01",
    title: "Discover",
    body: "Clarify business goals, AI use cases, data sensitivity, regulatory obligations, and platform constraints.",
  },
  {
    number: "02",
    title: "Architect",
    body: "Define trust boundaries, identity flows, AI gateway controls, retrieval authorization, and evidence requirements.",
  },
  {
    number: "03",
    title: "Implement",
    body: "Translate architecture into deployable patterns, control configurations, integration guidance, and delivery artifacts.",
  },
  {
    number: "04",
    title: "Validate",
    body: "Review policy behavior, observability, evaluation evidence, operational readiness, and governance handoffs.",
  },
] as const;

const insights = homepageInsightCards;

function IconGlyph({ type }: { type: string }) {
  const common =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200";

  if (type === "shield") {
    return (
      <div className={common}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3 5.5 5.5v5.8c0 4.2 2.8 7.7 6.5 9.2 3.7-1.5 6.5-5 6.5-9.2V5.5L12 3Z" />
          <path d="m9.5 12 1.8 1.8 3.5-4" />
        </svg>
      </div>
    );
  }

  if (type === "cloud") {
    return (
      <div className={common}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M7 18h10a4 4 0 0 0 .6-8A6 6 0 0 0 6.2 8.8 4.5 4.5 0 0 0 7 18Z" />
          <path d="M12 12v5" />
          <path d="m9.5 14.5 2.5-2.5 2.5 2.5" />
        </svg>
      </div>
    );
  }

  if (type === "spark") {
    return (
      <div className={`${common} text-violet-200`}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3 14 9.5 21 12l-7 2.5L12 21l-2-6.5L3 12l7-2.5L12 3Z" />
        </svg>
      </div>
    );
  }

  if (type === "tower") {
    return (
      <div className={common}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 21h16" />
          <path d="M6 21V9l6-4 6 4v12" />
          <path d="M9 21v-7h6v7" />
          <path d="M9 10h6" />
        </svg>
      </div>
    );
  }

  if (type === "people") {
    return (
      <div className={`${common} text-fuchsia-200`}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M16 11a3 3 0 1 0-2.8-4" />
          <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M2.5 20a5.5 5.5 0 0 1 11 0" />
          <path d="M13.5 15.5A5.5 5.5 0 0 1 21.5 20" />
        </svg>
      </div>
    );
  }

  return (
    <div className={common}>
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </svg>
    </div>
  );
}

function EnterpriseShieldVisual() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#050816] shadow-2xl shadow-cyan-950/30 sm:min-h-[430px] sm:rounded-[2rem] lg:min-h-[500px] lg:rounded-[2.5rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(168,85,247,0.42),transparent_18rem),radial-gradient(circle_at_70%_50%,rgba(56,189,248,0.2),transparent_22rem),radial-gradient(circle_at_35%_70%,rgba(236,72,153,0.14),transparent_18rem)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(56,189,248,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.18)_1px,transparent_1px)] [background-size:36px_36px] sm:[background-size:44px_44px]" />

      <div className="relative grid min-h-[360px] place-items-center p-4 sm:min-h-[430px] sm:p-6 lg:min-h-[500px] lg:p-8">
        <div className="relative aspect-square w-full max-w-[285px] sm:max-w-[330px] lg:max-w-[340px]">
          <div className="absolute inset-0 rounded-[2rem] border border-cyan-300/25 bg-white/[0.035] shadow-2xl shadow-cyan-950/40 backdrop-blur-xl sm:rounded-[2.5rem] lg:rounded-[3rem]" />
          <div className="absolute inset-[12%] rounded-[1.75rem] border border-violet-300/25 bg-black/35 backdrop-blur-xl sm:rounded-[2.25rem]" />
          <div className="absolute inset-[26%] rounded-[1.5rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/15 via-violet-500/25 to-fuchsia-500/10 shadow-2xl shadow-violet-950/40" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg viewBox="0 0 120 140" className="h-24 w-24 text-cyan-200 drop-shadow-[0_0_24px_rgba(34,211,238,0.45)] sm:h-28 sm:w-28 lg:h-32 lg:w-32" fill="none" stroke="currentColor" strokeWidth="5">
              <path d="M60 8 18 24v38c0 31 18 55 42 66 24-11 42-35 42-66V24L60 8Z" />
              <path d="M44 75h31a13 13 0 0 0 2-26 20 20 0 0 0-38-4 15 15 0 0 0 5 30Z" />
            </svg>
          </div>

          <div className="absolute inset-x-3 bottom-4 grid gap-2 sm:inset-x-4 sm:bottom-5 sm:grid-cols-2 lg:inset-x-auto lg:-left-12 lg:bottom-auto lg:top-10 lg:w-52 lg:grid-cols-1">
            {["AI Gateway", "Cloud Governance", "Policy Controls", "Evidence Architecture"].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-[#10142b]/90 px-3 py-2 text-[10px] font-bold text-white shadow-xl shadow-black/20 backdrop-blur-xl sm:text-xs lg:rounded-2xl lg:px-4 lg:py-3"
              >
                <span>{item}</span>
                <span className="ml-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/70" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[#030711]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.25),transparent_30rem),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.20),transparent_32rem),radial-gradient(circle_at_70%_75%,rgba(236,72,153,0.14),transparent_26rem)]" />
        <Container className="relative py-14 sm:py-20 lg:py-28 xl:py-32">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-300 sm:text-sm sm:tracking-[0.4em]">
                Enterprise AI Security Services
              </p>
              <h1 className="mt-5 max-w-4xl text-[2.55rem] font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Lead secure AI adoption with enterprise-grade architecture.
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl">
                SecureTheCloud helps enterprises design and implement secure AI systems with confidence. We deliver AI security architecture, cloud governance, secure AI adoption, and implementation-ready technical design across distributed client environments.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
                <Link
                  href={siteConfig.primaryCta.href}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-bold text-white shadow-2xl shadow-violet-950/40 transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  Request Consultation
                  <span className="ml-2" aria-hidden="true">-&gt;</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-cyan-300/60 hover:text-cyan-200 sm:w-auto"
                >
                  Explore Services
                  <span className="ml-2" aria-hidden="true">-&gt;</span>
                </Link>
              </div>
            </div>

            <EnterpriseShieldVisual />
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#050816]">
        <Container className="py-5 sm:py-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {valueStrip.map((item) => (
              <div
                key={`${item.title}-${item.body}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-4 transition-colors hover:border-cyan-300/40 hover:bg-white/[0.045] sm:rounded-3xl sm:px-5"
              >
                <IconGlyph type={item.icon} />
                <div>
                  <p className="text-sm font-black text-white">{item.title}</p>
                  <p className="text-sm font-black text-slate-300">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#030711] py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.32em] text-violet-300 sm:text-sm sm:tracking-[0.4em]">
              Enterprise trust model
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:mt-5 sm:text-5xl">
              Trust is engineered into the system, not added at the end.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-400 sm:mt-5">
              Our work connects architecture, governance, runtime controls, and evidence so enterprise AI can move from experimentation toward controlled implementation.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {trustPillars.map((pillar) => (
              <div key={pillar.label} className="rounded-[1.75rem] border border-cyan-300/15 bg-white/[0.03] p-5 shadow-2xl shadow-black/10 sm:p-6">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">{pillar.label}</p>
                <h3 className="mt-3 text-xl font-black text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{pillar.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilitySignals.map((signal) => (
              <div key={signal} className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-bold text-slate-300">
                {signal}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#030711] py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.32em] text-violet-300 sm:text-sm sm:tracking-[0.4em]">
                What we do
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:mt-5 sm:text-5xl">
                End-to-end services for secure AI transformation.
              </h2>
              <Link href="/services" className="mt-6 inline-flex min-h-11 items-center text-sm font-bold text-cyan-300 hover:text-cyan-200 sm:mt-8">
                View all services <span className="ml-2" aria-hidden="true">-&gt;</span>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/10 transition-transform hover:-translate-y-1 hover:border-cyan-300/30 sm:p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 text-sm font-black text-white shadow-lg shadow-violet-950/30 sm:h-14 sm:w-14">
                    {service.number}
                  </div>
                  <h3 className="mt-5 text-xl font-black tracking-tight text-white sm:mt-6">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{service.body}</p>
                  <div className="mt-5 text-2xl text-violet-300 transition-transform group-hover:translate-x-1">-&gt;</div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#030711] pb-12 sm:pb-16 lg:pb-20">
        <Container>
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-violet-950/20 sm:rounded-[2.25rem]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="p-6 sm:p-8 lg:p-10">
                <p className="text-xs font-black uppercase tracking-[0.32em] text-violet-300 sm:text-sm sm:tracking-[0.4em]">
                  Delivery pattern
                </p>
                <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-white sm:mt-5 sm:text-4xl">
                  From AI ambition to implementation-ready architecture.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-400 sm:mt-5">
                  A repeatable engagement model helps teams make security, governance, and implementation decisions explicit before they become production constraints.
                </p>
                <Link href={siteConfig.primaryCta.href} className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white hover:border-cyan-300/50 hover:text-cyan-200 sm:mt-8 sm:w-auto">
                  Discuss your architecture <span className="ml-2" aria-hidden="true">-&gt;</span>
                </Link>
              </div>

              <div className="grid gap-px border-t border-white/10 bg-white/10 sm:grid-cols-2 lg:border-l lg:border-t-0">
                {deliveryPattern.map((step) => (
                  <div key={step.number} className="bg-[#080b15] p-6 sm:p-7">
                    <div className="text-sm font-black text-cyan-300">{step.number}</div>
                    <h3 className="mt-3 text-xl font-black text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.32em] text-violet-300 sm:text-sm sm:tracking-[0.4em]">What we think</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:mt-5 sm:text-4xl">
                Insights for leaders building secure AI organizations.
              </h2>
              <Link href="/insights" className="mt-6 inline-flex min-h-11 items-center text-sm font-bold text-cyan-300 sm:mt-8">
                Visit all insights <span className="ml-2" aria-hidden="true">-&gt;</span>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {insights.map((insight) => (
                <Link
                  key={insight.title}
                  href={`/insights/${insight.slug}`}
                  aria-label={`Read insight: ${insight.title}`}
                  className={`group min-h-[230px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br ${insight.gradient} p-5 shadow-2xl shadow-black/10 transition-transform hover:-translate-y-1 hover:border-cyan-300/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/70 sm:min-h-[260px] sm:p-6`}
                >
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">{insight.eyebrow}</p>
                  <h3 className="mt-4 text-lg font-black leading-6 text-white sm:mt-5">{insight.title}</h3>
                  <div className="mt-7 h-14 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_left,rgba(56,189,248,0.25),transparent_12rem)] sm:mt-10 sm:h-20" />
                  <p className="mt-4 text-xs font-semibold text-slate-300">{insight.date} - {insight.readTime}</p>
                  <p className="mt-3 text-sm font-bold text-violet-200 transition-transform group-hover:translate-x-1">Read more -&gt;</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#030711] py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-violet-400/20 bg-[linear-gradient(135deg,rgba(88,28,135,0.62),rgba(3,7,17,0.88))] p-6 shadow-2xl shadow-violet-950/30 sm:rounded-[2.25rem] sm:p-8 lg:p-10">
            <div className="absolute inset-y-0 right-0 hidden w-[55%] bg-[radial-gradient(circle_at_60%_50%,rgba(56,189,248,0.28),transparent_18rem),linear-gradient(90deg,transparent,rgba(59,130,246,0.14))] lg:block" />
            <div className="relative max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.32em] text-violet-200 sm:text-sm sm:tracking-[0.4em]">Careers</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:mt-5 sm:text-5xl">
                Build what is next. Secure AI systems that power the enterprise era.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:mt-5">
                Join a team of builders, architects, and strategists solving complex AI, cloud, governance, and security challenges for ambitious organizations.
              </p>
              <Link href="/careers" className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-bold text-white sm:mt-8 sm:w-auto">
                Explore Careers <span className="ml-2" aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
