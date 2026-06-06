import { articles } from "@/data/articles"
import Link from "next/link"

export default function AllArticles(){

return(

<section className="py-24">

<div className="max-w-7xl mx-auto px-6">

<h1 className="text-4xl font-bold mb-16 text-center">

Semua Artikel Umroh

</h1>

<div className="grid md:grid-cols-3 gap-8">

{articles.map(article=>(

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

{article.date} • {article.read}

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