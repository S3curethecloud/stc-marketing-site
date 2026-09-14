"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type FormspreeError = {
  field?: string;
  message: string;
};

type FormspreeResponse = {
  ok?: boolean;
  next?: string;
  errors?: FormspreeError[];
};

type KudijaWaitlistFormProps = {
  className?: string;
  action?: string;
};

export default function KudijaWaitlistForm({
  className = "",
  action = "https://formspree.io/f/mzdjyodg",
}: KudijaWaitlistFormProps) {
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
        setErrorMessage(
          data.errors?.[0]?.message ||
            "We could not add you to the KUDIJA launch list. Please try again.",
        );
        setIsSubmitting(false);
        return;
      }

      form.reset();
      router.push("/kudija/success");
    } catch {
      setErrorMessage(
        "Network error while joining the KUDIJA launch list. Please try again.",
      );
      setIsSubmitting(false);
    }
  }

  return (
    <form
      aria-label="KUDIJA launch notification form"
      action={action}
      method="POST"
      onSubmit={handleSubmit}
      className={`w-full ${className}`}
    >
      <input type="hidden" name="_subject" value="KUDIJA launch notification signup" />
      <input type="hidden" name="source" value="kudija.ikevar.com" />
      <input type="hidden" name="product" value="KUDIJA" />
      <input type="hidden" name="requestType" value="KUDIJA launch notification" />

      <label className="sr-only">
        Leave this field empty
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      <label htmlFor="kudija-launch-email" className="sr-only">
        Email address
      </label>

      <div className="flex flex-col gap-2 rounded-xl border border-white/15 bg-[#07101a]/95 p-2 shadow-2xl shadow-black/30 sm:flex-row sm:items-center">
        <div className="flex min-h-12 flex-1 items-center gap-3 px-3">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5 shrink-0 fill-none stroke-slate-500"
          >
            <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Z" strokeWidth="1.5" />
            <path d="m4.25 6 6.05 5.05a2.65 2.65 0 0 0 3.4 0L19.75 6" strokeWidth="1.5" />
          </svg>
          <input
            id="kudija-launch-email"
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            required
            aria-required="true"
            placeholder="Enter your email"
            className="min-h-12 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-emerald-300 px-6 py-3 text-sm font-semibold text-[#03130d] transition hover:bg-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07101a] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Joining..." : "Notify me"}
          {!isSubmitting ? <span aria-hidden="true">→</span> : null}
        </button>
      </div>

      <div aria-live="polite" aria-atomic="true" className="mt-3 min-h-5">
        {errorMessage ? (
          <p role="alert" className="text-sm text-red-300">
            {errorMessage}
          </p>
        ) : isSubmitting ? (
          <p className="text-sm text-slate-500">Adding you to the launch list...</p>
        ) : (
          <p className="text-xs leading-5 text-slate-500">
            Launch updates and selected early-access invitations. No trading credentials or account data.
          </p>
        )}
      </div>
    </form>
  );
}
