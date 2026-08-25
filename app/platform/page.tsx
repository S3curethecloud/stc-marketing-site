import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Platform Archive",
  description:
    "Historical SecureTheCloud platform architecture retained by IKEVAR as technical provenance.",
  path: "/platform",
});

export default function PlatformArchiveNoticePage() {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Legacy Architecture Archive
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            SecureTheCloud Platform Architecture
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            This platform model represents historical SecureTheCloud
            architecture work preserved by IKEVAR as technical provenance.
            It is not the current IKEVAR product portfolio.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-xl font-semibold text-white">
                Historical platform themes
              </h2>

              <ul className="mt-4 space-y-2 text-slate-300">
                <li>Runtime governance</li>
                <li>Evidence and audit models</li>
                <li>Risk intelligence</li>
                <li>Trust boundaries</li>
              </ul>
            </div>

            <div className="border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-xl font-semibold text-white">
                Current IKEVAR direction
              </h2>

              <p className="mt-4 text-slate-300">
                Explore the current enterprise intelligence portfolio:
                NEXUS, COVENANT, FUTURESTATE, ATA, and Humanize Enterprise.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-6">
            <Link
              href="/archive/sovereign-agent-control-plane"
              className="text-cyan-300 hover:text-cyan-200"
            >
              View platform archive →
            </Link>

            <Link
              href="/products"
              className="text-slate-300 hover:text-white"
            >
              Explore current products →
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
