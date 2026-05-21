import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const serif = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

const SITE_URL = 'https://przedluzanie-wlosow.example.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Przedłużanie włosów Magda — Wejherowo, Reda, Rumia, Gdynia',
  description:
    'Profesjonalne przedłużanie i zagęszczanie włosów w Wejherowie. Złota Seria, BabyHair, 30-dniowa gwarancja, doświadczenie od 2020 roku. Umów wizytę.',
  openGraph: {
    title: 'Przedłużanie włosów Magda — Wejherowo',
    description:
      'Profesjonalne przedłużanie i zagęszczanie włosów. Złota Seria, BabyHair, 30-dniowa gwarancja.',
    type: 'website',
    locale: 'pl_PL',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
