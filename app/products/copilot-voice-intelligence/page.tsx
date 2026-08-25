import LegacyProductGateway from "@/components/marketing/LegacyProductGateway";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "SecureTheCloud Trust Intelligence Copilot | Legacy Product Reference",
  description:
    "Historical evidence-navigation and readiness-intelligence architecture for governed explanations and authority-boundary review.",
  path: "/products/copilot-voice-intelligence",
  robots: {
    index: false,
    follow: true,
  },
});

export default function LegacyProductPage() {
  return (
    <LegacyProductGateway
      name="SecureTheCloud Trust Intelligence Copilot"
      description="Historical evidence-navigation and readiness-intelligence architecture for governed explanations and authority-boundary review."
      archiveHref="/archive/architecture-accelerators/copilot-voice-intelligence"
    />
  );
}
