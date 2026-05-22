import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import ProductHero from "@/components/marketing/ProductHero";
import SectionIntro from "@/components/marketing/SectionIntro";
import ArchitectureFlow from "@/components/marketing/ArchitectureFlow";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Agent Blackbox",
  description:
    "Agent Blackbox provides evidence capture, decision replay, audit proof, and authority-boundary visibility for governed autonomous systems.",
  path: "/products/agent-blackbox",
});

const evidenceFlow = [
  "Agent Action",
  "Decision Record",
  "Evidence Envelope",
  "Audit Chain",
  "Review Surface",
  "SOC 2-Ready Export",
] as const;

const capabilities = [
  {
    title: "Decision Replay",
    body:
      "Replay governed agent actions through recorded decisions, evidence envelopes, and authority results without inventing post-event explanations.",
  },
  {
    title: "Audit-Ready Evidence",
    body:
      "Surface decision evidence, action timelines, export artifacts, and review paths for security, compliance, and architecture teams.",
  },
  {
    title: "Authority Boundary Visibility",
    body:
      "Show which actions were allowed, blocked, read-only, or forbidden by governance boundary without granting new runtime authority.",
  },
  {
    title: "Evidence Drill-Down",
    body:
      "Move from executive summary to detailed evidence records, audit events, source references, and verifier-ready artifacts.",
  },
  {
    title: "Veracity Alignment",
    body:
      "Connect claims to evidence so reviewers can inspect what is supported, what is blocked, and what still requires human approval.",
  },
  {
    title: "Read-Only Review Mode",
    body:
      "Preserve review and investigation workflows without creating sessions, issuing tokens, exposing backend authority, or regenerating exports.",
  },
] as const;

const useCases = [
  {
    title: "Security investigations",
    body:
      "Review what an agent attempted, what policy decided, what evidence was recorded, and why an action was allowed or blocked.",
  },
  {
    title: "Audit preparation",
    body:
      "Prepare evidence surfaces for governance reviews, compliance checks, SOC 2-ready evidence support, and executive reporting.",
  },
  {
    title: "Runtime governance review",
    body:
      "Inspect agent activity, decision posture, authority boundaries, and blocker status before any production enforcement change.",
  },
  {
    title: "Cross-platform evidence",
    body:
      "Provide a shared evidence surface across Aegis Runtime, Kubernetes Sentinel, ASZ, RiskDNA, and future federation readiness layers.",
  },
] as const;

export default function AgentBlackboxPage() {
  return (
    <>
      <ProductHero
        eyebrow="EVIDENCE, REPLAY, AND AUDIT PROOF"
        headline="Prove What Agents Did Before They Become Production Risk"
        subheadline="Agent Blackbox is the evidence and audit layer of the SecureTheCloud Sovereign Agent Control Plane. It captures governed decisions, replayable action timelines, authority boundaries, and audit-ready proof for autonomous systems."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Explore Ecosystem", href: "/ecosystem" }}
      />

      <Section>
        <Container>
          <SectionIntro
            eyebrow="PRODUCT ROLE"
            title="Agent Blackbox turns runtime behavior into reviewable evidence."
            body="Autonomous systems need more than logs. They need deterministic evidence surfaces that show what happened, why it happened, which authority boundary applied, and what proof is available for review."
          />
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="EVIDENCE FLOW"
            title="From agent action to audit-ready proof."
            body="Agent Blackbox organizes decisions, envelopes, audit chain records, and export references into a clear investigation path."
          />

          <div className="mt-10">
            <ArchitectureFlow steps={evidenceFlow} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="CAPABILITIES"
            title="Built for evidence review, replay, and governance proof."
            body="Agent Blackbox helps teams inspect autonomous actions without weakening runtime boundaries or turning review surfaces into enforcement authority."
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
            title="Evidence review is not runtime authority."
            body="Agent Blackbox can show evidence, explain governed actions, and support audit review. It does not issue tokens, create sessions, authorize production actions, mutate providers, or activate enforcement by itself."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="USE CASES"
            title="Where Agent Blackbox matters."
            body="Agent Blackbox is designed for teams that need to prove agent behavior, inspect decisions, and prepare evidence without depending on after-the-fact narrative reconstruction."
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
            title="The evidence layer of the Sovereign Agent Control Plane."
            body="Aegis Runtime governs. Kubernetes Sentinel enforces in cluster contexts. Agent Sovereignty Zones verifies cross-boundary trust. Agent Blackbox preserves the proof layer so decisions, actions, and authority boundaries remain inspectable."
          />
        </Container>
      </Section>

      <CTASection
        headline="Review agent evidence before it becomes production risk."
        subheadline="See how Agent Blackbox captures decisions, replay paths, evidence envelopes, audit chain records, and authority boundaries across governed autonomous systems."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Explore Ecosystem", href: "/ecosystem" }}
      />
    </>
  );
}
