export default function Facilities() {
  const facilities = [
    {
      icon: "🕌",
      name: "Hotel Dekat Masjid",
    },
    {
      icon: "✈️",
      name: "Direct Flight",
    },
    {
      icon: "📸",
      name: "Fotografer Jamaah",
    },
    {
      icon: "📑",
      name: "Free Visa",
    },
    {
      icon: "👳",
      name: "Mutawwif Profesional",
    },
    {
      icon: "🚌",
      name: "Bus Full AC",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Fasilitas Genggong Travel
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {facilities.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex items-center gap-4"
            >
              <div className="text-3xl">
                {item.icon}
              </div>

              <span className="font-semibold">
                {item.name}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}