type Props = {
  title: string
  wait: string
  duration: string
  hotel: string
  dp: string
  image: string
  highlight?: boolean
}

export default function HajiCard({
  title,
  wait,
  duration,
  hotel,
  dp,
  image,
  highlight,
}: Props) {
  return (
    <div className={`bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden ${highlight ? "ring-2 ring-red-500" : ""}`}>
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      <div className="p-5">
        <p className="text-xs text-gray-500">{wait}</p>

        <h3 className="mt-2 font-bold text-lg text-red-600">
          {title}
        </h3>

        <ul className="mt-3 text-sm text-gray-700 space-y-1">
          <li>🕒 {duration}</li>
          <li>🏨 {hotel}</li>
        </ul>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-red-600">
            DP {dp}
          </span>

          <a
            href="/kontak"
            className="bg-black text-white px-4 py-2 rounded-full text-sm"
          >
            Lihat Detail
          </a>
        </div>
      </div>
    </div>
  )
}
