import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import KudijaWaitlistForm from "@/components/forms/KudijaWaitlistForm";

const kudijaUrl = "https://kudija.ikevar.com";

export const metadata: Metadata = {
  title: "KUDIJA | Deterministic Market Intelligence & Execution Platform",
  description:
    "KUDIJA is an institutional-grade market intelligence, risk-authority, execution, replay, and evidence platform built around deterministic trading controls.",
  alternates: {
    canonical: kudijaUrl,
  },
  openGraph: {
    title: "KUDIJA | Deterministic Market Intelligence & Execution Platform",
    description:
      "Market data is truth. Strategy proposes. Risk authorizes. Execution commits. Evidence remembers.",
    url: kudijaUrl,
    siteName: "KUDIJA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KUDIJA | Deterministic Market Intelligence & Execution Platform",
    description:
      "Institutional market intelligence and controlled execution, built on deterministic authority boundaries.",
  },
};

const pipeline = [
  ["01", "Market truth", "Provider-independent events, definitions, session state, and replay semantics."],
  ["02", "Strategy proposal", "Strategies identify opportunities and emit trade intent. They do not mutate brokers."],
  ["03", "Risk authority", "Explicit policy evaluates exposure, loss limits, freshness, session state, and permitted size."],
  ["04", "Execution boundary", "A single bounded subsystem translates approved intent into broker mutations."],
  ["05", "Evidence", "Orders, decisions, fills, positions, replay state, and provenance remain reconstructable."],
] as const;

const capabilities = [
  {
    label: "MARKET INTELLIGENCE",
    title: "Deterministic market context",
    copy: "Normalize market events into a provider-independent domain with explicit event-time, session, correction, and ordering semantics.",
  },
  {
    label: "STRATEGY RESEARCH",
    title: "Replayable signal evaluation",
    copy: "Evaluate deterministic strategy logic against reproducible market history without collapsing research into execution authority.",
  },
  {
    label: "RISK AUTHORITY",
    title: "Permission before exposure",
    copy: "New or increased market risk requires explicit authorization. Protective actions remain separately bounded and auditable.",
  },
  {
    label: "EXECUTION",
    title: "One broker-mutation path",
    copy: "Orders pass through a single execution boundary designed for idempotency, reconciliation, lifecycle state, and kill controls.",
  },
  {
    label: "SHADOW TWIN",
    title: "Non-authoritative simulation",
    copy: "Compare intended and observed behavior in a simulation plane that cannot silently become a source of execution authority.",
  },
  {
    label: "EVIDENCE",
    title: "Reconstruct the decision",
    copy: "Preserve the provenance required to explain what the market showed, what the strategy proposed, what risk permitted, and what executed.",
  },
] as const;

const plannedIntegrations = [
  ["Databento", "Market data", "Planned provider adapter for normalized historical and live market events."],
  ["Interactive Brokers", "Broker execution", "Planned broker adapter for paper-first order, fill, position, and account-state integration."],
] as const;

function StatusDot({ tone = "green" }: { tone?: "green" | "amber" | "cyan" }) {
  const toneClass =
    tone === "amber"
      ? "bg-amber-300 shadow-[0_0_16px_rgba(252,211,77,0.55)]"
      : tone === "cyan"
        ? "bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.55)]"
        : "bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.55)]";

  return <span className={`inline-block h-2 w-2 rounded-full ${toneClass}`} />;
}

