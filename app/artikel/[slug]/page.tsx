import { articles } from "@/data/articles"
import Link from "next/link"

export default function ArticleDetail({params}:{params:{slug:string}}){

const article = articles.find(a=>a.slug === params.slug)

if(!article){
return <div className="py-40 text-center">Artikel tidak ditemukan</div>
}

const related = articles.filter(a=>a.slug !== article.slug).slice(0,3)

return(

<div className="max-w-4xl mx-auto px-6 py-24">

<img
src={article.image}
className="rounded-xl mb-10"
/>

<h1 className="text-4xl font-bold mb-4">

{article.title}

</h1>

<div className="text-gray-400 mb-10">

{article.date} • {article.read} • 👁 {article.views}

</div>

<div className="prose max-w-none">

{article.content}

</div>


{/* SHARE */}

<div className="mt-16">

<a
href={`https://wa.me/?text=${article.title}`}
className="bg-green-500 text-white px-6 py-3 rounded-lg"
>

Share ke WhatsApp

</a>

</div>


{/* RELATED */}

<h3 className="text-2xl font-bold mt-20 mb-8">

Artikel Terkait

</h3>

<div className="grid md:grid-cols-3 gap-6">

{related.map(item=>(

<Link
key={item.slug}
href={`/artikel/${item.slug}`}
className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
>

<img
src={item.image}
className="h-40 w-full object-cover"
/>

<div className="p-4">

<h4 className="font-semibold">

{item.title}

</h4>

</div>

</Link>

))}

</div>

<Link
href="/artikel"
className="block mt-16 text-genggong-red font-semibold"
>

← Kembali ke semua artikel

</Link>

</div>

)
}