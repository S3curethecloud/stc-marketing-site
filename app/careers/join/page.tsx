import Container from "@/components/layout/Container";
import CareerInterestForm from "@/components/forms/CareerInterestForm";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Join the Talent Network",
  description:
    "Express interest in future IKEVAR roles across enterprise architecture, AI, cloud, cybersecurity, governance, engineering, regulated systems, and client advisory.",
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
    <section className="border-b border-white/10 bg-[#030711]">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Talent network</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">Join the IKEVAR talent network.</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">We are building a team of architects, engineers, consultants, strategists, and operators who can help enterprises design, secure, govern, engineer, and validate complex technology systems.</p>

            <div className="mt-9 border-y border-white/10 py-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">Why join early</p>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-300">
                {reasons.map((item) => <li key={item}>— {item}</li>)}
              </ul>
            </div>

            <div className="mt-8 border-l-2 border-white/15 pl-4 text-sm leading-6 text-slate-400">
              <h2 className="font-semibold text-white">What happens next</h2>
              <p className="mt-2">We review your background and role interest. If there is a fit for a future role, advisory conversation, contract path, or collaboration opportunity, we will follow up.</p>
            </div>
          </div>

          <CareerInterestForm />
        </div>
      </Container>
    </section>
  );
}
