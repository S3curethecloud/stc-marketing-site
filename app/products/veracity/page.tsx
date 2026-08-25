import LegacyProductGateway from "@/components/marketing/LegacyProductGateway";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Aegis Veracity Engine | Legacy Product Reference",
  description:
    "Historical claim-to-evidence verification and source-of-truth alignment architecture.",
  path: "/products/veracity",
});

export default function LegacyProductPage() {
  return (
    <LegacyProductGateway
      name="Aegis Veracity Engine"
      description="Historical claim-to-evidence verification and source-of-truth alignment architecture."
      archiveHref="/archive/architecture-accelerators/veracity"
    />
  );
}
