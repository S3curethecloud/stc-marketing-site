export const securityContent = {
  meta: {
    title: "Security | IKEVAR",
    description:
      "Understand the IKEVAR security architecture approach across identity, authorization, trust boundaries, evidence, governance, cloud platforms, and autonomous systems.",
  },

  hero: {
    eyebrow: "SECURITY",
    headline: "Security Engineered Into the Architecture",
    subheadline:
      "IKEVAR treats security as an architectural property of enterprise systems: identity, authorization, data boundaries, policy, evidence, operational controls, and accountability must be explicit before production risk expands.",
    primaryCta: {
      label: "Request Security Architecture Review",
      href: "/request-demo",
    },
  },

  overview: {
    title: "Security Begins With Explicit System Boundaries",
    body:
      "IKEVAR designs security around the systems, identities, data paths, control planes, trust relationships, and consequential actions that make up an enterprise environment. The objective is to make authority, access, risk, and accountability explicit rather than relying on implicit trust or post-event reconstruction.",
  },

  tenantIsolation: {
    title: "Identity, Workload, and Trust Separation",
    body:
      "Enterprise systems should separate human identity, workload identity, administrative authority, application context, data access, and autonomous-system permissions. IKEVAR uses explicit trust boundaries and least-privilege patterns so one identity or execution context does not silently inherit authority from another.",
    bullets: [
      "Human and non-human identities remain distinguishable",
      "Administrative authority is separated from workload execution",
      "Access is scoped to business, system, data, and environment context",
      "Cross-system trust requires explicit verification and policy",
    ],
  },

  authorization: {
    title: "Explicit Authorization Before Consequential Action",
    body:
      "Authentication establishes identity; it does not grant unrestricted authority. IKEVAR architectures place policy and authorization decisions at the control points where users, workloads, agents, models, tools, data, and infrastructure interact. Higher-impact actions should require stronger policy evaluation, contextual controls, or human approval.",
  },

  audit: {
    title: "Evidence That Makes Decisions Reconstructible",
    body:
      "Security decisions should leave evidence that can be reviewed after the fact without depending on narrative reconstruction. IKEVAR designs for traceable policy outcomes, approvals, exceptions, identity context, system events, architecture decisions, and operational evidence that support security review, governance, investigation, and assurance.",
  },

  deployment: {
    title: "Designed for Real Enterprise Operating Environments",
    body:
      "Security architecture must survive production realities across cloud platforms, Kubernetes, APIs, enterprise data, AI systems, third-party integrations, regulated workflows, and autonomous execution. IKEVAR designs security controls with deployment, observability, resilience, ownership, operational handoff, and failure behavior in mind.",
  },

  closing: {
    title: "Govern Authority Before Systems Exercise It",
    body:
      "Whether the actor is a person, service, workload, model, or autonomous agent, consequential authority should remain explicit, bounded, observable, and reviewable. IKEVAR combines architecture, engineering, cybersecurity, governance, and evidence so trust does not depend on assumptions.",
  },

  cta: {
    primaryCta: {
      label: "Start a Security Architecture Conversation",
      href: "/request-demo",
    },
    secondaryCta: {
      label: "View Architecture",
      href: "/architecture",
    },
  },
} as const;
