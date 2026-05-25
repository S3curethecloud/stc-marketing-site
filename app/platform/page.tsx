import Link from "next/link";
import Image from "next/image";
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
    "Explore the SecureTheCloud Sovereign Agent Control Plane: a modular platform model for runtime governance, evidence, risk intelligence, federation, secrets, and trust intelligence.",
  path: "/platform",
});

const operatingModel = [
  {
    title: "Runtime Governance",
    body:
      "Aegis Runtime and Kubernetes Sentinel provide the runtime governance and enforcement surfaces for autonomous-system actions before production risk expands.",
  },
  {
    title: "Evidence and Audit",
    body:
      "Agent Blackbox, Veracity, and audit-ready evidence flows preserve reconstructible proof for decisions, claims, investigations, and governance review.",
  },
  {
    title: "Risk and Trust Intelligence",
    body:
      "RiskDNA, SageMaker risk readiness, and Trust Intelligence Copilot help teams understand risk, readiness, context, and governed explanations.",
  },
  {
    title: "Federation, Secrets, and Boundaries",
    body:
      "ASZ, SAFP, Secret Vault, and SENTINEL preserve cross-zone trust, governed custody, reference resolution, and boundary protection.",
  },
] as const;

const portfolioLayers = [
  {
    title: "Shared Trust Fabric",
    body:
      "Common governance, evidence, risk, identity, context, and integration flows connect products without collapsing product authority.",
  },
  {
    title: "Customer-Offerable Product Suites",
    body:
      "Products can be adopted independently, grouped by suite, or deployed as a connected enterprise portfolio.",
  },
  {
    title: "Composition Layer",
    body:
      "The platform assembles modules with secure defaults, approved interfaces, and preserved authority boundaries.",
  },
  {
    title: "SENTINEL Adapter",
    body:
      "SENTINEL validates, forwards, resolves vault references, generates evidence, and protects cross-component boundaries.",
  },
] as const;

const commandCenterCapabilities = [
  {
    title: "Runtime Posture",
    body:
      "Surface audit integrity, active sessions, policy revision, and runtime risk state from the runtime command surface.",
  },
  {
    title: "Authorization Decisions",
    body:
      "Show decision activity for tenant, principal, intent, allow/deny result, risk, and policy context.",
  },
  {
    title: "RiskDNA Replay",
    body:
      "Replay the authorization path and risk tier behind governed runtime activity.",
  },
  {
    title: "Blast-Radius Visibility",
    body:
      "Expose topology and downstream impact signals connected to runtime decision pressure.",
  },
] as const;

const doctrine = [
  "Evidence proves",
  "Risk informs",
  "OPA decides",
  "Runtime enforces",
  "Frontend renders backend truth",
  "LLM explains only",
] as const;

export default function PlatformPage() {
  return (
    <>
      <Hero
        eyebrow="SOVEREIGN AGENT CONTROL PLANE"
        headline="The platform model for governed autonomous systems."
        subheadline="SecureTheCloud connects modular products for runtime governance, evidence, risk intelligence, federation, secret custody, and trust intelligence without collapsing them into one unsafe authority layer."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Explore Ecosystem", href: "/ecosystem" }}
      />

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="ENTERPRISE PRODUCT PORTFOLIO"
            title="Modular platforms connected through governed trust."
            body="The SecureTheCloud platform is a portfolio model: products can stand alone, operate as suites, or connect through approved policy, evidence, trust, and control workflows."
          />

          <div className="mt-10 overflow-hidden rounded-3xl border border-cyan-300/20 bg-slate-950/50 p-3 shadow-2xl shadow-cyan-950/20">
            <Image
              src="/images/portfolio/securethecloud-enterprise-product-portfolio.webp"
              alt="SecureTheCloud Enterprise Product Portfolio diagram showing shared trust fabric, product suites, composition layer, SENTINEL adapter, enterprise outcomes, and buyer mapping"
              width={1800}
              height={1800}
              className="h-auto w-full rounded-[1.5rem] border border-white/10"
              sizes="100vw"
              priority
              unoptimized
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="PLATFORM OPERATING MODEL"
            title="A control-plane architecture, not a single bundled dashboard."
            body="SecureTheCloud separates governance, runtime enforcement, evidence, risk intelligence, trust orchestration, secret custody, and explanation so each layer keeps its authority clear."
          />

          <div className="mt-10">
            <FeatureGrid items={operatingModel} />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="RUNTIME COMMAND CENTER"
            title="Runtime governance command-center preview."
            body="This interface represents the runtime command surface for posture, authorization decisions, RiskDNA replay, blast-radius visibility, and active session control within the broader SecureTheCloud Sovereign Agent Control Plane."
          />

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20">
            <Image
              src="/images/platform/platform.png"
              alt="SecureTheCloud Runtime Governance Command Center dashboard showing runtime posture, authorization decisions, RiskDNA replay, blast-radius visibility, and active sessions"
              width={1600}
              height={1200}
              className="h-auto w-full"
              unoptimized
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="PLATFORM LAYERS"
            title="Each layer connects through approved interfaces."
            body="The platform is designed for modular adoption. Products can connect through the shared trust fabric and Composition Layer without absorbing each other’s authority."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {portfolioLayers.map((item) => (
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
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="COMMAND-CENTER SCOPE"
            title="What the runtime command center represents."
            body="The screenshot is an operational surface for runtime governance. It is not the complete platform visual, and it does not replace the portfolio architecture."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {commandCenterCapabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.05] p-6 shadow-2xl shadow-black/10"
              >
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-stc-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="GOVERNANCE DOCTRINE"
            title="Authority stays explicit."
            body="SecureTheCloud is structured so proof, risk, policy, runtime enforcement, frontend rendering, and LLM explanation do not collapse into one decision path."
          />

          <div className="mt-10 grid gap-3 md:grid-cols-3 xl:grid-cols-6">
            {doctrine.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center text-sm font-semibold text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        headline="Review the SecureTheCloud platform as a governed enterprise portfolio."
        subheadline="See how runtime governance, evidence, risk intelligence, federation, secret custody, trust intelligence, Composition Layer, and SENTINEL fit into one modular control-plane model."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "View Product Portfolio", href: "/products" }}
      />
    </>
  );
}
