import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import SectionIntro from "@/components/marketing/SectionIntro";
import { productPortfolio } from "@/content/products";

export const metadata: Metadata = {
  title: "Company",
  description:
    "SecureTheCloud builds deterministic runtime governance infrastructure for AI agents, autonomous systems, and high-trust execution environments.",
};

const doctrine = [
  "Enforcement matters more than observation.",
  "Policy authority must remain explicit.",
  "Runtime truth must not be invented in the UI.",
  "Autonomous systems require verifiable boundaries.",
  "Cross-system trust must be proven, not assumed.",
] as const;

const audiences = [
  "AI infrastructure teams",
  "Platform security teams",
  "Cloud and Kubernetes operators",
  "Regulated enterprise environments",
  "Builders of multi-agent systems",
] as const;

export default function CompanyPage() {
  return (
    <>
      <Section>
        <Container>
          <SectionIntro
            eyebrow="COMPANY"
            title="Building the Governance Layer for Autonomous Systems"
            body="SecureTheCloud builds infrastructure for governing AI agent actions before execution — with deterministic authorization, verifiable decisions, and runtime-grade enforcement."
          />

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/request-demo"
              className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
            >
              Request Demo
            </Link>

            <Link
              href="/architecture"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
            >
              Talk to Engineering
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="MISSION"
            title="Why SecureTheCloud Exists"
            body="AI systems are moving from assistance to execution. Organizations need more than post-event observability — they need a governed runtime that can authorize, deny, explain, and verify agent actions before those actions occur. SecureTheCloud exists to provide that control layer."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="CATEGORY THESIS"
            title="From AI Activity to AI Governance"
            body="SecureTheCloud is not built to watch autonomous systems after they act. It is built to govern what they are allowed to do, prove why a decision was made, and preserve a deterministic control path from request to execution or denial."
          />
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="WHAT WE BUILD"
            title="The SecureTheCloud Portfolio"
            body="SecureTheCloud is building a coordinated product portfolio around runtime governance, narrated intelligence, Kubernetes-native enforcement, and cross-domain trust."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {productPortfolio.map((product) => (
              <article
                key={product.href}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/10"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  {product.eyebrow}
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                  {product.name}
                </h3>

                <p className="mt-4 text-base leading-7 text-stc-muted">
                  {product.description}
                </p>

                <div className="mt-6">
                  <Link
                    href={product.href}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
                  >
                    View Product
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="OPERATING DOCTRINE"
            title="What We Believe"
            body="SecureTheCloud is opinionated about how autonomous systems should be governed in real operating environments."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {doctrine.map((item) => (
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
            eyebrow="WHO WE BUILD FOR"
            title="Built for Teams Operating High-Trust Systems"
            body="SecureTheCloud is designed for organizations that need runtime decisions to stay explicit, governed, and explainable under real operational pressure."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {audiences.map((item) => (
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

      <Section>
        <Container>
          <SectionIntro
            eyebrow="CLOSING"
            title="Serious Infrastructure for Autonomous Systems"
            body="SecureTheCloud is building a category around runtime governance for AI systems — not as a thin monitoring layer, but as infrastructure for authorization, explainability, and verifiable control."
          />
        </Container>
      </Section>

      <CTASection
        headline="Talk to the team building runtime governance for AI systems."
        subheadline="See how SecureTheCloud is approaching authorization, explainability, and governed execution as infrastructure, not a thin AI overlay."
        primaryCta={{ label: "Request Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Talk to Engineering", href: "/architecture" }}
      />
    </>
  );
}
