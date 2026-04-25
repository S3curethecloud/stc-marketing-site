import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import ProductHero from "@/components/marketing/ProductHero";
import SectionIntro from "@/components/marketing/SectionIntro";

export const metadata: Metadata = {
  title: "SecureTheCloud for Kubernetes",
  description:
    "SecureTheCloud for Kubernetes extends the core runtime model into Kubernetes-native environments with workload identity, OPA sidecars, policy bundles, cluster intelligence, and SIEM-ready telemetry.",
};

const problemCards = [
  {
    title: "Workloads Move Faster Than Governance",
    body:
      "Containers, namespaces, service accounts, and deployments evolve faster than traditional authorization and review models can keep up.",
  },
  {
    title: "Policy Is Fragmented",
    body:
      "Admission controls, runtime authorization, identity, telemetry, and detection pipelines often live in separate operational silos.",
  },
  {
    title: "Denied Actions Still Matter",
    body:
      "A denied action may not create a session, but it still matters for blast radius, anomaly detection, replay, and audit interpretation.",
  },
] as const;

const architectureModules = [
  {
    title: "Runtime as Deployment",
    body:
      "Package runtime enforcement into a Kubernetes-native operating model that aligns with cluster lifecycle and tenant governance context.",
  },
  {
    title: "OPA Sidecar Per Pod",
    body:
      "Keep policy evaluation close to workload execution so runtime decisions stay explicit and enforceable.",
  },
  {
    title: "Policy Bundle Distribution",
    body:
      "Move policy delivery into versioned bundles so updates can be synchronized without breaking the control baseline.",
  },
  {
    title: "External Redis State",
    body:
      "Preserve operational state outside individual pods to support resilience, coordination, and consistent runtime behavior.",
  },
  {
    title: "Optional L7 Enforcement",
    body:
      "Extend the model toward deeper traffic-aware enforcement where runtime posture requires it.",
  },
  {
    title: "Workload Identity",
    body:
      "Map namespaces, service accounts, workloads, and runtime identities back to tenant-owned governance context.",
  },
] as const;

const featureGrid = [
  {
    title: "Cluster Registration",
    body:
      "Register clusters into SecureTheCloud Core and bind them to tenant governance context.",
  },
  {
    title: "Workload Identity Mapping",
    body:
      "Map namespaces, service accounts, workloads, and runtime identities to tenant-owned policy context.",
  },
  {
    title: "Runtime Policy Decisions",
    body:
      "Evaluate workload actions using OPA sidecars and SecureTheCloud policy doctrine.",
  },
  {
    title: "Kubernetes Blast Pressure",
    body:
      "Extend blast-radius pressure into namespace, workload, service-account, and cluster contexts.",
  },
  {
    title: "Aegis Cluster Intelligence",
    body:
      "Surface deny spikes, identity drift, policy mismatch, privilege anomalies, and workload risk signals.",
  },
  {
    title: "SIEM-Ready Telemetry",
    body:
      "Forward token issuance, denies, revokes, blast-pressure signals, and Aegis anomalies into security workflows.",
  },
] as const;

const enforcementPlan = [
  "Package runtime for Kubernetes",
  "Move policy distribution to bundles",
  "Add optional L7 enforcement",
  "Add cluster governance and workload identity",
] as const;

const validationGates = [
  "Rolling update safety",
  "Policy sync without restart",
  "Deterministic decisions across replicas",
  "Fail-closed behavior",
  "Admission governance",
  "Workload identity integrity",
] as const;

const useCases = [
  {
    title: "Prevent high-risk workload actions",
    body:
      "Constrain sensitive runtime behavior before workloads execute privileged or disruptive actions.",
  },
  {
    title: "Detect workload identity drift",
    body:
      "Track identity mismatch and anomalous execution context across workloads, namespaces, and service accounts.",
  },
  {
    title: "Correlate cluster denies with runtime blast radius",
    body:
      "Use deny events as meaningful governance signals instead of ignoring them as failed attempts.",
  },
  {
    title: "Export evidence to the SOC",
    body:
      "Feed security-relevant telemetry into broader workflows without losing the runtime governance context behind it.",
  },
] as const;

const differentiationRows = [
  {
    traditional: "Admission-only controls",
    stc: "Admission plus runtime authorization",
  },
  {
    traditional: "Siloed policy engines",
    stc: "Core-governed policy distribution",
  },
  {
    traditional: "Logs without context",
    stc: "RiskDNA, Aegis, and Blast Radius context",
  },
  {
    traditional: "Static policy deployment",
    stc: "Bundle-based updates",
  },
] as const;

