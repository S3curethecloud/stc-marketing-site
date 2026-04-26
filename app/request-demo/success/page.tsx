import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import FormSuccessMessage from "@/components/forms/FormSuccessMessage";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Demo Request Received",
  description:
    "Your SecureTheCloud demo request has been received. Our team will follow up with next steps.",
  path: "/request-demo/success",
});

export default function RequestDemoSuccessPage() {
  return (
    <Section>
      <Container>
        <FormSuccessMessage
          title="Thank you. Your demo request is in."
          body="A SecureTheCloud team member will review your request and follow up with the right next step for your evaluation, architecture review, or private product walkthrough."
          primaryHref="/"
          primaryLabel="Return Home"
          secondaryHref="/products/aegis-runtime"
          secondaryLabel="View Aegis Runtime"
        />
      </Container>
    </Section>
  );
}
