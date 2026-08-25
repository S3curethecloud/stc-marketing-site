import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

type LegacyProductGatewayProps = {
  name: string;
  description: string;
  archiveHref: string;
};

export default function LegacyProductGateway({
  name,
  description,
  archiveHref,
}: LegacyProductGatewayProps) {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Legacy Product Reference
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {name}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            {description}
          </p>

          <p className="mt-4 text-base leading-7 text-slate-400">
            This product belongs to the historical SecureTheCloud architecture
            portfolio preserved by IKEVAR as technical provenance. It is not
            part of the current IKEVAR public product portfolio.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            <Link
              href={archiveHref}
              className="text-cyan-300 hover:text-cyan-200"
            >
              View full historical architecture →
            </Link>

            <Link
              href="/products"
              className="text-slate-300 hover:text-white"
            >
              Explore current IKEVAR products →
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
