import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import ProductHero from "@/components/marketing/ProductHero";
import SectionIntro from "@/components/marketing/SectionIntro";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "SecureTheCloud Trust Intelligence Copilot",
  description:
    "SecureTheCloud Trust Intelligence Copilot is an ecosystem evidence and readiness navigator for governed explanations, evidence tracing, authority-boundary review, and customer-safe summaries.",
  path: "/products/copilot-voice-intelligence",
});

const modes = [
  {
    title: "Evidence Navigation",
    body:
      "Trace platform evidence across Aegis Runtime, Kubernetes Sentinel, Agent Blackbox, RiskDNA, ASZ, Veracity, ARE, and SAFP readiness surfaces.",
  },
  {
    title: "Authority Boundary Review",
    body:
      "Explain what a platform can and cannot do without granting runtime authority, issuing credentials, activating federation, or mutating production systems.",
  },
  {
    title: "Customer-Safe Summaries",
    body:
      "Prepare buyer, auditor, and executive-ready explanations grounded in approved evidence, source-of-truth records, and governance boundaries.",
  },
] as const;

const useCases = [
  {
    title: "Explain each platform’s role",
    body:
      "Translate the SecureTheCloud ecosystem into clear descriptions of what each platform does, what it proves, and where its authority ends.",
  },
  {
    title: "Trace evidence across the ecosystem",
    body:
      "Follow evidence from runtime decisions, risk signals, audit records, source-of-truth files, and readiness layers into governed explanations.",
  },
  {
    title: "Check authority boundaries",
    body:
      "Help teams understand when a capability is read-only, evidence-only, readiness-only, or not authorized for runtime enforcement.",
  },
  {
    title: "Support SageMaker readiness planning",
    body:
      "Explain future offline risk intelligence and SageMaker readiness without claiming live training, live inference authority, or production activation.",
  },
] as const;

export default function CopilotVoiceIntelligencePage() {
  return (
    <>
      <ProductHero
        eyebrow="TRUST INTELLIGENCE COPILOT"
        headline="SecureTheCloud Trust Intelligence Copilot"
        subheadline="Ecosystem Evidence & Readiness Navigator for governed explanations, evidence tracing, authority-boundary review, customer-safe summaries, and future SageMaker readiness planning."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Explore Ecosystem", href: "/ecosystem" }}
      />

      <Section>
        <Container>
          <SectionIntro
            eyebrow="WHAT IT IS"
            title="A read-only intelligence layer for the SecureTheCloud ecosystem."
            body="SecureTheCloud Trust Intelligence Copilot explains the ecosystem, traces evidence, validates authority boundaries, and prepares customer-safe summaries. It is not a generic chatbot, interview tutor, credential broker, federation broker, or runtime mutation engine."
          />
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="OPERATING MODES"
            title="Built for evidence, readiness, and governed understanding."
            body="Trust Intelligence Copilot helps operators, buyers, auditors, and executives understand the SecureTheCloud ecosystem without weakening the deterministic authority model underneath."
          />
          <div className="mt-10">
            <FeatureGrid items={modes} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="DOCTRINE"
            title="Evidence proves. Risk informs. OPA decides. Runtime enforces. Copilot explains."
            body="Trust Intelligence Copilot can explain governed context and retrieve evidence, but it does not authorize execution, enforce policy, issue credentials, mutate runtime systems, activate live federation, run live SageMaker training, or connect to production systems."
          />
          <p className="mt-8 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            If Copilot is offline, deterministic records, audit chains, evidence trails, and source-of-truth records still provide the complete explanation path.
          </p>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="ECOSYSTEM COVERAGE"
            title="Explains the platforms inside the Sovereign Agent Control Plane."
            body="Trust Intelligence Copilot helps teams understand ASZ, Aegis Runtime, RiskDNA, Kubernetes Sentinel, Agent Blackbox, Agent Risk Exchange, SAFP, Aegis Veracity Engine, and future SageMaker offline risk intelligence planning."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="USE CASES"
            title="Where Trust Intelligence Copilot adds value."
            body="The Copilot is designed for governed explanation, evidence navigation, readiness planning, and safe customer-facing summaries — not enforcement or production authority."
          />
          <div className="mt-10">
            <FeatureGrid items={useCases} />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="AUTHORITY BOUNDARY"
            title="The Copilot explains only. It does not govern or enforce."
            body="Runtime authority remains with deterministic governance and policy-backed execution paths. Risk scoring informs. OPA decides. Runtime enforces. Frontend surfaces render backend truth only. LLM layers explain governed evidence and retrieve approved context only."
          />
        </Container>
      </Section>

      <CTASection
        headline="Navigate ecosystem evidence without authority drift."
        subheadline="See how SecureTheCloud Trust Intelligence Copilot explains platform roles, traces evidence, validates boundaries, and prepares customer-safe summaries across the Sovereign Agent Control Plane."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Explore Ecosystem", href: "/ecosystem" }}
      />
    </>
  );
}
