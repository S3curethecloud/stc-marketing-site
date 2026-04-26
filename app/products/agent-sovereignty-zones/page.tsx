import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import ProductHero from "@/components/marketing/ProductHero";
import SectionIntro from "@/components/marketing/SectionIntro";
import ArchitectureFlow from "@/components/marketing/ArchitectureFlow";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Agent Sovereignty Zones",
  description:
    "Agent Sovereignty Zones extends SecureTheCloud Aegis Runtime into cross-organization trust with signed assertions, trust registries, local policy verification, and dual audit anchoring.",
  path: "/products/agent-sovereignty-zones",
});

const handshakeSteps = [
  "Foreign zone presents signed assertion",
  "Receiving zone verifies signature and trust registry",
  "Local policy remains authoritative",
  "Local decision record is created",
  "Dual audit anchors preserve traceability",
] as const;

const capabilities = [
  {
    title: "Sovereign Governance Domains",
    body:
      "Each organization runs its own SecureTheCloud Aegis Runtime with independent policy, risk, audit, and decision authority.",
  },
  {
    title: "Signed Assertion Exchange",
    body:
      "Zones exchange cryptographically verifiable evidence instead of implicit trust.",
  },
  {
    title: "Trust Registry Validation",
    body:
      "Inbound assertions are validated against an explicit trust registry before local policy evaluation.",
  },
  {
    title: "Deterministic Local Decisions",
    body:
      "Every receiving zone still makes its own governed decision and records it locally.",
  },
  {
    title: "Dual Audit Anchoring",
    body:
      "Cross-zone interactions remain traceable without collapsing the sovereignty of either zone.",
  },
  {
    title: "Cross-Domain Explainability",
    body:
      "Inbound approvals, denials, signature failures, replay failures, and trust-registry failures remain explainable through deterministic records.",
  },
] as const;

const useCases = [
  {
    title: "Cross-organization agent interactions",
    body:
      "Allow autonomous systems to exchange evidence across boundaries without handing away local decision authority.",
  },
  {
    title: "Partner and vendor trust boundaries",
    body:
      "Support governed external interactions where assertions must be verified, not assumed.",
  },
  {
    title: "Multi-tenant autonomous collaboration",
    body:
      "Coordinate agents across distinct governance domains while preserving local control paths.",
  },
  {
    title: "High-trust workflows across regulated domains",
    body:
      "Use signed assertions and local verification to keep sensitive cross-domain activity bounded and provable.",
  },
] as const;

export default function AgentSovereigntyZonesPage() {
  return (
    <>
      <ProductHero
        eyebrow="CROSS-DOMAIN TRUST"
        headline="Build Cross-Domain Trust Before Agents Cross Boundaries"
        subheadline="Agent Sovereignty Zones is a product layer built on SecureTheCloud Aegis Runtime that enables cross-organization trust through signed assertions, trust registries, local policy verification, deterministic decision records, and dual audit anchoring."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Request Architecture Review", href: "/architecture" }}
      />

      <Section>
        <Container>
          <SectionIntro
            eyebrow="PRODUCT ARCHITECTURE"
            title="Each Zone Is Sovereign. Every Interaction Is Verified."
            body="A foreign zone can present evidence, but it cannot grant authority inside another zone. The receiving zone verifies the assertion, checks its trust registry, evaluates local policy, and creates its own decision record."
          />
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="CROSS-ZONE HANDSHAKE"
            title="The Cross-Zone Handshake"
            body="Cross-domain trust requires an explicit sequence of verification, local evaluation, and independent recording."
          />
          <div className="mt-10">
            <ArchitectureFlow steps={handshakeSteps} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="CAPABILITIES"
            title="Built on the Aegis Runtime Baseline"
            body="Agent Sovereignty Zones extends the governed runtime model into cross-domain trust without weakening local policy authority."
          />
          <div className="mt-10">
            <FeatureGrid items={capabilities} />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="DETERMINISTIC EXPLANATION"
            title="Cross-Zone Decisions Remain Explainable Without AI"
            body="Agent Sovereignty Zones inherits deterministic explanation from the Aegis Runtime baseline. Even when a foreign assertion is presented, the receiving zone still records a local reason path that explains verification outcomes, trust failures, replay attempts, or local OPA rejection."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="USE CASES"
            title="Where Sovereignty Zones Matter"
            body="This product is designed for environments where agents need to interact across governance boundaries without collapsing trust into shared assumptions."
          />
          <div className="mt-10">
            <FeatureGrid items={useCases} />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="PRODUCT STACK RELATIONSHIP"
            title="One Baseline Runtime. Multiple Product Layers."
            body="Aegis Runtime provides the baseline runtime API for policy, RiskDNA, deterministic decision records, sessions, and audit chain. Agent Sovereignty Zones extends that baseline into cross-organization governance and trust exchange."
          />
        </Container>
      </Section>

      <CTASection
        headline="See cross-domain trust before agents cross boundaries."
        subheadline="Request a private technical demo and see how Agent Sovereignty Zones extends Aegis Runtime into cryptographically verifiable cross-organization governance."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "View Product Portfolio", href: "/products" }}
      />
    </>
  );
}
