import Animated from './Animated'
import { data } from '@/lib/data'

export default function Couple() {
  return (
    <section id='couple' className="py-8 text-center">
      <Animated>
        <h2 className="text-2xl mb-3 font-[family-name:var(--font-title)] text-rose-500">Save The Date</h2>
        <p className="text-xs text-gray-500 mb-3 px-12">Tanpa mengurangi rasa hormat kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami</p>
        <div className="grid gap-6 w-full max-w-md mx-auto px-4">
  {[data.bride, data.groom].map((p, i) => (
    <div key={i} className="bg-white p-5 rounded-2xl shadow w-full">
      <img
        src={p.photo}
        className="w-full aspect-square object-cover rounded-xl"
      />
      <h3 className="text-lg mt-3">{p.name}</h3>
      <p className="text-xs mb-2">{p.parent}</p>
      <a
      href={p.ig}
      target="_blank"
      className="inline-block mt-3 text-sm px-4 py-2 rounded-full 
      bg-gradient-to-r from-rose-400 to-pink-300 text-white shadow 
      hover:scale-105 transition"
    >
      Instagram
    </a>
    </div>
  ))}
</div>
        {/* <div className="grid gap-8">
          {[data.bride, data.groom].map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-lg">
              <img src={p.photo} className="rounded-xl" />
              <h3 className="text-xl mt-3">{p.name}</h3>
              <p>{p.parent}</p>
              <p className="text-sm text-gray-500">{p.ig}</p>
            </div>
          ))}
        </div> */}

        <div className="mt-8 italic text-sm leading-relaxed px-10">
          “Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.”
          <br />
          <br />
          (QS Ar-Rum:21)
        </div>
      </Animated>
    </section>
  )
}
