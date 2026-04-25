import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import SectionIntro from "@/components/marketing/SectionIntro";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Understand the SecureTheCloud security model, tenant isolation boundaries, deterministic authorization doctrine, audit integrity model, and runtime governance posture.",
};

const tenantSeparationPoints = [
  "Admin access is not runtime access",
  "Tenant activation must be explicit",
  "Runtime tokens remain tenant-scoped and principal-scoped",
  "Platform-wide views remain separate from tenant-scoped execution context",
] as const;

export default function SecurityPage() {
  return (
    <>
      <Section>
        <Container>
          <SectionIntro
            eyebrow="SECURITY"
            title="Security Built Into the Runtime Control Path"
            body="SecureTheCloud is built around deterministic authorization, explicit trust boundaries, verifiable decision records, and tamper-evident governance."
          />
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="RUNTIME-FIRST MODEL"
            title="A security model designed to govern before execution"
            body="SecureTheCloud secures AI agent execution by making authorization explicit, policy-backed, and verifiable before action occurs. The goal is not to observe behavior after the fact, but to govern execution at the moment of decision."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="TENANT ISOLATION"
            title="Tenant isolation and context separation"
            body="SecureTheCloud separates control-plane authority from tenant runtime context. Administrative access, tenant selection, tenant-bound keys, and runtime tokens are distinct layers by design."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {tenantSeparationPoints.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 text-sm font-medium text-white/85"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="AUTHORIZATION DOCTRINE"
            title="Deterministic authorization remains explicit"
            body="Policy authority remains explicit. Runtime requests are evaluated through a deterministic control path that includes risk synthesis, impact analysis, policy decisioning, and decision recording. No hidden path should bypass policy enforcement."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="AUDIT AND INTEGRITY"
            title="Verifiable decisions and tamper-evident governance"
            body="SecureTheCloud uses deterministic decision records and hash-linked governance trails so approvals, denials, issuance events, revocations, and administrative changes remain reconstructible and independently verifiable."
          />
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="DEPLOYMENT POSTURE"
            title="Designed for real operating environments"
            body="SecureTheCloud is designed to support controlled runtime operation, multi-tenant governance, Kubernetes expansion, and cross-zone trust models without collapsing security boundaries between control plane and execution plane."
          />
        </Container>
      </Section>

      <CTASection
        headline="Review the SecureTheCloud security model in a private walkthrough."
        subheadline="See how deterministic authorization, tenant isolation, audit integrity, and runtime governance fit together across the platform."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "View Architecture", href: "/architecture" }}
      />
    </>
  );
}
