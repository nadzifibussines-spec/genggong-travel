"use client"

import { motion } from "framer-motion"

export default function WhyChoose() {

  const items = [
    { icon:"⏳",title:"Berpengalaman",desc:"Melayani ribuan jamaah"},
    { icon:"👳",title:"Mengarahkan dan Membimbing",desc:"Umroh diberangkatkan"},
    { icon:"🕌",title:"Izin Resmi Kemenag",desc:"Legal & sesuai syariat"},
    { icon:"⭐",title:"Rating 4.9 Google",desc:"Ulasan jamaah asli"},
  ]

  return(

<section className="py-28 bg-white">

<div className="max-w-7xl mx-auto px-6">

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
className="text-center mb-20"
>

<h2 className="text-4xl font-bold">
Mengapa Memilih Genggong Travel Indonesia?
</h2>

</motion.div>

<div className="grid md:grid-cols-4 gap-8">

{items.map((item,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.2}}
whileHover={{y:-6}}
className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-xl transition text-center"
>

<div className="text-4xl mb-4">
{item.icon}
</div>

<h3 className="font-semibold text-lg">
{item.title}
</h3>

<p className="text-gray-500 text-sm mt-2">
{item.desc}
</p>

</motion.div>

))}

</div>

</div>

</section>

)

}