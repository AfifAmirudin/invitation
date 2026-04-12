'use client'

import { useState, useEffect } from 'react'
import { data } from '@/lib/data'

export default function Gift() {
const [copiedRek, setCopiedRek] = useState(false)
const [copiedAlamat, setCopiedAlamat] = useState(false)

const handleCopy = () => {
  navigator.clipboard.writeText(data.rekening.number)
  setCopiedRek(true)

  setTimeout(() => setCopiedRek(false), 2000)
}
const handleCopy2 = () => {
  navigator.clipboard.writeText(data.location.resepsi)
  setCopiedAlamat(true)

  setTimeout(() => setCopiedAlamat(false), 2000)
}

  return (
    <section className="py-8 text-center">
      <h2 className="text-2xl mb-3 text-rose-500">Amplop Digital</h2>
      <p className="text-xs text-gray-500 mb-3 px-12">Bagi saudara Bapak/Ibu/Saudara/i yang ingin mengirimkan hadiah pernikahan dapat melalui:</p>

      <div className="bg-white/80 backdrop-blur p-5 rounded-2xl shadow text-center border border-rose-100 w-full max-w-xs mx-auto">

  <p className="text-sm text-gray-500">{data.rekening.bank}</p>

  <p className="text-lg font-semibold tracking-wider mt-1">
    {data.rekening.number}
  </p>

  <p className="text-xs mt-1">{data.rekening.name}</p>

  <button
    onClick={handleCopy}
    className={`mt-3 px-4 py-2 text-xs rounded-full text-white shadow transition-all duration-300
    ${copiedRek 
      ? 'bg-green-400 scale-105' 
      : 'bg-gradient-to-r from-rose-400 to-pink-300 hover:scale-105'
    }`}
  >
    {copiedRek ? 'Berhasil Disalin ✓' : 'Salin Nomor Rekening'}
  </button>

</div>
      <div className="bg-white/80 backdrop-blur p-5 rounded-2xl shadow text-center border border-rose-100 w-full max-w-xs mx-auto mt-4">


  <p className="text-lg font-semibold tracking-wider mt-1">
    Kirim Hadiah
  </p>

  <p className="text-xs mt-1">{data.location.resepsi}</p>

  <button
    onClick={handleCopy2}
    className={`mt-3 px-4 py-2 text-xs rounded-full text-white shadow transition-all duration-300
    ${copiedAlamat 
      ? 'bg-green-400 scale-105' 
      : 'bg-gradient-to-r from-rose-400 to-pink-300 hover:scale-105'
    }`}
  >
    {copiedAlamat ? 'Berhasil Disalin ✓' : 'Salin Alamat'}
  </button>

</div>

    </section>
  )
}