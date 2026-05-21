const PHONE = '+48 533 104 437'
const PHONE_HREF = 'tel:+48533104437'
const BOOKSY_HREF = '#'
const ADDRESS = 'ul. 10 Lutego 1/2u, 84-200 Wejherowo'
const MAP_QUERY = encodeURIComponent('ul. 10 Lutego 1/2u, 84-200 Wejherowo')

const services = [
  {
    name: 'Przedłużanie włosów',
    desc: 'Długie, naturalne efekty z indywidualnym doborem koloru i metody — z dbałością o kondycję włosów własnych.',
  },
  {
    name: 'Zagęszczanie włosów',
    desc: 'Optyczne i realne pogrubienie włosów cienkich lub osłabionych. Subtelnie, naturalnie, na lata.',
  },
  {
    name: 'Złota Seria & BabyHair',
    desc: 'Włosy naturalne najwyższej jakości — dobrane indywidualnie. Pełna gama odcieni, struktur i długości.',
  },
  {
    name: 'Stylizacja i pielęgnacja',
    desc: 'Strzyżenie, koloryzacja, prostowanie, zabiegi regenerujące — wszystko pod jednym dachem.',
  },
]

const usp = [
  { kicker: '01', title: '30-dniowa gwarancja', desc: 'Cokolwiek się wydarzy w pierwszym miesiącu — wracasz do mnie bez dopłat.' },
  { kicker: '02', title: 'Od 2020 roku', desc: 'Setki przedłużeń, lata doświadczenia, ciągłe szkolenia z metod światowych liderów.' },
  { kicker: '03', title: 'Indywidualne podejście', desc: 'Bez gotowych szablonów. Konsultacja, dobór metody, koloru i długości pod Twoją historię.' },
]

const faq = [
  {
    q: 'Czy przedłużanie niszczy moje włosy?',
    a: 'Nie, jeśli zrobione jest metodą dopasowaną do struktury i kondycji włosów. Konsultacja zaczyna się od oceny — czasem zalecam zagęszczenie zamiast pełnego przedłużenia.',
  },
  {
    q: 'Ile trwa zabieg?',
    a: 'Średnio od 3 do 6 godzin, w zależności od metody i ilości pasm. Pełen plan przedstawiam na konsultacji.',
  },
  {
    q: 'Jak długo utrzymują się włosy?',
    a: 'Przy domowej pielęgnacji według moich wskazówek — od 3 do 6 miesięcy. Korekta co kilka miesięcy przedłuża żywotność pasm.',
  },
  {
    q: 'Czy mogę myć i stylizować włosy normalnie?',
    a: 'Tak. Daję komplet wskazówek pielęgnacyjnych po zabiegu — myjesz, suszysz i stylizujesz jak własne, z drobnymi zasadami.',
  },
  {
    q: 'Czy obsługujesz klientki spoza Wejherowa?',
    a: 'Tak — przyjeżdżają do mnie klientki z Redy, Rumi, Gdyni i całego Trójmiasta. Salon jest dogodnie zlokalizowany.',
  },
]

const pricing = [
  { name: 'Konsultacja', price: 'bezpłatna', note: 'Ocena włosów, dobór metody i wycena' },
  { name: 'Przedłużanie — krótki zakres', price: 'od 1 200 zł', note: 'Subtelne pogrubienie / pojedyncze pasma' },
  { name: 'Przedłużanie — pełen efekt', price: 'od 2 500 zł', note: 'Pełna metamorfoza długości i objętości' },
  { name: 'Zagęszczanie', price: 'od 900 zł', note: 'Optyczne pogrubienie cienkich włosów' },
  { name: 'Korekta / zdjęcie', price: 'od 350 zł', note: 'Po kilku miesiącach noszenia' },
]

