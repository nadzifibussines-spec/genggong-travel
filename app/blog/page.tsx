import BlogCard from "@/components/BlogCard"
import { blogPosts } from "@/data/blog"

export default function BlogPage() {
  const categories = Array.from(
    new Set(blogPosts.map((p) => p.category))
  )

  return (
    <section className="container mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-10">
        Blog & Artikel
      </h1>

      {/* KATEGORI */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat, i) => (
          <span
            key={i}
            className="bg-gray-100 px-4 py-2 rounded-full text-sm"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* LIST */}
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  )
}
