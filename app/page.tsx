import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CTASection from "@/components/marketing/CTASection";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import Hero from "@/components/marketing/Hero";
import ProofStrip from "@/components/marketing/ProofStrip";
import SectionIntro from "@/components/marketing/SectionIntro";
import ArchitectureFlow from "@/components/marketing/ArchitectureFlow";
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
            eyebrow="THE PROBLEM"
            title={c.problem.title}
            body={c.problem.intro}
          />

          <div className="mt-10">
            <FeatureGrid items={c.problem.cards} />
          </div>

          <p className="mt-10 text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {c.problem.punchline}
          </p>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="CATEGORY SHIFT"
            title={c.categoryShift.title}
            body={c.categoryShift.closing}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                {c.categoryShift.before.title}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                {c.categoryShift.before.summary}
              </h3>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-stc-muted">
                {c.categoryShift.before.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                {c.categoryShift.after.title}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                {c.categoryShift.after.summary}
              </h3>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-stc-muted">
                {c.categoryShift.after.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="HOW IT WORKS"
            title={c.howItWorks.title}
            body={c.howItWorks.intro}
          />

          <div className="mt-10">
            <ArchitectureFlow steps={c.howItWorks.steps} />
          </div>

          <p className="mt-10 max-w-4xl text-lg leading-8 text-stc-muted">
            {c.howItWorks.body}
          </p>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="PRODUCT PILLARS"
            title={c.pillars.title}
            body={c.pillars.strongLine}
          />

          <div className="mt-10">
            <FeatureGrid items={c.pillars.items} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="AEGIS CORE"
            title={c.aegisCore.title}
            body={c.aegisCore.subtitle}
          />

          <p className="mt-8 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {c.aegisCore.strongLine}
          </p>

          <div className="mt-10">
            <FeatureGrid items={c.aegisCore.items} />
          </div>

          <div className="mt-8">
            <Link
              href={c.aegisCore.cta.href}
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
            >
              {c.aegisCore.cta.label}
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="LIVE CONTROL PLANE"
            title={c.controlPlane.title}
            body={c.controlPlane.subtitle}
          />
          <p className="mt-6 max-w-4xl text-lg leading-8 text-stc-muted">
            {c.controlPlane.body}
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="DETERMINISTIC COPILOT"
            title={c.copilot.title}
            body={c.copilot.body}
          />
          <p className="mt-8 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {c.copilot.explanation}
          </p>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="KUBERNETES EXTENSION"
            title={c.kubernetes.title}
            body={c.kubernetes.subtitle}
          />
          <div className="mt-8">
            <Link
              href={c.kubernetes.cta.href}
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
            >
              {c.kubernetes.cta.label}
            </Link>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="AGENT SOVEREIGNTY ZONES"
            title={c.sovereigntyZones.title}
            body={c.sovereigntyZones.body}
          />
          <p className="mt-8 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {c.sovereigntyZones.quote}
          </p>
          <div className="mt-8">
            <Link
              href={c.sovereigntyZones.cta.href}
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
            >
              {c.sovereigntyZones.cta.label}
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="USE CASES"
            title={c.useCases.title}
            body="SecureTheCloud is built for environments where execution must be governed before action occurs."
          />
          <div className="mt-10">
            <FeatureGrid items={c.useCases.items} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="DIFFERENTIATION"
            title={c.differentiation.title}
            body="SecureTheCloud is designed as runtime governance infrastructure, not post-event AI security tooling."
          />

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
            <div className="grid grid-cols-3 bg-white/[0.05] text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
              <div className="border-r border-white/10 px-6 py-4">Category</div>
              <div className="border-r border-white/10 px-6 py-4">Traditional AI Security</div>
              <div className="px-6 py-4">SecureTheCloud</div>
            </div>

            {c.differentiation.rows.map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-3 border-t border-white/10 text-sm text-stc-muted"
              >
                <div className="border-r border-white/10 px-6 py-4 text-white/85">
                  {row[0]}
                </div>
                <div className="border-r border-white/10 px-6 py-4">{row[1]}</div>
                <div className="px-6 py-4">{row[2]}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <SectionIntro
            eyebrow="ENTERPRISE PROOF"
            title={c.enterpriseProof.title}
            body={c.enterpriseProof.body}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionIntro
            eyebrow="PRODUCT PORTFOLIO"
            title={c.portfolioPreview.title}
            body="Explore the coordinated SecureTheCloud product stack."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {c.portfolioPreview.items.map((item) => (
              <article
                key={item.href}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/10"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-white">
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
                    {item.ctaLabel}
                  </Link>
                </div>
              </article>
            ))}
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
