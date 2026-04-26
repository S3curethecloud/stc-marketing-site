import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import ProductHero from "@/components/marketing/ProductHero";
import SectionIntro from "@/components/marketing/SectionIntro";
import ArchitectureFlow from "@/components/marketing/ArchitectureFlow";
import { aegisRuntimeContent } from "@/content/products";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: aegisRuntimeContent.meta.title,
  description: aegisRuntimeContent.meta.description,
  path: "/products/aegis-runtime",
});

export default function AegisRuntimePage() {
  const c = aegisRuntimeContent;

  return (
    <>
      <ProductHero
        eyebrow={c.hero.eyebrow}
        headline={c.hero.headline}
        subheadline={c.hero.subheadline}
        primaryCta={c.hero.primaryCta}
        secondaryCta={c.hero.secondaryCta}
      />

      <Section>
        <Container>
          <SectionIntro
            eyebrow="THE PROBLEM"
            title={c.problem.title}
            body={c.problem.body}
          />
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="DETERMINISTIC CONTROL PATH"
            title={c.flow.title}
            body={c.flow.intro}
          />
          <div className="mt-10">
            <ArchitectureFlow steps={c.flow.steps} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="PRODUCT PILLARS"
            title={c.pillars.title}
            body="Aegis Runtime is designed to keep execution explicit, governed, and audit-ready."
          />
          <div className="mt-10">
            <FeatureGrid items={c.pillars.items} />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="AEGIS CORE RELATIONSHIP"
            title={c.aegisCore.title}
            body={c.aegisCore.body}
          />
          <p className="mt-8 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {c.aegisCore.strongLine}
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="LIVE CONTROL PLANE"
            title={c.controlPlane.title}
            body={c.controlPlane.body}
          />
        </Container>
      </Section>

      <CTASection
        headline="See Aegis Runtime in a private technical walkthrough."
        subheadline="Review the governed decision path, runtime authorization model, and architecture patterns with the SecureTheCloud team."
        primaryCta={{ label: "Request Private Demo", href: "/request-demo" }}
        secondaryCta={{ label: "View Product Portfolio", href: "/products" }}
      />
    </>
  );
}
