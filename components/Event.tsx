import { data } from '@/lib/data'

export default function Event() {
  return (
    <section id='event' className="py-8 text-center">
      <h2 className="text-2xl mb-3 text-rose-500">Acara</h2>
      <p className='text-xs text-gray-500'>Kami sangat berharap Bapak/Ibu/Saudara/i</p>
      <p className='text-xs text-gray-500 mb-3'>bisa hadir di acara yang spesial ini:</p>

      <div className="grid gap-4 w-full max-w-xs mx-auto">

  {/* AKAD */}
  <div className="bg-white/80 backdrop-blur p-5 rounded-2xl shadow border border-rose-100">
    <h3 className="text-lg font-semibold text-rose-500">Akad Nikah</h3>
    <p className="text-sm mt-2">Jumat, 29 Mei 2026 | 13.00 WIB</p>
    <p className="text-[8px] mt-2">{data.location.akad}</p>

    <a
      href={data.location.maps_a}
      target="_blank"
      className="inline-block mt-3 text-sm px-4 py-2 rounded-full 
      bg-gradient-to-r from-rose-400 to-pink-300 text-white shadow 
      hover:scale-105 transition"
    >
      Buka Maps
    </a>
  </div>

  {/* RESEPSI */}
  <div className="bg-white/80 backdrop-blur p-5 rounded-2xl shadow border border-rose-100">
    <h3 className="text-lg font-semibold text-rose-500">Resepsi</h3>
    <p className="text-sm mt-2">Sabtu, 30 Mei 2026 | 10.00 WIB</p>
    <p className="text-[8px] mt-2">{data.location.resepsi}</p>

    <a
      href={data.location.maps_r}
      target="_blank"
      className="inline-block mt-3 text-sm px-4 py-2 rounded-full 
      bg-gradient-to-r from-rose-400 to-pink-300 text-white shadow 
      hover:scale-105 transition"
    >
      Buka Maps
    </a>
  </div>

</div>

      {/* <div className="grid gap-4 mt-6 w-full max-w-md mx-auto px-4">
        <Card title="Akad Nikah" date={data.date.akad} />
        <Card title="Resepsi" date={data.date.resepsi} />
      </div> */}
    </section>
  )
}

function Card({ title, date }: any) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h3 className="font-semibold">{title}</h3>
      <p>{new Date(date).toLocaleString()}</p>
      <button className="mt-2 text-blue-500">Google Maps</button>
    </div>
  )
}