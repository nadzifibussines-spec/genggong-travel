"use client";

import { useEffect, useState } from "react";

export default function PromoPopup() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (

    <div className="fixed bottom-6 left-6 z-50 bg-white shadow-xl rounded-xl p-5 max-w-xs">

      <button
        onClick={() => setShow(false)}
        className="absolute top-2 right-3 text-gray-400"
      >
        ✕
      </button>

      <h3 className="font-bold text-lg mb-2">
        🔥 Promo Umroh Terbaru
      </h3>

      <p className="text-sm text-gray-600 mb-3">
        Umroh Super Promo 12 Hari
      </p>

      <p className="text-xl font-bold text-genggong-red mb-4">
        Rp 32.750.000
      </p>

      <a
        href="https://wa.me/6281227577788"
        target="_blank"
        className="block text-center bg-genggong-red text-white py-2 rounded-lg text-sm font-semibold"
      >
        Konsultasi WhatsApp
      </a>

    </div>
  );
}