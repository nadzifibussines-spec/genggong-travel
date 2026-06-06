type Props = {
  title: string;
  price: string;
  features: string[];
  badge?: string;
};

export default function PackageCard({
  title,
  price,
  features,
  badge,
}: Props) {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden">
      
      {/* BADGE */}
      {badge && (
        <span className="absolute top-4 right-4 bg-genggong-red text-white text-xs font-semibold px-4 py-1 rounded-full">
          {badge}
        </span>
      )}

      {/* HEADER (POSTER FEEL) */}
      <div className="h-40 bg-gradient-to-r from-genggong-red to-red-700 flex items-center justify-center text-white">
        <h3 className="text-xl font-bold text-center px-4">
          {title}
        </h3>
      </div>

      {/* BODY */}
      <div className="p-6">
        <p className="text-2xl font-extrabold text-genggong-red mb-6">
          {price}
        </p>

        <ul className="space-y-3 text-sm text-gray-700 mb-8">
          {features.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-genggong-gold">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <button className="w-full bg-genggong-red hover:bg-red-800 text-white font-semibold py-3 rounded-xl transition">
          Lihat Detail Paket
        </button>
      </div>
    </div>
  );
}
