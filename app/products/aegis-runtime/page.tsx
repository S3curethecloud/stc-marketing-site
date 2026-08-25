import LegacyProductGateway from "@/components/marketing/LegacyProductGateway";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Aegis Runtime | Legacy Product Reference",
  description:
    "Historical zero-trust runtime and deterministic governance architecture for AI-agent execution.",
  path: "/products/aegis-runtime",
});

export default function LegacyProductPage() {
  return (
    <LegacyProductGateway
      name="Aegis Runtime"
      description="Historical zero-trust runtime and deterministic governance architecture for AI-agent execution."
      archiveHref="/archive/architecture-accelerators/aegis-runtime"
    />
  );
}
