import InputField from "@/components/forms/InputField";
import TextAreaField from "@/components/forms/TextAreaField";
import { siteConfig } from "@/content/site";

type DemoRequestFormProps = {
  action?: string;
  redirectUrl?: string;
  className?: string;
};

export default function DemoRequestForm({
  action = "https://formspree.io/f/YOUR_FORM_ID",
  redirectUrl = `${siteConfig.url}/request-demo/success`,
  className = "",
}: DemoRequestFormProps) {
  return (
    <form
      aria-label="Request private demo form"
      action={action}
      method="POST"
      className={`rounded-3xl border border-white/10 bg-stc-panel/80 p-6 shadow-2xl shadow-black/20 sm:p-8 ${className}`}
    >
      <input type="hidden" name="_redirect" value={redirectUrl} />

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

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
        >
          Request Private Demo
        </button>

        <p className="text-xs leading-5 text-stc-muted">
          Replace <code>YOUR_FORM_ID</code> with your Formspree form ID before
          production.
        </p>
      </div>
    </form>
  );
}
