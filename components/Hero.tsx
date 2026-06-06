"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {

  const ref = useRef(null);

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] flex items-center text-white overflow-hidden"
    >

      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{
          y,
          backgroundImage: "url('/hero-umrah.jpg')"
        }}
        className="absolute inset-0 bg-cover bg-center scale-110"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />


      {/* GLOW LIGHT EFFECT */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute w-[400px] h-[400px] bg-yellow-400/20 blur-[140px] rounded-full top-20 left-10 animate-pulse" />

        <div className="absolute w-[400px] h-[400px] bg-red-500/20 blur-[140px] rounded-full bottom-10 right-10 animate-pulse" />

      </div>


      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="inline-block bg-genggong-gold text-black text-xs md:text-sm font-semibold px-4 py-1 rounded-full mb-5 shadow-md">
            Travel Umrah Resmi Kemenag
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">

            Sambut Umrah Musim Baru

            <br />

            <span className="text-genggong-gold">
              Lebih Berkesan
            </span>

          </h1>

          <p className="text-base md:text-lg text-white/90 mb-10 max-w-xl leading-relaxed">

            Bersama <strong>PT Genggong Travel Indonesia</strong> — travel umrah resmi
            Kementerian Agama yang berpengalaman memberangkatkan
            ribuan jamaah dengan pelayanan profesional dan amanah.

          </p>


          {/* BUTTON */}
          <div className="flex flex-col sm:flex-row gap-4">

            <a
              href="#program"
              className="bg-genggong-gold text-black font-semibold px-7 py-3 rounded-lg text-center shadow-lg hover:scale-105 transition duration-300"
            >
              Lihat Program
            </a>

            <a
              href="https://wa.me/6281227577788"
              target="_blank"
              className="border border-white px-7 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-genggong-red transition duration-300"
            >
              Konsultasi Gratis
            </a>

          </div>


          {/* TRUST BADGE */}
          <div className="flex flex-wrap gap-6 mt-10 text-sm text-white/90">

            <div className="flex items-center gap-2">
              ⭐ <span>Rating 4.9 Google</span>
            </div>

            <div className="flex items-center gap-2">
              👳 <span>50.000+ Jamaah</span>
            </div>

            <div className="flex items-center gap-2">
              🕌 <span>Hotel Dekat Masjid</span>
            </div>

          </div>

        </motion.div>

        <div className="absolute w-96 h-96 bg-red-500/20 blur-3xl rounded-full top-10 left-10"></div>

<div className="absolute w-96 h-96 bg-yellow-400/20 blur-3xl rounded-full bottom-10 right-10"></div>



        {/* RIGHT GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:block"
        >

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10">

            <h3 className="text-xl font-bold mb-6">
              Keunggulan Genggong Travel Indonesia
            </h3>

            <ul className="space-y-4 text-white/90">

              <li className="flex items-center gap-2">
                ✅ Resmi Kemenag
              </li>

              <li className="flex items-center gap-2">
                ✅ Pembimbing & Mutawwif Profesional
              </li>

              <li className="flex items-center gap-2">
                ✅ Hotel Strategis Dekat Masjid
              </li>

              <li className="flex items-center gap-2">
                ✅ Harga Transparan
              </li>

              <li className="flex items-center gap-2">
                ✅ Aman & Terpercaya
              </li>

            </ul>

          </div>

        </motion.div>

      </div>

    </section>
  );
}