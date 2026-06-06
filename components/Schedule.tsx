export default function Schedule() {
  const schedules = [
    {
      paket: "Umroh Paket 12 Hari",
      tanggal: "10 Juli 2026",
      durasi: "12 Hari",
      harga: "Rp 37.000.000",
    },
    {
      paket: "Umroh Paket Maulid",
      tanggal: "16 September 2026",
      durasi: "10 Hari",
      harga: "Rp 34.400.000",
    },
    {
      paket: "Umroh Plus Turki",
      tanggal: "5 Juni 2026",
      durasi: "12 Hari",
      harga: "Rp 37.900.000",
    },
    {
      paket: "Umroh Super Promo",
      tanggal: "25 Juli 2026",
      durasi: "12 Hari",
      harga: "Rp 32.750.000",
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">
            Jadwal Keberangkatan Umroh
          </h2>
          <p className="text-gray-500">
            Pilih tanggal keberangkatan yang sesuai dengan Anda
          </p>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">

          <table className="w-full bg-white shadow-lg rounded-xl overflow-hidden">

            <thead className="bg-genggong-red text-white">
              <tr>
                <th className="py-4 px-6 text-left">Paket</th>
                <th className="py-4 px-6 text-left">Keberangkatan</th>
                <th className="py-4 px-6 text-left">Durasi</th>
                <th className="py-4 px-6 text-left">Harga</th>
                <th className="py-4 px-6 text-left">Aksi</th>
              </tr>
            </thead>

            <tbody>

              {schedules.map((item, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-gray-50 transition"
                >

                  <td className="py-4 px-6 font-semibold">
                    {item.paket}
                  </td>

                  <td className="py-4 px-6">
                    {item.tanggal}
                  </td>

                  <td className="py-4 px-6">
                    {item.durasi}
                  </td>

                  <td className="py-4 px-6 text-genggong-red font-bold">
                    {item.harga}
                  </td>

                  <td className="py-4 px-6">

                    <a
                      href="https://wa.me/6281227577788"
                      className="bg-genggong-red text-white px-4 py-2 rounded-lg text-sm hover:bg-red-800 transition"
                    >
                      Daftar
                    </a>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}