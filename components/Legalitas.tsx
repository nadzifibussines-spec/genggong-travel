export default function Legalitas() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* LOGO KEMENAG */}
        <div className="flex justify-center mb-6">
          <img
            src="/kemenag.png"
            alt="Kementerian Agama RI"
            className="h-20 object-contain"
          />
        </div>

        {/* TITLE */}
        <h2 className="text-3xl font-bold mb-4">
          Legalitas Genggong Travel Indonesia
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          PT Genggong Travel merupakan penyelenggara perjalanan ibadah
          umroh yang terdaftar resmi di Kementerian Agama Republik
          Indonesia.
        </p>

        {/* PPIU BOX */}
        <div className="inline-block bg-gray-50 border rounded-xl px-10 py-6 shadow">

          <p className="text-sm text-gray-500 mb-1">
            Penyelenggara Perjalanan Ibadah Umrah
          </p>

          <h3 className="text-2xl font-bold text-genggong-red">
            PPIU : 91202141726030002
          </h3>

        </div>

      </div>
    </section>
  );
}