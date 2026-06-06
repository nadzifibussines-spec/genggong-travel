export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">
            Genggong Travel Indonesia
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed">
            Travel Umroh resmi yang amanah dan terpercaya. 
            Melayani perjalanan ibadah umroh dengan pelayanan 
            profesional dan hotel strategis dekat masjid.
          </p>
        </div>

        {/* LAYANAN */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Layanan
          </h3>

          <ul className="space-y-2 text-sm">

            <li>Paket Umroh</li>

            <li>Konsultasi Umroh</li>

            <li>Manasik Umroh</li>

          </ul>
        </div>

        {/* KONTAK */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Kontak
          </h3>

          <ul className="space-y-2 text-sm">

            <li>📍 Probolinggo, Jawa Timur</li>

            <li>📞 0812-2757-7788</li>

            {/* INSTAGRAM */}
            <li>
              <a
                href="https://www.instagram.com/genggong_travel_gt?igsh=bmw5YW1xaTJ2Njlm"
                target="_blank"
                className="hover:text-white transition"
              >
                📷 Instagram
              </a>
            </li>

            {/* WHATSAPP */}
            <li>
              <a
                href="https://wa.me/6281227577788"
                target="_blank"
                className="hover:text-white transition"
              >
                💬 WhatsApp
              </a>
            </li>

          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Genggong Travel Indonesia. All Rights Reserved.
      </div>

    </footer>
  );
}