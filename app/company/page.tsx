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
  { title: "Architecture before automation", body: "AI initiatives should be designed around clear architecture, control boundaries, identity, data flow, and operating requirements before teams scale them across the enterprise." },
  { title: "Governance before production risk", body: "Secure AI adoption needs policy, accountability, auditability, and implementation guardrails before AI-enabled workflows become operational dependencies." },
  { title: "Evidence before claims", body: "Security, compliance, and executive confidence improve when teams can trace architecture decisions, controls, risks, and delivery assumptions to evidence." },
  { title: "Implementation over theater", body: "Our work is built to become useful artifacts: reference architectures, decision records, control maps, roadmaps, and delivery-ready guidance." },
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
  { value: "Founder-led", label: "Architecture depth with direct senior delivery focus." },
  { value: "Services-first", label: "Consulting, advisory, design, and implementation readiness." },
  { value: "Governance-native", label: "Security, compliance, policy, and evidence built into the design path." },
] as const;

export default function CompanyPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Company</p>
              <h1 className="mt-5 max-w-4xl text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.5rem]">
                Built to help enterprises secure the AI era.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                SecureTheCloud is an enterprise AI security architecture and cloud governance services firm. We help organizations translate ambiguous AI, security, cloud, and compliance needs into scalable, maintainable, implementation-ready technical designs.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/request-demo?focus=advisory&from=company" className="inline-flex min-h-12 items-center justify-center bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-200">
                  Request architecture consultation -&gt;
                </Link>
                <Link href="/services" className="inline-flex min-h-12 items-center text-sm font-semibold text-slate-200 hover:text-cyan-200">
                  Explore services -&gt;
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
                <Link href="/insights" className="text-cyan-300 hover:text-cyan-200">Read technical authority -&gt;</Link>
                <Link href="/evidence" className="text-slate-300 hover:text-white">Inspect public evidence -&gt;</Link>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">What we deliver</p>
              <div className="mt-4 divide-y divide-white/10 border-y border-white/10">
                {operatingModel.map((item) => (
                  <div key={item} className="py-4 text-sm font-medium text-slate-200">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#050816]">
        <Container className="py-12 sm:py-14 lg:py-16">
          <div className="grid gap-8 md:grid-cols-3">
            {differentiators.map((item) => (
              <article key={item.value} className="border-t border-white/10 pt-5">
                <h2 className="text-xl font-semibold text-white">{item.value}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.label}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">What we believe</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">Secure AI adoption needs more than enthusiasm.</h2>
              <p className="mt-5 text-base leading-7 text-slate-400">Enterprises need a disciplined path from opportunity to architecture, governance, validation, and implementation.</p>
            </div>
            <div className="grid gap-0 border-t border-white/10 md:grid-cols-2">
              {principles.map((principle) => (
                <article key={principle.title} className="border-b border-white/10 py-6 md:px-6">
                  <h3 className="text-lg font-semibold text-white">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{principle.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#050816]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Who we serve</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">Built for leaders responsible for high-trust AI transformation.</h2>
            </div>
            <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
              {audiences.map((audience) => (
                <div key={audience} className="border-t border-white/10 py-4 text-sm font-medium text-slate-300">{audience}</div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[0.72fr_1.28fr] lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Evaluate SecureTheCloud</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">Do not take the positioning on faith. Follow the technical trail.</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="border-t border-white/10 pt-5">
              <h3 className="text-lg font-semibold text-white">How we reason</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">Architecture notes expose the problem framing, design principles, controls, evidence expectations, tradeoffs, leadership decisions, and engineering actions behind our point of view.</p>
              <Link href="/insights" className="mt-4 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200">Explore technical authority -&gt;</Link>
            </div>
            <div className="border-t border-white/10 pt-5">
              <h3 className="text-lg font-semibold text-white">What you can inspect</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">Public engineering repositories expose reference patterns, evaluation harnesses, governance evidence, control models, and implementation artifacts with their boundaries stated explicitly.</p>
              <Link href="/evidence" className="mt-4 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200">Inspect evidence -&gt;</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#050816]">
        <Container className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">Build with us</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">Bring the ambition. We will help shape the architecture.</h2>
            <p className="mt-4 text-base leading-7 text-slate-400">Talk to SecureTheCloud about secure AI adoption, cloud governance, regulated workflows, and implementation-ready technical design.</p>
          </div>
          <Link href="/request-demo?focus=advisory&from=company" className="inline-flex min-h-12 items-center justify-center bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-200">
            Request architecture consultation -&gt;
          </Link>
        </Container>
      </section>
    </>
  );
}
