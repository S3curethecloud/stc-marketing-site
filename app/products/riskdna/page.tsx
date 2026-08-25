import LegacyProductGateway from "@/components/marketing/LegacyProductGateway";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "RiskDNA | Legacy Product Reference",
  description:
    "Historical runtime risk-intelligence and blast-radius analysis architecture for autonomous actions.",
  path: "/products/riskdna",
});

export default function LegacyProductPage() {
  return (
    <LegacyProductGateway
      name="RiskDNA"
      description="Historical runtime risk-intelligence and blast-radius analysis architecture for autonomous actions."
      archiveHref="/archive/architecture-accelerators/riskdna"
    />
  );
}
