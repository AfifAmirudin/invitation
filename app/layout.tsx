import './globals.css'
import { Playfair_Display, Poppins } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-title' })
const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','500'], variable: '--font-body' })

export const metadata = {
  title: 'Wedding Invitation',
  description: 'Undangan Pernikahan',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${playfair.variable} ${poppins.variable} text-neutral-800 bg-gradient-to-b from-rose-100 via-rose-50 to-pink-100`}>
        {children}
      </body>
    </html>
  )
}