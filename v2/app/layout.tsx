import type { Metadata } from 'next'
import { Playfair_Display, Manrope } from 'next/font/google'
import './globals.css'

const display = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
})

const sans = Manrope({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const SITE_URL = 'https://przedluzanie-wlosow.example.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Magda · Przedłużanie włosów — Wejherowo, Trójmiasto',
  description:
    'Editorialne metamorfozy włosów w Wejherowie. Przedłużanie i zagęszczanie, Złota Seria i BabyHair, 30-dniowa gwarancja. Doświadczenie od 2020.',
  openGraph: {
    title: 'Magda · Przedłużanie włosów — Wejherowo',
    description: 'Editorialne metamorfozy włosów. Złota Seria, BabyHair, 30-dniowa gwarancja.',
    type: 'website',
    locale: 'pl_PL',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
