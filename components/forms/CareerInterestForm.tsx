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

type FormspreeError = {
  field?: string;
  message: string;
};

type FormspreeResponse = {
  ok?: boolean;
  next?: string;
  errors?: FormspreeError[];
};

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
    const roleSlug =
      defaultRoleSlug ||
      new URLSearchParams(window.location.search).get("role") ||
      "";

    const roleTitle =
      careerRoles.find((role) => role.slug === roleSlug)?.title || "";

    setSelectedRole(roleTitle);
  }, [defaultRoleSlug]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(action, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = (await response.json().catch(() => ({}))) as FormspreeResponse;

      if (!response.ok) {
        const message =
          data.errors?.[0]?.message ||
          "Something went wrong while submitting your interest. Please try again.";
        setErrorMessage(message);
        setIsSubmitting(false);
        return;
      }

      form.reset();
      router.push("/careers/join/success");
    } catch {
      setErrorMessage(
        "Network error while submitting your interest. Please try again."
      );
      setIsSubmitting(false);
    }
  }

  return (
    <form
      aria-label="Career interest form"
      action={action}
      method="POST"
      onSubmit={handleSubmit}
      className={`rounded-[2rem] border border-white/10 bg-[#060a15]/90 p-6 shadow-2xl shadow-violet-950/20 sm:p-8 ${className}`}
    >
      <input type="hidden" name="_redirect" value={redirectUrl} />
      <input type="hidden" name="_subject" value="SecureTheCloud career interest" />
      <input type="hidden" name="source" value="securethecloud.dev/careers" />
      <input type="hidden" name="requestType" value="career interest" />

      <label className="hidden">
        Leave this field empty
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </label>

      <div>
        <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
          Talent intake
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
          Express interest in joining SecureTheCloud.
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Share your background, role interest, and portfolio links. We will use this to understand fit for future hiring, advisory, contract, or collaboration conversations.
        </p>
      </div>

      <div className="mt-8 grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <InputField
            label="Full name"
            name="fullName"
            required
            autoComplete="name"
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <InputField
            label="Current role / title"
            name="currentRole"
            autoComplete="organization-title"
          />

          <InputField
            label="Location / remote preference"
            name="locationPreference"
            placeholder="Example: Dallas, TX | Remote | Open to travel"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <InputField
            label="LinkedIn profile"
            name="linkedin"
            placeholder="https://linkedin.com/in/..."
          />

          <InputField
            label="GitHub / portfolio"
            name="portfolio"
            placeholder="GitHub, website, portfolio, or writing link"
          />
        </div>

        <InputField
          label="Resume link"
          name="resumeLink"
          placeholder="Google Drive, Dropbox, personal site, or LinkedIn resume link"
        />

        <label className="grid gap-2 text-sm font-medium text-white/90">
          <span>Role of interest</span>
          <select
            required
            name="roleInterest"
            value={selectedRole}
            onChange={(event) => setSelectedRole(event.target.value)}
            className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition-colors focus:border-cyan-300"
          >
            <option value="" disabled>
              Select a role
            </option>
            {careerRoles.map((role) => (
              <option key={role.slug} value={role.title}>
                {role.title}
              </option>
            ))}
            <option value="General talent network">General talent network</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm font-medium text-white/90">
          <span>Primary experience area</span>
          <select
            required
            name="experienceArea"
            defaultValue=""
            className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition-colors focus:border-cyan-300"
          >
            <option value="" disabled>
              Select an area
            </option>
            {experienceAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-medium text-white/90">
          <span>Availability</span>
          <select
            required
            name="availability"
            defaultValue=""
            className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition-colors focus:border-cyan-300"
          >
            <option value="" disabled>
              Select availability
            </option>
            {availability.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <TextAreaField
          label="Why are you interested in SecureTheCloud?"
          name="interestReason"
          rows={5}
          required
          placeholder="Tell us what you want to build, what role fits you, and why SecureTheCloud's AI security and cloud governance mission interests you."
        />

        <TextAreaField
          label="Relevant experience"
          name="experienceSummary"
          rows={5}
          placeholder="Summarize your experience across cybersecurity, cloud, AI, governance, healthcare, consulting, engineering, or client delivery."
        />

        {errorMessage ? (
          <p className="rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {errorMessage}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-black text-white shadow-lg shadow-violet-950/30 transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Submit Interest"}
        </button>

        <p className="text-xs leading-5 text-slate-500">
          This is a talent interest form, not a guarantee of employment. Resume files are not uploaded through this website form. If a candidate is not selected, resume files are deleted once the decision is final. Do not include passwords, credentials, protected health information, or highly sensitive production data. Review the{" "}
          <a href="/careers/privacy" className="font-bold text-cyan-300 hover:text-cyan-200">
            careers privacy notice
          </a>
          .
        </p>
      </div>
    </form>
  );
}
