export default function PromoUmroh() {
  const promos = [
    {
      title: "Umroh Super Promo 12 Hari",
      price: "Rp 32.750.000",
      date: "Juli 2026",
      image: "/promo/promo1.jpg",
    },
    {
      title: "Umroh Paket Maulid",
      price: "Rp 34.400.000",
      date: "September 2026",
      image: "/promo/promo2.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            Promo Lainnya
          </h2>

          <p className="text-gray-500">
            Promo terbatas untuk keberangkatan tahun ini
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {promos.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >

              <img
                src={item.image}
                className="w-full h-80 object-cover group-hover:scale-105 transition"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* CONTENT */}
              <div className="absolute bottom-6 left-6 text-white">

                <span className="bg-genggong-gold text-black px-3 py-1 text-xs rounded-full font-semibold">
                  PROMO
                </span>

                <h3 className="text-2xl font-bold mt-3">
                  {item.title}
                </h3>

                <p className="text-sm opacity-80">
                  Keberangkatan {item.date}
                </p>

                <p className="text-3xl font-extrabold mt-2 text-genggong-gold">
                  {item.price}
                </p>

                <div className="flex gap-4 mt-4">

                  <a
                    href="https://wa.me/6281227577788"
                    target="_blank"
                    className="bg-genggong-red px-5 py-2 rounded-lg text-sm font-semibold"
                  >
                    Daftar Sekarang
                  </a>

                  <a
                    href="#program"
                    className="border border-white px-5 py-2 rounded-lg text-sm"
                  >
                    Lihat Detail
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}