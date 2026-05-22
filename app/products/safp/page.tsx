import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import ProductHero from "@/components/marketing/ProductHero";
import SectionIntro from "@/components/marketing/SectionIntro";
import ArchitectureFlow from "@/components/marketing/ArchitectureFlow";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "SAFP",
  description:
    "SAFP provides sovereign agent federation readiness patterns for cross-boundary trust, governed agent coordination, evidence exchange, and future federation planning.",
  path: "/products/safp",
});

const federationFlow = [
  "Sovereign Zone",
  "Signed Assertion",
  "Trust Registry",
  "Local Verification",
  "Policy Boundary",
  "Evidence Anchor",
  "Federation Readiness",
] as const;

const capabilities = [
  {
    title: "Federation Readiness",
    body:
      "Define readiness patterns for sovereign agent systems before live federation, production activation, or cross-boundary authority is enabled.",
  },
  {
    title: "Signed Assertion Model",
    body:
      "Support a trust architecture where agents and zones exchange signed evidence instead of relying on implicit trust.",
  },
  {
    title: "Local Authority Preservation",
    body:
      "Keep every receiving zone authoritative over its own policy decisions, runtime boundaries, and evidence records.",
  },
  {
    title: "Trust Registry Alignment",
    body:
      "Prepare trust registry structures for partner, vendor, and cross-organization agent interactions.",
  },
  {
    title: "Evidence Exchange Pattern",
    body:
      "Create a structured path for exchanging evidence envelopes, verification context, and audit anchors across sovereign domains.",
  },
  {
    title: "No Premature Federation",
    body:
      "Make federation planning explicit without claiming live federation, credential issuance, or production trust activation before approval.",
  },
] as const;

const useCases = [
  {
    title: "Cross-organization agent readiness",
    body:
      "Prepare agent ecosystems for future cross-boundary coordination without granting premature production authority.",
  },
  {
    title: "Partner trust planning",
    body:
      "Define how vendors, partners, and enterprise agents can exchange signed evidence while preserving local control.",
  },
  {
    title: "Regulated federation design",
    body:
      "Support governance planning for sensitive environments where trust must be verified, bounded, and audit-ready.",
  },
  {
    title: "Ecosystem-scale governance",
    body:
      "Establish a protocol-level readiness layer for future agent-to-agent and zone-to-zone trust exchange.",
  },
] as const;

export default function SAFPPage() {
  return (
    <>
      <ProductHero
        eyebrow="SOVEREIGN AGENT FEDERATION READINESS"
        headline="Prepare Agent Federation Without Collapsing Trust Boundaries"
        subheadline="SAFP is the federation readiness layer of the SecureTheCloud Sovereign Agent Control Plane. It defines how sovereign agent systems can prepare for signed assertions, trust registries, evidence exchange, local verification, and future cross-boundary governance."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Explore Ecosystem", href: "/ecosystem" }}
      />

      <Section>
        <Container>
          <SectionIntro
            eyebrow="PRODUCT ROLE"
            title="SAFP prepares federation without activating federation."
            body="Federation readiness must not be confused with live federation. SAFP defines the governance, trust, assertion, and evidence patterns required before autonomous systems can safely coordinate across boundaries."
          />
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="FEDERATION READINESS FLOW"
            title="From sovereign zone to federation-ready trust pattern."
            body="SAFP organizes the readiness path for signed assertions, trust registries, local verification, evidence anchoring, and controlled future federation."
          />

          <div className="mt-10">
            <ArchitectureFlow steps={federationFlow} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="CAPABILITIES"
            title="Built for sovereign trust planning, not uncontrolled federation."
            body="SAFP gives enterprises a protocol-level foundation for future cross-boundary agent governance while keeping production authority explicit and bounded."
          />

          <div className="mt-10">
            <FeatureGrid items={capabilities} />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="AUTHORITY BOUNDARY"
            title="Readiness does not mean activation."
            body="SAFP can define federation patterns, trust registry requirements, assertion exchange models, and evidence readiness. It does not activate live federation, issue credentials, override local policy, or grant cross-zone runtime authority by itself."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="USE CASES"
            title="Where SAFP matters."
            body="SAFP is designed for organizations planning sovereign agent coordination across teams, tenants, vendors, partners, and regulated trust boundaries."
          />

          <div className="mt-10">
            <FeatureGrid items={useCases} />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="CONTROL-PLANE FIT"
            title="The federation readiness layer of the Sovereign Agent Control Plane."
            body="Agent Sovereignty Zones verify cross-boundary trust. Agent Blackbox preserves evidence. Aegis Veracity checks claims. SAFP defines the readiness patterns for future sovereign federation without weakening local authority."
          />
        </Container>
      </Section>

      <CTASection
        headline="Prepare sovereign agent federation without premature trust activation."
        subheadline="See how SAFP defines trust registry patterns, signed assertions, evidence exchange, and federation readiness for governed autonomous systems."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Explore Ecosystem", href: "/ecosystem" }}
      />
    </>
  );
}
