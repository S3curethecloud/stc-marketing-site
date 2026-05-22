import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import ProductHero from "@/components/marketing/ProductHero";
import SectionIntro from "@/components/marketing/SectionIntro";
import ArchitectureFlow from "@/components/marketing/ArchitectureFlow";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Agent Risk Exchange",
  description:
    "Agent Risk Exchange provides a governed risk and trust exchange layer for autonomous-agent ecosystems, insurance readiness, evidence review, and cross-platform risk visibility.",
  path: "/products/agent-risk-exchange",
});

const exchangeFlow = [
  "Runtime Evidence",
  "RiskDNA Context",
  "Trust Signal",
  "Exchange Record",
  "Reviewer Surface",
  "Insurance-Ready Evidence",
] as const;

const capabilities = [
  {
    title: "Risk Signal Exchange",
    body:
      "Connect runtime evidence, trust posture, and risk context into a shared exchange layer for governed autonomous systems.",
  },
  {
    title: "Insurance Readiness",
    body:
      "Organize agent risk, decision evidence, trust status, and exposure context into surfaces that can support future insurance and risk review workflows.",
  },
  {
    title: "Cross-Platform Risk Visibility",
    body:
      "Provide a unified view across Aegis Runtime, Kubernetes Sentinel, Agent Sovereignty Zones, Agent Blackbox, and RiskDNA evidence surfaces.",
  },
  {
    title: "Governed Risk Records",
    body:
      "Preserve risk and trust signals as reviewable records without turning the exchange layer into runtime authority.",
  },
  {
    title: "Partner Trust Context",
    body:
      "Support future partner, vendor, and cross-zone review by making risk context inspectable before deeper trust relationships are established.",
  },
  {
    title: "Read-Only Risk Review",
    body:
      "Enable risk analysis and evidence review without issuing tokens, creating sessions, mutating providers, or activating enforcement.",
  },
] as const;

const useCases = [
  {
    title: "Autonomous-agent risk review",
    body:
      "Review risk posture, trust signals, decision evidence, and runtime exposure across governed AI-agent systems.",
  },
  {
    title: "Insurance readiness workflows",
    body:
      "Prepare structured evidence and risk context for future insurance, underwriting, or enterprise risk review processes.",
  },
  {
    title: "Partner and vendor risk exchange",
    body:
      "Share governed trust context without collapsing boundaries or granting runtime authority across organizations.",
  },
  {
    title: "Executive risk visibility",
    body:
      "Translate runtime evidence, policy posture, and trust signals into a board-level risk surface for autonomous systems.",
  },
] as const;

export default function AgentRiskExchangePage() {
  return (
    <>
      <ProductHero
        eyebrow="RISK AND TRUST EXCHANGE"
        headline="Exchange Risk Signals Without Granting Runtime Authority"
        subheadline="Agent Risk Exchange is the risk and trust exchange layer of the SecureTheCloud Sovereign Agent Control Plane. It organizes runtime evidence, RiskDNA context, trust signals, and insurance-ready review surfaces for autonomous-agent ecosystems."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Explore Ecosystem", href: "/ecosystem" }}
      />

      <Section>
        <Container>
          <SectionIntro
            eyebrow="PRODUCT ROLE"
            title="Agent Risk Exchange turns governed evidence into risk context."
            body="Autonomous systems need a way to exchange risk posture, trust signals, and reviewable evidence without creating unsafe authority paths. Agent Risk Exchange provides that layer for the SecureTheCloud ecosystem."
          />
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="EXCHANGE FLOW"
            title="From runtime evidence to insurance-ready risk context."
            body="Agent Risk Exchange organizes evidence, RiskDNA context, and trust signals into structured records for review, partner confidence, and future risk workflows."
          />

          <div className="mt-10">
            <ArchitectureFlow steps={exchangeFlow} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="CAPABILITIES"
            title="Built for risk visibility, trust review, and exchange readiness."
            body="Agent Risk Exchange gives teams a way to inspect and share risk context without weakening deterministic runtime governance."
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
            title="Risk exchange does not mean runtime control."
            body="Agent Risk Exchange can organize risk signals, trust posture, and review evidence. It does not approve production actions, override OPA, issue credentials, mutate infrastructure, or activate federation by itself."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="USE CASES"
            title="Where Agent Risk Exchange matters."
            body="Agent Risk Exchange is designed for enterprises that need risk visibility across autonomous systems without creating uncontrolled trust or authority paths."
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
            title="The risk exchange layer of the Sovereign Agent Control Plane."
            body="Aegis Runtime governs actions. RiskDNA scores exposure. Agent Blackbox preserves evidence. Agent Risk Exchange brings risk and trust context into a reviewable exchange surface for enterprise and ecosystem workflows."
          />
        </Container>
      </Section>

      <CTASection
        headline="Review autonomous-agent risk before it becomes enterprise exposure."
        subheadline="See how Agent Risk Exchange organizes runtime evidence, RiskDNA context, trust signals, and insurance-ready review surfaces across governed autonomous systems."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Explore Ecosystem", href: "/ecosystem" }}
      />
    </>
  );
}
