import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "KUDIJA Early Access | Request Received",
  description:
    "Your KUDIJA early-access request has been received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function KudijaSuccessPage() {
  return (
    <section className="min-h-[70vh] border-b border-white/10 bg-[#02060b]">
      <Container className="flex min-h-[70vh] items-center py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
            KUDIJA launch list
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
            You are on the list.
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
            Your early-access request has been received. We will use the email
            you provided for KUDIJA product previews, beta invitations, and
            selected launch updates.
          </p>

          <div className="mt-8 border-l border-emerald-300/40 pl-5 font-mono text-sm leading-7 text-emerald-200">
            Market data is truth. Strategy proposes. Risk authorizes.
            Execution commits. Evidence remembers.
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
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:text-white"
            >
              Explore IKEVAR
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
