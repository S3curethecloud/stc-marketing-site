type TextAreaFieldProps = {
  label: string;
  name: string;
  rows?: number;
  required?: boolean;
  placeholder?: string;
  className?: string;
};

export default function TextAreaField({
  label,
  name,
  rows = 5,
  required = false,
  placeholder,
  className = "",
}: TextAreaFieldProps) {
  return (
    <label className={`grid gap-2 text-sm font-medium text-white/90 ${className}`}>
      <span>{label}</span>
      <textarea
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300"
      />
    </label>
  );
}
