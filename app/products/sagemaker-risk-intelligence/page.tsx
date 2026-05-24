import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import SectionIntro from "@/components/marketing/SectionIntro";

export const metadata: Metadata = {
  title: "SageMaker Risk Intelligence Pipeline | SecureTheCloud",
  description:
    "SageMaker Risk Intelligence Pipeline is the SecureTheCloud production-stage offline risk intelligence and model pipeline for governed autonomous-system risk readiness.",
};

const stages = [
  {
    title: "Evidence Preparation",
    body: "Prepare sanitized evidence, risk signals, and governed context for offline risk-intelligence workflows.",
  },
  {
    title: "Feature Extraction",
    body: "Transform runtime, risk, trust, and evidence signals into model-ready features without granting runtime authority.",
  },
  {
    title: "Offline Model Pipeline",
    body: "Support production-stage offline model experimentation, evaluation, versioning, and readiness planning.",
  },
  {
    title: "Risk Intelligence Output",
    body: "Produce risk intelligence artifacts intended to inform governance and scoring workflows, not bypass policy authority.",
  },
];

const boundaries = [
  "Production-stage service",
  "Offline risk intelligence only",
  "No live runtime enforcement authority",
  "No replacement for OPA policy decisions",
  "No frontend-invented model truth",
  "No uncontrolled training-data exposure",
];

export default function SageMakerRiskIntelligencePage() {
  return (
    <>
      <Section>
        <Container>
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-fuchsia-300">
              INTELLIGENCE & AI READINESS SUITE
            </p>
            <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
              SageMaker Risk Intelligence Pipeline
            </h1>
            <p className="mt-6 text-xl leading-8 text-stc-muted">
              Production-stage offline risk intelligence and model pipeline for governed autonomous-system risk readiness.
            </p>
            <p className="mt-8 text-2xl font-semibold tracking-tight text-white">
              Model intelligence informs governance. It does not replace policy authority.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="OFFLINE RISK INTELLIGENCE"
            title="Turn governed evidence into risk intelligence readiness."
            body="The SageMaker Risk Intelligence Pipeline supports offline dataset preparation, feature extraction, model readiness, and risk-intelligence outputs while preserving SecureTheCloud authority boundaries."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {stages.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-fuchsia-300/25 bg-fuchsia-300/[0.05] p-6 shadow-2xl shadow-black/10"
              >
                <h2 className="text-xl font-semibold tracking-tight text-white">
                  {item.title}
                </h2>
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
            eyebrow="GOVERNANCE BOUNDARY"
            title="Risk intelligence informs. Policy still decides."
            body="This pipeline is designed for offline intelligence and readiness. It does not authorize, enforce, mutate systems, issue credentials, or replace deterministic policy decisions."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {boundaries.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-semibold text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        headline="Prepare governed evidence for offline risk intelligence."
        subheadline="Use the SageMaker Risk Intelligence Pipeline as the production-stage path for model-readiness planning, risk feature extraction, and explainable risk-intelligence outputs."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Explore Ecosystem", href: "/ecosystem" }}
      />
    </>
  );
}
