import Container from "@/components/layout/Container";

type ProofStripProps = {
  items: readonly string[];
};

export default function ProofStrip({ items }: ProofStripProps) {
  return (
    <section className="border-b border-white/10 bg-white/[0.03]">
      <Container className="py-6">
        <div className="grid gap-3 text-sm font-medium text-stc-muted sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-stc-panel/70 px-4 py-3 text-white/85"
            >
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
