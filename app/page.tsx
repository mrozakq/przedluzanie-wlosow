const PHONE = '+48 533 104 437'
const PHONE_HREF = 'tel:+48533104437'
const BOOKSY_HREF = 'https://przedluzaniewlosowmagda.booksy.com/'
const ADDRESS = 'ul. 10 Lutego 1/2u, 84-200 Wejherowo'
const MAP_EMBED_SRC =
  'https://www.google.com/maps?q=Przed%C5%82u%C5%BCanie+w%C5%82os%C3%B3w+Magda+Wejherowo&output=embed'

const services = [
  { num: '01', name: 'Przedłużanie', desc: 'Pełna metamorfoza długości. Pasma najwyższej jakości, dobór koloru pod światło Twojej skóry.' },
  { num: '02', name: 'Zagęszczanie', desc: 'Włosy cienkie? Po porodzie? Po chorobie? Wracamy do gęstości, której Ci brakowało.' },
  { num: '03', name: 'Złota Seria', desc: 'Włosy europejskie, kuszące w dotyku i światłem. Premium, które poznasz od pierwszego ruchu.' },
  { num: '04', name: 'BabyHair', desc: 'Subtelne pasma do dopełnienia natury. Niewidzialne dla innych, namacalne dla Ciebie.' },
]

const usp = [
  { title: '30 dni gwarancji', desc: 'Bez kompromisu. Pierwszy miesiąc po zabiegu — pełna opieka, korekta w cenie jeśli coś nie tak.' },
  { title: 'Od 2020 r.', desc: 'Lata pracy z włosami w Wejherowie. Setki klientek z Trójmiasta i okolic.' },
  { title: 'Włos do włosa', desc: 'Nie sprzedaję pakietów. Sprzedaję efekt szyty na Twoją głowę.' },
]

const gallery = [
  { src: '/images/02.jpg', alt: 'Efekt przedłużania włosów — długie ciemne proste włosy, salon Wejherowo' },
  { src: '/images/03.jpg', alt: 'Metamorfoza włosów blond przed i po — przedłużanie, Wejherowo' },
  { src: '/images/04.jpg', alt: 'Przedłużanie z fryzury bob do długich włosów — efekt before/after' },
  { src: '/images/05.jpg', alt: 'Długie włosy blond po zabiegu przedłużania — Magda, Wejherowo' },
]

const faq = [
  { q: '01 / Czy przedłużanie niszczy moje włosy?', a: 'Nie — przy dobrze dobranej metodzie. Konsultacja zaczyna się od diagnozy. Jeśli włosy są w kiepskiej kondycji, zalecam wzmocnienie lub zagęszczanie zamiast pełnego przedłużenia.' },
  { q: '02 / Ile trwa pierwszy zabieg?', a: 'Od trzech do sześciu godzin. Pełen plan, ilość pasm i czas omawiamy w trakcie bezpłatnej konsultacji — żebyś wiedziała czego się spodziewać.' },
  { q: '03 / Jak długo wytrzymują pasma?', a: 'Średnio 3–6 miesięcy przy domowej pielęgnacji zgodnej z moimi wskazówkami. Korekta przedłuża żywotność włosów o kolejne miesiące.' },
  { q: '04 / Czy mogę myć i stylizować swobodnie?', a: 'Tak. Po zabiegu zostawiam zestaw zasad: rodzaj szczotki, częstotliwość mycia, kosmetyki. Dalej — codzienność.' },
  { q: '05 / Czy obsługujesz spoza Wejherowa?', a: 'Tak. Przyjeżdżają do mnie klientki z Redy, Rumi, Gdyni, Sopotu, Pucka i całego Trójmiasta. Salon ma dobry dojazd i parking.' },
]

const pricing = [
  { name: 'Konsultacja', price: 'gratis' },
  { name: 'Przedłużanie — krótki zakres', price: 'od 1 200 zł' },
  { name: 'Przedłużanie — pełen efekt', price: 'od 2 500 zł' },
  { name: 'Zagęszczanie', price: 'od 900 zł' },
  { name: 'Korekta / zdjęcie pasm', price: 'od 350 zł' },
]

