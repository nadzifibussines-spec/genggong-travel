import { blogPosts } from "@/data/blog"
import { notFound } from "next/navigation"

type Props = {
  params: {
    slug: string
  }
}

export default function BlogDetail({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) return notFound()

  return (
    <article className="container mx-auto px-6 py-20 max-w-3xl">
      <span className="text-sm text-red-600 font-semibold">
        {post.category}
      </span>

      <h1 className="text-3xl font-bold mt-3">
        {post.title}
      </h1>

      <p className="text-sm text-gray-400 mt-2">
        {post.date}
      </p>

      <div className="mt-8 text-gray-700 leading-relaxed whitespace-pre-line">
        {post.content}
      </div>
    </article>
  )
}
