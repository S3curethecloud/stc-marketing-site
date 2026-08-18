import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = {
  ...buildPageMetadata({
    title: "Consultation Request Received",
    description:
      "SecureTheCloud received your enterprise AI security architecture and cloud governance consultation request.",
    path: "/request-demo/success",
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default function RequestDemoSuccessPage() {
  return (
    <Section className="relative overflow-hidden bg-[#030711]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.25),transparent_30rem),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.18),transparent_30rem)]" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl rounded-[2.25rem] border border-white/10 bg-white/[0.035] p-6 text-center shadow-2xl shadow-violet-950/20 sm:p-8 md:p-12">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-300 sm:text-sm sm:tracking-[0.45em]">
            Request received
          </p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:mt-6 sm:text-5xl md:text-6xl">
            Your architecture context is in the right place.
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
            We received your consultation request. SecureTheCloud will review the context you provided and use it to determine the most useful first conversation for your AI security, cloud governance, or secure adoption initiative.
          </p>

          <div className="mt-7 rounded-[1.75rem] border border-cyan-300/20 bg-cyan-300/5 p-5 text-left sm:mt-8 sm:rounded-[2rem] sm:p-6">
            <h2 className="text-lg font-black text-white">Prepare these three things</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
              <li className="flex gap-3"><span className="text-cyan-300" aria-hidden="true">01</span><span>The AI use case or business initiative you want to secure.</span></li>
              <li className="flex gap-3"><span className="text-cyan-300" aria-hidden="true">02</span><span>The cloud, data, identity, workflow, and compliance constraints involved.</span></li>
              <li className="flex gap-3"><span className="text-cyan-300" aria-hidden="true">03</span><span>The architecture decisions, delivery blockers, or governance questions that need resolution.</span></li>
            </ul>
          </div>

          <p className="mt-6 text-sm leading-6 text-slate-400">
            Please do not send credentials, protected health information, customer records, secrets, or highly sensitive production data in follow-up messages unless an appropriate secure exchange method has been established.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white hover:border-cyan-300/60 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Review Services
            </Link>
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-black text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
