type BrandLogoProps = {
  variant?: "header" | "footer";
  showTagline?: boolean;
};

export default function BrandLogo({
  variant = "header",
  showTagline = false,
}: BrandLogoProps) {
  const isFooter = variant === "footer";

  const iconFrameClass = isFooter
    ? "relative h-12 w-12 shrink-0 overflow-hidden"
    : "relative h-10 w-10 shrink-0 overflow-hidden";

  const iconImageClass = isFooter
    ? "h-12 w-auto max-w-none object-contain"
    : "h-10 w-auto max-w-none object-contain";

  const wordmarkClass = isFooter
    ? "text-2xl font-black tracking-[-0.055em] sm:text-[26px]"
    : "text-lg font-black tracking-[-0.055em] sm:text-xl";

  return (
    <span className="inline-flex flex-col">
      <span className="inline-flex items-center gap-2.5">
        <span className={iconFrameClass} aria-hidden="true">
          <img
            src="/assets/brand/securethecloud-logo.png"
            alt=""
            className={iconImageClass}
          />
        </span>

        <span className={wordmarkClass}>
          <span className="text-white">Secure</span>
          <span className="text-cyan-300">The</span>
          <span className="text-white">Cloud</span>
        </span>
      </span>

      {showTagline ? (
        <span className="mt-1 block pl-16 text-[10px] font-black uppercase tracking-[0.32em] text-slate-500">
          Secure | Govern | Enable
        </span>
      ) : null}
    </span>
  );
}
