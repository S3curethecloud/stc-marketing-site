import Image from "next/image";

type BrandLogoProps = {
  variant?: "header" | "footer";
};

export default function BrandLogo({
  variant = "header",
}: BrandLogoProps) {
  const isFooter = variant === "footer";

  return (
    <Image
      src="/brand/ikevar/wordmark-dark.svg"
      alt="IKEVAR"
      width={420}
      height={120}
      priority={!isFooter}
      className={
        isFooter
          ? "h-auto w-[260px] sm:w-[285px] lg:w-[300px]"
          : "h-auto w-[235px] sm:w-[255px] xl:w-[275px]"
      }
    />
  );
}
