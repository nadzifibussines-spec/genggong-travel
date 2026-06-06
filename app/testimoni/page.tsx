import TestimoniCard from "@/components/TestimoniCard"
import { testimonies } from "@/data/testimoni"

export default function TestimoniPage() {
  return (
    <section className="container mx-auto px-6 py-20">
      {/* HEADER */}
      <div className="text-center mb-14">
        <h1 className="text-3xl font-bold">Testimoni Jamaah</h1>
        <p className="mt-2 text-gray-600">
          Penilaian asli jamaah yang telah berangkat bersama kami.
        </p>

        <div className="mt-6">
          <span className="text-4xl font-bold text-red-600">4.9</span>
          <div className="flex justify-center mt-1">
            {"★★★★★".split("").map((s, i) => (
              <span key={i} className="text-yellow-400 text-lg">{s}</span>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            Berdasarkan 1.447 ulasan Google
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {testimonies.map((item, i) => (
          <TestimoniCard key={i} {...item} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <button className="bg-black text-white px-8 py-3 rounded-full">
          Tampilkan Lebih Banyak
        </button>
      </div>
    </section>
  )
}
