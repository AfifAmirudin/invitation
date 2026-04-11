'use client'
import { useEffect, useState } from 'react'

export default function Countdown({ target }: any) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = new Date(target).getTime() - new Date().getTime()
      const d = Math.floor(diff / (1000 * 60 * 60 * 24))
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const m = Math.floor((diff / (1000 * 60)) % 60)
      const s = Math.floor((diff / 1000) % 60)
      setTime(`${d} Hari  ${h} : ${m} : ${s}`)
    }, 1000)
    return () => clearInterval(interval)
  }, [target])

  return <p className="font-medium">{time}</p>
}