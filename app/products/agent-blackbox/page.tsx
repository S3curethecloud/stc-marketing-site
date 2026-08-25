import LegacyProductGateway from "@/components/marketing/LegacyProductGateway";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Agent Blackbox | Legacy Product Reference",
  description:
    "Historical evidence, replay, audit, and investigation architecture for governed autonomous systems.",
  path: "/products/agent-blackbox",
  robots: {
    index: false,
    follow: true,
  },
});

export default function LegacyProductPage() {
  return (
    <LegacyProductGateway
      name="Agent Blackbox"
      description="Historical evidence, replay, audit, and investigation architecture for governed autonomous systems."
      archiveHref="/archive/architecture-accelerators/agent-blackbox"
    />
  );
}
