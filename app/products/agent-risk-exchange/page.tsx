import LegacyProductGateway from "@/components/marketing/LegacyProductGateway";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Agent Risk Exchange | Legacy Product Reference",
  description:
    "Historical risk and trust exchange architecture for autonomous-agent ecosystems and evidence review.",
  path: "/products/agent-risk-exchange",
});

export default function LegacyProductPage() {
  return (
    <LegacyProductGateway
      name="Agent Risk Exchange"
      description="Historical risk and trust exchange architecture for autonomous-agent ecosystems and evidence review."
      archiveHref="/archive/architecture-accelerators/agent-risk-exchange"
    />
  );
}
