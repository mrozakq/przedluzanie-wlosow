# Brief — przedluzanie-wlosow

## Zleceniodawca
- **Branża:** salon przedłużania i zagęszczania włosów
- **Osoba prowadząca:** Magda
- **Marka:** "Przedłużanie włosów Magda" (brak twardego brandu — naturalna nazwa usługi)
- **Obecna strona:** https://przedluzaniewlosow.net
- **Nowa domena:** jeszcze nie ustalona (TBD)

## Lokalizacja
- ul. 10 Lutego 1/2u, 84-200 Wejherowo
- Obsługuje też klientki z: Reda, Rumia, Gdynia
- Salon w obrębie szerszego studio (Alicja — paznokcie, AleWyczes — fryzjerstwo)

## Oferta
- Przedłużanie włosów
- Zagęszczanie włosów
- Pracuje na materiałach: **Złota Seria**, **BabyHair**
- Towarzyszące: strzyżenie, stylizacja, suszenie, koloryzacja, prostowanie, zabiegi pielęgnacyjne

## USP / wyróżniki
- **30-dniowa gwarancja** na usługę
- Doświadczenie od **2020 roku**
- 100% profesjonalizmu / indywidualne podejście
- Wysokiej jakości włosy naturalne
- Pasja, nie praca ("Robię to, co kocham")

## Kontakt
- Telefon: **+48 533 104 437**
- Rezerwacje: **Booksy** (link do podpięcia)
- Formularz kontaktowy
- Brak social media na obecnej stronie (do dodania jeśli klient poda)

## Grupa docelowa
- Kobiety, głównie 20–45 lat
- Pomorskie (Wejherowo + okolice)
- Szukają długiej metamorfozy, ciepłej osobistej obsługi, gwarancji jakości

## Ton komunikacji
- Osobisty, ciepły, kobiecy
- Mówi pierwszą osobą ("Robię to, co kocham")
- Pasja, troska, indywidualne podejście

## Czego brakuje obecnej stronie (do uwzględnienia w nowych wariantach)
- Wyraźny cennik (lub przynajmniej przedziały "od X zł")
- Portfolio / zdjęcia efektów (placeholder w obu wariantach)
- Godziny otwarcia
- Sekcja FAQ (najczęstsze pytania o pielęgnację, trwałość, ból, czas zabiegu)
- Wyróżnione opinie / referencje
- Lepsze SEO: meta description, OG, sitemap

## Warianty — założenia stylistyczne

### v1 — Minimalistyczny / luksusowy
- Charakter: dużo bieli, serif display + thin sans, oddech
- Paleta: kremowa biel, czerń, akcent kawy/mlecznej czekolady
- Skojarzenie: butikowy salon premium, magazyn lifestyle

### v2 — Odważny / kontrastowy
- Charakter: bold, mocne nagłówki, kontrastowe sekcje
- Paleta: głęboka burgund/wino + kremowy + akcent złota
- Skojarzenie: editorial, modowy, kobieta która wie czego chce

## Wymagania techniczne
- Stack: Next.js 14 App Router, SSG (`output: export`), TypeScript, Tailwind
- Monorepo: `index/`, `v1/`, `v2/` w jednym repo `przedluzanie-wlosow`
- Hosting: AWS S3 (prywatny, OAC) + CloudFront + CloudFront Function rewrite dla SSG
- Deploy: GitHub Actions z OIDC → `aws s3 sync` + `cloudfront create-invalidation`
- Index ma `robots: noindex`, warianty `index, follow` + sitemap + robots Allow

## Sekcje strony (oba warianty)
1. Hero — nazwa salonu, claim, CTA (telefon + Booksy)
2. O mnie (Magda) — krótka historia, pasja, doświadczenie od 2020
3. Oferta — przedłużanie + zagęszczanie + materiały (Złota Seria, BabyHair)
4. Dlaczego ja — 30-dniowa gwarancja, indywidualne podejście, jakość włosów
5. Galeria / efekty — placeholder (3–6 kafli)
6. FAQ — 4–6 najczęstszych pytań
7. Cennik — przedziały "od X zł" (placeholder, do uzupełnienia)
8. Kontakt — telefon, adres, mapa (embed), godziny, formularz lub CTA Booksy
9. Stopka — copyright, NIP/dane (placeholder)
