import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import Hero from "@/components/marketing/Hero";
import SectionIntro from "@/components/marketing/SectionIntro";
import { useCasesContent } from "@/content/useCases";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: useCasesContent.meta.title,
  description: useCasesContent.meta.description,
  path: "/use-cases",
});

export default function UseCasesPage() {
  const c = useCasesContent;

  return (
    <>
      <Hero
        eyebrow={c.hero.eyebrow}
        headline={c.hero.headline}
        subheadline={c.hero.subheadline}
        primaryCta={c.hero.primaryCta}
        secondaryCta={c.hero.secondaryCta}
      />

      {c.sections.map((item, index) => (
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
