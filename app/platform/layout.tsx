import type { Metadata } from "next";
import type { ReactNode } from "react";
import LegacyArchiveBanner from "@/components/marketing/LegacyArchiveBanner";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function PlatformArchiveLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <LegacyArchiveBanner
        eyebrow="Architecture Reference"
        title="This platform page is now an architecture reference, not the primary services offer."
        body="SecureTheCloud is now positioned as a client-facing enterprise services firm. This page remains available as supporting architecture context for runtime governance, evidence, trust, and secure AI design patterns."
      />
      {children}
    </>
  );
}
