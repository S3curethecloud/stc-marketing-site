import Link from "next/link";
import Container from "@/components/layout/Container";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Career Interest Received",
  description: "SecureTheCloud received your career interest submission.",
  path: "/careers/join/success",
});

export default function CareerInterestSuccessPage() {
  return (
    <section className="border-b border-white/10 bg-[#030711]">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Interest received</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Thank you for considering SecureTheCloud.</h1>
          <p className="mt-6 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">We received your career interest submission. We will review your background and keep your information in mind for future roles, advisory paths, contract work, or collaboration opportunities.</p>

          <div className="mt-9 border-y border-white/10 py-7">
            <h2 className="text-xl font-semibold text-white">Helpful next steps</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
              <li>— Keep your LinkedIn, GitHub, or portfolio up to date.</li>
              <li>— Highlight architecture, cloud, AI, security, governance, and client-facing experience.</li>
              <li>— Watch the careers page as future hiring tracks become formal openings.</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Link href="/careers" className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:border-cyan-300/60 hover:text-cyan-200">Back to careers</Link>
            <Link href="/" className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">Back to homepage -&gt;</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
