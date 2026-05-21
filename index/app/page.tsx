export default function IndexPage() {
  const variants = [
    {
      href: '/v1/',
      label: 'Wariant 1',
      title: 'Minimalistyczny / luksusowy',
      desc: 'Dużo bieli, serif display, neutralna paleta z akcentem kawy. Butikowy klimat premium — magazyn lifestyle.',
      palette: ['#faf7f2', '#1c1917', '#8b6a4a'],
    },
    {
      href: '/v2/',
      label: 'Wariant 2',
      title: 'Odważny / editorial',
      desc: 'Mocne kontrasty, bold display, głęboki burgund i akcent złota. Modowy, pewny, kobiecy — ton magazynu.',
      palette: ['#fdf6ee', '#4a0f1e', '#c4a268'],
    },
  ]

  return (
    <main className="min-h-screen px-6 py-16 md:px-12 md:py-24 max-w-5xl mx-auto">
      <header className="mb-16">
        <p className="text-xs tracking-[0.25em] uppercase text-stone-500 mb-3">Przedłużanie włosów Magda</p>
        <h1 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900">
          Wybór wariantu projektowego
        </h1>
        <p className="mt-4 text-stone-600 max-w-2xl">
          Dwa kierunki stylistyczne tej samej oferty. Otwórz każdy, porównaj i daj znać, który zostawiamy.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        {variants.map((v) => (
          <a
            key={v.href}
            href={v.href}
            className="group block rounded-2xl border border-stone-200 bg-white p-8 transition hover:border-stone-900 hover:shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs tracking-[0.25em] uppercase text-stone-500">{v.label}</span>
              <div className="flex gap-1">
                {v.palette.map((c) => (
                  <span
                    key={c}
                    className="h-4 w-4 rounded-full border border-stone-200"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-medium text-stone-900 mb-3">{v.title}</h2>
            <p className="text-stone-600 leading-relaxed">{v.desc}</p>
            <p className="mt-8 text-sm text-stone-900 group-hover:translate-x-1 transition-transform">
              Otwórz wariant →
            </p>
          </a>
        ))}
      </section>

      <footer className="mt-20 pt-8 border-t border-stone-200 text-xs text-stone-500">
        Roboczy index zlecenia · przedluzanie-wlosow
      </footer>
    </main>
  )
}
