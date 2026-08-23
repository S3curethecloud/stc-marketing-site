import Logo from "./Logo";
import Monogram from "./Monogram";

type BrandMarkProps = {
  compact?: boolean;
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
};

export default function BrandMark({
  compact = false,
  variant = "dark",
  className = "",
  priority = false,
}: BrandMarkProps) {
  if (compact) {
    return (
      <Monogram
        className={className}
        priority={priority}
      />
    );
  }

  return (
    <Logo
      variant={variant}
      className={className}
      priority={priority}
    />
  );
}
