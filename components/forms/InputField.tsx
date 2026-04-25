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
      <span>{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300"
      />
    </label>
  );
}
