"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function ProgramCards() {

const programs = [
{
title:"Umroh Paket 12 Hari",
slug:"umroh-12-hari",
price:"Mulai Rp 37 Juta",
image:"/paket-1.jpg",
badge:"Promo",
features:[
"Tiket Pesawat PP",
"Hotel Bintang 4",
"Visa Umroh",
"Makan 3x Sehari"
]
},
{
title:"Umroh Paket Maulid",
slug:"umroh-maulid",
price:"Mulai Rp 34,4 Juta",
image:"/paket-2.jpg",
badge:"Best Seller",
features:[
"Tiket PP",
"Visa Umroh",
"Bus Tour",
"Mutawwif"
]
},
{
title:"Umroh Plus Turki",
slug:"umroh-turki",
price:"Mulai Rp 37,9 Juta",
image:"/paket-3.jpg",
badge:"Favorite",
features:[
"Tiket Pesawat PP",
"Visa Umroh",
"Ziarah Mekkah",
"Tour Istanbul"
]
},
{
title:"Umroh Super Promo",
slug:"umroh-super-promo",
price:"Rp 32.750.000",
image:"/paket-4.jpg",
badge:"Diskon",
features:[
"Visa Umroh",
"Asuransi",
"Bus Tour",
"Mutawwif"
]
}
]

return(

<section id="program" className="py-28 bg-gradient-to-b from-gray-50 to-white">

<div className="max-w-7xl mx-auto px-6">

{/* TITLE */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="text-center mb-16"
>

<h2 className="text-4xl md:text-5xl font-extrabold mb-4">Program Umroh Genggong Travel Indonesia
</h2>

<p className="text-gray-500 text-lg">
Pilih paket terbaik untuk perjalanan ibadah Anda
</p>

</motion.div>


{/* GRID */}

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

{programs.map((item,i)=>(

<motion.div
key={item.slug}
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.15}}
whileHover={{y:-12,scale:1.02}}
viewport={{once:true}}
className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500 flex flex-col"
>

{/* IMAGE */}

<div className="relative h-52 overflow-hidden">

<img
src={item.image}
className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
/>

{/* OVERLAY */}

<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition"/>

{/* BADGE */}

<span className="absolute top-4 left-4 bg-genggong-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
{item.badge}
</span>

</div>


{/* CONTENT */}

<div className="p-6 flex flex-col flex-1">

<h3 className="font-bold text-lg mb-2 group-hover:text-genggong-red transition">
{item.title}
</h3>

<p className="text-genggong-red font-bold text-xl mb-4">
{item.price}
</p>


<ul className="text-sm text-gray-600 space-y-2 mb-6 flex-1">

{item.features.map((f,i)=>(

<li key={i} className="flex items-center gap-2">

<span className="text-genggong-red">✔</span>

{f}

</li>

))}

</ul>


<Link href={`/program/${item.slug}`}>

<button className="w-full bg-genggong-red text-white py-3 rounded-lg font-semibold hover:bg-red-800 hover:scale-[1.03] transition duration-300 shadow-md">
Lihat Detail
</button>

</Link>

</div>

</motion.div>

))}

</div>

</div>

</section>

)

}