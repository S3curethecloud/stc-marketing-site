import Link from "next/link";
import Container from "@/components/layout/Container";
import { careerRoles } from "@/content/careers";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Careers",
  description:
    "Build secure AI systems, cloud governance architectures, and implementation-ready designs for enterprise clients with SecureTheCloud.",
  path: "/careers",
});

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
      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Careers</p>
            <h1 className="mt-5 text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.5rem]">
              Build what is next. Secure AI systems that power the enterprise era.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              We are building a team of architects, engineers, strategists, and advisors who can help clients turn AI ambition into governed implementation.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#roles" className="inline-flex min-h-12 items-center justify-center bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-200">
                Explore future roles -&gt;
              </a>
              <Link href="/careers/join" className="inline-flex min-h-12 items-center text-sm font-semibold text-slate-200 hover:text-cyan-200">
                Join talent network -&gt;
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#050816]">
        <Container className="py-12 sm:py-14 lg:py-16">
          <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
            {traits.map((trait) => (
              <div key={trait} className="border-t border-white/10 py-4 text-sm font-medium text-slate-300">
                {trait}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">How we work</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
                Client trust, technical depth, and implementation focus.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-400">
                SecureTheCloud is for people who can operate with precision across business goals, architecture decisions, security constraints, and delivery realities.
              </p>
            </div>

            <div className="grid gap-0 border-t border-white/10 md:grid-cols-2">
              {culture.map((item) => (
                <article key={item.title} className="border-b border-white/10 py-6 md:px-6">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="roles" className="border-b border-white/10 bg-[#050816]">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Future roles</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
              Review the track. Understand the work. Express interest.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              These tracks represent the capabilities we are building toward. Formal openings will be posted as hiring plans are finalized, but serious builders can join the talent network now.
            </p>
          </div>

          <div className="border-t border-white/10">
            {careerRoles.map((role) => (
              <Link
                key={role.slug}
                href={`/careers/${role.slug}`}
                className="group block border-b border-white/10 py-8 hover:bg-white/[0.015]"
              >
                <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{role.type}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-white">{role.title}</h3>
                    <p className="mt-2 text-sm font-medium text-slate-500">{role.level} | {role.location}</p>
                  </div>
                  <div>
                    <p className="text-sm leading-6 text-slate-400">{role.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-400">
                      {role.impactAreas.slice(0, 3).map((item) => <span key={item}>{item}</span>)}
                    </div>
                    <p className="mt-5 text-sm font-semibold text-cyan-300 group-hover:text-cyan-200">View role -&gt;</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#030711]">
        <Container className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">Talent network</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">Do not see the right role yet?</h2>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Join the SecureTheCloud talent network. Share your background and the kind of work you want to do across AI security, cloud governance, secure engineering, healthcare AI, or client advisory.
            </p>
          </div>
          <Link href="/careers/join" className="inline-flex min-h-12 items-center justify-center bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-200">
            Join talent network -&gt;
          </Link>
        </Container>
      </section>
    </>
  );
}
