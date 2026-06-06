import Hero from "@/components/Hero"
import HajiCard from "@/components/HajiCard"
import { hajiPackages } from "@/data/haji"

export default function HajiPage() {
  return (
    <>
      <Hero
        
      />

      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {hajiPackages.map((item, i) => (
            <HajiCard key={i} {...item} />
          ))}
        </div>
      </section>

      {/* CTA MERAH BAWAH */}
      <section className="bg-red-600 text-white py-16 text-center">
        <h2 className="text-2xl font-bold">
          Dapatkan Porsi Haji Mulai 7,5 Juta
        </h2>
        <p className="mt-2 text-red-100">
          Konsultasi sekarang, kuota terbatas.
        </p>

        <a
          href="/kontak"
          className="inline-block mt-6 bg-white text-red-600 px-8 py-3 rounded-full font-semibold"
        >
          Konsultasi Sekarang
        </a>
      </section>
    </>
  )
}
