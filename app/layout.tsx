import './globals.css'
import { Playfair_Display, Poppins } from 'next/font/google'
import type { Metadata } from 'next'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-title' })
const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','500'], variable: '--font-body' })

export const metadata: Metadata = {
  title: 'Undangan Pernikahan Tika & Darul',
  description: 'Kami mengundang Anda untuk hadir di hari bahagia kami.',

  openGraph: {
    title: 'Undangan Pernikahan Alya & Fajar',
    description: 'Kami mengundang Anda untuk hadir di hari bahagia kami.',
    url: 'https://domainkamu.vercel.app',
    siteName: 'Wedding Invitation',
    images: [
      {
        url: '/cover.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Undangan Pernikahan Tika & Darul',
    description: 'Kami mengundang Anda untuk hadir di hari bahagia kami.',
    images: ['/cover.jpg'],
  },
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