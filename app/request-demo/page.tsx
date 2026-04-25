import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import DemoRequestForm from "@/components/forms/DemoRequestForm";

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
              Walk through how SecureTheCloud governs AI agent execution before
              action, preserves explicit policy authority, and produces
              verifiable decision records for enterprise control-plane
              operations.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm leading-6 text-stc-muted">
              <p className="font-semibold text-white">
                Best fit for teams evaluating:
              </p>
              <ul className="mt-4 space-y-2">
                <li>• Runtime authorization for AI agents</li>
                <li>• Zero-trust control paths for autonomous workflows</li>
                <li>• Policy-backed governance before execution</li>
                <li>• Audit-ready decision records and telemetry</li>
              </ul>
            </div>
          </div>

          <DemoRequestForm />
        </div>
      </Container>
    </Section>
  );
}
