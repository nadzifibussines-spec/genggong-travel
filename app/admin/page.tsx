export default function AdminPage() {
  const dummyData = [
    { name: "Ahmad", paket: "Umrah Eksekutif", date: "2026-12-06" },
    { name: "Siti", paket: "Umrah Hemat", date: "2026-12-06" },
  ]

  return (
    <section className="container mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-6">
        Dashboard Pendaftar
      </h1>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Nama</th>
            <th className="p-3 border">Paket</th>
            <th className="p-3 border">Tanggal</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((d, i) => (
            <tr key={i} className="text-center">
              <td className="p-3 border">{d.name}</td>
              <td className="p-3 border">{d.paket}</td>
              <td className="p-3 border">{d.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
