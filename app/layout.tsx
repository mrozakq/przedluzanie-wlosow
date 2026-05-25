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

const SITE_URL = 'https://magda.style'
const SITE_NAME = 'Przedłużanie włosów Magda · Wejherowo'
const DESCRIPTION =
  'Przedłużanie i zagęszczanie włosów w Wejherowie. Magda — od 2020 r., naturalne pasma Złotej Serii i BabyHair, 30-dniowa gwarancja. Obsługuję Wejherowo, Redę, Rumię, Gdynię, Sopot, Puck i okolice.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Przedłużanie włosów Wejherowo · Magda — Reda, Rumia, Gdynia',
    template: '%s · Przedłużanie włosów Magda',
  },
  description: DESCRIPTION,
  keywords: [
    'przedłużanie włosów Wejherowo',
    'zagęszczanie włosów Wejherowo',
    'przedłużanie włosów Reda',
    'przedłużanie włosów Rumia',
    'przedłużanie włosów Gdynia',
    'przedłużanie włosów Sopot',
    'przedłużanie włosów Puck',
    'przedłużanie włosów Trójmiasto',
    'Złota Seria',
    'BabyHair',
    'salon Magda Wejherowo',
  ],
  authors: [{ name: 'Magda' }],
  creator: 'Magda',
  publisher: 'Przedłużanie włosów Magda',
  openGraph: {
    title: SITE_NAME,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'pl_PL',
    images: [
      {
        url: '/images/1.jpg',
        width: 1200,
        height: 900,
        alt: 'Magda — stylistka przedłużania włosów w Wejherowie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: DESCRIPTION,
    images: ['/images/1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  manifest: '/site.webmanifest',
  category: 'beauty',
  formatDetection: { telephone: true, address: true, email: true },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  '@id': `${SITE_URL}/#hairsalon`,
  name: 'Przedłużanie włosów Magda',
  alternateName: 'Magda · Przedłużanie włosów Wejherowo',
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/images/1.jpg`,
  telephone: '+48533104437',
  priceRange: '$$',
  currenciesAccepted: 'PLN',
  paymentAccepted: 'Cash, Credit Card, BLIK',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. 10 Lutego 1/2u',
    addressLocality: 'Wejherowo',
    postalCode: '84-200',
    addressRegion: 'pomorskie',
    addressCountry: 'PL',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 54.6045, longitude: 18.2367 },
  areaServed: [
    { '@type': 'City', name: 'Wejherowo' },
    { '@type': 'City', name: 'Reda' },
    { '@type': 'City', name: 'Rumia' },
    { '@type': 'City', name: 'Gdynia' },
    { '@type': 'City', name: 'Sopot' },
    { '@type': 'City', name: 'Gdańsk' },
    { '@type': 'City', name: 'Puck' },
    { '@type': 'City', name: 'Bolszewo' },
    { '@type': 'City', name: 'Luzino' },
    { '@type': 'City', name: 'Kosakowo' },
    { '@type': 'City', name: 'Władysławowo' },
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '15:00' },
  ],
  founder: { '@type': 'Person', name: 'Magda' },
  foundingDate: '2020',
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Przedłużanie włosów', description: 'Pełna metamorfoza długości — naturalne pasma Złotej Serii i BabyHair, indywidualny dobór koloru.' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Zagęszczanie włosów', description: 'Optyczne i realne zagęszczenie włosów cienkich, osłabionych lub po porodzie.' } },
  ],
  sameAs: ['https://przedluzaniewlosowmagda.booksy.com/'],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Czy przedłużanie włosów niszczy moje włosy?', acceptedAnswer: { '@type': 'Answer', text: 'Nie — przy dobrze dobranej metodzie. Konsultacja zaczyna się od diagnozy. Jeśli włosy są w kiepskiej kondycji, zalecam wzmocnienie lub zagęszczanie zamiast pełnego przedłużenia.' } },
    { '@type': 'Question', name: 'Ile trwa pierwszy zabieg przedłużania włosów?', acceptedAnswer: { '@type': 'Answer', text: 'Od trzech do sześciu godzin. Pełen plan, ilość pasm i czas omawiamy w trakcie bezpłatnej konsultacji.' } },
    { '@type': 'Question', name: 'Jak długo wytrzymują przedłużone włosy?', acceptedAnswer: { '@type': 'Answer', text: 'Średnio 3–6 miesięcy przy domowej pielęgnacji zgodnej z moimi wskazówkami. Korekta przedłuża żywotność pasm o kolejne miesiące.' } },
    { '@type': 'Question', name: 'Czy mogę myć i stylizować przedłużone włosy swobodnie?', acceptedAnswer: { '@type': 'Answer', text: 'Tak. Po zabiegu dostajesz komplet wskazówek pielęgnacyjnych — rodzaj szczotki, częstotliwość mycia, kosmetyki. Dalej to codzienność.' } },
    { '@type': 'Question', name: 'Czy obsługujesz klientki spoza Wejherowa?', acceptedAnswer: { '@type': 'Answer', text: 'Tak. Klientki przyjeżdżają z Redy, Rumi, Gdyni, Sopotu, Pucka i całego Trójmiasta. Salon ma dobry dojazd i parking.' } },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${display.variable} ${sans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#4a0f1e" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
