import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Consultation Request Received",
  description:
    "SecureTheCloud received your enterprise AI security architecture and cloud governance consultation request.",
  path: "/request-demo/success",
});

export default function RequestDemoSuccessPage() {
  return (
    <Section className="relative overflow-hidden bg-[#030711]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.25),transparent_30rem),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.18),transparent_30rem)]" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl rounded-[2.25rem] border border-white/10 bg-white/[0.035] p-8 text-center shadow-2xl shadow-violet-950/20 md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
            Request received
          </p>
          <h1 className="mt-6 text-5xl font-black tracking-tight text-white md:text-6xl">
            We received your consultation request.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Thank you for reaching out to SecureTheCloud. We will review your context and follow up about the right next conversation for your AI security, cloud governance, or secure adoption initiative.
          </p>

          <div className="mt-8 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/5 p-6 text-left">
            <h2 className="text-lg font-black text-white">Before the first conversation</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
              <li>✦ Identify the AI use case or business initiative you want to secure.</li>
              <li>✦ Note the cloud, data, workflow, and compliance constraints involved.</li>
              <li>✦ Bring any architecture questions, decision points, or delivery blockers.</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white hover:border-cyan-300/60 hover:text-cyan-200"
            >
              Review Services
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-black text-white"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
