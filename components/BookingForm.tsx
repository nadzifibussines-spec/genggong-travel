"use client";

import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    nama: "",
    phone: "",
    paket: "",
    pesan: "",
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const message = `
Assalamualaikum Genggong Travel

Nama : ${form.nama}
No HP : ${form.phone}
Paket : ${form.paket}

Pesan :
${form.pesan}
`;

    const url = `https://wa.me/6281227577788?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="py-24 bg-genggong-red text-white">

      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold mb-3">
            Siap Berangkat Umroh?
          </h2>

          <p className="text-white/80">
            Konsultasikan rencana perjalanan ibadah Anda bersama Genggong Travel
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white text-black p-8 rounded-xl shadow-xl space-y-6"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="nama"
              placeholder="Nama Lengkap"
              required
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Nomor WhatsApp"
              required
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
            />

          </div>

          <select
            name="paket"
            required
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          >
            <option value="">Pilih Paket Umroh</option>
            <option>Umroh Paket 12 Hari</option>
            <option>Umroh Paket Maulid</option>
            <option>Umroh Plus Turki</option>
            <option>Umroh Super Promo</option>
          </select>

          <textarea
            name="pesan"
            rows={4}
            placeholder="Pesan atau pertanyaan..."
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
          />

          <button
            type="submit"
            className="w-full bg-genggong-red text-white py-4 rounded-lg font-semibold hover:bg-red-800 transition"
          >
            Kirim via WhatsApp
          </button>

        </form>

      </div>

    </section>
  );
}