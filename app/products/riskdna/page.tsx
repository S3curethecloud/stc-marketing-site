import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import ProductHero from "@/components/marketing/ProductHero";
import SectionIntro from "@/components/marketing/SectionIntro";
import ArchitectureFlow from "@/components/marketing/ArchitectureFlow";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "RiskDNA",
  description:
    "RiskDNA provides predictive risk scoring, blast-radius intelligence, and autonomous-action exposure analysis for governed AI-agent systems.",
  path: "/products/riskdna",
});

const riskFlow = [
  "Runtime Context",
  "Identity Signals",
  "Action Intent",
  "Blast Radius",
  "RiskDNA Score",
  "Policy Context",
  "Decision Support",
] as const;

const capabilities = [
  {
    title: "Predictive Risk Scoring",
    body:
      "Score autonomous actions before execution using identity context, request intent, policy posture, environment sensitivity, and known risk factors.",
  },
  {
    title: "Blast-Radius Intelligence",
    body:
      "Estimate downstream impact before an action is approved, denied, reviewed, or routed through a governed exception path.",
  },
  {
    title: "Runtime Context Synthesis",
    body:
      "Convert runtime signals into structured risk context that can inform policy evaluation without replacing deterministic authority.",
  },
  {
    title: "Exposure Classification",
    body:
      "Classify actions by operational sensitivity, tenant scope, system impact, trust boundary, and execution risk.",
  },
  {
    title: "Evidence-Backed Scoring",
    body:
      "Preserve the risk factors behind a score so reviewers can inspect how risk was derived and what signals contributed.",
  },
  {
    title: "Offline Intelligence Path",
    body:
      "Support future SageMaker-backed risk modeling and offline enrichment without granting ML direct runtime authority.",
  },
] as const;

const useCases = [
  {
    title: "High-risk transaction control",
    body:
      "Score refunds, payments, approvals, and sensitive workflows before autonomous systems are allowed to act.",
  },
  {
    title: "Cloud and infrastructure changes",
    body:
      "Evaluate infrastructure actions by identity, target, blast radius, environment, and policy posture before execution.",
  },
  {
    title: "Kubernetes workload governance",
    body:
      "Inform cluster-level policy decisions with workload risk, namespace sensitivity, service-account posture, and impact context.",
  },
  {
    title: "Cross-zone trust review",
    body:
      "Support ASZ and SAFP workflows with risk context for signed assertions, trust registry matches, and federation readiness.",
  },
] as const;

export default function RiskDNAPage() {
  return (
    <>
      <ProductHero
        eyebrow="RISK SCORING AND BLAST-RADIUS INTELLIGENCE"
        headline="Score Autonomous-Agent Risk Before Execution"
        subheadline="RiskDNA is the risk intelligence layer of the SecureTheCloud Sovereign Agent Control Plane. It evaluates runtime context, identity signals, action intent, blast-radius impact, and exposure patterns before autonomous actions become production risk."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Explore Ecosystem", href: "/ecosystem" }}
      />

      <Section>
        <Container>
          <SectionIntro
            eyebrow="PRODUCT ROLE"
            title="RiskDNA informs decisions without becoming the authority."
            body="RiskDNA produces structured risk context for governed execution paths. It helps policy engines, reviewers, and runtime systems understand exposure before action — while deterministic policy remains the decision boundary."
          />
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="RISK FLOW"
            title="From runtime context to decision support."
            body="RiskDNA turns identity, intent, environment, and blast-radius signals into reviewable risk context that can inform policy evaluation and audit-ready evidence."
          />

          <div className="mt-10">
            <ArchitectureFlow steps={riskFlow} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="CAPABILITIES"
            title="Built for predictive governance, not unchecked AI authority."
            body="RiskDNA gives teams a way to reason about risk before execution while keeping runtime authorization explicit, deterministic, and policy-backed."
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
            title="Risk scoring is not policy override."
            body="RiskDNA can score, enrich, classify, and explain risk context. It does not override OPA, authorize production actions, issue credentials, mutate infrastructure, or activate enforcement by itself."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="USE CASES"
            title="Where RiskDNA matters."
            body="RiskDNA is designed for teams that need predictive risk intelligence before autonomous systems execute sensitive actions."
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
            title="The risk intelligence layer of the Sovereign Agent Control Plane."
            body="Aegis Runtime governs actions. Kubernetes Sentinel enforces cluster policy. Agent Blackbox preserves evidence. Agent Risk Exchange shares reviewable risk context. RiskDNA provides the scoring and blast-radius intelligence that informs the control path."
          />
        </Container>
      </Section>

      <CTASection
        headline="Score autonomous-agent risk before execution."
        subheadline="See how RiskDNA turns runtime context, identity signals, blast-radius analysis, and exposure patterns into policy-ready risk intelligence."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Explore Ecosystem", href: "/ecosystem" }}
      />
    </>
  );
}
