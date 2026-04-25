type ProductPortfolioItem = {
  name: string;
  href: string;
  eyebrow: string;
  description: string;
};

type ProductCta = {
  label: string;
  href: string;
};

type ProductFeatureItem = {
  title: string;
  body: string;
};

export const productPortfolio: readonly ProductPortfolioItem[] = [
  {
    name: "Aegis Runtime",
    href: "/products/aegis-runtime",
    eyebrow: "FLAGSHIP PRODUCT",
    description:
      "Deterministic zero-trust runtime governance for AI agents with policy-backed authorization, predictive risk, and verifiable decisions.",
  },
  {
    name: "Copilot Voice Intelligence",
    href: "/products/copilot-voice-intelligence",
    eyebrow: "OPERATIONAL INTELLIGENCE",
    description:
      "Voice-narrated deterministic intelligence for executives, analysts, and architects operating governed security workflows.",
  },
  {
    name: "SecureTheCloud for Kubernetes",
    href: "/products/kubernetes",
    eyebrow: "KUBERNETES GOVERNANCE",
    description:
      "Kubernetes-native enforcement, workload identity, cluster intelligence, and SIEM-ready telemetry built on the SecureTheCloud baseline.",
  },
  {
    name: "Agent Sovereignty Zones",
    href: "/products/agent-sovereignty-zones",
    eyebrow: "CROSS-DOMAIN TRUST",
    description:
      "Cross-domain trust infrastructure with signed assertions, trust registries, local policy verification, and dual audit anchoring.",
  },
] as const;

export const aegisRuntimeContent = {
  meta: {
    title: "Aegis Runtime | SecureTheCloud",
    description:
      "Aegis Runtime is the SecureTheCloud flagship product: a deterministic zero-trust runtime for AI agents with policy-backed authorization, predictive risk, and verifiable decisions.",
  },
  hero: {
    eyebrow: "FLAGSHIP PRODUCT",
    headline: "Aegis Runtime: Zero-Trust Runtime for AI Agents",
    subheadline:
      "Aegis Runtime is the deterministic control layer that governs AI agent actions before execution — with policy-backed authorization, predictive risk, and verifiable decision records.",
    primaryCta: {
      label: "Request Private Demo",
      href: "/request-demo",
    } as ProductCta,
    secondaryCta: {
      label: "Schedule Architecture Review",
      href: "/architecture",
    } as ProductCta,
  },
  problem: {
    title: "AI Agent Execution Needs a Runtime Control Layer",
    body:
      "AI agents increasingly operate across transactions, infrastructure, APIs, sensitive data, and downstream workflows. Without a runtime control layer, organizations are left with post-event visibility instead of pre-execution governance. Aegis Runtime is built to close that gap.",
  },
  flow: {
    title: "Every Action Passes Through an Explicit Decision Path",
    intro:
      "Aegis Runtime authorizes or denies action through a deterministic sequence that keeps policy authority explicit and execution governed.",
    steps: [
      "Agent Request",
      "RiskDNA Evaluation",
      "Blast Radius Simulation",
      "OPA Policy Decision",
      "Deterministic Decision Record",
      "Audit Anchor",
      "Execution or Denial",
    ] as const,
  },
  pillars: {
    title: "Built for Runtime Governance",
    items: [
      {
        title: "Deterministic Authorization",
        body: "No action proceeds without policy approval.",
      },
      {
        title: "Predictive Risk",
        body: "RiskDNA evaluates identity, context, topology, and behavior before execution.",
      },
      {
        title: "Blast Radius Simulation",
        body: "Potential downstream impact is analyzed before action is permitted.",
      },
      {
        title: "Verifiable Decisions",
        body: "Every approval, denial, issuance, or revocation produces a deterministic decision record.",
      },
      {
        title: "Multi-Tenant Governance",
        body: "Aegis Runtime preserves explicit tenant context and separates control-plane authority from runtime execution.",
      },
      {
        title: "Fail-Closed Execution",
        body: "When policy, integrity, or trust state is missing or invalid, the system denies rather than assumes permission.",
      },
    ] as readonly ProductFeatureItem[],
  },
  aegisCore: {
    title: "Aegis Core Extends Governance Into the Execution Environment",
    body:
      "Aegis Runtime remains the decision and governance baseline. Aegis Core extends that governed model into Kubernetes, workload identity, cryptographic assertion validation, and runtime boundary enforcement.",
    strongLine: "Aegis Runtime decides. Aegis Core enforces.",
  },
  controlPlane: {
    title: "See Runtime Governance in Real Time",
    body:
      "Aegis Runtime powers a live control surface for policy decisions, session state, risk context, blast-radius impact, and governed execution telemetry.",
  },
} as const;
