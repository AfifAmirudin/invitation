import Animated from './Animated'
import Countdown from './Countdown'
import { data } from '@/lib/data'

export default function Hero() {
  return (
<section
  id="hero"
  className="min-h-screen flex flex-col items-center justify-center text-center p-6"
>
  <Animated>
    <h2 className="text-sm tracking-widest">We Are Getting Married</h2>

    {/* FRAME FOTO DENGAN GRADIENT */}
    <div className="mt-4 w-full max-w-sm">
  <div className="aspect-[3/2] p-[4px] rounded-3xl bg-gradient-to-tr from-rose-400 to-pink-300 shadow-lg">
    <img
      src="/cover.jpg"
      className="w-full h-full object-cover rounded-3xl"
    />
  </div>
</div>

    <h3 className="text-3xl mt-4 font-[family-name:var(--font-title)] text-rose-500">
      Tika & Darul
    </h3>

    <h2 className="text-sm mt-8 tracking-widest">29 Mei 2026</h2>
    {/* TIMER AKAD */}
    <div className="mt-3 w-full max-w-sm min-h-[90px] bg-white/80 backdrop-blur rounded-2xl px-4 py-4 shadow flex flex-col justify-center text-rose-400">
  <Countdown target={data.date.akad} />
  <p className="text-xs text-gray-500 mb-1">Menuju Akad</p>
</div>

    {/* TIMER RESEPSI */}
<div className="mt-4 w-full max-w-sm min-h-[90px] bg-white/80 backdrop-blur rounded-2xl px-4 py-4 shadow flex flex-col justify-center text-rose-400">
  <Countdown target={data.date.resepsi} />
  <p className="text-xs text-gray-500 mb-1">Menuju Resepsi</p>
</div>
  </Animated>
</section>
    // <section id='hero' className="min-h-screen flex flex-col items-center justify-center text-center p-6">
    //   <Animated>
    //     <h2 className="text-xl tracking-widest">We Are Getting Married</h2>
    //     <img src="/couple.jpg" className="w-64 rounded-3xl my-4 shadow-xl" />

    //     <h3 className="text-3xl font-[family-name:var(--font-title)]">
    //       {data.bride.name} & {data.groom.name}
    //     </h3>

    //     <div className="mt-6">
    //       <Countdown target={data.date.akad} />
    //     </div>

    //     <div className="mt-4">
    //       <Countdown target={data.date.resepsi} />
    //     </div>
    //   </Animated>
    // </section>
  )
}