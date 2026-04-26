import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import Hero from "@/components/marketing/Hero";
import SectionIntro from "@/components/marketing/SectionIntro";
import { productPortfolio } from "@/content/products";
import { companyContent } from "@/content/company";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: companyContent.meta.title,
  description: companyContent.meta.description,
  path: "/company",
});

export default function CompanyPage() {
  const c = companyContent;

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
            eyebrow="MISSION"
            title={c.mission.title}
            body={c.mission.body}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="CATEGORY THESIS"
            title={c.categoryThesis.title}
            body={c.categoryThesis.body}
          />
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="WHAT WE BUILD"
            title={c.whatWeBuild.title}
            body={c.whatWeBuild.body}
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
            title={c.doctrine.title}
            body="SecureTheCloud is opinionated about how autonomous systems should be governed in real operating environments."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {c.doctrine.items.map((item) => (
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
            title={c.audiences.title}
            body={c.audiences.body}
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {c.audiences.items.map((item) => (
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
