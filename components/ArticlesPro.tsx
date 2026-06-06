"use client"

import { useState } from "react"
import Link from "next/link"
import { articles } from "@/data/articles"

export default function ArticlesPro(){

const [search,setSearch]=useState("")
const [category,setCategory]=useState("Semua")

const categories=[
"Semua",
"Tips Umroh",
"Persiapan",
"Keutamaan"
]

const filtered=articles.filter(article=>{

const matchSearch=article.title
.toLowerCase()
.includes(search.toLowerCase())

const matchCategory=
category==="Semua" || article.category===category

return matchSearch && matchCategory

})

return(

<section className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

{/* HEADER */}

<div className="text-center mb-12">

<h2 className="text-4xl font-bold mb-4">

Artikel Umroh & Haji

</h2>

<p className="text-gray-500">

Panduan ibadah dan tips perjalanan umroh

</p>

</div>


{/* SEARCH */}

<div className="flex flex-col md:flex-row gap-4 mb-8">

<input
type="text"
placeholder="Cari artikel..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="border rounded-lg px-4 py-2 w-full"
/>

<select
value={category}
onChange={(e)=>setCategory(e.target.value)}
className="border rounded-lg px-4 py-2"
>

{categories.map(cat=>(

<option key={cat}>

{cat}

</option>

))}

</select>

</div>


{/* GRID */}

<div className="grid md:grid-cols-3 gap-8">

{filtered.map(article=>(

<div
key={article.slug}
className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
>

<img
src={article.image}
className="h-48 w-full object-cover"
/>

<div className="p-5">

<div className="text-sm text-gray-400 mb-2">

{article.date} • 👁 {article.views}

</div>

<h3 className="font-bold mb-4">

{article.title}

</h3>

<Link
href={`/artikel/${article.slug}`}
className="text-genggong-red font-semibold"
>

Baca Artikel →

</Link>

</div>

</div>

))}

</div>

</div>

</section>

)

}