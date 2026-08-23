import Image from "next/image";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  alt?: string;
  priority?: boolean;
};

export default function Logo({
  variant = "dark",
  className = "",
  alt = "IKEVAR",
  priority = false,
}: LogoProps) {
  const src =
    variant === "light"
      ? "/brand/ikevar/logo-light.svg"
      : "/brand/ikevar/logo-dark.svg";

  return (
    <Image
      src={src}
      alt={alt}
      width={220}
      height={53}
      className={className}
      priority={priority}
    />
  );
}
