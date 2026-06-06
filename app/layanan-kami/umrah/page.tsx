import Hero from "@/components/Hero"
import UmrahCard from "@/components/UmrahCard"
import { umrahPackages } from "@/data/umrah"

export default function UmrahPage() {
  return (
    <>
      <Hero
        title="Program Umrah"
        subtitle="Pilihan paket umrah terbaik dengan fasilitas nyaman dan bimbingan berpengalaman."
      />

      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {umrahPackages.map((item, i) => (
            <UmrahCard key={i} {...item} />
          ))}
        </div>
      </section>

      {/* CTA BAWAH */}
      <section className="bg-red-600 text-white py-16 text-center">
        <h2 className="text-2xl font-bold">
          Ingin Konsultasi Paket Umrah?
        </h2>
        <p className="mt-2 text-red-100">
          Tim kami siap membantu Anda.
        </p>

        <a
          href="/kontak"
          className="inline-block mt-6 bg-white text-red-600 px-8 py-3 rounded-full font-semibold"
        >
          Hubungi Sekarang
        </a>
      </section>
    </>
  )
}