export default function Page() {
  return (
    <main className="bg-cream text-ink font-sans">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-cream/80 border-b border-sand">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-serif text-xl tracking-tight">
            Magda<span className="text-coffee">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#oferta" className="hover:text-coffee transition">Oferta</a>
            <a href="#dlaczego" className="hover:text-coffee transition">Dlaczego ja</a>
            <a href="#galeria" className="hover:text-coffee transition">Efekty</a>
            <a href="#cennik" className="hover:text-coffee transition">Cennik</a>
            <a href="#kontakt" className="hover:text-coffee transition">Kontakt</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="hidden md:inline-block text-sm border border-ink px-4 py-2 rounded-full hover:bg-ink hover:text-cream transition"
          >
            Umów wizytę
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="px-6 md:px-10 pt-16 pb-24 md:pt-28 md:pb-40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <p className="hairline text-coffee mb-6">Wejherowo · Reda · Rumia · Gdynia</p>
            <h1 className="font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
              Przedłużanie włosów,<br />
              <em className="text-coffee not-italic font-normal">które wyglądają na Twoje.</em>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-stone-600 max-w-2xl leading-relaxed">
              Robię to, co kocham — od 2020 roku. Naturalne włosy najwyższej jakości,
              indywidualny dobór metody i 30-dniowa gwarancja na każdą wizytę.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-ink text-cream px-6 py-3 rounded-full text-sm hover:bg-coffee transition"
              >
                Zadzwoń · {PHONE}
              </a>
              <a
                href={BOOKSY_HREF}
                className="inline-flex items-center gap-2 border border-ink px-6 py-3 rounded-full text-sm hover:bg-ink hover:text-cream transition"
              >
                Rezerwacja Booksy →
              </a>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="aspect-[3/4] bg-sand rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-coffee/40 font-serif text-2xl">
                Twoje zdjęcie
              </div>
            </div>
            <p className="hairline text-stone-400 mt-4">Portret · placeholder</p>
          </div>
        </div>
      </section>

      {/* O MAGDZIE */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-sand">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10">
          <p className="md:col-span-3 hairline text-coffee">O mnie</p>
          <div className="md:col-span-9 max-w-3xl">
            <h2 className="font-serif font-light text-4xl md:text-5xl leading-tight">
              Nazywam się Magda i zajmuję się przedłużaniem włosów od 2020 roku.
            </h2>
            <p className="mt-8 text-lg text-stone-600 leading-relaxed">
              Nie traktuję tego jak pracy — to moja pasja. Każda klientka zostawia u mnie
              swoją historię włosów, a ja oddaję jej coś więcej niż długość. Pewność, że
              spojrzy w lustro i zobaczy siebie — tylko piękniejszą wersję.
            </p>
            <p className="mt-6 text-lg text-stone-600 leading-relaxed">
              Pracuję wyłącznie na włosach naturalnych. Złota Seria i BabyHair to materiały,
              które wybrałam świadomie — po latach testów, błędów i rozmów z innymi stylistkami
              z całej Polski.
            </p>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="px-6 md:px-10 py-24 md:py-32 border-t border-sand">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <p className="md:col-span-3 hairline text-coffee">Oferta</p>
            <h2 className="md:col-span-9 font-serif font-light text-4xl md:text-5xl leading-tight">
              Cztery filary tego, co robię najlepiej.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {services.map((s, i) => (
              <div key={s.name} className="flex gap-8">
                <span className="font-serif text-3xl text-coffee/60 leading-none pt-1">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl mb-3">{s.name}</h3>
                  <p className="text-stone-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DLACZEGO JA */}
      <section id="dlaczego" className="px-6 md:px-10 py-24 md:py-32 bg-ink text-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <p className="md:col-span-3 hairline text-coffee">Dlaczego ja</p>
            <h2 className="md:col-span-9 font-serif font-light text-4xl md:text-5xl leading-tight">
              Trzy rzeczy, które wyróżniają moją pracę.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {usp.map((u) => (
              <div key={u.title} className="border-t border-cream/20 pt-8">
                <p className="font-serif text-coffee text-2xl mb-6">{u.kicker}</p>
                <h3 className="font-serif text-2xl md:text-3xl mb-4">{u.title}</h3>
                <p className="text-cream/70 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="px-6 md:px-10 py-24 md:py-32 border-t border-sand">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <p className="md:col-span-3 hairline text-coffee">Efekty</p>
            <h2 className="md:col-span-9 font-serif font-light text-4xl md:text-5xl leading-tight">
              Każda metamorfoza to inna historia.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="aspect-[3/4] bg-sand rounded-sm flex items-center justify-center">
                <span className="font-serif text-coffee/40 text-xl">{n.toString().padStart(2, '0')}</span>
              </div>
            ))}
          </div>
          <p className="hairline text-stone-400 mt-6">Galeria · placeholder do uzupełnienia</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-sand">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="hairline text-coffee mb-6">FAQ</p>
            <h2 className="font-serif font-light text-4xl md:text-5xl leading-tight">
              Pytania, które słyszę najczęściej.
            </h2>
          </div>
          <div className="md:col-span-8 divide-y divide-sand border-y border-sand">
            {faq.map((item) => (
              <details key={item.q} className="group py-6">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                  <span className="font-serif text-xl md:text-2xl">{item.q}</span>
                  <span className="text-coffee text-2xl leading-none transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-stone-600 leading-relaxed pr-12">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CENNIK */}
      <section id="cennik" className="px-6 md:px-10 py-24 md:py-32 border-t border-sand">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 mb-12">
            <p className="md:col-span-3 hairline text-coffee">Cennik</p>
            <div className="md:col-span-9">
              <h2 className="font-serif font-light text-4xl md:text-5xl leading-tight">
                Orientacyjne przedziały — finalna wycena po konsultacji.
              </h2>
              <p className="mt-6 text-stone-600 max-w-2xl">
                Każde włosy są inne. Cena zależy od ilości i długości pasm, metody oraz koloru.
                Pierwsza konsultacja jest zawsze bezpłatna.
              </p>
            </div>
          </div>
          <div className="divide-y divide-sand border-y border-sand">
            {pricing.map((p) => (
              <div key={p.name} className="py-6 grid grid-cols-12 gap-4 items-baseline">
                <span className="col-span-12 md:col-span-4 font-serif text-2xl">{p.name}</span>
                <span className="col-span-8 md:col-span-6 text-stone-500">{p.note}</span>
                <span className="col-span-4 md:col-span-2 text-right font-serif text-xl text-coffee">
                  {p.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="px-6 md:px-10 py-24 md:py-32 bg-ink text-cream">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <p className="hairline text-coffee mb-6">Kontakt</p>
            <h2 className="font-serif font-light text-4xl md:text-6xl leading-tight">
              Umów konsultację.<br />
              Pierwsza rozmowa zawsze za darmo.
            </h2>
            <div className="mt-10 space-y-6 text-lg">
              <div>
                <p className="hairline text-coffee mb-1">Telefon</p>
                <a href={PHONE_HREF} className="hover:text-coffee transition">{PHONE}</a>
              </div>
              <div>
                <p className="hairline text-coffee mb-1">Adres</p>
                <p>{ADDRESS}</p>
              </div>
              <div>
                <p className="hairline text-coffee mb-1">Godziny otwarcia</p>
                <p>pon–pt 9:00–19:00 · sob 9:00–15:00</p>
                <p className="text-xs text-cream/40 mt-1">* godziny do potwierdzenia</p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={PHONE_HREF}
                className="bg-coffee text-cream px-6 py-3 rounded-full text-sm hover:bg-cream hover:text-ink transition"
              >
                Zadzwoń
              </a>
              <a
                href={BOOKSY_HREF}
                className="border border-cream/40 px-6 py-3 rounded-full text-sm hover:bg-cream hover:text-ink transition"
              >
                Rezerwacja Booksy →
              </a>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="aspect-[4/3] bg-cream/5 rounded-sm overflow-hidden border border-cream/10">
              <iframe
                title="Mapa salonu"
                src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-10 py-12 border-t border-sand text-sm text-stone-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} Magda · Przedłużanie włosów</p>
          <p>Wejherowo · Reda · Rumia · Gdynia</p>
        </div>
      </footer>
    </main>
  )
}
