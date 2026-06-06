import Link from "next/link"

type Props = {
  slug: string
  title: string
  category: string
  excerpt: string
  date: string
}

export default function BlogCard({
  slug,
  title,
  category,
  excerpt,
  date,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
      <span className="text-xs text-red-600 font-semibold">
        {category}
      </span>

      <h3 className="mt-2 font-bold text-lg">{title}</h3>

      <p className="mt-2 text-sm text-gray-600">
        {excerpt}
      </p>

      <div className="mt-4 flex justify-between items-center">
        <span className="text-xs text-gray-400">{date}</span>
        <Link
          href={`/blog/${slug}`}
          className="text-red-600 text-sm font-semibold"
        >
          Baca →
        </Link>
      </div>
    </div>
  )
}
