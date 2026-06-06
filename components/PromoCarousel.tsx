"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PromoCarousel() {

  const promos = [
    { image: "/promo/promo1.jpg" },
    { image: "/promo/promo2.jpg" },
    { image: "/promo/promo3.jpg" },
    { image: "/promo/promo4.jpg" }
  ];

  return (

    <section className="py-24 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">
            Promo Umroh Terbaru
          </h2>
        </motion.div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >

          {promos.map((promo, i) => (

            <SwiperSlide key={i}>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-2xl shadow-xl"
              >

                <img
                  src={promo.image}
                  className="w-full object-cover"
                />

              </motion.div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}