export default function KubernetesPage() {
  return (
    <>
      <ProductHero
        eyebrow="KUBERNETES GOVERNANCE"
        headline="Bring Zero-Trust Runtime Enforcement Into Kubernetes"
        subheadline="SecureTheCloud for Kubernetes extends the core runtime model into cluster, workload, identity, and runtime policy domains — without destabilizing the existing control-plane baseline."
        primaryCta={{ label: "Request Kubernetes Preview", href: "/request-demo" }}
        secondaryCta={{ label: "View Architecture", href: "/architecture" }}
      />

      <Section>
        <Container>
          <SectionIntro
            eyebrow="THE PROBLEM"
            title="Kubernetes Expanded the Attack Surface. Your Authorization Model Has to Follow."
            body="Kubernetes changed how workloads are deployed, scaled, and trusted. Governance has to extend into those runtime boundaries instead of stopping at the edge of the control plane."
          />
          <div className="mt-10">
            <FeatureGrid items={problemCards} />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="POSITIONING"
            title="A Kubernetes Enforcement Layer Built on SecureTheCloud Core"
            body="SecureTheCloud for Kubernetes extends the core control-plane model into Kubernetes-native environments. Core remains the governance source of truth. Kubernetes becomes the enforcement and evidence layer for workloads, clusters, and runtime policy activity."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="ARCHITECTURE"
            title="Designed Around Proven Kubernetes Enforcement Patterns"
            body="SecureTheCloud for Kubernetes is built around runtime deployment, OPA sidecars, policy bundle distribution, external state, optional L7 enforcement, and verifiable workload identity."
          />
          <div className="mt-10">
            <FeatureGrid items={architectureModules} />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="FEATURES"
            title="What SecureTheCloud Adds to Kubernetes"
            body="The Kubernetes layer extends the baseline governance model into cluster operations, workload identity, risk context, and security telemetry."
          />
          <div className="mt-10">
            <FeatureGrid items={featureGrid} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="ENFORCEMENT PLAN"
            title="From Runtime Enforcement to Full Cluster Governance"
            body="The Kubernetes product should mature in clear phases so enforcement depth can increase without destabilizing the baseline runtime model."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {enforcementPlan.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Phase {index + 1}
                </p>
                <p className="mt-3 text-base font-medium text-white/85">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="VALIDATION GATES"
            title="Built to Prove Enforcement, Not Just Deployment"
            body="The operating model should validate that Kubernetes enforcement remains deterministic, synchronized, fail-closed, and trustworthy under real cluster conditions."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {validationGates.map((gate) => (
              <div
                key={gate}
                className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 text-sm font-medium text-white/85"
              >
                {gate}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="OPERATOR CONSOLE"
            title="Cluster Signals Where Operators Already Work"
            body="Cluster, workload, deny-pressure, and SIEM export views should appear where operators already manage runtime state so Kubernetes enforcement becomes part of the same governance surface rather than a disconnected tool."
          />
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="USE CASES"
            title="Designed for High-Stakes Kubernetes Environments"
            body="The Kubernetes product is aimed at teams who need cluster actions and workload behavior to remain governed under real operational pressure."
          />
          <div className="mt-10">
            <FeatureGrid items={useCases} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="DIFFERENTIATION"
            title="Why This Is Different"
            body="SecureTheCloud for Kubernetes is positioned as a governed runtime extension, not a disconnected Kubernetes security add-on."
          />
          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
            <div className="grid grid-cols-2 bg-white/[0.05] text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
              <div className="border-r border-white/10 px-6 py-4">
                Traditional Kubernetes Security
              </div>
              <div className="px-6 py-4">SecureTheCloud for Kubernetes</div>
            </div>
            {differentiationRows.map((row) => (
              <div
                key={row.traditional}
                className="grid grid-cols-2 border-t border-white/10 text-sm text-stc-muted"
              >
                <div className="border-r border-white/10 px-6 py-4">
                  {row.traditional}
                </div>
                <div className="px-6 py-4">{row.stc}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        headline="Bring SecureTheCloud governance into your Kubernetes runtime."
        subheadline="Connect clusters, enforce policy, surface workload risk, and export security-relevant telemetry without destabilizing your core control-plane baseline."
        primaryCta={{ label: "Request Kubernetes Preview", href: "/request-demo" }}
        secondaryCta={{ label: "View Architecture", href: "/architecture" }}
      />
    </>
  );
}
