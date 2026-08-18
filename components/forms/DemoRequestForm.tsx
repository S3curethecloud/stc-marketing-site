"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import InputField from "@/components/forms/InputField";
import TextAreaField from "@/components/forms/TextAreaField";
import { siteConfig } from "@/content/site";

type DemoRequestFormProps = {
  action?: string;
  redirectUrl?: string;
  className?: string;
  defaultConsultationArea?: string;
  sourceContext?: string;
};

type FormspreeError = { field?: string; message: string };
type FormspreeResponse = { ok?: boolean; next?: string; errors?: FormspreeError[] };

export const consultationAreas = [
  "Enterprise AI security architecture",
  "Cloud governance and platform security",
  "Secure AI adoption strategy",
  "AI governance and compliance readiness",
  "Healthcare or regulated AI workflows",
  "Executive advisory and solution design",
  "Other / not sure yet",
] as const;

const focusAreaMap: Record<string, (typeof consultationAreas)[number]> = {
  "ai-security": "Enterprise AI security architecture",
  "cloud-governance": "Cloud governance and platform security",
  "secure-adoption": "Secure AI adoption strategy",
  governance: "AI governance and compliance readiness",
  regulated: "Healthcare or regulated AI workflows",
  advisory: "Executive advisory and solution design",
};

const buyerRoles = [
  "CISO / security leader",
  "CTO / CIO / technology executive",
  "AI, data, or innovation leader",
  "Cloud or platform engineering leader",
  "GRC, risk, privacy, or compliance leader",
  "Healthcare or regulated-operations leader",
  "Founder / business sponsor",
  "Other",
] as const;

const timelines = [
  "Immediate / active initiative",
  "Next 30 days",
  "This quarter",
  "Exploring for future planning",
] as const;

