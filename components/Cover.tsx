'use client'
import Animated from './Animated'
import { useGuest } from '@/lib/useGuest'

export default function Cover({ onOpen }: any) {
  const guest = useGuest()

  return (
    <section className="relative h-screen flex flex-col items-center justify-end text-center p-6 text-white">
  {/* background image */}
  <div className="absolute inset-0">
    <img src="/cover.jpg" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-rose-800/40 to-transparent" />
  </div>

  <Animated>
    <div className="relative z-10 mb-16">
      <h1 className="text-4xl font-[family-name:var(--font-title)]">
        Tika & Darul
      </h1>
      <p className="mt-2 text-sm">Kepada Yth.</p>
      <p className="font-medium text-lg">{guest}</p>

      <button
        onClick={onOpen}
        className="mt-6 px-6 py-3 bg-white text-black rounded-full shadow"
      >
        Buka Undangan
      </button>
    </div>
  </Animated>
</section>
  )
}