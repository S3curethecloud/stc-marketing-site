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
    ? "h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
    : "h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9 xl:h-10 xl:w-10";

  const wordmarkClass = isFooter
    ? "whitespace-nowrap text-[22px] font-black leading-none tracking-[-0.045em] sm:text-[25px]"
    : "whitespace-nowrap text-[16px] font-black leading-none tracking-[-0.045em] sm:text-[18px] xl:text-[19px]";

  return (
    <span className="inline-flex min-w-0 flex-col">
      <span className="inline-flex min-w-0 items-center gap-2 sm:gap-2.5 xl:gap-3">
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
        <span className="mt-2 block pl-[52px] text-[9px] font-black uppercase tracking-[0.28em] text-slate-500 sm:pl-[58px] sm:text-[10px] sm:tracking-[0.32em]">
          Secure | Govern | Enable
        </span>
      ) : null}
    </span>
  );
}
