"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/components/forms/InputField";
import TextAreaField from "@/components/forms/TextAreaField";
import { siteConfig } from "@/content/site";

type DemoRequestFormProps = {
  action?: string;
  redirectUrl?: string;
  className?: string;
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

export default function DemoRequestForm({
  action = "https://formspree.io/f/mzdjyodg",
  redirectUrl = `${siteConfig.url}/request-demo/success`,
  className = "",
}: DemoRequestFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
          "Something went wrong while submitting your request. Please try again.";
        setErrorMessage(message);
        setIsSubmitting(false);
        return;
      }

      form.reset();
      router.push("/request-demo/success");
    } catch {
      setErrorMessage(
        "Network error while submitting your request. Please try again."
      );
      setIsSubmitting(false);
    }
  }

  return (
    <form
      aria-label="Request private demo form"
      action={action}
      method="POST"
      onSubmit={handleSubmit}
      className={`rounded-3xl border border-white/10 bg-stc-panel/80 p-6 shadow-2xl shadow-black/20 sm:p-8 ${className}`}
    >
      <input type="hidden" name="_redirect" value={redirectUrl} />
      <input type="hidden" name="_subject" value="SecureTheCloud demo request" />
      <input type="hidden" name="source" value="securethecloud.dev" />

      <label className="hidden">
        Leave this field empty
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="grid gap-5">
        <InputField
          label="Full name"
          name="fullName"
          required
          autoComplete="name"
        />

        <InputField
          label="Work email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />

        <InputField
          label="Company"
          name="company"
          required
          autoComplete="organization"
        />

        <InputField
          label="Role"
          name="role"
          autoComplete="organization-title"
        />

        <label className="grid gap-2 text-sm font-medium text-white/90">
          <span>What are you evaluating?</span>
          <select
            required
            name="usecase"
            defaultValue=""
            className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition-colors focus:border-cyan-300"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="AI agent runtime governance">
              AI agent runtime governance
            </option>
            <option value="Zero-trust authorization">
              Zero-trust authorization
            </option>
            <option value="Kubernetes runtime governance">
              Kubernetes runtime governance
            </option>
            <option value="Autonomous system control plane">
              Autonomous system control plane
            </option>
            <option value="Cross-domain trust">
              Cross-domain trust
            </option>
            <option value="Other">Other</option>
          </select>
        </label>

        <TextAreaField
          label="Message"
          name="message"
          rows={5}
          placeholder="Tell us what you are evaluating, the environment you operate in, or the architecture review you want."
        />

        {errorMessage ? (
          <p className="text-sm text-red-300">{errorMessage}</p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Request Private Demo"}
        </button>
      </div>
    </form>
  );
}
