import FeatureCard from "@/components/marketing/FeatureCard";

type FeatureItem = {
  title: string;
  body: string;
};

type FeatureGridProps = {
  items: readonly FeatureItem[];
};

export default function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <FeatureCard
          key={item.title}
          title={item.title}
          body={item.body}
        />
      ))}
    </div>
  );
}
