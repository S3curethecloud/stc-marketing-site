import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
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

const focusMap: Record<string, { area: string; label: string }> = {
  "ai-security": { area: "Enterprise AI security architecture", label: "Enterprise AI security architecture" },
  "cloud-governance": { area: "Cloud governance and platform security", label: "Cloud governance and platform security" },
  "secure-adoption": { area: "Secure AI adoption strategy", label: "Secure AI adoption strategy" },
  governance: { area: "AI governance and compliance readiness", label: "AI governance and compliance readiness" },
  regulated: { area: "Healthcare or regulated AI workflows", label: "Healthcare or regulated AI workflows" },
  advisory: { area: "Executive advisory and solution design", label: "Executive advisory and solution design" },
};

type RequestDemoPageProps = {
  searchParams: Promise<{ focus?: string; from?: string }>;
};

export default async function RequestDemoPage({ searchParams }: RequestDemoPageProps) {
  const { focus, from } = await searchParams;
  const context = focus ? focusMap[focus] : undefined;
  const sourceContext = from ? `securethecloud.dev:${from}` : "securethecloud.dev";

  return (
    <Section className="relative overflow-hidden bg-[#030711]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.25),transparent_30rem),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.18),transparent_30rem)]" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-cyan-300 sm:text-sm sm:tracking-[0.45em]">Request Architecture Consultation</p>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:mt-6 sm:text-6xl lg:text-7xl">Bring the AI initiative. We&apos;ll help make the architecture defensible.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">Use this intake when you need serious help with enterprise AI security architecture, cloud governance, secure AI adoption, regulated workflows, or implementation-ready technical design.</p>

            {context ? (
              <div className="mt-6 border-l-2 border-cyan-300/60 pl-4 text-sm leading-6 text-slate-300">
                <p className="font-semibold text-white">Consultation context carried forward</p>
                <p className="mt-1">You arrived from a {context.label.toLowerCase()} path, so that area is preselected in the intake. You can change it at any time.</p>
              </div>
            ) : null}

            <div className="mt-7 rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5 text-sm leading-6 text-slate-300 sm:mt-8 sm:rounded-[2rem] sm:p-6">
              <p className="font-black uppercase tracking-[0.25em] text-violet-300">Best fit when</p>
              <ul className="mt-5 grid gap-3">
                {consultationFit.map((item) => <li key={item} className="flex gap-3"><span className="mt-1 text-cyan-300" aria-hidden="true">✦</span><span>{item}</span></li>)}
              </ul>
            </div>

            <div className="mt-6 rounded-[1.75rem] border border-cyan-300/20 bg-cyan-300/5 p-5 sm:rounded-[2rem] sm:p-6">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">What happens after you submit</p>
              <div className="mt-5 grid gap-5">
                {whatHappensNext.map((item) => (
                  <div key={item.number} className="grid grid-cols-[2.5rem_1fr] gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-xs font-black text-cyan-200">{item.number}</div>
                    <div><h2 className="text-base font-black text-white">{item.title}</h2><p className="mt-1 text-sm leading-6 text-slate-400">{item.body}</p></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 border-l-2 border-violet-400/50 pl-4 text-sm leading-6 text-slate-400">
              <p className="font-bold text-slate-200">This is not a generic product demo.</p>
              <p className="mt-1">The intake is designed to give the first conversation enough technical and business context to be useful from the start.</p>
            </div>
          </div>

          <DemoRequestForm defaultConsultationArea={context?.area} sourceContext={sourceContext} />
        </div>
      </Container>
    </Section>
  );
}
