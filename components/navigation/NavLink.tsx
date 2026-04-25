import Link from "next/link";

type NavLinkProps = {
  href: string;
  label: string;
  className?: string;
};

export default function NavLink({
  href,
  label,
  className = "",
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`whitespace-nowrap transition-colors hover:text-white ${className}`}
    >
      {label}
    </Link>
  );
}
