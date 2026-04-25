import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Demo Request Received",
  description:
    "Your SecureTheCloud demo request has been received. Our team will follow up with next steps.",
};

export default function RequestDemoSuccessPage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center shadow-2xl shadow-black/20 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            REQUEST RECEIVED
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Thank you. Your demo request is in.
          </h1>

          <p className="mt-6 text-lg leading-8 text-stc-muted">
            A {siteConfig.name} team member will review your request and follow
            up with the right next step for your evaluation, architecture
            review, or private product walkthrough.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
            >
              Return Home
            </Link>

            <Link
              href="/products/aegis-runtime"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
            >
              View Aegis Runtime
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
