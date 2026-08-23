import Image from "next/image";

type MonogramProps = {
  className?: string;
  alt?: string;
  priority?: boolean;
};

export default function Monogram({
  className = "",
  alt = "IKEVAR",
  priority = false,
}: MonogramProps) {
  return (
    <Image
      src="/brand/ikevar/monogram.svg"
      alt={alt}
      width={48}
      height={48}
      className={className}
      priority={priority}
    />
  );
}
