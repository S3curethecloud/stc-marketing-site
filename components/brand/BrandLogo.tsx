type BrandLogoProps = {
  variant?: "header" | "footer";
  showTagline?: boolean;
};

function BrandMark({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 128 108"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        <linearGradient id="stc-blue" x1="16" y1="18" x2="78" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00A7FF" />
          <stop offset="1" stopColor="#0052CC" />
        </linearGradient>
        <linearGradient id="stc-gold" x1="72" y1="34" x2="104" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC21A" />
          <stop offset="1" stopColor="#FF8A00" />
        </linearGradient>
      </defs>

      <path
        d="M28 84H19C9 84 2 76 2 66c0-9 6-17 15-19 3-16 16-27 32-27 13 0 25 8 30 20 3-1 6-2 10-2 17 0 31 13 31 30 0 9-4 16-10 22H95"
        fill="none"
        stroke="url(#stc-blue)"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M60 37 31 49v22l24 12V68l-12-6 17-7V37Z" fill="url(#stc-blue)" />
      <path d="M60 37 88 49v20H73V58l-13-5V37Z" fill="url(#stc-gold)" />
      <path d="M31 72c4 18 15 29 29 35V77L46 70l-15 2Z" fill="url(#stc-blue)" />
      <path d="M60 107c15-7 25-18 28-36H73v18c-4 5-8 8-13 11v7Z" fill="url(#stc-gold)" />
      <path d="M60 37v70" stroke="#07111F" strokeWidth="2" opacity="0.65" />
      <path
        d="M60 37 31 49v22l29 15 28-15V49L60 37Z"
        fill="none"
        stroke="#DCEBFF"
        strokeOpacity="0.32"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function BrandLogo({
  variant = "header",
  showTagline = false,
}: BrandLogoProps) {
  const isFooter = variant === "footer";

  const iconClass = isFooter
    ? "h-11 w-11 shrink-0 sm:h-12 sm:w-12"
    : "h-9 w-9 shrink-0 sm:h-10 sm:w-10 xl:h-11 xl:w-11";

  const wordmarkClass = isFooter
    ? "whitespace-nowrap text-[22px] font-black leading-none tracking-[-0.045em] sm:text-[25px]"
    : "whitespace-nowrap text-[16px] font-black leading-none tracking-[-0.045em] sm:text-[18px] xl:text-[19px]";

  const taglineClass = isFooter
    ? "mt-2 block pl-[52px] text-[9px] font-black uppercase tracking-[0.28em] text-slate-500 sm:pl-[58px] sm:text-[10px] sm:tracking-[0.32em]"
    : "mt-1.5 block pl-[46px] text-[8px] font-black uppercase tracking-[0.22em] text-slate-400 sm:pl-[50px] sm:text-[9px] xl:pl-[56px] xl:tracking-[0.26em]";

  return (
    <span className="inline-flex min-w-0 flex-col">
      <span className="inline-flex min-w-0 items-center gap-2 sm:gap-2.5 xl:gap-3">
        <BrandMark className={iconClass} />

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
