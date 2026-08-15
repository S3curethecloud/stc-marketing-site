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
  "Lead Enterprise AI Security Architect",
  "Cloud Governance Architect",
  "Secure AI Engineer",
  "AI Governance Consultant",
  "Healthcare AI Workflow Architect",
] as const;

const traits = [
  "Client-facing architecture leadership",
  "Secure AI and cloud governance depth",
  "Executive and technical communication",
  "Implementation-ready design discipline",
  "High-trust delivery mindset",
] as const;

export default function CareersPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-24 md:py-28">
          <p className="text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
            Careers
          </p>
          <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl">
            Build what&apos;s next. Secure AI systems that power the enterprise era.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We are building a team of architects, engineers, strategists, and advisors who can help clients turn AI ambition into governed implementation.
          </p>
        </Container>
      </section>

      <section className="bg-[#030711] py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.45em] text-violet-300">
                How we work
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-white">
                Client trust, technical depth, and implementation focus.
              </h2>
              <div className="mt-8 grid gap-3">
                {traits.map((trait) => (
                  <div
                    key={trait}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm font-bold text-slate-200"
                  >
                    <span className="mr-2 text-cyan-300">✦</span>
                    {trait}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-white">Future roles</h2>
              <p className="mt-3 text-base leading-7 text-slate-400">
                We are preparing role tracks for enterprise AI security, cloud governance, secure AI engineering, and regulated workflow architecture.
              </p>

              <div className="mt-8 grid gap-4">
                {roles.map((role) => (
                  <article
                    key={role}
                    className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"
                  >
                    <h3 className="text-xl font-black text-white">{role}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      Help clients design secure AI systems, governance models, cloud controls, and implementation-ready technical architecture.
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] border border-violet-400/20 bg-gradient-to-r from-violet-950/50 to-cyan-950/30 p-8">
            <h2 className="text-3xl font-black text-white">Want to build with us?</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              We are building the team carefully. Reach out if your background combines cybersecurity, cloud architecture, AI systems, governance, and client-facing delivery.
            </p>
            <Link
              href="/request-demo"
              className="mt-6 inline-flex rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-bold text-white"
            >
              Start a conversation →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
