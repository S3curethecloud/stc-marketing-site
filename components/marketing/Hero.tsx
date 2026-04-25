import Link from "next/link";
import Container from "@/components/layout/Container";

type HeroCta = {
  label: string;
  href: string;
};

type HeroProps = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
};

export default function Hero({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <Container className="py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            {eyebrow}
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {headline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stc-muted">
            {subheadline}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
            >
              {primaryCta.label}
            </Link>

            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
