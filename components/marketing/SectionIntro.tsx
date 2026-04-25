type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export default function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
}: SectionIntroProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {body ? (
        <p className="mt-5 text-lg leading-8 text-stc-muted">
          {body}
        </p>
      ) : null}
    </div>
  );
}
