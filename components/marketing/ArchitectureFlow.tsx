type ArchitectureFlowProps = {
  steps: readonly string[];
};

export default function ArchitectureFlow({ steps }: ArchitectureFlowProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {steps.map((step, index) => (
        <div
          key={step}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-black/10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Step {index + 1}
          </p>
          <p className="mt-3 text-base font-medium leading-7 text-white">
            {step}
          </p>
        </div>
      ))}
    </div>
  );
}
