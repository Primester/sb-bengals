# Santa Barbara Bengals

Youth tackle football in Santa Barbara. A responsive website emphasizing player well-being, local player development, the four-public-high-school representation vision, and the home field at San Marcos High School.

## Public website

[Open the public website](https://primester.github.io/sb-bengals/).

Published with GitHub Pages from the `main` branch through GitHub Actions. Source contains only the website, build files and visual previews. Internal planning documents are not included.

## Run locally

Requires Node.js 24 and npm.

```sh
npm ci
npm run dev
```

## Verify and build

```sh
npm run check
```

The output is in `out/`. `NEXT_PUBLIC_BASE_PATH` configures the GitHub Pages repository path. `NEXT_PUBLIC_SITE_URL` sets the public metadata URL. `NEXT_PUBLIC_INDEXING_ENABLED=true` enables indexing for the public build. The workflow supplies these values; none is a secret.

Pull requests run tests, TypeScript, formatting, a production build, and exported-link validation. Pushes to `main` run the same checks and deploy to GitHub Pages only after they pass.

## Family interest

The form prepares an email to info@sbbengals.com. Visitors review and send the message from their own email app, or copy it into an email. The site does not save a lead database, send messages automatically, or complete player registration. No API key, payment service, password or account login is required.

## Content and assets

The website uses the Santa Barbara Bengals clean full-name wordmark, SB mark, royal blue, black and white, Anton headings and a Helvetica/Arial body stack. Anton is included under the SIL Open Font License in `public/brand/Anton-OFL.txt`. The helmet is an illustration, not a photo of a real player or facility. No third-party team photos or logos were copied.

Program dates, eligibility, fees, credentials and any school partnerships should be updated only with confirmed information. High school choice is a development vision, not an enrollment or athletic eligibility guarantee.

## Preview

![Desktop website preview](previews/desktop.jpg)
