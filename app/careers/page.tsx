import Link from "next/link";
import Container from "@/components/layout/Container";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Careers",
  description:
    "Build secure AI systems, cloud governance architectures, and implementation-ready designs for enterprise clients with SecureTheCloud.",
  path: "/careers",
});

const roles = [
  {
    title: "Lead Enterprise AI Security Architect",
    type: "Future role",
    body:
      "Lead client-facing AI security architecture, cloud governance, and secure adoption engagements across distributed enterprise environments.",
    focus: ["AI security architecture", "Client leadership", "Governance design"],
  },
  {
    title: "Cloud Governance Architect",
    type: "Future role",
    body:
      "Design cloud governance, IAM, platform security, Kubernetes, policy, and secure operating models for AI-enabled environments.",
    focus: ["Cloud governance", "Platform security", "Implementation design"],
  },
  {
    title: "Secure AI Engineer",
    type: "Future role",
    body:
      "Build and validate secure AI patterns across LLM applications, RAG systems, AI gateways, agentic workflows, and evaluation pipelines.",
    focus: ["LLM systems", "Secure engineering", "AI workflow controls"],
  },
  {
    title: "AI Governance Consultant",
    type: "Future role",
    body:
      "Translate AI risk, compliance, privacy, and governance needs into practical control models and client-ready operating guidance.",
    focus: ["AI governance", "Risk mapping", "Stakeholder alignment"],
  },
  {
    title: "Healthcare AI Workflow Architect",
    type: "Future role",
    body:
      "Design secure, reviewable AI workflows for healthcare, behavioral health, telehealth, and regulated clinical operations.",
    focus: ["Healthcare AI", "Sensitive data", "Human review"],
  },
] as const;

const traits = [
  "Client-facing architecture leadership",
  "Secure AI and cloud governance depth",
  "Executive and technical communication",
  "Implementation-ready design discipline",
  "High-trust delivery mindset",
  "Curiosity, ownership, and practical judgment",
] as const;

const culture = [
  {
    title: "Builder mindset",
    body:
      "We value people who can move from ambiguity to artifacts: diagrams, models, architecture decisions, roadmaps, and working systems.",
  },
  {
    title: "Security depth",
    body:
      "We care about security that can survive real delivery pressure: identity, data, cloud, governance, compliance, and operational controls.",
  },
  {
    title: "Client trust",
    body:
      "Our work requires clarity, discretion, strong communication, and the ability to help stakeholders make good decisions.",
  },
  {
    title: "Enterprise polish",
    body:
      "We are building a company that can stand in front of serious buyers and communicate with confidence, precision, and credibility.",
  },
] as const;

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[#030711]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.25),transparent_30rem),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.18),transparent_30rem)]" />
        <Container className="relative py-24 md:py-28">
          <p className="text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
            Careers
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl">
            Build what&apos;s next. Secure AI systems that power the enterprise era.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We are building a team of architects, engineers, strategists, and advisors who can help clients turn AI ambition into governed implementation.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#roles"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-black text-white shadow-2xl shadow-violet-950/40"
            >
              Explore future roles
              <span className="ml-2" aria-hidden="true">-&gt;</span>
            </a>
            <Link
              href="/request-demo"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white hover:border-cyan-300/60 hover:text-cyan-200"
            >
              Start a conversation
              <span className="ml-2" aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#050816] py-14 md:py-16">
        <Container>
          <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
            {traits.map((trait) => (
              <div
                key={trait}
                className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-sm font-bold text-slate-200"
              >
                <span className="mr-2 text-cyan-300">✦</span>
                {trait}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#030711] py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.45em] text-violet-300">
                How we work
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-white">
                Client trust, technical depth, and implementation focus.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-400">
                SecureTheCloud is for people who can operate with precision across business goals, architecture decisions, security constraints, and delivery realities.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {culture.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6"
                >
                  <h3 className="text-2xl font-black text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="roles" className="border-y border-white/10 bg-white/[0.02] py-16 md:py-24">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.45em] text-violet-300">
              Future roles
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
              We are building the talent bench for enterprise AI security delivery.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              These tracks represent the capabilities we are building toward. Formal openings will be posted as hiring plans are finalized.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {roles.map((role) => (
              <article
                key={role.title}
                className="rounded-[2rem] border border-white/10 bg-[#060a15] p-6 shadow-2xl shadow-black/10"
              >
                <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-300">
                  {role.type}
                </p>
                <h3 className="mt-4 text-2xl font-black tracking-tight text-white">
                  {role.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-400">{role.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {role.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-violet-300/20 bg-violet-500/10 px-3 py-1 text-xs font-bold text-violet-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#030711] py-16 md:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2.25rem] border border-violet-400/20 bg-[linear-gradient(135deg,rgba(88,28,135,0.62),rgba(3,7,17,0.88))] p-8 shadow-2xl shadow-violet-950/30 md:p-10">
            <div className="absolute inset-y-0 right-0 hidden w-[50%] bg-[radial-gradient(circle_at_55%_50%,rgba(56,189,248,0.22),transparent_18rem)] lg:block" />
            <div className="relative max-w-4xl">
              <p className="text-sm font-black uppercase tracking-[0.45em] text-violet-200">
                Talent conversations
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Serious builders are welcome early.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                If your background combines cybersecurity, cloud architecture, AI systems, governance, and client-facing delivery, start a conversation.
              </p>
              <Link
                href="/request-demo"
                className="mt-8 inline-flex rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-black text-white"
              >
                Start a conversation
                <span className="ml-2" aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
