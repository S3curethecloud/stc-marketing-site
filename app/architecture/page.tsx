import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import Hero from "@/components/marketing/Hero";
import SectionIntro from "@/components/marketing/SectionIntro";
import ArchitectureFlow from "@/components/marketing/ArchitectureFlow";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "Understand the SecureTheCloud architecture: runtime authorization, control-plane governance, OPA decision authority, deterministic decision records, Kubernetes enforcement, and cross-zone trust.",
};

const requestFlow = [
  "Agent Request",
  "RiskDNA Evaluation",
  "Blast Radius Simulation",
  "OPA Policy Decision",
  "Deterministic Decision Record",
  "Audit Anchor",
  "Execution or Denial",
] as const;

export default function ArchitecturePage() {
  return (
    <>
      <Hero
        eyebrow="ARCHITECTURE"
        headline="A Deterministic Control Path for Autonomous Systems"
        subheadline="SecureTheCloud is built around explicit decision authority, runtime truth, control-plane governance, and verifiable records that keep AI agent execution bounded before action occurs."
        primaryCta={{ label: "Request Architecture Review", href: "/request-demo" }}
        secondaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
      />

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="REQUEST FLOW"
            title="Every Action Passes Through an Explicit Decision Path"
            body="SecureTheCloud is not a post-event interpretation layer. It is a runtime control system that evaluates, authorizes, explains, and records action before execution."
          />
          <div className="mt-10">
            <ArchitectureFlow steps={requestFlow} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="PLANES OF RESPONSIBILITY"
            title="Control Plane Governance and Runtime Execution Remain Separate"
            body="The control plane governs provisioning, policy lifecycle, and tenant administration. Runtime enforces execution. Frontend surfaces render truth but do not invent it. This separation is a core operating rule of the platform."
          />
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="DECISION AUTHORITY"
            title="OPA Remains the Sole Decision Authority"
            body="Policy evaluation remains explicit. SecureTheCloud synthesizes context, but OPA remains the final allow or deny authority in the decision path."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="DETERMINISTIC RECORD"
            title="Every Approval and Denial Produces a Deterministic Record"
            body="The deterministic decision record preserves reason codes, risk factors, policy revision, and execution context so decisions remain explainable even without an interpretation layer."
          />
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="AEGIS CORE"
            title="Aegis Core Extends Governance Into the Execution Environment"
            body="Aegis Runtime establishes the governance baseline. Aegis Core extends that governed model into workload boundaries, Kubernetes enforcement, assertion validation, and runtime trust controls."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="KUBERNETES EXTENSION"
            title="Kubernetes Extends the Baseline, Not Replaces It"
            body="SecureTheCloud for Kubernetes is positioned as a serious v2 extension product that carries the existing governance model into clusters, workloads, and workload identity without changing the baseline doctrine."
          />
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="CROSS-ZONE TRUST"
            title="Trust Between Systems Requires Verification, Not Assumption"
            body="Agent Sovereignty Zones extends the baseline runtime into cross-domain trust through signed assertions, explicit trust registries, local policy verification, and dual audit anchoring."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="CLOSING"
            title="Architecture Built for Governed Execution"
            body="SecureTheCloud is designed to make runtime execution explicit, bounded, deterministic, and explainable for organizations operating autonomous systems in real environments."
          />
        </Container>
      </Section>

      <CTASection
        headline="Review the architecture behind runtime governance."
        subheadline="Walk through the SecureTheCloud runtime path, governance model, and product-layer architecture with the team."
        primaryCta={{ label: "Request Architecture Review", href: "/request-demo" }}
        secondaryCta={{ label: "View Product Portfolio", href: "/products" }}
      />
    </>
  );
}
