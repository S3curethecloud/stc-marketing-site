import LegacyProductGateway from "@/components/marketing/LegacyProductGateway";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Agent Sovereignty Zones | Legacy Product Reference",
  description:
    "Historical cross-boundary trust and federation architecture for sovereign autonomous-system environments.",
  path: "/products/agent-sovereignty-zones",
  robots: {
    index: false,
    follow: true,
  },
});

export default function LegacyProductPage() {
  return (
    <LegacyProductGateway
      name="Agent Sovereignty Zones"
      description="Historical cross-boundary trust and federation architecture for sovereign autonomous-system environments."
      archiveHref="/archive/architecture-accelerators/agent-sovereignty-zones"
    />
  );
}
