export default function CTA() {
  const phone = "628819609606"
  const message = encodeURIComponent(
    "Assalamu’alaikum, saya ingin mendaftar paket Umrah Genggong Travel."
  )

  return (
    <section className="bg-green-700 text-white py-16 text-center px-6">
      <h2 className="text-3xl font-bold">
        Daftar Umrah Sekarang
      </h2>

      <p className="mt-4">
        Konsultasi gratis bersama admin PT. Genggong Travel Indonesia
      </p>

      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        className="inline-block mt-6 bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
      >
        WhatsApp Admin
      </a>
    </section>
  )
}
