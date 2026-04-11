'use client'

import { useEffect, useRef, useState } from 'react'

export default function MusicPlayer({ play }: { play: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (play && audioRef.current) {
      audioRef.current.volume = 0
      audioRef.current.play()
      fadeIn()
      setPlaying(true)
    }
  }, [play])

  const fadeIn = () => {
    let vol = 0
    const interval = setInterval(() => {
      if (!audioRef.current) return
      if (vol >= 1) {
        clearInterval(interval)
      } else {
        vol += 0.05
        audioRef.current.volume = vol
      }
    }, 200)
  }

  const toggle = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop />

      {/* floating control */}

      {play && (
  <button
    onClick={toggle}
    className="fixed z-3 text-rose-400 bottom-24 right-4 bg-white/80 backdrop-blur shadow-lg rounded-full p-3"
  >
    {playing ? '⏸' : '▶'}
  </button>
)}
    </>
  )
}