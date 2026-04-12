'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export function useGuest() {
  const params = useSearchParams()
  const [guest, setGuest] = useState('Tamu Undangan')

  useEffect(() => {
    const name = params.get('to')
    if (name) {
      const decoded = decodeURIComponent(name)
      setGuest(decoded)
    }
  }, [params])

  return guest
}