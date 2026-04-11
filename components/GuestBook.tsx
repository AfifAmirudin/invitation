'use client'
import { useState, useEffect } from 'react'

export default function GuestBook() {
  const [list, setList] = useState<any[]>([])
  const [form, setForm] = useState({ name: '', hadir: '', msg: '', })
  const [showPopup, setShowPopup] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('guest')
    if (saved) setList(JSON.parse(saved))
  }, [])

  const handleSubmit = () => {
  if (!form.name || !form.hadir || !form.msg) {
    setError('Semua field wajib diisi')
    return
  }

  setError('')

  const newData = [...list, form]
  setList(newData)
  localStorage.setItem('guest', JSON.stringify(newData))

  // reset form
  setForm({
    name: '',
    hadir: '',
    msg: '',
  })

  // popup sukses
  setShowPopup(true)
  setTimeout(() => setShowPopup(false), 3000)
}

  return (
    <section id='guest' className="py-8">
      <h2 className="text-2xl text-center mb-3 text-rose-500">Buku Tamu</h2>
      <p className='text-xs text-gray-500 text-center mb-3 px-12'>Tulis ucapan dan doa Anda di sini karena kami sangat bersemangat untuk memulai perjalanan baru ini bersama-sama</p>

      <div className="bg-white/80 backdrop-blur p-5 rounded-2xl shadow w-full max-w-xs mx-auto px-4">
  <input
    className="w-full border rounded-lg p-2 mb-2 text-sm ${error && !form.name ? 'border-red-400' : ''}`}"
    placeholder="Nama"
    value={form.name}
    onChange={(e) => setForm({ ...form, name: e.target.value })}
  />

  {/* dropdown kehadiran */}
  <select
    className="w-full border rounded-lg p-2 mb-2 text-sm"
    value={form.hadir}
    onChange={(e) => setForm({ ...form, hadir: e.target.value })}
  >
    <option value="">Konfirmasi Kehadiran</option>
    <option value="Hadir">Ya, saya akan hadir</option>
    <option value="Masih Ragu">Saya masih ragu</option>
    <option value="Tidak Hadir">Maaf, tidak bisa hadir</option>
  </select>

  <textarea
    className="w-full border rounded-lg p-2 mb-2 text-sm"
    placeholder="Ucapan & Doa"
    value={form.msg}
    onChange={(e) => setForm({ ...form, msg: e.target.value })}
  />

  {error && (
  <p className="text-xs text-red-500 mb-2 animate-pulse">
    {error}
  </p>
)}


  {/* button kanan */}
  <div className="flex justify-end">
    <button onClick={handleSubmit} className="bg-gradient-to-r from-rose-400 to-pink-300 text-white px-4 py-2 rounded-lg text-sm shadow">
      Kirim
    </button>
  </div>
</div>

      {/* <div className="bg-white p-4 rounded-2xl shadow mt-4 w-full max-w-md mx-auto px-4">
        <input
          placeholder="Nama"
          className="w-full mb-2 border p-2 rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <textarea
          placeholder="Ucapan"
          className="w-full mb-2 border p-2 rounded"
          onChange={(e) => setForm({ ...form, msg: e.target.value })}
        />
        <button onClick={submit} className="bg-black text-white px-4 py-2 rounded">
          Kirim
        </button>
      </div>

      <div className="mt-4 max-h-60 overflow-y-auto w-full max-w-md mx-auto px-4">
        {list.map((d, i) => (
          <div key={i} className="border-b py-2">
            <p className="font-semibold">{d.name}</p>
            <p>{d.msg}</p>
          </div>
        ))}
      </div> */}

      <div className="mt-4 max-h-70 w-full max-w-md mx-auto px-4 overflow-y-auto space-y-3 custom-scroll">
  {list.map((d, i) => (
    <div
      key={i}
      className="bg-white/70 backdrop-blur p-3 rounded-xl shadow 
      transition-all duration-500 animate-[fadeInUp_0.6s_ease]"
    >
      <div className="flex justify-between items-center mb-1">
        <p className="font-semibold text-sm">{d.name}</p>
        <span className="text-[8px] px-2 py-1 rounded-full 
          bg-rose-100 text-rose-500">
          {d.hadir}
        </span>
      </div>
      <p className="text-xs text-gray-600">{d.msg}</p>
    </div>
  ))}
</div>

{showPopup && (
  <div className="fixed top-6 left-1/2 -translate-x-1/2 
    bg-gradient-to-r from-rose-400 to-pink-300 
    text-white px-6 py-3 rounded-full shadow-lg 
    animate-[fadeInUp_0.5s_ease] z-50">
    Terimakasih atas konfirmasi dan doanya 💖
  </div>
)}

<p className="text-xs text-center tracking-widest mt-6">Special Gift from</p>
<h2 className="text-sm text-center text-rose-500 tracking-widest mb-16">Dipsy & Husband</h2>
    </section>
  )
}