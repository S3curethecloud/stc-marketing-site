import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import KudijaWaitlistForm from "@/components/forms/KudijaWaitlistForm";

const kudijaUrl = "https://kudija.ikevar.com";

export const metadata: Metadata = {
  title: "KUDIJA | Coming Soon",
  description:
    "KUDIJA is a deterministic trading platform built around market truth, independent risk decisions, controlled execution, replay, and evidence.",
  alternates: {
    canonical: kudijaUrl,
  },
  openGraph: {
    title: "KUDIJA | Coming Soon",
    description:
      "Market data is truth. Strategy proposes. Risk authorizes. Execution commits. Evidence remembers.",
    url: kudijaUrl,
    siteName: "KUDIJA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KUDIJA | Coming Soon",
    description:
      "A deterministic trading platform built for disciplined risk, controlled execution, replay, and evidence.",
  },
};

function StatusDot() {
  return (
    <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.7)]" />
  );
}

function TerminalPreview() {
  const phases = [
    ["01", "Market truth"],
    ["02", "Replay"],
    ["03", "Market structure"],
    ["04", "Strategy"],
    ["05", "Risk"],
    ["06", "Execution authority"],
  ] as const;

  return (
    <div className="relative">
      <div className="absolute -inset-5 rounded-[2rem] bg-emerald-300/[0.05] blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-emerald-300/20 bg-[#030811] shadow-[0_30px_90px_rgba(0,0,0,0.55)] lg:rotate-[-1.5deg]">
        <div className="flex items-center justify-between border-b border-white/10 bg-[#07101a] px-4 py-3 sm:px-5">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-white">KUDIJA</p>
            <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-slate-600">
              Trading platform preview
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.04] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-emerald-300">
            <StatusDot /> preview mode
          </div>
        </div>

        <div className="grid border-b border-white/10 sm:grid-cols-3 lg:grid-cols-6">
          {phases.map(([number, label]) => (
            <div
              key={number}
              className="border-b border-white/5 px-3 py-3 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <p className="font-mono text-[8px] text-emerald-300">{number}</p>
              <p className="mt-1 text-[10px] leading-4 text-slate-400">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid min-h-[420px] lg:grid-cols-[1.5fr_0.7fr]">
          <div className="border-b border-white/10 p-4 sm:p-5 lg:border-b-0 lg:border-r">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-600">Proving instrument</p>
                <div className="mt-1 flex items-end gap-2">
                  <span className="text-2xl font-semibold text-white">MNQ</span>
                  <span className="pb-1 font-mono text-[10px] text-slate-500">FUTURES</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-emerald-300">deterministic research</p>
                <p className="mt-1 text-xs text-slate-500">New York session</p>
              </div>
            </div>

            <div className="relative mt-7 h-64 overflow-hidden rounded-xl border border-white/5 bg-[#02060b]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:34px_34px]" />
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 720 260"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="kudijaChartLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#6ee7b7" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="kudijaChartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 215 C45 210,73 182,118 191 S177 208,210 159 S272 178,306 148 S360 116,395 133 S442 173,480 119 S538 136,572 91 S632 110,666 68 S708 53,720 40 L720 260 L0 260 Z"
                  fill="url(#kudijaChartFill)"
                />
                <path
                  d="M0 215 C45 210,73 182,118 191 S177 208,210 159 S272 178,306 148 S360 116,395 133 S442 173,480 119 S538 136,572 91 S632 110,666 68 S708 53,720 40"
                  fill="none"
                  stroke="url(#kudijaChartLine)"
                  strokeWidth="3"
                />
                <line x1="0" y1="150" x2="720" y2="150" stroke="#fbbf24" strokeOpacity="0.2" strokeDasharray="7 7" />
              </svg>

              <div className="absolute left-4 top-4 rounded-md border border-cyan-300/15 bg-cyan-300/5 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.13em] text-cyan-200">
                market truth
              </div>
              <div className="absolute bottom-4 right-4 rounded-md border border-emerald-300/15 bg-emerald-300/5 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.13em] text-emerald-200">
                strategy proposal
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                ["STRATEGY", "PROPOSAL ONLY"],
                ["RISK", "INDEPENDENT"],
                ["EXECUTION", "AUTHORITY GATED"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-white/8 bg-white/[0.025] p-3">
                  <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-slate-600">{label}</p>
                  <p className="mt-2 font-mono text-[10px] text-slate-200">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-600">Authority state</p>
            <div className="mt-5 space-y-3">
              {[
                ["Market", "Observed", "text-cyan-300"],
                ["Strategy", "Proposed", "text-cyan-300"],
                ["Risk", "Evaluated", "text-emerald-300"],
                ["Broker", "Not connected", "text-slate-500"],
              ].map(([label, state, tone]) => (
                <div key={label} className="rounded-xl border border-white/8 bg-white/[0.025] p-4">
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className={`mt-1 font-mono text-[9px] uppercase tracking-[0.13em] ${tone}`}>{state}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-emerald-300/15 bg-emerald-300/[0.04] p-4">
              <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-emerald-300">Core doctrine</p>
              <p className="mt-2 text-xs leading-5 text-slate-300">
                Strategy proposes. Risk authorizes. Execution remains separately gated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const valueCards = [
  {
    eyebrow: "MARKET INTELLIGENCE",
    title: "Deterministic market context",
    copy: "Canonical market state built from provider-independent observations and replayable event semantics.",
  },
  {
    eyebrow: "RISK AUTHORITY",
    title: "Independent risk decisions",
    copy: "Strategy does not approve itself. New risk remains subject to explicit, bounded decision authority.",
  },
  {
    eyebrow: "EVIDENCE",
    title: "Explainable trading evidence",
    copy: "Preserve the inputs, versions, decisions, and state needed to reconstruct why an action was considered.",
  },
] as const;

export default function KudijaPage() {
  return (
    <div className="min-h-screen bg-[#02060b] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(16,185,129,0.12),transparent_32rem),radial-gradient(circle_at_83%_22%,rgba(34,211,238,0.08),transparent_30rem)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />

        <Container className="relative py-7 sm:py-9 lg:py-10">
          <header className="flex items-center justify-between gap-5 border-b border-white/10 pb-6">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm font-semibold tracking-[0.24em] text-white">
                KUDIJA
              </Link>
              <span className="hidden h-5 w-px bg-white/15 sm:block" />
              <span className="hidden text-[10px] uppercase tracking-[0.18em] text-slate-500 sm:block">
                Trading Platform
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.04] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-emerald-300">
              <StatusDot /> launching soon
            </div>
          </header>

          <div className="grid gap-14 py-14 sm:py-18 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16 lg:py-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">KUDIJA</p>
              <h1 className="mt-5 text-[3.9rem] font-semibold leading-[0.9] tracking-[-0.055em] text-white sm:text-7xl lg:text-[5.4rem]">
                Coming Soon
              </h1>

              <p className="mt-7 max-w-xl text-xl leading-8 text-slate-300 sm:text-2xl">
                Sign up to be notified when KUDIJA launches.
              </p>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
                A deterministic trading platform built around market truth, disciplined risk, controlled execution, replay, and evidence.
              </p>

              <div id="notify" className="mt-9 max-w-xl">
                <KudijaWaitlistForm />
              </div>

              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 font-mono text-[9px] uppercase tracking-[0.15em] text-slate-500">
                <span>Market truth</span>
                <span>Independent risk</span>
                <span>Replayable evidence</span>
              </div>
            </div>

            <TerminalPreview />
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#040912]">
        <Container className="py-10 sm:py-12">
          <div className="grid gap-4 md:grid-cols-3">
            {valueCards.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-[#050a12] p-6 sm:p-7">
                <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-emerald-300">{item.eyebrow}</p>
                <h2 className="mt-4 text-xl font-semibold tracking-[-0.025em] text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#02060b]">
        <Container className="py-12 sm:py-14">
          <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-600">Name origin</p>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                <span className="font-semibold text-white">Kudi / kuɗi</span> means money or currency in Hausa. <span className="font-semibold text-white">Oja / ọjà</span> means market in Yoruba. Together: money meets market.
              </p>
            </div>
            <a
              href="#notify"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-emerald-300/25 px-5 py-2.5 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300/50 hover:bg-emerald-300/[0.04]"
            >
              Notify me at launch
            </a>
          </div>

          <footer className="flex flex-col gap-4 pt-8 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <p>KUDIJA by IKEVAR. Engineered trust. Governed intelligence.</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <span>kudija.ikevar.com</span>
              <span>kudija.com</span>
            </div>
          </footer>

          <p className="mt-5 text-[11px] leading-5 text-slate-700">
            Research and technology platform. Not a broker, custodian, or investment adviser. Broker connectivity and paper/live execution remain separately governed future capabilities.
          </p>
        </Container>
      </section>
    </div>
  );
}
