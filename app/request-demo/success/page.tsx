import Link from "next/link";
import Container from "@/components/layout/Container";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = {
  ...buildPageMetadata({
    title: "Consultation Request Received",
    description: "SecureTheCloud received your enterprise AI security architecture and cloud governance consultation request.",
    path: "/request-demo/success",
  }),
  robots: { index: false, follow: false },
};

export default function RequestDemoSuccessPage() {
  return (
    <section className="border-b border-white/10 bg-[#030711]">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Request received</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Your architecture context is in the right place.</h1>
          <p className="mt-6 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">We received your consultation request. SecureTheCloud will review the context you provided and use it to determine the most useful first conversation for your AI security, cloud governance, or secure adoption initiative.</p>

          <div className="mt-9 border-y border-white/10 py-7">
            <h2 className="text-xl font-semibold text-white">Prepare these three things</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
              <li>01 — The AI use case or business initiative you want to secure.</li>
              <li>02 — The cloud, data, identity, workflow, and compliance constraints involved.</li>
              <li>03 — The architecture decisions, delivery blockers, or governance questions that need resolution.</li>
            </ul>
          </div>

          <p className="mt-6 text-sm leading-6 text-slate-400">Please do not send credentials, protected health information, customer records, secrets, or highly sensitive production data in follow-up messages unless an appropriate secure exchange method has been established.</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Link href="/services" className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:border-cyan-300/60 hover:text-cyan-200">Review services</Link>
            <Link href="/" className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">Back to homepage -&gt;</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
