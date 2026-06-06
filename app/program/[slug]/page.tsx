import Link from "next/link";
import { notFound } from "next/navigation";

const programs = {
  "umroh-12-hari": {
    title: "Umroh Paket 12 Hari",
    price: "Mulai Rp 37 Juta",
    image: "/paket-1.jpg",
    departure: "Juli 2026",
    hotelMekkah: "Sofi Manazil",
    hotelMadinah: "Arkan Golden",
    airline: "Lion Air",
    include: [
      "Tiket Pesawat PP",
      "Visa Umroh",
      "Hotel Bintang 4",
      "Makan 3x Sehari",
      "Bus AC",
      "Mutawwif Berpengalaman",
      "Air Zam-Zam 5 Liter",
    ],
    exclude: [
      "Paspor",
      "Vaksin",
      "Biaya pribadi",
      "Kelebihan bagasi",
    ],
  },

  "umroh-maulid": {
    title: "Umroh Paket Maulid",
    price: "Mulai Rp 34,4 Juta",
    image: "/paket-2.jpg",
    departure: "September 2026",
    hotelMekkah: "Manazil Sofi",
    hotelMadinah: "Arkan Golden",
    airline: "Lion Air",
    include: [
      "Tiket PP",
      "Visa Umroh",
      "Bus Tour",
      "Mutawwif",
      "Handling",
      "Manasik",
      "Air Zam-Zam 5 Liter",
    ],
    exclude: [
      "Paspor",
      "Vaksin",
      "Biaya pribadi",
    ],
  },

  "umroh-turki": {
    title: "Umroh Plus Turki",
    price: "Mulai Rp 37,9 Juta",
    image: "/paket-3.jpg",
    departure: "Juni 2026",
    hotelMekkah: "Azka Al Safa",
    hotelMadinah: "Grand Plaza",
    airline: "Turkish Airlines",
    include: [
      "Tiket Pesawat PP",
      "Visa Umroh",
      "Ziarah Mekkah & Madinah",
      "Tour Istanbul",
      "Bus Tour",
      "Tour Guide Profesional",
    ],
    exclude: [
      "Paspor",
      "Vaksin",
      "Pengeluaran pribadi",
    ],
  },

  "umroh-super-promo": {
    title: "Umroh Super Promo 12 Hari",
    price: "Rp 32.750.000",
    image: "/paket-4.jpg",
    departure: "Juli 2026",
    hotelMekkah: "Sofi Manazil",
    hotelMadinah: "Arkan Golden",
    airline: "Lion Air",
    include: [
      "Visa Umroh",
      "Asuransi",
      "Makan 3x Sehari",
      "Bus Tour",
      "Mutawwif",
      "Air Zam-Zam 5 Liter",
    ],
    exclude: [
      "Paspor",
      "Vaksin",
      "Biaya pribadi",
    ],
  },
};

export default function DetailPage({ params }: any) {
  const program = programs[params.slug as keyof typeof programs];

  if (!program) {
    return notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* HERO */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

        <img
          src={program.image}
          className="rounded-2xl shadow-lg"
        />

        <div>

          <h1 className="text-4xl font-bold mb-4">
            {program.title}
          </h1>

          <p className="text-2xl text-genggong-red font-bold mb-6">
            {program.price}
          </p>

          <p className="mb-4">
            <b>Keberangkatan:</b> {program.departure}
          </p>

          <p className="mb-4">
            <b>Maskapai:</b> {program.airline}
          </p>

          <p className="mb-4">
            <b>Hotel Mekkah:</b> {program.hotelMekkah}
          </p>

          <p className="mb-6">
            <b>Hotel Madinah:</b> {program.hotelMadinah}
          </p>

          <a
            href="https://wa.me/6281227577788"
            className="bg-genggong-red text-white px-8 py-4 rounded-lg inline-block"
          >
            Konsultasi WhatsApp
          </a>

        </div>

      </div>

      {/* INCLUDE EXCLUDE */}

      <div className="grid md:grid-cols-2 gap-10">

        <div className="bg-white shadow rounded-xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Fasilitas Termasuk
          </h2>

          <ul className="space-y-3">
            {program.include.map((item, i) => (
              <li key={i}>✔ {item}</li>
            ))}
          </ul>

        </div>

        <div className="bg-white shadow rounded-xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Tidak Termasuk
          </h2>

          <ul className="space-y-3">
            {program.exclude.map((item, i) => (
              <li key={i}>✖ {item}</li>
            ))}
          </ul>

        </div>

      </div>

      {/* BACK BUTTON */}

      <div className="mt-16">
        <Link href="/">
          <button className="px-6 py-3 border rounded-lg">
            ← Kembali
          </button>
        </Link>
      </div>
      

    </div>
    
  );
}