'use client'
import { useEffect, useState } from 'react'
import { Home, Heart, Calendar, MessageCircle } from 'lucide-react'

export default function Navbar() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const sections = ['hero','couple','event','guest']
    const observers: IntersectionObserver[] = []

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.6 }
      )

      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const item = (id: string, Icon: any, label: string) => (
    <button
      onClick={() => scroll(id)}
      className={`flex flex-col items-center text-xs transition-all duration-300 ${
        active === id ? 'text-rose-500 scale-110' : 'text-gray-500'
      }`}
    >
      <Icon size={18} />
      {label}
    </button>
  )

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 
      bg-white/60 backdrop-blur-2xl border border-white/30 
      flex justify-between items-center px-6 py-3 
      rounded-full shadow-2xl w-[90%] max-w-md
      animate-[fadeInUp_0.8s_ease]">

      {item('hero', Home, 'Home')}
      {item('couple', Heart, 'Mempelai')}
      {item('event', Calendar, 'Acara')}
      {item('guest', MessageCircle, 'Ucapan')}

    </nav>
  )
}