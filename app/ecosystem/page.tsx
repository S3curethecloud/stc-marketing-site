import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import Hero from "@/components/marketing/Hero";
import SectionIntro from "@/components/marketing/SectionIntro";
import ArchitectureFlow from "@/components/marketing/ArchitectureFlow";
import { ecosystemContent } from "@/content/ecosystem";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: ecosystemContent.meta.title,
  description: ecosystemContent.meta.description,
  path: "/ecosystem",
});

export default function EcosystemPage() {
  const c = ecosystemContent;

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
            eyebrow="CONTROL-PLANE ECOSYSTEM"
            title={c.layers.title}
            body={c.layers.body}
            align="center"
          />

          <div className="mt-10">
            <FeatureGrid items={c.layers.items} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow={c.visual.eyebrow}
            title={c.visual.title}
            body={c.visual.body}
          />

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20">
            <Image
              src={c.visual.image.src}
              alt={c.visual.image.alt}
              width={1800}
              height={1200}
              className="h-auto w-full"
              priority
              unoptimized
            />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <div id="phase-2-roadmap">
        <Section className="border-y border-white/10 bg-white/[0.02]">
          <Container>
            <SectionIntro
              eyebrow="PHASE 2 ROADMAP"
              title="Active adversarial immunization and provenance assurance."
              body="SecureTheCloud Phase 2 extends the enterprise product portfolio with governed capability layers for streaming evidence, detection fabric, runtime challenge and containment, agent identity registry, provenance assurance, AI chaos validation, and policy feedback loops. The roadmap preserves the core doctrine: evidence proves, risk informs, OPA decides, runtime enforces, frontend renders governed truth, and LLMs explain only."
            />

            <div className="mt-10 overflow-hidden rounded-3xl border border-cyan-300/20 bg-slate-950/50 p-3 shadow-2xl shadow-cyan-950/20">
              <Image
                src="/images/roadmap/securethecloud-phase-2-roadmap.png"
                alt="SecureTheCloud Enterprise Product Portfolio Phase 2 Roadmap showing active adversarial immunization, provenance assurance, shared trust fabric, Phase 2 capability layer, active immune loop, SENTINEL adapter, and governed enterprise outcomes."
                width={2400}
                height={1600}
                className="h-auto w-full rounded-[1.5rem] border border-white/10"
                sizes="100vw"
                unoptimized
              />
            </div>
          </Container>
        </Section>
      </div>

      <SectionIntro
            eyebrow="GOVERNANCE DOCTRINE"
            title={c.doctrine.title}
            body={c.doctrine.body}
          />

          <div className="mt-10">
            <FeatureGrid items={c.doctrine.principles} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="GOVERNED LIFECYCLE"
            title={c.lifecycle.title}
            body={c.lifecycle.body}
          />

          <div className="mt-10">
            <ArchitectureFlow steps={c.lifecycle.steps} />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="PLATFORMS"
            title={c.platforms.title}
            body={c.platforms.body}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {c.platforms.items.map((item) => (
              <article
                key={item.href}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/10"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  {item.role}
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-stc-muted">
                  {item.body}
                </p>

                <div className="mt-6">
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
                  >
                    Explore
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
            eyebrow="AUTHORITY BOUNDARIES"
            title={c.boundaries.title}
            body={c.boundaries.body}
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {c.boundaries.items.map((item) => (
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
            eyebrow="OFFLINE INTELLIGENCE"
            title={c.intelligence.title}
            body={c.intelligence.body}
          />

          <div className="mt-10">
            <FeatureGrid items={c.intelligence.items} />
          </div>
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
