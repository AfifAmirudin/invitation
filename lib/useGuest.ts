'use client'
import { useEffect, useState } from 'react'

export function useGuest() {
  const [guest, setGuest] = useState('Tamu Undangan')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const params = new URLSearchParams(window.location.search)
    const name = params.get('to')

    if (name) {
      const decoded = decodeURIComponent(name)
      setGuest(decoded)
    }
  }, [])

  return guest
}