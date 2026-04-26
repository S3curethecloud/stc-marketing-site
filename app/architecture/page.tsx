import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import Hero from "@/components/marketing/Hero";
import SectionIntro from "@/components/marketing/SectionIntro";
import ArchitectureFlow from "@/components/marketing/ArchitectureFlow";
import { architectureContent } from "@/content/architecture";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: architectureContent.meta.title,
  description: architectureContent.meta.description,
  path: "/architecture",
});

export default function ArchitecturePage() {
  const c = architectureContent;

  return (
    <>
      <Hero
        eyebrow={c.hero.eyebrow}
        headline={c.hero.headline}
        subheadline={c.hero.subheadline}
        primaryCta={c.hero.primaryCta}
        secondaryCta={c.hero.secondaryCta}
      />

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="REQUEST FLOW"
            title={c.requestFlow.title}
            body={c.requestFlow.body}
          />
          <div className="mt-10">
            <ArchitectureFlow steps={c.requestFlow.steps} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="PLANES OF RESPONSIBILITY"
            title={c.runtimeSplit.title}
            body={c.runtimeSplit.body}
          />
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="DECISION AUTHORITY"
            title={c.opa.title}
            body={c.opa.body}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="DETERMINISTIC RECORD"
            title={c.ddr.title}
            body={c.ddr.body}
          />
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="AEGIS CORE"
            title={c.aegisCore.title}
            body={c.aegisCore.body}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="KUBERNETES EXTENSION"
            title={c.kubernetes.title}
            body={c.kubernetes.body}
          />
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="CROSS-ZONE TRUST"
            title={c.crossZone.title}
            body={c.crossZone.body}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="CLOSING"
            title={c.closing.title}
            body={c.closing.body}
          />
        </Container>
      </Section>

      <CTASection
        headline={c.cta.headline}
        subheadline={c.cta.subheadline}
        primaryCta={c.cta.primaryCta}
        secondaryCta={c.cta.secondaryCta}
      />
    </>
  );
}
