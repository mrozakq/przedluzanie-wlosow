# przedluzanie-wlosow

Strona WWW dla salonu przedłużania włosów Magdy w Wejherowie. Domena: **magda.style**.

## Stack

- Next.js 14 (App Router, SSG via `output: 'export'`)
- TypeScript + Tailwind CSS
- AWS S3 (prywatny, OAC) + CloudFront + CloudFront Function (rewrite na `index.html`)
- ACM (cert), Route 53 (DNS)
- Deploy: GitHub Actions → OIDC → `aws s3 sync` + `cloudfront create-invalidation`

## Struktura

- `app/` — Next.js App Router (layout z SEO, page z sekcjami)
- `public/` — statyki (favicon.svg, robots.txt, site.webmanifest, images/)
- `public/images/` — zdjęcia (`01.jpg` portret · `02-05.jpg` portfolio)
- `.aws-setup/` — JSONy konfiguracji AWS (trust/role/bucket policy, distribution config, CF function)
- `.github/workflows/deploy.yml` — pipeline CI/CD

## Lokalny build (Windows)

`npm run build` nie zadziała bez globalnego `next` — używaj binarki z node_modules:

```powershell
npm install
./node_modules/.bin/next build
./node_modules/.bin/next start  # podgląd
```

## GitHub repo

Wymaga ustawienia w `Settings → Secrets and variables → Actions`:

**Secrets:**
- `AWS_DEPLOY_ROLE_ARN` — ARN roli IAM (OIDC trust do tego repo)

**Variables:**
- `S3_BUCKET` — nazwa bucketu S3
- `CLOUDFRONT_DISTRIBUTION_ID` — ID dystrybucji CloudFront

## SEO

- Meta + OG + Twitter w `app/layout.tsx`
- JSON-LD: `HairSalon` (LocalBusiness) + `FAQPage`
- Sitemap: `app/sitemap.ts` → `/sitemap.xml`
- robots: `public/robots.txt` (Allow + sitemap link)
- Słowa kluczowe: przedłużanie / zagęszczanie + Wejherowo, Reda, Rumia, Gdynia, Sopot, Puck (promień ~35 km)

## URL

- Tymczasowo: https://d3ttbsov2pv4ja.cloudfront.net
- Produkcja: https://magda.style (po podpięciu DNS + ACM)
