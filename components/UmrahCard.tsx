type Props = {
  title: string
  maskapai: string
  duration: string
  hotel: string
  price: string
  image: string
}

export default function UmrahCard({
  title,
  maskapai,
  duration,
  hotel,
  price,
  image,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <p className="text-xs text-gray-500">{maskapai}</p>

        <h3 className="mt-2 font-bold text-lg text-red-600">
          {title}
        </h3>

        <ul className="mt-3 text-sm text-gray-700 space-y-1">
          <li>🕒 {duration}</li>
          <li>🏨 {hotel}</li>
        </ul>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-red-600">
            Mulai {price}
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
