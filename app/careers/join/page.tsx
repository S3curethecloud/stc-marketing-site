import Container from "@/components/layout/Container";
import CareerInterestForm from "@/components/forms/CareerInterestForm";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Join the Talent Network",
  description:
    "Express interest in future SecureTheCloud roles across AI security architecture, cloud governance, secure AI engineering, AI governance consulting, and healthcare AI workflow architecture.",
  path: "/careers/join",
});

const reasons = [
  "AI security architecture and secure adoption are becoming enterprise priorities.",
  "Cloud governance, identity, policy, and platform security are foundational to AI delivery.",
  "Regulated industries need reviewable, auditable, human-centered AI workflows.",
  "Clients need people who can communicate with executives and build implementation-ready designs.",
] as const;

export default function CareersJoinPage() {
  return (
    <section className="relative overflow-hidden bg-[#030711] py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.25),transparent_30rem),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.18),transparent_30rem)]" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
              Talent network
            </p>
            <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-7xl">
              Join the SecureTheCloud talent network.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              We are building a team of architects, engineers, consultants, and operators who can help enterprises secure AI adoption, cloud governance, and regulated AI workflows.
            </p>

            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-violet-300">
                Why join early
              </p>
              <ul className="mt-5 grid gap-3">
                {reasons.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <span className="mt-1 text-cyan-300">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/5 p-6">
              <h2 className="text-lg font-black text-white">What happens next</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                We review your background and role interest. If there is a fit for a future role, advisory conversation, contract path, or collaboration opportunity, we will follow up.
              </p>
            </div>
          </div>

          <CareerInterestForm />
        </div>
      </Container>
    </section>
  );
}
