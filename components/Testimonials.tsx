export default function Testimonials() {
  const reviews = [
    {
      name: "Ahmad Hidayat",
      city: "Surabaya",
      text: "Pelayanan sangat memuaskan, mutawwif sabar dan profesional. Ibadah jadi khusyuk.",
    },
    {
      name: "Siti Aminah",
      city: "Probolinggo",
      text: "Alhamdulillah umrah bersama Genggong Travel sangat berkesan. Hotel dekat masjid.",
    },
    {
      name: "H. Abdul Rahman",
      city: "Malang",
      text: "Sangat amanah dan transparan. Dari awal sampai pulang ke tanah air dilayani dengan baik.",
    },
  ];

  return (
    <section id="testimoni" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Testimoni Jamaah
          </h2>

          <div className="flex items-center justify-center gap-2 text-genggong-gold font-semibold">
            ⭐ 4.9 / 5.0
            <span className="text-gray-500 font-normal text-sm">
              berdasarkan ulasan Google
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6"
            >
              <div className="flex gap-1 text-genggong-gold mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-700 mb-6">
                “{item.text}”
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.city}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}