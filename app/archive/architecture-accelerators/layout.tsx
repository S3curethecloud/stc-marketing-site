import type { Metadata } from "next";
import type { ReactNode } from "react";
import LegacyArchiveBanner from "@/components/marketing/LegacyArchiveBanner";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function ArchitectureAcceleratorsArchiveLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <LegacyArchiveBanner
        eyebrow="Legacy Architecture Archive"
        title="Historical SecureTheCloud architecture assets retained by IKEVAR."
        body="These accelerators preserve prior design work and technical provenance. They are reference assets, not part of IKEVAR's current public product portfolio."
      />

      {children}
    </>
  );
}
