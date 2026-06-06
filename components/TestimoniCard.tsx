type Props = {
  name: string
  time: string
  rating: number
  text: string
}

export default function TestimoniCard({ name, time, rating, text }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">{name}</h4>
        <span className="text-xs text-gray-400">{time}</span>
      </div>

      <div className="flex mt-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
            ★
          </span>
        ))}
      </div>

      <p className="mt-3 text-sm text-gray-600">{text}</p>
    </div>
  )
}
