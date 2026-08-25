import LegacyProductGateway from "@/components/marketing/LegacyProductGateway";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "SAFP | Legacy Product Reference",
  description:
    "Historical federation-readiness architecture for signed assertions, trust registries, and cross-boundary governance.",
  path: "/products/safp",
});

export default function LegacyProductPage() {
  return (
    <LegacyProductGateway
      name="SAFP"
      description="Historical federation-readiness architecture for signed assertions, trust registries, and cross-boundary governance."
      archiveHref="/archive/architecture-accelerators/safp"
    />
  );
}
