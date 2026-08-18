import { Suspense } from "react";
import Container from "@/components/layout/Container";
import DemoRequestForm from "@/components/forms/DemoRequestForm";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Request Enterprise AI Architecture Consultation",
  description:
    "Request a SecureTheCloud consultation for enterprise AI security architecture, cloud governance, secure AI adoption, and implementation-ready technical design.",
  path: "/request-demo",
});

const consultationFit = [
  "You are planning or scaling GenAI, agentic AI, RAG, or AI-enabled workflows.",
  "You need secure architecture across cloud, identity, data, governance, and compliance.",
  "You need help translating vague AI ambition into implementation-ready technical design.",
  "You operate in healthcare, financial services, SaaS, cloud, or another regulated environment.",
  "You need executive-ready and engineering-ready artifacts for delivery alignment.",
] as const;

const whatHappensNext = [
  { number: "01", title: "Context review", body: "We review the business goal, AI use case, security posture, compliance pressure, and delivery constraints you share." },
  { number: "02", title: "Architecture routing", body: "We identify whether the right first conversation is architecture review, cloud governance, secure AI adoption, regulated workflow design, or executive advisory." },
  { number: "03", title: "Practical next step", body: "If there is a fit, the conversation can lead to an assessment, architecture workshop, design package, governance engagement, or delivery roadmap." },
] as const;

export default function RequestDemoPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#030711]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Request architecture consultation
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
                Bring the AI initiative. We&apos;ll help make the architecture defensible.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Use this intake when you need serious help with enterprise AI security architecture, cloud governance, secure AI adoption, regulated workflows, or implementation-ready technical design.
              </p>

              <div className="mt-9 border-y border-white/10 py-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">Best fit when</p>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-300">
                  {consultationFit.map((item) => <li key={item}>— {item}</li>)}
                </ul>
              </div>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">What happens after you submit</p>
                <div className="mt-5 divide-y divide-white/10 border-y border-white/10">
                  {whatHappensNext.map((item) => (
                    <div key={item.number} className="grid grid-cols-[2.5rem_1fr] gap-3 py-5">
                      <div className="text-sm font-semibold text-cyan-300">{item.number}</div>
                      <div><h2 className="text-base font-semibold text-white">{item.title}</h2><p className="mt-1 text-sm leading-6 text-slate-400">{item.body}</p></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 border-l-2 border-white/15 pl-4 text-sm leading-6 text-slate-400">
                <p className="font-semibold text-slate-200">This is not a generic product demo.</p>
                <p className="mt-1">The intake is designed to give the first conversation enough technical and business context to be useful from the start.</p>
              </div>
            </div>

            <Suspense fallback={<div className="min-h-[48rem] border border-white/10 bg-[#060a15]/90" aria-hidden="true" />}>
              <DemoRequestForm />
            </Suspense>
          </div>
        </Container>
      </section>
    </>
  );
}
