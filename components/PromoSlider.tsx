"use client";

import { useState, useEffect } from "react";

const slides = [
  "/promo1.jpg",
  "/promo2.jpg",
  "/promo3.jpg",
  "/promo4.jpg",
];

export default function PromoSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Promo Umroh Terbaru
        </h2>

        <div className="relative rounded-xl overflow-hidden shadow-xl">

          <img
            src={slides[index]}
            className="w-full h-[420px] object-cover"
          />

        </div>

      </div>
    </section>
  );
}