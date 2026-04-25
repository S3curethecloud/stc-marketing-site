import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import FormSuccessMessage from "@/components/forms/FormSuccessMessage";

export const metadata: Metadata = {
  title: "Demo Request Received",
  description:
    "Your SecureTheCloud demo request has been received. Our team will follow up with next steps.",
};

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
