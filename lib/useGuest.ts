'use client'
import { useSearchParams } from 'next/navigation'

export function useGuest() {
  const params = useSearchParams()
  return params.get('to') || 'Tamu Undangan'
}