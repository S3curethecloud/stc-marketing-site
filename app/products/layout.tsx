import type { ReactNode } from "react";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
