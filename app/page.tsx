import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import Hero from "@/components/marketing/Hero";
import ProofStrip from "@/components/marketing/ProofStrip";
import SectionIntro from "@/components/marketing/SectionIntro";
import { homepageContent } from "@/content/homepage";

export default function HomePage() {
  const c = homepageContent;

  return (
    <>
      <Hero
        eyebrow={c.hero.eyebrow}
        headline={c.hero.headline}
        subheadline={c.hero.subheadline}
        primaryCta={c.hero.primaryCta}
        secondaryCta={c.hero.secondaryCta}
      />

      <ProofStrip items={c.proof} />

      <Section>
        <Container>
          <SectionIntro
            eyebrow="WHY THIS MATTERS"
            title={c.intro.title}
            body={c.intro.body}
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
