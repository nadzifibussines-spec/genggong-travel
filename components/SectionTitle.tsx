interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold mb-3">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
