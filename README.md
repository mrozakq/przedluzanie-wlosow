# przedluzanie-wlosow

Prototypy strony WWW dla salonu przedłużania włosów (Magda, Wejherowo). Monorepo: jedno repo, jeden CloudFront distribution, dwa warianty pod subścieżkami.

## Struktura

- `index/` — strona robocza z wyborem wariantu (root domeny, `noindex`)
- `v1/` — wariant minimalistyczny / luksusowy (`/v1/`)
- `v2/` — wariant odważny / editorial (`/v2/`)
- `.github/workflows/deploy.yml` — build i deploy do S3 + CloudFront via OIDC

## Stack

- Next.js 14 (App Router, SSG via `output: 'export'`)
- TypeScript + Tailwind CSS
- AWS S3 (prywatny, OAC) + CloudFront + CloudFront Function (rewrite na `index.html`)
- Deploy: GitHub Actions → OIDC → `aws s3 sync` + `cloudfront create-invalidation`

## Lokalny build (Windows)

`npm run build` nie zadziała bez globalnego `next` — używaj binarki z node_modules:

```powershell
cd v1
npm install
./node_modules/.bin/next build
```

## GitHub repo

Wymaga ustawienia w `Settings → Secrets and variables → Actions`:

**Secrets:**
- `AWS_DEPLOY_ROLE_ARN` — ARN roli IAM z trustem do tego repo (OIDC)

**Variables:**
- `S3_BUCKET` — nazwa bucketu S3
- `CLOUDFRONT_DISTRIBUTION_ID` — ID dystrybucji CloudFront

## URL po deployu

- `/` — index (wybór wariantu, noindex)
- `/v1/` — wariant minimalistyczny
- `/v2/` — wariant odważny
