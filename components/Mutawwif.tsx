"use client";

import { motion } from "framer-motion";

export default function Mutawwif() {
  const data = [
    {
      name: "Ust. Saiful",
      role: "Mutawwif Umrah",
      photo: "/mutawwif/saiful.png",
    },
    {
      name: "Ust. Izul",
      role: "Tour Leader",
      photo: "/mutawwif/izul.png",
    },
    {
      name: "Ust. Rofik",
      role: "Pembimbing Ibadah",
      photo: "/mutawwif/rofik.png",
    },
    {
      name: "Ust. Abdul Karim",
      role: "Mutawwif Senior",
      photo: "/mutawwif/abdul.png",
    },
  ];

  return (
    <section id="mutawwif" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Mutawwif & Tour Leader
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Dibimbing oleh pembimbing ibadah dan tour leader berpengalaman yang
            siap mendampingi perjalanan ibadah Anda dengan penuh kesabaran dan
            profesionalitas.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >

              {/* FOTO */}
              <div className="overflow-hidden">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-full h-80 object-cover object-top hover:scale-105 transition duration-500"
                />
              </div>

              {/* INFO */}
              <div className="p-6 text-center">

                <h3 className="font-bold text-lg mb-2">
                  {item.name}
                </h3>

                <span className="inline-block bg-red-50 text-genggong-red text-sm px-4 py-1 rounded-full font-semibold">
                  {item.role}
                </span>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}