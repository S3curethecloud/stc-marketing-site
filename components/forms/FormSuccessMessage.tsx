import Link from "next/link";

type FormSuccessMessageProps = {
  eyebrow?: string;
  title: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
};

export default function FormSuccessMessage({
  eyebrow = "REQUEST RECEIVED",
  title,
  body,
  primaryHref = "/",
  primaryLabel = "Return Home",
  secondaryHref = "/products/aegis-runtime",
  secondaryLabel = "View Aegis Runtime",
  className = "",
}: FormSuccessMessageProps) {
  return (
    <div
      className={`mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center shadow-2xl shadow-black/20 sm:p-12 ${className}`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
        {eyebrow}
      </p>

      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h1>

      <p className="mt-6 text-lg leading-8 text-stc-muted">
        {body}
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
        <Link
          href={primaryHref}
          className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
        >
          {primaryLabel}
        </Link>

        {secondaryHref && secondaryLabel ? (
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
          >
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