export default function Page() {
  return (
    <main className="bg-cream text-ink">
      {/* MARQUEE / TICKER */}
      <div className="bg-wine text-gold overflow-hidden py-3 border-b border-gold/20">
        <div className="marquee text-center px-4">
          30 dni gwarancji · Złota Seria · BabyHair · Wejherowo · Reda · Rumia · Gdynia · Sopot · Puck · Od 2020 r.
        </div>
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <a href="#top" className="font-display font-black text-2xl tracking-tight" aria-label="Strona główna">
            MAGDA<span className="text-wine">.</span>
          </a>
          <nav className="hidden lg:flex items-center gap-10 text-xs uppercase tracking-[0.2em] font-medium">
            <a href="#oferta" className="hover:text-wine transition">Oferta</a>
            <a href="#dlaczego" className="hover:text-wine transition">Manifest</a>
            <a href="#galeria" className="hover:text-wine transition">Efekty</a>
            <a href="#cennik" className="hover:text-wine transition">Cennik</a>
            <a href="#kontakt" className="hover:text-wine transition">Kontakt</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="bg-wine text-cream px-5 py-3 text-xs uppercase tracking-[0.2em] font-bold hover:bg-ink transition"
          >
            Umów wizytę
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <p className="marquee text-wine mb-8">Salon · Wejherowo · od 2020</p>
          <h1 className="font-display font-black text-[14vw] md:text-[10vw] lg:text-[9rem] leading-[0.88] tracking-tight">
            WŁOSY,
            <br />
            <span className="text-wine italic font-normal">które piszą</span>
            <br />
            HISTORIĘ.
          </h1>
          <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-6 md:col-start-1 text-lg md:text-xl leading-relaxed text-ink/70 max-w-xl">
              Przedłużanie i zagęszczanie włosów w <strong className="font-semibold text-ink">Wejherowie</strong>.
              Naturalne pasma najwyższej jakości, indywidualny projekt na każdą głowę i{' '}
              <span className="text-wine font-semibold">30 dni gwarancji</span> w pakiecie. Obsługuję
              Redę, Rumię, Gdynię, Sopot, Puck i okolice.
            </p>
            <div className="md:col-span-6 flex flex-wrap justify-start md:justify-end gap-3">
              <a
                href={PHONE_HREF}
                className="bg-ink text-cream px-7 py-4 text-sm uppercase tracking-[0.2em] font-bold hover:bg-wine transition"
              >
                Zadzwoń · {PHONE}
              </a>
              <a
                href={BOOKSY_HREF}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="bg-gold text-ink px-7 py-4 text-sm uppercase tracking-[0.2em] font-bold hover:bg-goldLight transition"
              >
                Booksy →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="bg-ink text-cream py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {[
            { n: '2020', l: 'rok startu' },
            { n: '500+', l: 'metamorfoz' },
            { n: '30 dni', l: 'gwarancji' },
            { n: '35 km', l: 'zasięgu' },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display font-black text-4xl md:text-5xl text-gold">{s.n}</p>
              <p className="marquee mt-2 text-cream/60">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* O MAGDZIE */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <p className="marquee text-wine mb-6">O mnie</p>
            <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.95]">
              Robię to,
              <br />
              <span className="italic font-normal text-wine">co kocham.</span>
            </h2>
            <figure className="mt-10">
              <div className="aspect-[3/4] bg-wine/10 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/01.jpg"
                  alt="Magda — stylistka przedłużania włosów w Wejherowie, w swoim salonie"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="marquee text-ink/40 mt-3">Magda · stylistka i właścicielka</figcaption>
            </figure>
          </div>
          <div className="md:col-span-7 md:col-start-6 max-w-2xl md:pt-2">
            <p className="text-2xl font-display leading-snug text-ink/90">
              Nie jestem usługą. Jestem osobą, do której przychodzisz na rozmowę, na rytuał,
              na metamorfozę.
            </p>
            <p className="mt-8 text-lg text-ink/70 leading-relaxed">
              Od 2020 roku przedłużam włosy w sercu Wejherowa. Przez te lata przekonałam się,
              że dobre przedłużanie to nie technika — to słuchanie. Najpierw rozumiem co
              chcesz osiągnąć, potem dobieram metodę i materiał. W tej kolejności.
            </p>
            <p className="mt-6 text-lg text-ink/70 leading-relaxed">
              Pracuję wyłącznie na włosach naturalnych <strong className="font-semibold text-ink">Złotej
              Serii</strong> i <strong className="font-semibold text-ink">BabyHair</strong>. Wybór świadomy —
              po latach testów i błędów. Trafiają do mnie klientki z całego Trójmiasta —
              z Redy, Rumi, Gdyni, Sopotu i Pucka.
            </p>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="bg-wine text-cream px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="marquee text-gold mb-6">Oferta</p>
              <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.95]">
                Cztery <span className="glow-gold">specjalizacje.</span>
              </h2>
            </div>
            <p className="max-w-md text-cream/70 leading-relaxed">
              Nie robię wszystkiego. Robię to, co robię najlepiej — i robię to świadomie.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.name}
                className="group border border-cream/15 p-8 md:p-10 hover:bg-wineDark transition"
              >
                <p className="font-display font-black text-6xl text-gold/80 mb-6">{s.num}</p>
                <h3 className="font-display font-bold text-3xl md:text-4xl mb-4">{s.name}</h3>
                <p className="text-cream/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DLACZEGO / MANIFEST */}
      <section id="dlaczego" className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <p className="marquee text-wine mb-6">Manifest</p>
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.95] mb-16 max-w-4xl">
            Trzy zasady, których <span className="italic font-normal text-wine">nie łamię.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-ink/10">
            {usp.map((u, i) => (
              <div key={u.title} className="bg-cream p-10">
                <p className="font-display font-black text-7xl text-gold mb-6">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display font-bold text-3xl mb-4">{u.title}</h3>
                <p className="text-ink/70 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="bg-ink text-cream px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="marquee text-gold mb-6">Efekty</p>
              <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.95]">
                Editorial<br />
                <span className="italic font-normal glow-gold">portfolio.</span>
              </h2>
            </div>
            <p className="max-w-md text-cream/70 leading-relaxed">
              Każda klientka. Każda metamorfoza. Każdy szczegół.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {gallery.map((g, i) => (
              <figure key={g.src} className="aspect-[3/4] bg-wine/40 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.src}
                  alt={g.alt}
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="marquee text-wine mb-6">FAQ</p>
            <h2 className="font-display font-black text-5xl md:text-6xl leading-[0.95]">
              Pytania,
              <br />
              <span className="italic font-normal text-wine">które słyszę.</span>
            </h2>
          </div>
          <div className="md:col-span-8 border-t-2 border-ink">
            {faq.map((item) => (
              <details key={item.q} className="group border-b border-ink/15 py-8">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                  <span className="font-display font-bold text-2xl md:text-3xl">{item.q}</span>
                  <span className="text-wine text-4xl leading-none transition group-open:rotate-45 shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-6 text-lg text-ink/70 leading-relaxed pr-16">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CENNIK */}
      <section id="cennik" className="bg-wine text-cream px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="marquee text-gold mb-6">Cennik</p>
              <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.95]">
                Bez ukrytych
                <br />
                <span className="glow-gold">kosztów.</span>
              </h2>
            </div>
            <p className="max-w-md text-cream/70 leading-relaxed">
              Przedziały orientacyjne. Finalna wycena po bezpłatnej konsultacji — bo każde
              włosy są inne.
            </p>
          </div>
          <div className="border-t border-cream/20">
            {pricing.map((p) => (
              <div
                key={p.name}
                className="border-b border-cream/20 py-8 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-wineDark px-2 md:px-6 transition"
              >
                <span className="font-display font-bold text-2xl md:text-3xl">{p.name}</span>
                <span className="font-display text-2xl md:text-3xl text-gold">{p.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <p className="marquee text-wine mb-6">Kontakt</p>
            <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.95]">
              Jedna<br />
              rozmowa.<br />
              <span className="italic font-normal text-wine">Zero zobowiązań.</span>
            </h2>
            <div className="mt-12 space-y-8 text-lg">
              <div>
                <p className="marquee text-wine mb-1">Telefon</p>
                <a href={PHONE_HREF} className="font-display font-bold text-3xl hover:text-wine transition">
                  {PHONE}
                </a>
              </div>
              <div>
                <p className="marquee text-wine mb-1">Adres</p>
                <address className="font-display text-2xl not-italic">{ADDRESS}</address>
              </div>
              <div>
                <p className="marquee text-wine mb-1">Godziny</p>
                <p className="text-ink/80">pon–pt · 9:00–19:00</p>
                <p className="text-ink/80">sob · 9:00–15:00</p>
                <p className="text-xs text-ink/40 mt-1">* godziny do potwierdzenia</p>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <a
                href={PHONE_HREF}
                className="bg-ink text-cream px-7 py-4 text-sm uppercase tracking-[0.2em] font-bold hover:bg-wine transition"
              >
                Zadzwoń
              </a>
              <a
                href={BOOKSY_HREF}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="bg-gold text-ink px-7 py-4 text-sm uppercase tracking-[0.2em] font-bold hover:bg-goldLight transition"
              >
                Booksy →
              </a>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="aspect-square bg-wine/10 overflow-hidden">
              <iframe
                title="Mapa dojazdu do salonu Magda — przedłużanie włosów Wejherowo"
                src={MAP_EMBED_SRC}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-cream/60 px-6 md:px-10 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-sm">
          <p className="font-display font-black text-2xl text-cream">MAGDA<span className="text-wine">.</span></p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <p>© {new Date().getFullYear()} Magda · Przedłużanie włosów</p>
            <p>Wejherowo · Reda · Rumia · Gdynia · Sopot · Puck</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
