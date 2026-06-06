import Hero from "@/components/Hero"
import LocationMap from "@/components/LocationMap"
import ContactForm from "@/components/ContactForm"

export default function KontakPage() {
  return (
    <>
      <Hero

      />

      <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        {/* INFO */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Kantor Genggong Travel
          </h2>

          <p className="text-gray-700 mb-2">
            📍 Probolinggo, Jawa Timur
          </p>
          <p className="text-gray-700 mb-2">
            📞 0812-2757-7788
          </p>
          <p className="text-gray-700 mb-6">
            ✉️ info@genggongtravel.com
          </p>

          <LocationMap />
        </div>

        {/* FORM */}
        <ContactForm />
      </section>
    </>
  )
}
