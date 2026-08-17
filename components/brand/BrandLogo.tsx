type BrandLogoProps = {
  variant?: "header" | "footer";
  showTagline?: boolean;
};

export default function BrandLogo({
  variant = "header",
  showTagline = false,
}: BrandLogoProps) {
  const isFooter = variant === "footer";

  const iconClass = isFooter
    ? "h-12 w-12 shrink-0 object-contain"
    : "h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10";

  const wordmarkClass = isFooter
    ? "text-[23px] font-black leading-none tracking-[-0.05em] sm:text-[26px]"
    : "text-[17px] font-black leading-none tracking-[-0.05em] sm:text-[19px]";

  return (
    <span className="inline-flex flex-col">
      <span className="inline-flex items-center gap-2.5 sm:gap-3">
        <img
          src="/assets/brand/securethecloud-icon.png"
          alt=""
          aria-hidden="true"
          className={iconClass}
        />

        <span className={wordmarkClass}>
          <span className="text-white">Secure</span>
          <span className="text-cyan-300">The</span>
          <span className="text-white">Cloud</span>
        </span>
      </span>

      {showTagline ? (
        <span className="mt-2 block pl-[60px] text-[9px] font-black uppercase tracking-[0.34em] text-slate-500 sm:pl-[60px] sm:text-[10px]">
          Secure | Govern | Enable
        </span>
      ) : null}
    </span>
  );
}
