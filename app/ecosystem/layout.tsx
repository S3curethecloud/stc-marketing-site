import type { Metadata } from "next";
import type { ReactNode } from "react";
import LegacyArchiveBanner from "@/components/marketing/LegacyArchiveBanner";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function EcosystemArchiveLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <LegacyArchiveBanner
        eyebrow="Architecture Reference"
        title="This ecosystem page is now retained as supporting architecture context."
        body="The current SecureTheCloud front door is services-first. This page remains useful for architecture proof, governance doctrine, and design context, but client conversations should begin with Services or Request Consultation."
      />
      {children}
    </>
  );
}
