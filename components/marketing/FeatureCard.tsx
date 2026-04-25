type FeatureCardProps = {
  title: string;
  body: string;
};

export default function FeatureCard({ title, body }: FeatureCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/10">
      <h3 className="text-xl font-semibold tracking-tight text-white">
        {title}
      </h3>

      <p className="mt-4 text-base leading-7 text-stc-muted">
        {body}
      </p>
    </article>
  );
}
