"use client"

import { motion } from "framer-motion"

export default function Gallery() {

const images=[
"/jamaah1.jpg",
"/jamaah2.jpg",
"/jamaah3.jpg",
"/jamaah4.jpg",
"/jamaah5.jpg",
"/jamaah6.jpg"
]

return(

<section className="py-28 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

{/* TITLE */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="text-center mb-16"
>

<h2 className="text-4xl md:text-5xl font-extrabold mb-4">
Galeri Jamaah
</h2>

<p className="text-gray-500">
Momen perjalanan ibadah jamaah bersama Genggong Travel
</p>

</motion.div>


{/* GRID */}

<div className="grid md:grid-cols-3 gap-8">

{images.map((img,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.1}}
viewport={{once:true}}
className="group relative overflow-hidden rounded-xl shadow-lg"
>

<img
src={img}
className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
/>

{/* OVERLAY */}

<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

<span className="text-white font-semibold text-lg">
Lihat Foto
</span>

</div>

</motion.div>

))}

</div>

</div>

</section>

)

}