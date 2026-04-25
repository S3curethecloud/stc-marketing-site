import Link from "next/link";
import Container from "@/components/layout/Container";

type ProductHeroCta = {
  label: string;
  href: string;
};

type ProductHeroProps = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: ProductHeroCta;
  secondaryCta?: ProductHeroCta;
};

export default function ProductHero({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}: ProductHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <Container className="py-24 md:py-28 lg:py-32">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            {eyebrow}
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
            {headline}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stc-muted">
            {subheadline}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
            >
              {primaryCta.label}
            </Link>

            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
