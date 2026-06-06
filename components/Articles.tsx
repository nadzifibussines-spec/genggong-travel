"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Articles() {

const articles = [
{
title: "Tips Persiapan Umroh Pertama Kali Agar Lancar dan Khusyuk",
image: "/artikel/artikel1.jpg",
date: "10 Juni 2026",
category: "Tips Umroh",
slug: "tips-persiapan-umroh",
read: "5 menit baca"
},
{
title: "Checklist Barang Umroh Wajib Dibawa Jamaah",
image: "/artikel/artikel2.jpg",
date: "15 Juni 2026",
category: "Persiapan",
slug: "checklist-barang-umroh",
read: "4 menit baca"
},
{
title: "Keutamaan Umroh di Bulan Ramadhan",
image: "/artikel/artikel3.jpg",
date: "20 Juni 2026",
category: "Keutamaan",
slug: "keutamaan-umroh-ramadhan",
read: "6 menit baca"
},
{
title: "Panduan Manasik Umroh Lengkap untuk Jamaah Pemula",
image: "/artikel/artikel4.jpg",
date: "25 Juni 2026",
category: "Manasik",
slug: "panduan-manasik-umroh",
read: "7 menit baca"
},
{
title: "Tips Agar Umroh Lebih Khusyuk dan Bermakna",
image: "/artikel/artikel5.jpg",
date: "30 Juni 2026",
category: "Tips Ibadah",
slug: "tips-umroh-khusyuk",
read: "5 menit baca"
},
{
title: "Perbedaan Haji dan Umroh yang Perlu Diketahui",
image: "/artikel/artikel6.jpg",
date: "5 Juli 2026",
category: "Pengetahuan",
slug: "perbedaan-haji-umroh",
read: "4 menit baca"
}
]

return(

<section id="artikel" className="py-28 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

{/* HEADER */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="text-center mb-16"
>

<h2 className="text-4xl md:text-5xl font-extrabold mb-4">

Berita & Artikel

</h2>

<p className="text-gray-500 max-w-xl mx-auto">

Informasi, tips, dan panduan seputar ibadah Umroh & Haji untuk membantu perjalanan ibadah Anda lebih lancar.

</p>

</motion.div>


{/* GRID */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

{articles.map((item,i)=>(

<motion.article
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.1}}
viewport={{once:true}}
className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
>

{/* IMAGE */}

<div className="relative overflow-hidden">

<img
src={item.image}
alt={item.title}
className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
/>

{/* OVERLAY */}

<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition"/>

{/* CATEGORY */}

<span className="absolute top-4 left-4 bg-genggong-red text-white text-xs font-semibold px-3 py-1 rounded-full shadow">

{item.category}

</span>

</div>


{/* CONTENT */}

<div className="p-6">

<div className="flex items-center justify-between text-xs text-gray-400 mb-3">

<span>{item.date}</span>

<span>{item.read}</span>

</div>

<h3 className="font-bold text-lg leading-snug mb-4 group-hover:text-genggong-red transition">

{item.title}

</h3>

<Link
href={`/artikel/${item.slug}`}
className="text-genggong-red font-semibold text-sm hover:underline"
>

Baca Artikel →

</Link>

</div>

</motion.article>

))}

</div>


{/* BUTTON */}

<div className="text-center mt-16">

<Link
href="/artikel"
className="inline-block bg-genggong-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition shadow"
>

Lihat Semua Artikel

</Link>

</div>

</div>

</section>

)

}