type InputFieldProps = {
  label: string;
  name: string;
  type?: "text" | "email";
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
};

export default function InputField({
  label,
  name,
  type = "text",
  autoComplete,
  required = false,
  placeholder,
  className = "",
}: InputFieldProps) {
  return (
    <label className={`grid gap-2 text-sm font-medium text-white/90 ${className}`}>
      <span>
        {label}
        {required ? <span className="ml-1 text-cyan-300" aria-hidden="true">*</span> : null}
      </span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        aria-required={required || undefined}
        placeholder={placeholder}
        className="min-h-12 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 hover:border-white/20 focus-visible:border-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-300/25"
      />
    </label>
  );
}
