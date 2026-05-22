import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import ProductHero from "@/components/marketing/ProductHero";
import SectionIntro from "@/components/marketing/SectionIntro";
import ArchitectureFlow from "@/components/marketing/ArchitectureFlow";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Aegis Veracity Engine",
  description:
    "Aegis Veracity Engine provides claim-to-evidence verification, source-of-truth alignment, and audit-ready truth review for governed autonomous systems.",
  path: "/products/veracity",
});

const verificationFlow = [
  "Claim",
  "Evidence Source",
  "Source-of-Truth Check",
  "Verification Result",
  "Reviewer Context",
  "Audit-Ready Record",
] as const;

const capabilities = [
  {
    title: "Claim-to-Evidence Verification",
    body:
      "Map system claims, platform statements, and runtime explanations back to supporting evidence so reviewers can inspect what is actually proven.",
  },
  {
    title: "Source-of-Truth Alignment",
    body:
      "Compare claims against approved source-of-truth records, governance files, runtime evidence, and platform state before accepting them as verified.",
  },
  {
    title: "Evidence Gap Detection",
    body:
      "Identify claims that are unsupported, stale, incomplete, contradicted, or outside the current authority boundary.",
  },
  {
    title: "Reviewer-Ready Truth Surface",
    body:
      "Give auditors, operators, and governance reviewers a clear surface for inspecting what is verified, what is blocked, and what requires human approval.",
  },
  {
    title: "Deterministic Review Records",
    body:
      "Preserve verification outcomes as structured records that can be reviewed without relying on generative interpretation as the source of truth.",
  },
  {
    title: "Governance Boundary Protection",
    body:
      "Prevent marketing, UI, or AI-generated statements from overstating runtime authority, certification status, federation activation, or enforcement posture.",
  },
] as const;

const useCases = [
  {
    title: "Audit and compliance review",
    body:
      "Verify that platform claims, evidence exports, decision records, and governance statements are backed by source-of-truth records.",
  },
  {
    title: "Marketing and product claim control",
    body:
      "Prevent public-facing pages from claiming production activation, SOC 2 certification, federation, or enforcement beyond the approved evidence state.",
  },
  {
    title: "Runtime evidence validation",
    body:
      "Review whether a runtime decision, policy state, or evidence package is supported by deterministic records and approved governance boundaries.",
  },
  {
    title: "Cross-platform truth review",
    body:
      "Connect evidence from Aegis Runtime, Kubernetes Sentinel, Agent Blackbox, RiskDNA, ASZ, and SAFP readiness surfaces into one verification path.",
  },
] as const;

export default function VeracityPage() {
  return (
    <>
      <ProductHero
        eyebrow="CLAIM-TO-EVIDENCE VERIFICATION"
        headline="Verify Platform Claims Against Evidence Before They Become Risk"
        subheadline="Aegis Veracity Engine is the truth verification layer of the SecureTheCloud Sovereign Agent Control Plane. It aligns claims, source-of-truth records, runtime evidence, and audit-ready review surfaces so governed systems do not overstate authority."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Explore Ecosystem", href: "/ecosystem" }}
      />

      <Section>
        <Container>
          <SectionIntro
            eyebrow="PRODUCT ROLE"
            title="Veracity keeps claims anchored to evidence."
            body="Autonomous governance platforms must not invent truth. Aegis Veracity Engine verifies whether a statement, claim, or explanation is supported by evidence, source-of-truth records, and approved authority boundaries."
          />
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="VERIFICATION FLOW"
            title="From claim to audit-ready verification record."
            body="Veracity turns claims into reviewable verification paths by connecting statements to evidence, source records, reviewer context, and governance boundaries."
          />

          <div className="mt-10">
            <ArchitectureFlow steps={verificationFlow} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="CAPABILITIES"
            title="Built for truth review, evidence alignment, and claim integrity."
            body="Aegis Veracity Engine helps teams prove what is supported, flag what is unsupported, and preserve explicit authority boundaries across the control plane."
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
            title="Verification does not create authority."
            body="Aegis Veracity Engine can verify claims, identify evidence gaps, and support audit review. It does not authorize runtime actions, override policy, activate federation, issue credentials, or certify compliance by itself."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="USE CASES"
            title="Where Aegis Veracity Engine matters."
            body="Veracity is designed for organizations that need governed AI and platform claims to remain evidence-backed, reviewable, and safe for enterprise trust."
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
            title="The truth verification layer of the Sovereign Agent Control Plane."
            body="Aegis Runtime governs actions. Agent Blackbox preserves evidence. RiskDNA scores exposure. Aegis Veracity Engine verifies whether claims about those systems are supported by approved evidence and source-of-truth records."
          />
        </Container>
      </Section>

      <CTASection
        headline="Verify autonomous-system claims before they become trust risk."
        subheadline="See how Aegis Veracity Engine aligns claims, source-of-truth records, runtime evidence, and audit-ready review surfaces across the SecureTheCloud ecosystem."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Explore Ecosystem", href: "/ecosystem" }}
      />
    </>
  );
}
