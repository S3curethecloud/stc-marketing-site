import LegacyProductGateway from "@/components/marketing/LegacyProductGateway";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "SageMaker Risk Intelligence Pipeline | Legacy Product Reference",
  description:
    "Historical offline risk-intelligence and model-readiness architecture for governed autonomous-system analysis.",
  path: "/products/sagemaker-risk-intelligence",
});

export default function LegacyProductPage() {
  return (
    <LegacyProductGateway
      name="SageMaker Risk Intelligence Pipeline"
      description="Historical offline risk-intelligence and model-readiness architecture for governed autonomous-system analysis."
      archiveHref="/archive/architecture-accelerators/sagemaker-risk-intelligence"
    />
  );
}
