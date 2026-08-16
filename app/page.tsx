import Link from "next/link";
import Container from "@/components/layout/Container";
import { siteConfig } from "@/content/site";

const valueStrip = [
  {
    icon: "shield",
    title: "AI Security",
    body: "Architecture",
  },
  {
    icon: "cloud",
    title: "Cloud",
    body: "Governance",
  },
  {
    icon: "spark",
    title: "Secure AI",
    body: "Adoption",
  },
  {
    icon: "tower",
    title: "Regulated",
    body: "Environments",
  },
  {
    icon: "people",
    title: "Client",
    body: "Delivery",
  },
  {
    icon: "code",
    title: "Implementation",
    body: "Ready",
  },
] as const;

const clientMarks = [
  "Northwind Health Systems",
  "Veridian Financial Group",
  "Altura Industries",
  "Summit Health",
  "Lumenda Global",
] as const;

const metrics = [
  {
    value: "72%",
    title: "AI risk exposure reduction",
    body: "Through secure architecture, governance controls, and implementation-ready security design.",
  },
  {
    value: "3.4x",
    title: "Faster governance implementation",
    body: "With reusable operating models, reference architectures, and delivery accelerators.",
  },
  {
    value: "100+",
    title: "Enterprise AI programs supported",
    body: "Across regulated, distributed, and high-complexity client environments.",
  },
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

const insights = [
  {
    eyebrow: "AI Governance",
    title: "Building AI governance that scales with enterprise ambition",
    date: "May 12, 2026",
    href: "/insights",
    gradient: "from-cyan-400/25 via-blue-500/10 to-violet-500/20",
  },
  {
    eyebrow: "Architecture",
    title: "Designing secure agent architectures for the enterprise era",
    date: "April 28, 2026",
    href: "/insights",
    gradient: "from-violet-400/25 via-fuchsia-500/10 to-cyan-500/20",
  },
  {
    eyebrow: "Cloud Modernization",
    title: "Modernizing cloud platforms for secure AI innovation",
    date: "April 15, 2026",
    href: "/insights",
    gradient: "from-blue-400/25 via-cyan-500/10 to-violet-500/20",
  },
  {
    eyebrow: "Regulated AI",
    title: "Implementing AI in regulated industries with confidence",
    date: "April 2, 2026",
    href: "/insights",
    gradient: "from-fuchsia-400/25 via-violet-500/10 to-cyan-500/20",
  },
] as const;

function IconGlyph({ type }: { type: string }) {
  const common =
    "h-10 w-10 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200";

  if (type === "shield") {
    return (
      <div className={`${common} flex items-center justify-center`}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3 5.5 5.5v5.8c0 4.2 2.8 7.7 6.5 9.2 3.7-1.5 6.5-5 6.5-9.2V5.5L12 3Z" />
          <path d="m9.5 12 1.8 1.8 3.5-4" />
        </svg>
      </div>
    );
  }

  if (type === "cloud") {
    return (
      <div className={`${common} flex items-center justify-center`}>
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
      <div className={`${common} flex items-center justify-center text-violet-200`}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3 14 9.5 21 12l-7 2.5L12 21l-2-6.5L3 12l7-2.5L12 3Z" />
        </svg>
      </div>
    );
  }

  if (type === "tower") {
    return (
      <div className={`${common} flex items-center justify-center`}>
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
      <div className={`${common} flex items-center justify-center text-fuchsia-200`}>
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
    <div className={`${common} flex items-center justify-center`}>
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
    <div className="relative min-h-[500px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050816] shadow-2xl shadow-cyan-950/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(168,85,247,0.42),transparent_18rem),radial-gradient(circle_at_70%_50%,rgba(56,189,248,0.2),transparent_22rem),radial-gradient(circle_at_35%_70%,rgba(236,72,153,0.14),transparent_18rem)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(56,189,248,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.18)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="absolute left-10 top-12 h-24 w-48 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 blur-[1px]" />
      <div className="absolute right-12 top-16 h-32 w-64 rounded-3xl border border-violet-300/20 bg-violet-500/10 blur-[1px]" />
      <div className="absolute bottom-16 left-16 h-28 w-72 rounded-3xl border border-fuchsia-300/20 bg-fuchsia-500/10 blur-[1px]" />

      <div className="relative grid min-h-[500px] place-items-center p-8">
        <div className="relative h-[340px] w-[340px]">
          <div className="absolute inset-0 rounded-[3rem] border border-cyan-300/25 bg-white/[0.035] shadow-2xl shadow-cyan-950/40 backdrop-blur-xl" />
          <div className="absolute left-10 top-10 h-[260px] w-[260px] rounded-[2.5rem] border border-violet-300/25 bg-black/35 backdrop-blur-xl" />
          <div className="absolute left-[5.5rem] top-[4.8rem] h-44 w-44 rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/15 via-violet-500/25 to-fuchsia-500/10 shadow-2xl shadow-violet-950/40" />

          <div className="absolute left-[7.25rem] top-[6.3rem]">
            <svg viewBox="0 0 120 140" className="h-32 w-32 text-cyan-200 drop-shadow-[0_0_24px_rgba(34,211,238,0.45)]" fill="none" stroke="currentColor" strokeWidth="5">
              <path d="M60 8 18 24v38c0 31 18 55 42 66 24-11 42-35 42-66V24L60 8Z" />
              <path d="M44 75h31a13 13 0 0 0 2-26 20 20 0 0 0-38-4 15 15 0 0 0 5 30Z" />
            </svg>
          </div>

          {["AI Gateway", "Cloud Governance", "Policy Controls", "Evidence Architecture"].map((item, index) => (
            <div
              key={item}
              className="absolute left-[-3rem] flex w-52 items-center justify-between rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-xs font-bold text-white shadow-xl shadow-black/20 backdrop-blur-xl"
              style={{ top: `${42 + index * 58}px` }}
            >
              <span>{item}</span>
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/70" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NetworkGlobe() {
  return (
    <div className="absolute inset-y-0 right-0 hidden w-[58%] overflow-hidden lg:block">
      <div className="absolute bottom-[-9rem] right-[-3rem] h-[34rem] w-[34rem] rounded-full border border-cyan-300/20 bg-[radial-gradient(circle_at_40%_35%,rgba(56,189,248,0.22),rgba(124,58,237,0.16)_35%,rgba(236,72,153,0.1)_62%,transparent_70%)] shadow-2xl shadow-violet-950/40" />
      <div className="absolute bottom-[3rem] right-[4rem] h-[24rem] w-[24rem] rounded-full border border-fuchsia-300/20" />
      <div className="absolute bottom-[7rem] right-[8rem] h-[16rem] w-[16rem] rounded-full border border-cyan-300/20" />
      <div className="absolute bottom-[5rem] right-[2rem] h-px w-[32rem] rotate-[-18deg] bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="absolute bottom-[11rem] right-[2rem] h-px w-[31rem] rotate-[12deg] bg-gradient-to-r from-transparent via-fuchsia-300/60 to-transparent" />
      <div className="absolute bottom-[17rem] right-[4rem] h-px w-[27rem] rotate-[34deg] bg-gradient-to-r from-transparent via-violet-300/60 to-transparent" />
      <div className="absolute bottom-[9rem] right-[12rem] h-2 w-2 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/70" />
      <div className="absolute bottom-[17rem] right-[18rem] h-2 w-2 rounded-full bg-fuchsia-300 shadow-lg shadow-fuchsia-300/70" />
      <div className="absolute bottom-[13rem] right-[27rem] h-2 w-2 rounded-full bg-violet-300 shadow-lg shadow-violet-300/70" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[#030711]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.25),transparent_30rem),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.20),transparent_32rem),radial-gradient(circle_at_70%_75%,rgba(236,72,153,0.14),transparent_26rem)]" />
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
                  <span className="ml-2" aria-hidden="true">-&gt;</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
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
        <Container className="py-6">
          <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
            {valueStrip.map((item) => (
              <div
                key={`${item.title}-${item.body}`}
                className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.025] px-5 py-5 transition-colors hover:border-cyan-300/40 hover:bg-white/[0.045]"
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
                We support enterprise teams navigating AI security, cloud governance, regulated workflows, and implementation-ready transformation.
              </p>
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {clientMarks.map((mark) => (
                  <div
                    key={mark}
                    className="flex min-h-20 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center text-xs font-black uppercase tracking-[0.18em] text-slate-300"
                  >
                    {mark}
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.value}
                    className="rounded-[2rem] border border-cyan-300/20 bg-white/[0.03] p-6 shadow-2xl shadow-black/10"
                  >
                    <div className="text-4xl font-black text-cyan-300">{metric.value}</div>
                    <h3 className="mt-4 text-lg font-black text-white">{metric.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{metric.body}</p>
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
                <span className="ml-2" aria-hidden="true">-&gt;</span>
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/10 transition-transform hover:-translate-y-1 hover:border-cyan-300/30"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 text-sm font-black text-white shadow-lg shadow-violet-950/30">
                    {service.number}
                  </div>
                  <h3 className="mt-6 text-xl font-black tracking-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{service.body}</p>
                  <div className="mt-6 text-2xl text-violet-300 transition-transform group-hover:translate-x-1">
                    -&gt;
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#030711] pb-16 md:pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-violet-950/20">
            <NetworkGlobe />
            <div className="relative grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="min-h-[380px] p-8 md:p-10">
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
                  <span className="ml-2" aria-hidden="true">-&gt;</span>
                </Link>
              </div>

              <div className="grid border-t border-white/10 bg-black/10 backdrop-blur-sm lg:border-l lg:border-t-0">
                {[
                  ["60%", "faster time-to-production for AI initiatives"],
                  ["45%", "reduction in policy exceptions and architecture ambiguity"],
                  ["12+", "business units enabled with governed AI patterns"],
                ].map(([value, label]) => (
                  <div key={value} className="border-b border-white/10 p-8 last:border-b-0">
                    <div className="text-4xl font-black text-violet-300">{value}</div>
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
                <span className="ml-2" aria-hidden="true">-&gt;</span>
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {insights.map((insight) => (
                <Link
                  key={insight.title}
                  href={insight.href}
                  aria-label={`Read insight: ${insight.title}`}
                  className={`group min-h-[260px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${insight.gradient} p-6 shadow-2xl shadow-black/10 transition-transform hover:-translate-y-1 hover:border-cyan-300/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/70`}
                >
                  <div className="absolute" />
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                    {insight.eyebrow}
                  </p>
                  <h3 className="mt-5 text-lg font-black leading-6 text-white">
                    {insight.title}
                  </h3>
                  <div className="mt-10 h-20 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_left,rgba(56,189,248,0.25),transparent_12rem)]" />
                  <p className="mt-5 text-xs font-semibold text-slate-300">
                    {insight.date} - 6 min read
                  </p>
                  <p className="mt-4 text-sm font-bold text-violet-200 transition-transform group-hover:translate-x-1">
                    Read more -&gt;
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#030711] py-16 md:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2.25rem] border border-violet-400/20 bg-[linear-gradient(135deg,rgba(88,28,135,0.62),rgba(3,7,17,0.88))] p-8 shadow-2xl shadow-violet-950/30 md:p-10">
            <div className="absolute inset-y-0 right-0 hidden w-[55%] bg-[radial-gradient(circle_at_60%_50%,rgba(56,189,248,0.28),transparent_18rem),linear-gradient(90deg,transparent,rgba(59,130,246,0.14))] lg:block" />
            <div className="absolute bottom-0 right-20 hidden h-64 w-96 lg:block">
              <div className="absolute bottom-0 left-4 h-48 w-12 rounded-t-full bg-black/55" />
              <div className="absolute bottom-0 left-24 h-60 w-12 rounded-t-full bg-black/55" />
              <div className="absolute bottom-0 left-44 h-52 w-12 rounded-t-full bg-black/55" />
              <div className="absolute bottom-0 left-64 h-44 w-12 rounded-t-full bg-black/55" />
            </div>

            <div className="relative max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.45em] text-violet-200">
                Careers
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Build what is next. Secure AI systems that power the enterprise era.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300">
                Join a team of builders, architects, and strategists solving complex AI, cloud, governance, and security challenges for ambitious organizations.
              </p>
              <Link
                href="/careers"
                className="mt-8 inline-flex rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-bold text-white"
              >
                Explore Careers
                <span className="ml-2" aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
