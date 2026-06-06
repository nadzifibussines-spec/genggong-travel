export default function LocationMap() {
  return (
    <section id="lokasi" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Lokasi Kantor
          </h2>

          <p className="text-gray-600 mt-2">
            Kantor Genggong Travel Indonesia berada di lokasi yang sama dengan 
            Notaris Hj. Khusnul Hitaminah.
          </p>
        </div>

        {/* MAP */}
        <div className="rounded-2xl overflow-hidden shadow-lg">

          <iframe
            src="https://www.google.com/maps?q=Notaris%20Hj.%20Khusnul%20Hitaminah%20Probolinggo&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>

        </div>

        {/* BUTTON */}
        <div className="text-center mt-8">

          <a
            href="https://www.google.com/maps/place/Notaris+Hj.+Khusnul+Hitaminah,+SH.,MH./@-7.7613841,113.405918,21z/data=!4m6!3m5!1s0x2dd701a321c68417:0x97f786827a0f3075!8m2!3d-7.761331!4d113.4060361!16s%2Fg%2F11jdm560d5"
            target="_blank"
            className="bg-genggong-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition"
          >
            Buka di Google Maps
          </a>

        </div>
        {/* ALAMAT KANTOR */}
        <p className="text-center text-gray-600 mt-4">
          📍 Kantor Genggong Travel Indonesia <br/>
          Jl. Panglima Sudirman, Probolinggo, Jawa Timur
        </p>


      </div>
    </section>
  );
}