import Link from "next/link";
import Container from "@/components/layout/Container";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Company",
  description:
    "SecureTheCloud is an enterprise AI security architecture and cloud governance services firm helping organizations move from AI ambition to governed implementation.",
  path: "/company",
});

const principles = [
  {
    title: "Architecture before automation",
    body:
      "AI initiatives should be designed around clear architecture, control boundaries, identity, data flow, and operating requirements before teams scale them across the enterprise.",
  },
  {
    title: "Governance before production risk",
    body:
      "Secure AI adoption needs policy, accountability, auditability, and implementation guardrails before AI-enabled workflows become operational dependencies.",
  },
  {
    title: "Evidence before claims",
    body:
      "Security, compliance, and executive confidence improve when teams can trace architecture decisions, controls, risks, and delivery assumptions to evidence.",
  },
  {
    title: "Implementation over theater",
    body:
      "Our work is built to become useful artifacts: reference architectures, decision records, control maps, roadmaps, and delivery-ready guidance.",
  },
] as const;

const operatingModel = [
  "Executive and technical discovery",
  "AI security and cloud governance assessment",
  "Target-state architecture design",
  "Control, policy, and evidence mapping",
  "Delivery roadmap and implementation guidance",
] as const;

const audiences = [
  "CISOs and security leadership",
  "CTOs, CIOs, and enterprise architects",
  "AI, data, and innovation leaders",
  "Cloud and platform engineering teams",
  "Healthcare and regulated-operations teams",
  "GRC, privacy, risk, and compliance leaders",
] as const;

const differentiators = [
  {
    value: "Founder-led",
    label: "architecture depth with direct senior delivery focus",
  },
  {
    value: "Services-first",
    label: "consulting, advisory, design, and implementation readiness",
  },
  {
    value: "Governance-native",
    label: "security, compliance, policy, and evidence built into the design path",
  },
] as const;

export default function CompanyPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[#030711]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.25),transparent_30rem),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.18),transparent_30rem)]" />
        <Container className="relative py-24 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.78fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
                Company
              </p>
              <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl">
                Built to help enterprises secure the AI era.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                SecureTheCloud is an enterprise AI security architecture and cloud governance services firm. We help organizations translate ambiguous AI, security, cloud, and compliance needs into scalable, maintainable, implementation-ready technical designs.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/request-demo"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-black text-white shadow-2xl shadow-violet-950/40"
                >
                  Request Consultation
                  <span className="ml-2" aria-hidden="true">-&gt;</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white hover:border-cyan-300/60 hover:text-cyan-200"
                >
                  Explore Services
                  <span className="ml-2" aria-hidden="true">-&gt;</span>
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-violet-950/20">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-violet-300">
                What we deliver
              </p>
              <div className="mt-5 grid gap-3">
                {operatingModel.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-bold text-slate-200"
                  >
                    <span className="mr-2 text-cyan-300">✦</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#050816] py-14 md:py-16">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {differentiators.map((item) => (
              <article
                key={item.value}
                className="rounded-[2rem] border border-cyan-300/20 bg-white/[0.03] p-6"
              >
                <h2 className="text-3xl font-black text-cyan-300">{item.value}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.label}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#030711] py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.45em] text-violet-300">
                What we believe
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Secure AI adoption needs more than enthusiasm.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-400">
                Enterprises need a disciplined path from opportunity to architecture, governance, validation, and implementation.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/10"
                >
                  <h3 className="text-2xl font-black text-white">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{principle.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.45em] text-violet-300">
                Who we serve
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-white">
                Built for leaders responsible for high-trust AI transformation.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {audiences.map((audience) => (
                <div
                  key={audience}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm font-bold text-slate-200"
                >
                  <span className="mr-2 text-cyan-300">✦</span>
                  {audience}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#030711] py-16 md:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2.25rem] border border-violet-400/20 bg-[linear-gradient(135deg,rgba(88,28,135,0.62),rgba(3,7,17,0.88))] p-8 shadow-2xl shadow-violet-950/30 md:p-10">
            <div className="absolute inset-y-0 right-0 hidden w-[50%] bg-[radial-gradient(circle_at_55%_50%,rgba(56,189,248,0.22),transparent_18rem)] lg:block" />
            <div className="relative max-w-4xl">
              <p className="text-sm font-black uppercase tracking-[0.45em] text-violet-200">
                Build with us
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Bring the ambition. We will help shape the architecture.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                Talk to SecureTheCloud about secure AI adoption, cloud governance, regulated workflows, and implementation-ready technical design.
              </p>
              <Link
                href="/request-demo"
                className="mt-8 inline-flex rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-black text-white"
              >
                Request Consultation
                <span className="ml-2" aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
