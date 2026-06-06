type Props = {
  title: string
  desc: string
}

export default function ServiceCard({ title, desc }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  )
}
