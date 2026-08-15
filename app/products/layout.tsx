import type { Metadata } from "next";
import type { ReactNode } from "react";
import LegacyArchiveBanner from "@/components/marketing/LegacyArchiveBanner";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function ProductsArchiveLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <LegacyArchiveBanner
        eyebrow="Architecture Accelerator Archive"
        title="These pages are retained as SecureTheCloud architecture proof assets."
        body="The current SecureTheCloud business is services-first: enterprise AI security architecture, cloud governance, secure AI adoption, and implementation-ready consulting. These legacy accelerator pages remain available for reference, but they are not the primary customer-facing offer."
      />
      {children}
    </>
  );
}
