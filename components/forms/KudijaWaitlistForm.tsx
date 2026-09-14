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

const interestOptions = [
  "Early product access",
  "Private beta testing",
  "Trading research / strategy evaluation",
  "Market data or broker integration",
  "Institutional / prop desk evaluation",
  "Product updates only",
] as const;

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

      const data = (await response
        .json()
        .catch(() => ({}))) as FormspreeResponse;

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

  const fieldClassName =
    "min-h-12 w-full rounded-lg border border-white/10 bg-[#07101a] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/20 focus-visible:border-emerald-300 focus-visible:ring-2 focus-visible:ring-emerald-300/20";

  return (
    <form
      aria-label="KUDIJA early access form"
      action={action}
      method="POST"
      onSubmit={handleSubmit}
      className={`rounded-2xl border border-white/10 bg-[#050a12]/95 p-5 shadow-2xl shadow-black/30 sm:p-7 ${className}`}
    >
      <input
        type="hidden"
        name="_subject"
        value="KUDIJA early access request"
      />
      <input type="hidden" name="source" value="kudija.ikevar.com" />
      <input type="hidden" name="product" value="KUDIJA" />
      <input
        type="hidden"
        name="requestType"
        value="KUDIJA early access"
      />

      <label className="sr-only">
        Leave this field empty
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-300">
          Launch list
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
          Get early access to KUDIJA.
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
          Join the private launch list for product previews, beta access, and
          controlled testing opportunities.
        </p>
      </div>

      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate-200">
            Name
            <input
              className={fieldClassName}
              type="text"
              name="fullName"
              autoComplete="name"
              placeholder="Your name"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-200">
            Email
            <input
              className={fieldClassName}
              type="email"
              name="email"
              autoComplete="email"
              required
              aria-required="true"
              placeholder="you@company.com"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium text-slate-200">
          What are you most interested in?
          <select
            className={fieldClassName}
            name="interest"
            defaultValue=""
            required
            aria-required="true"
          >
            <option value="" disabled>
              Select an interest
            </option>
            {interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-200">
          Company / desk
          <input
            className={fieldClassName}
            type="text"
            name="company"
            autoComplete="organization"
            placeholder="Optional"
          />
        </label>

        <div aria-live="polite" aria-atomic="true">
          {errorMessage ? (
            <p
              role="alert"
              className="rounded-lg border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200"
            >
              {errorMessage}
            </p>
          ) : isSubmitting ? (
            <p className="text-sm text-slate-400">
              Joining the KUDIJA launch list...
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-emerald-300 px-5 py-3 text-sm font-semibold text-[#03130d] transition hover:bg-emerald-200 focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a12] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Joining..." : "Join the launch list"}
        </button>

        <p className="text-xs leading-5 text-slate-500">
          Product updates only. Do not submit credentials, account numbers,
          trading secrets, customer data, or other sensitive information.
        </p>
      </div>
    </form>
  );
}
