import Hero from "@/components/Hero"

export const metadata = {
  title: "Tentang Kami | PT. Genggong Travel",
  description: "Profil PT. Genggong Travel",
}

export default function TentangKamiPage() {
  return (
    <>
      <Hero
        title="Tentang Kami"
        subtitle="PT. Genggong Travel"
      />

      <section className="container mx-auto py-20 px-6">
        <p className="text-gray-700 leading-relaxed">
          PT. Genggong Travel adalah biro perjalanan Umrah dan Haji
          yang berkomitmen memberikan pelayanan amanah, profesional,
          dan sesuai syariat.
        </p>
      </section>
    </>
  )
}
