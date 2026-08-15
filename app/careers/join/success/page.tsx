import Link from "next/link";
import Container from "@/components/layout/Container";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Career Interest Received",
  description:
    "SecureTheCloud received your career interest submission.",
  path: "/careers/join/success",
});

export default function CareerInterestSuccessPage() {
  return (
    <section className="relative overflow-hidden bg-[#030711] py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.25),transparent_30rem),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.18),transparent_30rem)]" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl rounded-[2.25rem] border border-white/10 bg-white/[0.035] p-8 text-center shadow-2xl shadow-violet-950/20 md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
            Interest received
          </p>
          <h1 className="mt-6 text-5xl font-black tracking-tight text-white md:text-6xl">
            Thank you for considering SecureTheCloud.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            We received your career interest submission. We will review your background and keep your information in mind for future roles, advisory paths, contract work, or collaboration opportunities.
          </p>

          <div className="mt-8 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/5 p-6 text-left">
            <h2 className="text-lg font-black text-white">Helpful next steps</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
              <li>✦ Keep your LinkedIn, GitHub, or portfolio up to date.</li>
              <li>✦ Highlight architecture, cloud, AI, security, governance, and client-facing experience.</li>
              <li>✦ Watch the careers page as future hiring tracks become formal openings.</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/careers"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white hover:border-cyan-300/60 hover:text-cyan-200"
            >
              Back to Careers
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
    </section>
  );
}
