import LegacyProductGateway from "@/components/marketing/LegacyProductGateway";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Secret Vault | Legacy Product Reference",
  description:
    "Historical governed secret-custody and controlled reference-retrieval architecture.",
  path: "/products/secret-vault",
});

export default function LegacyProductPage() {
  return (
    <LegacyProductGateway
      name="Secret Vault"
      description="Historical governed secret-custody and controlled reference-retrieval architecture."
      archiveHref="/archive/architecture-accelerators/secret-vault"
    />
  );
}
