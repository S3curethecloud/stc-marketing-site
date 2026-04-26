import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import Hero from "@/components/marketing/Hero";
import SectionIntro from "@/components/marketing/SectionIntro";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Platform",
  description:
    "Explore the SecureTheCloud platform: a coordinated system for runtime governance, control-plane authority, deterministic authorization, and governed product layers.",
  path: "/platform",
});

const planes = [
  {
    title: "Control Plane Governance",
    body:
      "The control plane governs policy lifecycle, tenant administration, audit integrity, and administrative authority without collapsing into runtime execution.",
  },
  {
    title: "Runtime Decision Path",
    body:
      "Runtime handles request evaluation, risk synthesis, authorization, enforcement, and decision recording before action is allowed.",
  },
  {
    title: "Evidence and Explainability",
    body:
      "Decision records, audit trails, and anchored context preserve a reconstructible explanation path across approvals, denials, and governed actions.",
  },
] as const;

const runtimeLayers = [
  {
    title: "Aegis Runtime",
    body:
      "The flagship runtime baseline for governing AI agent actions before execution with deterministic authorization, predictive risk, and verifiable decision records.",
    href: "/products/aegis-runtime",
    cta: "View Aegis Runtime",
  },
  {
    title: "Aegis Core",
    body:
      "The enforcement kernel that extends SecureTheCloud governance into execution environments, workload boundaries, assertion validation, and runtime trust controls.",
    href: "/architecture",
    cta: "View Architecture",
  },
  {
    title: "Copilot Voice Intelligence",
    body:
      "A narrated intelligence layer that interprets deterministic runtime truth for executives, analysts, and architects without weakening the underlying decision model.",
    href: "/products/copilot-voice-intelligence",
    cta: "Explore Copilot",
  },
  {
    title: "SecureTheCloud for Kubernetes",
    body:
      "A serious v2 extension that brings the baseline governance model into clusters, workloads, workload identity, and SIEM-connected telemetry.",
    href: "/products/kubernetes",
    cta: "View Kubernetes",
  },
  {
    title: "Agent Sovereignty Zones",
    body:
      "A cross-domain trust layer built on the baseline runtime, using signed assertions, trust registries, local policy verification, and dual audit anchoring.",
    href: "/products/agent-sovereignty-zones",
    cta: "Explore Sovereignty Zones",
  },
] as const;

export default function PlatformPage() {
  return (
    <>
      <Hero
        eyebrow="PLATFORM"
        headline="A Coordinated System for Governing Autonomous Execution"
        subheadline="SecureTheCloud is not a collection of disconnected features. It is a coordinated platform that governs actions before execution, preserves explicit decision authority, and extends that baseline across runtime, intelligence, Kubernetes enforcement, and cross-domain trust."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Schedule Architecture Review", href: "/architecture" }}
      />

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="PLANES OF RESPONSIBILITY"
            title="Governance, runtime, and explanation stay distinct by design."
            body="The SecureTheCloud platform is designed so responsibility stays explicit. Governance belongs to the control plane. Execution belongs to runtime. Explanation stays anchored to deterministic records rather than invented after the fact."
          />
          <div className="mt-10">
            <FeatureGrid items={planes} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="COORDINATED PRODUCT SYSTEM"
            title="Each layer has a distinct role in the platform."
            body="SecureTheCloud products are meant to work together without flattening into a generic platform story. Aegis Runtime remains the baseline. The rest of the system extends, interprets, or enforces that governed model."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {runtimeLayers.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/10"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-stc-muted">
                  {item.body}
                </p>

                <div className="mt-6">
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
                  >
                    {item.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="PLATFORM POSITION"
            title="Built for enterprise control planes, not post-event dashboards."
            body="The platform is meant to feel like real infrastructure: explicit authority, runtime enforcement, product-real architecture, and credible extension paths into Kubernetes and cross-zone trust."
          />
        </Container>
      </Section>

      <CTASection
        headline="See how the SecureTheCloud platform works as one governed system."
        subheadline="Review the baseline runtime, enforcement model, narrated intelligence layer, Kubernetes expansion, and cross-domain trust architecture in a private walkthrough."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "View Products", href: "/products" }}
      />
    </>
  );
}
