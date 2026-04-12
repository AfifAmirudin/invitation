'use client'
import { useState, useRef, useEffect } from 'react'
import Cover from '@/components/Cover'
import Hero from '@/components/Hero'
import Couple from '@/components/Couple'
import Event from '@/components/Event'
import Gift from '@/components/Gift'
import GuestBook from '@/components/GuestBook'
import Navbar from '@/components/Navbar'
import MusicPlayer from '@/components/MusicPlayer'

export default function Page() {
  const [open, setOpen] = useState(false)
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (open && audioRef.current) {
      audioRef.current.play()
      setPlaying(true)
    }
  }, [open])

  return (
    <main className="bg-gradient-to-b from-rose-50 to-neutral-100 text-neutral-800">
      <MusicPlayer play={open} />

      {!open && <Cover onOpen={() => setOpen(true)} />}

      {open && (
        <>
          <Hero />
          <Couple />
          <Event />
          <Gift />
          <GuestBook />
          <Navbar />
        </>
      )}
    </main>
    
  )
}