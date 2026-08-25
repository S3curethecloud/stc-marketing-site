export const architectureContent = {
  meta: {
    title: "Enterprise Architecture | IKEVAR",
    description:
      "Explore the IKEVAR enterprise architecture approach across AI, cloud, cybersecurity, governance, identity, data, autonomous systems, and implementation readiness.",
  },

  hero: {
    eyebrow: "ENTERPRISE ARCHITECTURE",
    headline: "Architecture That Turns Enterprise Ambition Into Governed Systems",
    subheadline:
      "IKEVAR connects business objectives, technical design, security boundaries, governance obligations, implementation constraints, and operational readiness into architecture that teams can build, review, and defend.",
    primaryCta: {
      label: "Request Architecture Consultation",
      href: "/request-demo",
    },
    secondaryCta: {
      label: "Explore Capabilities",
      href: "/services",
    },
  },

  requestFlow: {
    title: "From Ambiguity to Implementation-Ready Architecture",
    body:
      "IKEVAR begins with the business objective and operating constraints, then turns them into explicit architecture decisions, trust boundaries, control requirements, implementation artifacts, validation criteria, and rollout conditions.",
    steps: [
      "Business Objective",
      "Operating Constraints",
      "Architecture Boundaries",
      "Control Requirements",
      "Architecture Decisions",
      "Implementation Artifacts",
      "Validation and Rollout",
    ],
  },

  runtimeSplit: {
    title: "Business, Control, Execution, and Evidence Responsibilities Stay Explicit",
    body:
      "Enterprise systems become difficult to govern when business authority, technical execution, policy decisions, data access, model behavior, and evidence responsibilities collapse into the same layer. IKEVAR separates these responsibilities so ownership, authority, failure behavior, and review paths remain clear.",
  },

  opa: {
    title: "Decision Authority Must Be Deliberate and Enforceable",
    body:
      "Authorization, policy, approval, and governance decisions should occur at explicit control points. Whether the implementation uses policy engines, identity systems, application controls, human approval, or autonomous-action governance, authority must remain attributable, reviewable, and enforceable.",
  },

  ddr: {
    title: "Material Architecture Decisions Need Reviewable Evidence",
    body:
      "Architecture decisions should preserve the problem, alternatives, constraints, rationale, security consequences, implementation implications, and evidence required for validation. This gives engineering, security, governance, and leadership teams a shared decision record.",
  },

  aegisCore: {
    title: "Architecture Must Connect to Engineering",
    body:
      "IKEVAR architecture is designed to produce implementation-ready outputs: reference architectures, control models, trust-boundary diagrams, ADRs, interface contracts, evaluation plans, deployment patterns, and delivery roadmaps that engineering teams can consume.",
  },

  kubernetes: {
    title: "Platform Decisions Must Survive Real Operating Environments",
    body:
      "Cloud platforms, Kubernetes, APIs, enterprise data, AI services, identity systems, third-party integrations, and autonomous workflows introduce operational realities that architecture must address before production. Deployment, observability, resilience, ownership, and failure modes are part of the design.",
  },

  crossZone: {
    title: "Trust Across Systems Requires Explicit Verification",
    body:
      "Enterprise systems increasingly cross identity domains, clouds, business units, data boundaries, model providers, tools, and autonomous workflows. IKEVAR designs explicit trust relationships, authorization boundaries, evidence paths, and escalation conditions rather than relying on inherited or implicit trust.",
  },

  closing: {
    title: "Architecture Should Make the Enterprise More Buildable",
    body:
      "The purpose of enterprise architecture is not to produce diagrams that sit outside delivery. IKEVAR uses architecture to reduce ambiguity, expose risk, align stakeholders, constrain unsafe choices, and create a defensible path from concept to implementation.",
  },

  cta: {
    headline: "Bring us the architecture problem that needs a defensible path forward.",
    subheadline:
      "We can help translate business objectives, technical constraints, security boundaries, governance requirements, and implementation uncertainty into architecture decisions and engineering-ready artifacts.",
    primaryCta: {
      label: "Request Architecture Consultation",
      href: "/request-demo",
    },
    secondaryCta: {
      label: "View IKEVAR Products",
      href: "/products",
    },
  },
} as const;
