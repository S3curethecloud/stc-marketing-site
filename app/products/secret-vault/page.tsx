import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import SectionIntro from "@/components/marketing/SectionIntro";

export const metadata: Metadata = {
  title: "Secret Vault | SecureTheCloud",
  description:
    "Secret Vault provides governed secret custody and controlled reference retrieval for SecureTheCloud autonomous-system governance workflows.",
};

const capabilities = [
  {
    title: "Governed Secret Custody",
    body: "Preserves secret custody under explicit governance boundaries instead of exposing credentials directly to autonomous systems.",
  },
  {
    title: "Controlled Reference Retrieval",
    body: "Supports reference-based secret access patterns so products can request governed references without becoming credential authorities.",
  },
  {
    title: "SENTINEL Resolution Boundary",
    body: "Works with SENTINEL as the controlled resolution and forwarding boundary for vault references.",
  },
  {
    title: "Evidence-Backed Access Flow",
    body: "Designed so secret-reference activity can produce reviewable evidence without leaking sensitive material.",
  },
];

const boundaries = [
  "No uncontrolled credential exposure",
  "No product authority merger",
  "No bypass around SENTINEL reference resolution",
  "No secret material rendered into frontend surfaces",
];

export default function SecretVaultPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-amber-300">
              FEDERATION, SECRETS & TRUST SERVICES
            </p>
            <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Secret Vault
            </h1>
            <p className="mt-6 text-xl leading-8 text-stc-muted">
              Governed secret custody and controlled reference retrieval for autonomous-system trust workflows.
            </p>
            <p className="mt-8 text-2xl font-semibold tracking-tight text-white">
              Secrets remain governed. References move through approved boundaries.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="CORE CAPABILITIES"
            title="Secret custody without uncontrolled credential exposure."
            body="Secret Vault is positioned as a governed trust service for secret reference management, custody context, and controlled retrieval workflows."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-amber-300/25 bg-amber-300/[0.05] p-6 shadow-2xl shadow-black/10"
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
            eyebrow="AUTHORITY BOUNDARY"
            title="Vault references do not collapse platform authority."
            body="Secret Vault supports governed custody and controlled reference retrieval. It does not turn every consuming product into a secret authority."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
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
        headline="Add governed secret custody to autonomous-system control workflows."
        subheadline="Use Secret Vault as the governed custody and reference-retrieval layer for SecureTheCloud trust, federation, and runtime governance patterns."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Explore Ecosystem", href: "/ecosystem" }}
      />
    </>
  );
}
