export const homepageContent = {
  meta: {
    title: "SecureTheCloud Aegis Runtime | Zero-Trust Runtime for AI Agents",
    description:
      "SecureTheCloud Aegis Runtime is a deterministic zero-trust runtime that authorizes, explains, and verifies AI agent actions before execution.",
  },
  hero: {
    eyebrow: "ZERO-TRUST RUNTIME FOR AI AGENTS",
    headline: "Govern AI Agent Actions Before They Execute",
    subheadline:
      "SecureTheCloud Aegis Runtime is a deterministic zero-trust runtime that ensures every AI agent action is authorized, explainable, and cryptographically verifiable before it executes.",
    primaryCta: {
      label: "Request Private Demo",
      href: "/request-demo",
    },
    secondaryCta: {
      label: "Schedule Architecture Review",
      href: "/architecture",
    },
    trustLine:
      "Built for teams deploying AI agents, autonomous workflows, and governed runtime infrastructure.",
  },
  proof: [
    "Deterministic authorization",
    "Risk-aware execution control",
    "Verifiable decision records",
    "Multi-tenant governance",
    "Cross-boundary trust architecture",
  ],
  problem: {
    title: "AI Agents Can Act — But Most Systems Cannot Prove Why",
    intro:
      "AI systems can issue transactions, modify infrastructure, access sensitive systems, and trigger downstream workflows. In most environments, those actions are monitored after execution instead of governed before action. SecureTheCloud changes that control model.",
    cards: [
      {
        title: "Autonomous Actions",
        body:
          "AI agents can operate across tools, APIs, systems, and data boundaries faster than traditional control models can keep up.",
      },
      {
        title: "Missing Runtime Control",
        body:
          "Most organizations can observe AI activity after execution, but they cannot deterministically authorize or deny action before it happens.",
      },
      {
        title: "No Verifiable Explanation",
        body:
          "When an agent is approved or denied, teams often cannot reconstruct the exact reason in a deterministic, policy-backed way.",
      },
    ],
    punchline:
      "If an AI agent takes an action today, can your organization prove why it was allowed?",
  },
  categoryShift: {
    title: "From AI Observability to AI Control",
    before: {
      title: "Before",
      summary: "Monitor what AI already did",
      items: [
        "log review",
        "post-event alerting",
        "fragmented evidence",
        "incomplete accountability",
      ],
    },
    after: {
      title: "After",
      summary: "Control what AI is allowed to do",
      items: [
        "pre-execution authorization",
        "deterministic policy enforcement",
        "risk-aware decisions",
        "verifiable audit chain",
      ],
    },
    closing:
      "SecureTheCloud introduces authorization runtime infrastructure for autonomous systems.",
  },
  howItWorks: {
    title: "Every Action Passes Through a Deterministic Control Path",
    intro:
      "Every action is evaluated before execution, scored for risk, simulated for impact, enforced by policy, and recorded in a verifiable governance trail.",
    steps: [
      "Agent Request",
      "RiskDNA",
      "Blast Radius",
      "OPA Policy",
      "DDR",
      "Audit Anchor",
      "Execution or Denial",
    ],
    body:
      "SecureTheCloud combines runtime authorization, predictive risk synthesis, blast-radius analysis, deterministic decision records, and tamper-evident governance into one control path.",
  },
  pillars: {
    title: "Built for Enforcement — Not Observation",
    items: [
      {
        title: "Runtime Authorization",
        body:
          "Every agent request is evaluated before action. Approved requests receive session-bound authorization. Denied requests fail closed.",
      },
      {
        title: "Predictive Authorization",
        body:
          "RiskDNA and Blast Radius simulation calculate risk and downstream impact before the system permits execution.",
      },
      {
        title: "Deterministic Explanation",
        body:
          "Every decision produces a deterministic decision record that can explain what happened without relying on generative inference.",
      },
      {
        title: "Tamper-Evident Governance",
        body:
          "Admin mutations, policy changes, decisions, and cross-zone events are hash-linked and independently verifiable.",
      },
    ],
    strongLine: "This is not an AI tool. This is infrastructure.",
  },
  aegisCore: {
    title: "Aegis Core: The Enforcement Kernel for AI Agents",
    subtitle:
      "Aegis Core brings SecureTheCloud governance directly into the execution environment — enforcing identity, policy, cryptographic assertions, and runtime trust before autonomous workloads can act.",
    strongLine: "SecureTheCloud decides. Aegis Core enforces.",
    items: [
      {
        title: "Runtime Enforcement Kernel",
        body:
          "Ensures agent workloads cannot bypass SecureTheCloud authorization before executing sensitive actions.",
      },
      {
        title: "Kubernetes-Native Guardrail",
        body:
          "Integrates with admission control, sidecar injection, and workload validation to enforce governance inside the cluster.",
      },
      {
        title: "Cryptographic Assertion Validator",
        body:
          "Verifies signed authorization assertions, policy digests, timestamps, and replay protection before allowing cross-zone actions.",
      },
      {
        title: "Agent Boundary Controller",
        body:
          "Controls how agents interact with services, APIs, tools, and other agents across governed trust boundaries.",
      },
    ],
    cta: {
      label: "Explore Aegis Core",
      href: "/architecture",
    },
  },
  controlPlane: {
    title: "Real-Time Governance Console",
    subtitle:
      "Observe runtime state, tenant risk, agent sessions, policy decisions, and blast-radius impact from a single control plane.",
    body:
      "The console is not a mock dashboard. It is backed by live runtime data, policy decisions, session state, and governance events.",
  },
  copilot: {
    title: "Copilot That Explains Anchored Truth",
    body:
      "Copilot Voice Intelligence does not invent reasons. It interprets deterministic decision records generated by the runtime.",
    explanation:
      "If Copilot is offline, the deterministic decision record still provides a complete explanation path.",
  },
  kubernetes: {
    title: "SecureTheCloud for Kubernetes",
    subtitle:
      "Extend SecureTheCloud governance into clusters, workloads, identity, and runtime policy domains without destabilizing the existing control-plane baseline.",
    cta: {
      label: "View Kubernetes Product",
      href: "/products/kubernetes",
    },
  },
  sovereigntyZones: {
    title: "Trust Between Autonomous Systems Without Shared Infrastructure",
    body:
      "Agent Sovereignty Zones extends the SecureTheCloud baseline into cross-domain trust with signed assertions, trust registries, local policy verification, and dual-zone audit anchoring.",
    quote: "Agents do not trust each other. They verify each other.",
    cta: {
      label: "Explore Sovereignty Zones",
      href: "/products/agent-sovereignty-zones",
    },
  },
  useCases: {
    title: "Built for High-Risk Autonomous Workflows",
    items: [
      {
        title: "Financial Automation",
        body:
          "Govern refunds, payments, and transaction workflows before execution.",
      },
      {
        title: "Cloud Operations",
        body:
          "Control AI-driven infrastructure changes with policy-bound execution and blast-radius containment.",
      },
      {
        title: "Kubernetes Enforcement",
        body:
          "Extend runtime governance into workload identity, runtime policy, and cluster-native operations.",
      },
      {
        title: "Multi-Agent Systems",
        body:
          "Establish trust between autonomous systems through explicit verification and governed boundaries.",
      },
    ],
  },
  differentiation: {
    title: "Why SecureTheCloud Is Different",
    rows: [
      ["Timing", "Post-execution", "Pre-execution"],
      ["Control", "Monitor and alert", "Authorize or deny"],
      ["Decision Model", "Probabilistic", "Deterministic"],
      ["Explanation", "AI-generated", "DDR-based"],
      ["Audit Trail", "Logs", "Hash-linked chain"],
      ["Cross-Zone Trust", "Implicit", "Cryptographic"],
    ],
  },
  enterpriseProof: {
    title: "Designed for Production-Grade Autonomous Systems",
    body:
      "SecureTheCloud is built from the runtime outward: policy enforcement first, governance second, explanation third, and Copilot as an interpreter of anchored facts.",
  },
  portfolioPreview: {
    title: "Explore the SecureTheCloud Product Portfolio",
    items: [
      {
        title: "Aegis Runtime",
        body: "Deterministic runtime authorization for AI agents.",
        ctaLabel: "View Aegis Runtime",
        href: "/products/aegis-runtime",
      },
      {
        title: "Copilot Voice Intelligence",
        body:
          "Voice-narrated deterministic intelligence for executives, analysts, and architects.",
        ctaLabel: "Explore Voice Intelligence",
        href: "/products/copilot-voice-intelligence",
      },
      {
        title: "SecureTheCloud for Kubernetes",
        body:
          "Kubernetes-native enforcement and workload intelligence built on SecureTheCloud Core.",
        ctaLabel: "View Kubernetes Product",
        href: "/products/kubernetes",
      },
      {
        title: "Agent Sovereignty Zones",
        body:
          "Cross-domain trust with signed assertions, trust registries, and local policy verification.",
        ctaLabel: "Explore Sovereignty Zones",
        href: "/products/agent-sovereignty-zones",
      },
    ],
  },
  cta: {
    headline: "Start Governing Autonomous Systems Before They Act",
    subheadline:
      "Request a private technical demo and see how SecureTheCloud enforces deterministic authorization, predictive risk, and verifiable governance for AI agents.",
    primaryCta: {
      label: "Request Private Demo",
      href: "/request-demo",
    },
    secondaryCta: {
      label: "Schedule Architecture Review",
      href: "/architecture",
    },
    footerTrustText:
      "Built for AI infrastructure teams, platform security teams, and enterprises moving from automation to autonomous systems.",
  },
} as const;