function MiniTerminal() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#040912] shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#08111c] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70" />
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
          KUDIJA / CONTROLLED MARKET SESSION
        </div>
      </div>

      <div className="grid min-h-[470px] lg:grid-cols-[1.35fr_0.65fr]">
        <div className="border-b border-white/10 p-4 sm:p-5 lg:border-b-0 lg:border-r">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Instrument</p>
              <div className="mt-1 flex items-end gap-3">
                <span className="text-2xl font-semibold tracking-[-0.03em] text-white">MNQ</span>
                <span className="pb-1 font-mono text-xs text-slate-500">FUTURES</span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-emerald-300">
                <StatusDot /> market healthy
              </div>
              <p className="mt-2 font-mono text-xs text-slate-400">event lag 23ms</p>
            </div>
          </div>

          <div className="relative mt-8 h-64 overflow-hidden rounded-xl border border-white/5 bg-[#03070d]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 720 260" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="kudijaLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#6ee7b7" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="kudijaFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 213 C50 205,70 174,115 188 S175 207,205 156 S270 180,300 145 S355 115,390 130 S440 173,475 115 S535 132,565 88 S625 104,660 66 S705 53,720 37 L720 260 L0 260 Z" fill="url(#kudijaFill)" />
              <path d="M0 213 C50 205,70 174,115 188 S175 207,205 156 S270 180,300 145 S355 115,390 130 S440 173,475 115 S535 132,565 88 S625 104,660 66 S705 53,720 37" fill="none" stroke="url(#kudijaLine)" strokeWidth="3" />
              <line x1="0" y1="150" x2="720" y2="150" stroke="#fbbf24" strokeOpacity="0.25" strokeDasharray="7 7" />
            </svg>
            <div className="absolute left-4 top-4 rounded-md border border-cyan-300/15 bg-cyan-300/5 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-200">
              replayable market truth
            </div>
            <div className="absolute bottom-4 right-4 rounded-md border border-emerald-300/15 bg-emerald-300/5 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-200">
              proposal detected
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              ["SESSION", "NEW YORK"],
              ["STRATEGY", "PROPOSAL ONLY"],
              ["EXECUTION", "AUTHORITY GATED"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-white/8 bg-white/[0.025] p-3">
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600">{label}</p>
                <p className="mt-2 font-mono text-[11px] text-slate-200">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Authority chain</p>
          <div className="mt-5 space-y-4">
            {[
              ["01", "MARKET", "OBSERVED", "cyan"],
              ["02", "STRATEGY", "PROPOSED", "cyan"],
              ["03", "RISK", "EVALUATING", "amber"],
              ["04", "EXECUTION", "BLOCKED UNTIL GRANT", "green"],
            ].map(([n, label, state, tone]) => (
              <div key={label} className="rounded-xl border border-white/8 bg-white/[0.025] p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] text-slate-600">{n}</span>
                  <StatusDot tone={tone as "green" | "amber" | "cyan"} />
                </div>
                <p className="mt-4 text-sm font-semibold text-white">{label}</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-500">{state}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-emerald-300/15 bg-emerald-300/[0.04] p-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-emerald-300">Control invariant</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">Strategy may propose. Only bounded authority may create broker mutation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function KudijaPage() {
  return (
    <div className="bg-[#02060b] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(16,185,129,0.12),transparent_32rem),radial-gradient(circle_at_82%_24%,rgba(34,211,238,0.09),transparent_28rem)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

        <Container className="relative py-8 sm:py-10 lg:py-12">
          <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-6">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm font-semibold tracking-[0.24em] text-white">IKEVAR</Link>
              <span className="h-5 w-px bg-white/15" />
              <span className="text-sm font-semibold tracking-[0.14em] text-emerald-300">KUDIJA</span>
            </div>
            <a href="#early-access" className="hidden rounded-full border border-emerald-300/30 px-4 py-2 text-xs font-semibold text-emerald-200 transition hover:border-emerald-300/60 hover:bg-emerald-300/5 sm:inline-flex">
              Join launch list
            </a>
          </div>

          <div className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-200">
                <StatusDot /> Private build in progress
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Deterministic market intelligence & execution</p>
              <h1 className="mt-5 max-w-3xl text-[3.4rem] font-semibold leading-[0.92] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.3rem]">
                Market intelligence with an authority boundary.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                KUDIJA is an institutional-grade trading research, risk-authority, execution, replay, and evidence platform engineered so intelligence cannot silently become trading authority.
              </p>

              <div className="mt-8 border-l border-emerald-300/40 pl-5">
                <p className="font-mono text-sm leading-7 text-emerald-200 sm:text-base">Market data is truth. Strategy proposes. Risk authorizes. Execution commits. Evidence remembers.</p>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#early-access" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-emerald-300 px-6 py-3 text-sm font-semibold text-[#03130d] transition hover:bg-emerald-200">
                  Request early access
                  <span className="ml-2" aria-hidden="true">-&gt;</span>
                </a>
                <a href="#architecture" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:text-white">
                  Explore the architecture
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-7 sm:grid-cols-4">
                {[
                  ["MODEL", "Non-custodial"],
                  ["CORE", "Deterministic"],
                  ["AUTHORITY", "Explicit"],
                  ["FIRST PATH", "MNQ futures"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600">{label}</p>
                    <p className="mt-2 text-xs font-semibold text-slate-300">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <MiniTerminal />
          </div>
        </Container>
      </section>

      <section id="architecture" className="border-b border-white/10 bg-[#040912]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">System doctrine</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">A trade is a governed state transition.</h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">
                KUDIJA treats trading as a chain of distinct truths. Observation, intelligence, permission, mutation, and evidence remain separate so every capital-affecting action can be bounded and reconstructed.
              </p>
            </div>

            <div className="border-t border-white/10">
              {pipeline.map(([number, title, copy]) => (
                <div key={number} className="grid gap-4 border-b border-white/10 py-7 sm:grid-cols-[3.5rem_10rem_1fr] sm:items-start">
                  <span className="font-mono text-xs text-emerald-300">{number}</span>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-white">{title}</h3>
                  <p className="text-sm leading-6 text-slate-400">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#02060b]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Platform capabilities</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">Designed for research that can graduate safely.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">The architecture is built so a strategy can move from historical evaluation to shadow behavior, paper execution, and eventually controlled live operation without rewriting the authority model.</p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article key={item.title} className="bg-[#050a12] p-6 sm:p-7">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-300">{item.label}</p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.025em] text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#040912]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Planned connectivity</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Data truth and broker truth stay separate.</h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">KUDIJA is provider-independent by design. External integrations attach through adapters; they do not define the internal market, order, or authority domain.</p>
              <p className="mt-5 max-w-xl text-sm leading-6 text-slate-500">These integrations are part of the planned architecture and should not be read as a claim that live broker connectivity is currently available.</p>
            </div>

            <div className="space-y-4">
              {plannedIntegrations.map(([name, role, copy]) => (
                <div key={name} className="grid gap-5 rounded-xl border border-white/10 bg-[#050a12] p-5 sm:grid-cols-[10rem_1fr] sm:p-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <StatusDot tone="amber" />
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-amber-300">planned</span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{name}</h3>
                    <p className="mt-1 text-xs font-medium text-slate-500">{role}</p>
                  </div>
                  <p className="text-sm leading-6 text-slate-400">{copy}</p>
                </div>
              ))}

              <div className="rounded-xl border border-emerald-300/15 bg-emerald-300/[0.035] p-5 sm:p-6">
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-emerald-300">Integration invariant</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">Databento can describe the market. Interactive Brokers can describe broker state. Neither is allowed to become KUDIJA's authorization policy.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-[#02060b]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#050a12]">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
              <div className="border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">Why KUDIJA</p>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Institutional discipline without hiding the machine.</h2>
                <p className="mt-5 text-sm leading-6 text-slate-400">The goal is not to make a black-box trader look intelligent. The goal is to make trading intelligence inspectable, replayable, permissioned, and operationally defensible.</p>
              </div>

              <div className="grid sm:grid-cols-2">
                {[
                  ["01", "Provider independent", "Canonical instruments, events, sessions, orders, and evidence do not belong to a vendor."],
                  ["02", "Paper first", "Execution capability should prove lifecycle correctness and reconciliation before capital is exposed."],
                  ["03", "Agent-safe", "AI may assist analysis, but it cannot bypass deterministic risk and execution authority."],
                  ["04", "Replayable", "Historical and observed behavior can be reconstructed against explicit timing and ordering rules."],
                ].map(([n, title, copy], index) => (
                  <div key={n} className={`p-7 sm:p-8 ${index % 2 === 0 ? "sm:border-r sm:border-white/10" : ""} ${index < 2 ? "border-b border-white/10" : ""}`}>
                    <span className="font-mono text-xs text-slate-600">{n}</span>
                    <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="early-access" className="bg-[#040912]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
            <div className="lg:sticky lg:top-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">Coming soon</p>
              <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">Follow KUDIJA from architecture to controlled execution.</h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">We are building KUDIJA in governed phases. Early participants will see product previews, architecture milestones, and selected testing opportunities before a broader release.</p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-600">Name origin</p>
                <p className="mt-3 text-sm leading-6 text-slate-300"><span className="font-semibold text-white">Kudi / kuɗi</span> — money or currency in Hausa. <span className="font-semibold text-white">Oja / ọjà</span> — market in Yoruba.</p>
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.025] p-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-500">Domain strategy</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">Launch surface: <span className="text-emerald-300">kudija.ikevar.com</span>. Brand domain: <span className="text-white">kudija.com</span>.</p>
              </div>
            </div>

            <KudijaWaitlistForm />
          </div>
        </Container>
      </section>

      <footer className="border-t border-white/10 bg-[#010408]">
        <Container className="flex flex-col gap-4 py-8 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>KUDIJA by IKEVAR. Engineered trust. Governed intelligence.</p>
          <p>Research and technology platform. Not a broker, custodian, or investment adviser.</p>
        </Container>
      </footer>
    </div>
  );
}
