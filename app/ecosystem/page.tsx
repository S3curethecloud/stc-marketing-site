import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

export const metadata = {
  title: "Ecosystem Archive",
  description:
    "Historical SecureTheCloud ecosystem architecture retained by IKEVAR.",
};

export default function EcosystemArchiveNoticePage() {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Legacy Architecture Archive
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            SecureTheCloud Control Plane Ecosystem
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            This ecosystem architecture represents historical SecureTheCloud
            platform composition, governance doctrine, and capability
            relationships preserved by IKEVAR.
          </p>

          <div className="mt-10 border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold text-white">
              Current IKEVAR portfolio
            </h2>

            <p className="mt-4 text-slate-300">
              IKEVAR's current portfolio is organized around enterprise
              intelligence:
            </p>

            <ul className="mt-4 space-y-2 text-slate-300">
              <li>NEXUS — Architecture Intelligence</li>
              <li>COVENANT — Enterprise Constitutional Intelligence</li>
              <li>FUTURESTATE — Enterprise Consequence Intelligence</li>
              <li>ATA — Autonomous Trust</li>
              <li>Humanize Enterprise — Human + AI Productivity</li>
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-6">
            <Link
              href="/archive/control-plane-ecosystem"
              className="text-cyan-300 hover:text-cyan-200"
            >
              View ecosystem archive →
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
