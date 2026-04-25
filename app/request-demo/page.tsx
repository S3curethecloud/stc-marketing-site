import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Request Demo",
  description:
    "Request a private SecureTheCloud demo for runtime governance, deterministic authorization, and zero-trust AI agent control.",
};

export default function RequestDemoPage() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              REQUEST PRIVATE DEMO
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              See deterministic runtime governance in action.
            </h1>

            <p className="mt-6 text-lg leading-8 text-stc-muted">
              Walk through how {siteConfig.name} governs AI agent execution before
              action, preserves explicit policy authority, and produces verifiable
              decision records for enterprise control-plane operations.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm leading-6 text-stc-muted">
              <p className="font-semibold text-white">Best fit for teams evaluating:</p>
              <ul className="mt-4 space-y-2">
                <li>• Runtime authorization for AI agents</li>
                <li>• Zero-trust control paths for autonomous workflows</li>
                <li>• Policy-backed governance before execution</li>
                <li>• Audit-ready decision records and telemetry</li>
              </ul>
            </div>
          </div>

          <form
            aria-label="Request private demo form"
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="rounded-3xl border border-white/10 bg-stc-panel/80 p-6 shadow-2xl shadow-black/20 sm:p-8"
          >
            <input
              type="hidden"
              name="_redirect"
              value={`${siteConfig.url}/request-demo/success`}
            />

            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-medium text-white/90">
                Full name
                <input
                  required
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition-colors focus:border-cyan-300"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-white/90">
                Work email
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition-colors focus:border-cyan-300"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-white/90">
                Company
                <input
                  required
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition-colors focus:border-cyan-300"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-white/90">
                Role
                <input
                  name="role"
                  type="text"
                  autoComplete="organization-title"
                  className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition-colors focus:border-cyan-300"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-white/90">
                What are you evaluating?
                <select
                  required
                  name="evaluation"
                  defaultValue=""
                  className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition-colors focus:border-cyan-300"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="AI agent runtime governance">
                    AI agent runtime governance
                  </option>
                  <option value="Zero-trust authorization">
                    Zero-trust authorization
                  </option>
                  <option value="Kubernetes runtime governance">
                    Kubernetes runtime governance
                  </option>
                  <option value="Autonomous system control plane">
                    Autonomous system control plane
                  </option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm font-medium text-white/90">
                Message
                <textarea
                  name="message"
                  rows={5}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition-colors focus:border-cyan-300"
                />
              </label>

              <button
                type="submit"
                className="mt-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
              >
                Request Private Demo
              </button>

              <p className="text-xs leading-5 text-stc-muted">
                Replace <code>YOUR_FORM_ID</code> with your Formspree form ID before production.
              </p>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
}
