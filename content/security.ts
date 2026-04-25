export const securityContent = {
  meta: {
    title: "Security | SecureTheCloud",
    description:
      "Understand the SecureTheCloud security model, tenant isolation boundaries, deterministic authorization doctrine, audit integrity model, and runtime governance posture.",
  },
  hero: {
    eyebrow: "SECURITY",
    headline: "Security Built Into the Runtime Control Path",
    subheadline:
      "SecureTheCloud is built around deterministic authorization, explicit trust boundaries, verifiable decision records, and tamper-evident governance.",
    primaryCta: {
      label: "Request Security Review",
      href: "/request-demo",
    },
  },
  overview: {
    title: "A Runtime-First Security Model",
    body:
      "SecureTheCloud secures AI agent execution by making authorization explicit, policy-backed, and verifiable before action occurs. The goal is not to observe behavior after the fact, but to govern execution at the moment of decision.",
  },
  tenantIsolation: {
    title: "Tenant Isolation and Context Separation",
    body:
      "SecureTheCloud separates control-plane authority from tenant runtime context. Administrative access, tenant selection, tenant-bound keys, and runtime tokens are distinct layers by design.",
    bullets: [
      "Admin access is not runtime access",
      "Tenant activation must be explicit",
      "Runtime tokens remain tenant-scoped and principal-scoped",
      "Platform-wide views remain separate from tenant-scoped execution context",
    ],
  },
  authorization: {
    title: "Deterministic Authorization Doctrine",
    body:
      "Policy authority remains explicit. Runtime requests are evaluated through a deterministic control path that includes risk synthesis, impact analysis, policy decisioning, and decision recording. No hidden path should bypass policy enforcement.",
  },
  audit: {
    title: "Verifiable Decisions and Tamper-Evident Governance",
    body:
      "SecureTheCloud uses deterministic decision records and hash-linked governance trails so approvals, denials, issuance events, revocations, and administrative changes remain reconstructible and independently verifiable.",
  },
  deployment: {
    title: "Designed for Real Operating Environments",
    body:
      "SecureTheCloud is designed to support controlled runtime operation, multi-tenant governance, Kubernetes expansion, and cross-zone trust models without collapsing security boundaries between control plane and execution plane.",
  },
  closing: {
    title: "Security That Governs Before Execution",
    body:
      "SecureTheCloud treats runtime enforcement, policy authority, and governance integrity as first-class security primitives for autonomous systems.",
  },
  cta: {
    primaryCta: {
      label: "Talk to SecureTheCloud",
      href: "/request-demo",
    },
    secondaryCta: {
      label: "View Architecture",
      href: "/architecture",
    },
  },
} as const;
