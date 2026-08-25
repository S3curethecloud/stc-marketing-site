import LegacyProductGateway from "@/components/marketing/LegacyProductGateway";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Kubernetes Sentinel | Legacy Product Reference",
  description:
    "Historical Kubernetes runtime-governance and enforcement architecture for autonomous-system workloads.",
  path: "/products/kubernetes",
});

export default function LegacyProductPage() {
  return (
    <LegacyProductGateway
      name="Kubernetes Sentinel"
      description="Historical Kubernetes runtime-governance and enforcement architecture for autonomous-system workloads."
      archiveHref="/archive/architecture-accelerators/kubernetes"
    />
  );
}
