import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "KUDIJA | You Are on the Launch List",
  description: "Your KUDIJA launch notification signup has been received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function KudijaSuccessPage() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden border-b border-white/10 bg-[#02060b]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.12),transparent_32rem)]" />
      <Container className="relative flex min-h-[78vh] items-center py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.04] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.65)]" />
            KUDIJA launch list
          </div>

          <h1 className="mt-7 text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
            You are on the list.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            We will notify you when KUDIJA launches and when selected early-access opportunities become available.
          </p>

          <div className="mt-8 border-l border-emerald-300/40 pl-5">
            <p className="font-mono text-sm leading-7 text-emerald-200">
              Market data is truth. Strategy proposes. Risk authorizes. Execution commits. Evidence remembers.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kudija"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-emerald-300 px-6 py-3 text-sm font-semibold text-[#03130d] transition hover:bg-emerald-200"
            >
              Return to KUDIJA
            </Link>
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-white/30 hover:text-white"
            >
              Explore IKEVAR
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
