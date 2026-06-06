"use client"

import { useState } from "react"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = () => {
    const text = encodeURIComponent(
      `Assalamu’alaikum,\n\nNama: ${name}\nNo HP: ${phone}\nPesan: ${message}`
    )

    window.open(
      `https://wa.me/6281227577788?text=${text}`,
      "_blank"
    )
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-xl font-bold mb-4">
        Hubungi Kami
      </h3>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg px-4 py-2"
        />

        <input
          type="tel"
          placeholder="No. WhatsApp"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border rounded-lg px-4 py-2"
        />

        <textarea
          placeholder="Pesan"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full border rounded-lg px-4 py-2"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold"
        >
          Kirim ke WhatsApp
        </button>
      </div>
    </div>
  )
}