export default function DemoRequestForm({
  action = "https://formspree.io/f/mzdjyodg",
  redirectUrl = `${siteConfig.url}/request-demo/success`,
  className = "",
  defaultConsultationArea = "",
  sourceContext = "",
}: DemoRequestFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const focus = searchParams.get("focus") ?? "";
  const from = searchParams.get("from") ?? "";
  const queryArea = focusAreaMap[focus] ?? "";
  const candidateArea = defaultConsultationArea || queryArea;
  const validDefaultArea = consultationAreas.includes(candidateArea as (typeof consultationAreas)[number]) ? candidateArea : "";
  const resolvedSourceContext = sourceContext || (from ? `securethecloud.dev:${from}` : "securethecloud.dev");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(action, { method: "POST", headers: { Accept: "application/json" }, body: formData });
      const data = (await response.json().catch(() => ({}))) as FormspreeResponse;
      if (!response.ok) {
        setErrorMessage(data.errors?.[0]?.message || "Something went wrong while submitting your request. Please try again.");
        setIsSubmitting(false);
        return;
      }
      form.reset();
      router.push("/request-demo/success");
    } catch {
      setErrorMessage("Network error while submitting your request. Please try again.");
      setIsSubmitting(false);
    }
  }

  const selectClassName = "min-h-12 w-full min-w-0 max-w-full rounded-md border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition-colors hover:border-white/20 focus-visible:border-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-300/25";

  return (
    <form
      aria-label="Request consultation form"
      aria-describedby="consultation-form-guidance"
      action={action}
      method="POST"
      onSubmit={handleSubmit}
      className={`w-full min-w-0 max-w-full overflow-hidden border border-white/10 bg-[#060a15]/90 p-5 sm:p-7 ${className}`}
    >
      <input type="hidden" name="_redirect" value={redirectUrl} />
      <input type="hidden" name="_subject" value="SecureTheCloud consultation request" />
      <input type="hidden" name="source" value={resolvedSourceContext} />
      <input type="hidden" name="requestType" value="enterprise consultation" />

      <label className="sr-only">Leave this field empty<input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" /></label>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300 sm:tracking-[0.28em]">Architecture consultation intake</p>
        <h2 className="mt-3 max-w-full text-2xl font-semibold tracking-tight text-white sm:text-3xl">Tell us what you are trying to build, secure, govern, or modernize.</h2>
        <p id="consultation-form-guidance" className="mt-3 max-w-full text-sm leading-6 text-slate-400">Give us enough context to prepare for a useful architecture conversation. Fields marked with an asterisk are required.</p>
        {validDefaultArea ? <p className="mt-4 max-w-full border-l-2 border-cyan-300/60 pl-3 text-sm leading-6 text-slate-300">We carried forward the consultation context from the page you were reviewing. You can change the selected area below.</p> : null}
      </div>

      <div className="mt-7 grid min-w-0 gap-5">
        <div className="grid min-w-0 gap-5 sm:grid-cols-2"><InputField label="Full name" name="fullName" required autoComplete="name" /><InputField label="Work email" name="email" type="email" required autoComplete="email" /></div>
        <div className="grid min-w-0 gap-5 sm:grid-cols-2"><InputField label="Company" name="company" required autoComplete="organization" /><InputField label="Role / title" name="role" autoComplete="organization-title" /></div>

        <label className="grid min-w-0 gap-2 text-sm font-medium text-white/90"><span>Your role in the initiative<span className="ml-1 text-cyan-300" aria-hidden="true">*</span></span><select required aria-required="true" name="buyerRole" defaultValue="" className={selectClassName}><option value="" disabled>Select your role</option>{buyerRoles.map((role) => <option key={role} value={role}>{role}</option>)}</select></label>
        <label className="grid min-w-0 gap-2 text-sm font-medium text-white/90"><span>Primary consultation area<span className="ml-1 text-cyan-300" aria-hidden="true">*</span></span><select required aria-required="true" name="consultationArea" defaultValue={validDefaultArea} className={selectClassName}><option value="" disabled>Select an area</option>{consultationAreas.map((area) => <option key={area} value={area}>{area}</option>)}</select></label>
        <label className="grid min-w-0 gap-2 text-sm font-medium text-white/90"><span>Timeline<span className="ml-1 text-cyan-300" aria-hidden="true">*</span></span><select required aria-required="true" name="timeline" defaultValue="" className={selectClassName}><option value="" disabled>Select timeline</option>{timelines.map((timeline) => <option key={timeline} value={timeline}>{timeline}</option>)}</select></label>

        <TextAreaField label="What business, security, cloud, AI, or compliance problem are you trying to solve?" name="problemStatement" rows={5} required placeholder="Example: We are deploying GenAI workflows across multiple teams and need secure architecture, governance, controls, and implementation guidance before production." />
        <TextAreaField label="What systems, clouds, AI platforms, or regulated workflows are involved?" name="environmentContext" rows={4} placeholder="Example: AWS, Azure OpenAI, OpenAI API, Anthropic Claude, RAG pipelines, Kubernetes, EHR workflows, sensitive data, SOC 2, HIPAA, or internal governance requirements." />

        <div aria-live="polite" aria-atomic="true">{errorMessage ? <p role="alert" className="border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">{errorMessage}</p> : isSubmitting ? <p className="text-sm text-slate-400">Submitting your consultation request...</p> : null}</div>

        <button type="submit" disabled={isSubmitting} className="mt-1 inline-flex min-h-12 w-full min-w-0 items-center justify-center rounded-md bg-cyan-300 px-4 py-3 text-center text-sm font-semibold text-[#021018] hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060a15] disabled:cursor-not-allowed disabled:opacity-70 sm:px-6">{isSubmitting ? "Submitting..." : "Request Architecture Consultation"}</button>

        <div className="min-w-0 border-t border-white/10 pt-4 text-xs leading-5 text-slate-400"><p className="font-semibold text-slate-300">Share business context, not sensitive data.</p><p className="mt-1">Do not include passwords, credentials, protected health information, customer records, secrets, or highly sensitive production data. We only need enough context to prepare for the first conversation.</p></div>
      </div>
    </form>
  );
}
