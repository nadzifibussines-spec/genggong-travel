"use client";

import { useEffect, useState } from "react";

export default function PromoPamflet() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShow(true);
    }, 4000);

    return () => clearTimeout(timer);

  }, []);

  if (!show) return null;

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">

      {/* POPUP */}
      <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl max-w-lg w-full">

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 bg-white rounded-full w-8 h-8 shadow flex items-center justify-center text-gray-500"
        >
          ✕
        </button>

        {/* IMAGE PAMFLET */}
        <img
          src="/promo/promo1.jpg"
          className="w-full h-auto object-cover"
        />

        {/* CTA */}
        <div className="p-5 text-center">

          <a
            href="https://wa.me/6281227577788"
            target="_blank"
            className="inline-block bg-genggong-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition"
          >
            Daftar Sekarang
          </a>

        </div>

      </div>

    </div>
  );
}