import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import Hero from "@/components/marketing/Hero";
import SectionIntro from "@/components/marketing/SectionIntro";
import { securityContent } from "@/content/security";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: securityContent.meta.title,
  description: securityContent.meta.description,
  path: "/security",
});

export default function SecurityPage() {
  const c = securityContent;

  return (
    <>
      <Hero
        eyebrow={c.hero.eyebrow}
        headline={c.hero.headline}
        subheadline={c.hero.subheadline}
        primaryCta={c.hero.primaryCta}
        secondaryCta={{ label: "View Architecture", href: "/architecture" }}
      />

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="SECURITY MODEL OVERVIEW"
            title={c.overview.title}
            body={c.overview.body}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="IDENTITY AND TRUST BOUNDARIES"
            title={c.tenantIsolation.title}
            body={c.tenantIsolation.body}
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {c.tenantIsolation.bullets.map((item) => (
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
            eyebrow="POLICY AND AUTHORIZATION"
            title={c.authorization.title}
            body={c.authorization.body}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="EVIDENCE AND INTEGRITY"
            title={c.audit.title}
            body={c.audit.body}
          />
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="OPERATIONAL SECURITY"
            title={c.deployment.title}
            body={c.deployment.body}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="SECURITY PRINCIPLE"
            title={c.closing.title}
            body={c.closing.body}
          />
        </Container>
      </Section>

      <CTASection
        headline="Review the IKEVAR security architecture approach."
        subheadline="See how identity, authorization, trust boundaries, evidence, governance, and operational controls fit together across enterprise systems."
        primaryCta={c.cta.primaryCta}
        secondaryCta={c.cta.secondaryCta}
      />
    </>
  );
}
