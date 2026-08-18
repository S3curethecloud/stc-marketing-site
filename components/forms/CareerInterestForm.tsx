"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/components/forms/InputField";
import TextAreaField from "@/components/forms/TextAreaField";
import { careerRoles } from "@/content/careers";
import { siteConfig } from "@/content/site";

type CareerInterestFormProps = {
  action?: string;
  redirectUrl?: string;
  className?: string;
  defaultRoleSlug?: string;
};

type FormspreeError = { field?: string; message: string };
type FormspreeResponse = { ok?: boolean; next?: string; errors?: FormspreeError[] };

const experienceAreas = [
  "AI security architecture",
  "Cloud governance and platform security",
  "Secure AI engineering",
  "AI governance, risk, and compliance",
  "Healthcare or regulated AI workflows",
  "Client advisory or consulting",
  "Other",
] as const;

const availability = [
  "Interested now",
  "Open to future opportunities",
  "Exploring advisory or contract work",
  "Just joining the talent network",
] as const;

export default function CareerInterestForm({
  action = "https://formspree.io/f/mzdjyodg",
  redirectUrl = `${siteConfig.url}/careers/join/success`,
  className = "",
  defaultRoleSlug = "",
}: CareerInterestFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  useEffect(() => {
    const roleSlug = defaultRoleSlug || new URLSearchParams(window.location.search).get("role") || "";
    setSelectedRole(careerRoles.find((role) => role.slug === roleSlug)?.title || "");
  }, [defaultRoleSlug]);

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
        setErrorMessage(data.errors?.[0]?.message || "Something went wrong while submitting your interest. Please try again.");
        setIsSubmitting(false);
        return;
      }
      form.reset();
      router.push("/careers/join/success");
    } catch {
      setErrorMessage("Network error while submitting your interest. Please try again.");
      setIsSubmitting(false);
    }
  }

  const selectClassName = "min-h-12 rounded-md border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition-colors hover:border-white/20 focus-visible:border-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-300/25";

  return (
    <form aria-label="Career interest form" action={action} method="POST" onSubmit={handleSubmit} className={`border border-white/10 bg-[#060a15]/90 p-5 sm:p-7 ${className}`}>
      <input type="hidden" name="_redirect" value={redirectUrl} />
      <input type="hidden" name="_subject" value="SecureTheCloud career interest" />
      <input type="hidden" name="source" value="securethecloud.dev/careers" />
      <input type="hidden" name="requestType" value="career interest" />
      <label className="sr-only">Leave this field empty<input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" /></label>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Talent intake</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Express interest in joining SecureTheCloud.</h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">Share your background, role interest, and portfolio links. We will use this to understand fit for future hiring, advisory, contract, or collaboration conversations.</p>
      </div>

      <div className="mt-7 grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2"><InputField label="Full name" name="fullName" required autoComplete="name" /><InputField label="Email" name="email" type="email" required autoComplete="email" /></div>
        <div className="grid gap-5 sm:grid-cols-2"><InputField label="Current role / title" name="currentRole" autoComplete="organization-title" /><InputField label="Location / remote preference" name="locationPreference" placeholder="Example: Dallas, TX | Remote | Open to travel" /></div>
        <div className="grid gap-5 sm:grid-cols-2"><InputField label="LinkedIn profile" name="linkedin" placeholder="https://linkedin.com/in/..." /><InputField label="GitHub / portfolio" name="portfolio" placeholder="GitHub, website, portfolio, or writing link" /></div>
        <InputField label="Resume link" name="resumeLink" placeholder="Google Drive, Dropbox, personal site, or LinkedIn resume link" />

        <label className="grid gap-2 text-sm font-medium text-white/90"><span>Role of interest</span><select required name="roleInterest" value={selectedRole} onChange={(event) => setSelectedRole(event.target.value)} className={selectClassName}><option value="" disabled>Select a role</option>{careerRoles.map((role) => <option key={role.slug} value={role.title}>{role.title}</option>)}<option value="General talent network">General talent network</option></select></label>
        <label className="grid gap-2 text-sm font-medium text-white/90"><span>Primary experience area</span><select required name="experienceArea" defaultValue="" className={selectClassName}><option value="" disabled>Select an area</option>{experienceAreas.map((area) => <option key={area} value={area}>{area}</option>)}</select></label>
        <label className="grid gap-2 text-sm font-medium text-white/90"><span>Availability</span><select required name="availability" defaultValue="" className={selectClassName}><option value="" disabled>Select availability</option>{availability.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>

        <TextAreaField label="Why are you interested in SecureTheCloud?" name="interestReason" rows={5} required placeholder="Tell us what you want to build, what role fits you, and why SecureTheCloud's AI security and cloud governance mission interests you." />
        <TextAreaField label="Relevant experience" name="experienceSummary" rows={5} placeholder="Summarize your experience across cybersecurity, cloud, AI, governance, healthcare, consulting, engineering, or client delivery." />

        {errorMessage ? <p className="border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">{errorMessage}</p> : null}

        <button type="submit" disabled={isSubmitting} className="mt-1 inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#021018] hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70">{isSubmitting ? "Submitting..." : "Submit Interest"}</button>

        <p className="border-t border-white/10 pt-4 text-xs leading-5 text-slate-500">This is a talent interest form, not a guarantee of employment. Resume files are not uploaded through this website form. If a candidate is not selected, resume files are deleted once the decision is final. Do not include passwords, credentials, protected health information, or highly sensitive production data. Review the <a href="/careers/privacy" className="font-semibold text-cyan-300 hover:text-cyan-200">careers privacy notice</a>.</p>
      </div>
    </form>
  );
}
