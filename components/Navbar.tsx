"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="font-extrabold text-xl text-genggong-red"
        >
          Genggong Travel Indonesia
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">

          <a
            href="#home"
            className="hover:text-genggong-red transition duration-300"
          >
            Home
          </a>

          <a
            href="#program"
            className="hover:text-genggong-red transition duration-300"
          >
            Program
          </a>

          <a
            href="#mutawwif"
            className="hover:text-genggong-red transition duration-300"
          >
            Mutawwif
          </a>

          <a
            href="#testimoni"
            className="hover:text-genggong-red transition duration-300"
          >
            Testimoni
          </a>

          <a
            href="#artikel"
            className="hover:text-genggong-red transition duration-300"
          >
            Artikel
          </a>

          {/* BUTTON */}
          <a
            href="https://wa.me/6281227577788"
            target="_blank"
            className="bg-genggong-red text-white px-5 py-2 rounded-full hover:bg-red-800 transition duration-300 shadow"
          >
            Kontak
          </a>

        </nav>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >

          <span
            className={`w-6 h-[2px] bg-black transition ${
              open ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />

          <span
            className={`w-6 h-[2px] bg-black transition ${
              open ? "opacity-0" : ""
            }`}
          />

          <span
            className={`w-6 h-[2px] bg-black transition ${
              open ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />

        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity:0, y:-20 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-20 }}
            transition={{ duration:0.25 }}
            className="md:hidden bg-white border-t shadow"
          >

            <nav className="flex flex-col px-6 py-4 gap-4 font-semibold text-sm">

              <a
                onClick={() => setOpen(false)}
                href="#home"
                className="hover:text-genggong-red"
              >
                Home
              </a>

              <a
                onClick={() => setOpen(false)}
                href="#program"
                className="hover:text-genggong-red"
              >
                Program
              </a>

              <a
                onClick={() => setOpen(false)}
                href="#mutawwif"
                className="hover:text-genggong-red"
              >
                Mutawwif
              </a>

              <a
                onClick={() => setOpen(false)}
                href="#testimoni"
                className="hover:text-genggong-red"
              >
                Testimoni
              </a>

              <a
                onClick={() => setOpen(false)}
                href="#artikel"
                className="hover:text-genggong-red"
              >
                Artikel
              </a>

              <a
                onClick={() => setOpen(false)}
                href="https://wa.me/6281227577788"
                className="bg-genggong-red text-white text-center py-2 rounded-lg"
              >
                Kontak
              </a>

            </nav>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}