import Link from "next/link";
import Container from "@/components/layout/Container";

type CTA = {
  label: string;
  href: string;
};

type CTASectionProps = {
  headline: string;
  subheadline: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
};

export default function CTASection({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}: CTASectionProps) {
  return (
    <section className="border-t border-white/10 bg-stc-navy">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {headline}
            </h2>
            <p className="mt-4 text-base leading-7 text-stc-muted">
              {subheadline}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
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
