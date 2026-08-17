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
    : "h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10 xl:h-11 xl:w-11";

  const wordmarkClass = isFooter
    ? "whitespace-nowrap text-[22px] font-black leading-none tracking-[-0.045em] sm:text-[25px]"
    : "whitespace-nowrap text-[16px] font-black leading-none tracking-[-0.045em] sm:text-[18px] xl:text-[19px]";

  const taglineClass = isFooter
    ? "mt-2 block pl-[52px] text-[9px] font-black uppercase tracking-[0.28em] text-slate-500 sm:pl-[58px] sm:text-[10px] sm:tracking-[0.32em]"
    : "mt-1.5 block pl-[46px] text-[8px] font-black uppercase tracking-[0.22em] text-slate-400 sm:pl-[50px] sm:text-[9px] xl:pl-[56px] xl:tracking-[0.26em]";

  return (
    <span className="inline-flex min-w-0 flex-col">
      <span className="inline-flex min-w-0 items-center gap-2 sm:gap-2.5 xl:gap-3">
        <img
          src="/assets/brand/securethecloud-icon.svg"
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
        <span className={taglineClass}>Secure | Govern | Enable</span>
      ) : null}
    </span>
  );
}
