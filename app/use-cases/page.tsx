import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import Hero from "@/components/marketing/Hero";
import SectionIntro from "@/components/marketing/SectionIntro";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "Explore SecureTheCloud use cases across financial automation, cloud operations, Kubernetes enforcement, regulated environments, and multi-agent trust.",
};

const useCases = [
  {
    eyebrow: "FINANCIAL AUTOMATION",
    title: "Govern High-Risk Transactions Before Execution",
    body:
      "Use SecureTheCloud to govern refunds, payments, and sensitive transactional workflows through explicit authorization, risk-aware decisioning, and verifiable runtime records.",
  },
  {
    eyebrow: "CLOUD OPERATIONS",
    title: "Control AI-Driven Infrastructure Changes",
    body:
      "Apply deterministic policy enforcement and blast-radius awareness to infrastructure automation so cloud actions remain governed instead of merely observed.",
  },
  {
    eyebrow: "KUBERNETES ENFORCEMENT",
    title: "Extend Governance Into Cluster and Workload Boundaries",
    body:
      "SecureTheCloud for Kubernetes expands the baseline runtime model into clusters, service accounts, workloads, and SIEM-connected detection flows.",
  },
  {
    eyebrow: "REGULATED ENVIRONMENTS",
    title: "Preserve Explainability and Audit Readiness in High-Trust Domains",
    body:
      "SecureTheCloud keeps access and execution decisions explicit, reconstructible, and policy-backed for teams operating under compliance, evidence, and traceability requirements.",
  },
  {
    eyebrow: "MULTI-AGENT TRUST",
    title: "Coordinate Autonomous Systems Without Implicit Trust",
    body:
      "Agent Sovereignty Zones enables agents to interact across governed trust boundaries without collapsing control into shared infrastructure or unverified assumptions.",
  },
] as const;

export default function UseCasesPage() {
  return (
    <>
      <Hero
        eyebrow="USE CASES"
        headline="Where Runtime Governance Matters Most"
        subheadline="SecureTheCloud is built for teams operating autonomous systems, high-trust workflows, and environments where execution must be governed before it happens."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "View Architecture", href: "/architecture" }}
      />

      {useCases.map((item, index) => (
        <Section
          key={item.title}
          className={index % 2 === 1 ? "border-y border-white/10 bg-white/[0.02]" : ""}
        >
          <Container>
            <SectionIntro
              eyebrow={item.eyebrow}
              title={item.title}
              body={item.body}
            />
          </Container>
        </Section>
      ))}

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="CLOSING"
            title="Use Runtime Governance Where the Cost of Wrong Execution Is High"
            body="SecureTheCloud is built for environments where action must be authorized, governed, and explainable before execution — not reconstructed after damage has already occurred."
          />
        </Container>
      </Section>

      <CTASection
        headline="See the use cases behind governed autonomy."
        subheadline="Walk through the operating patterns, risk models, and architecture paths behind SecureTheCloud use cases."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Talk to Engineering", href: "/architecture" }}
      />
    </>
  );
}
