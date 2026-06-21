# sourinjana.com — Portfolio

A personal portfolio site for Sourin Jana, built with React + Vite. Styled around a
terminal/dev theme (dark, monospace headers, amber accent) that ties into a GitHub-driven
software career.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:5173

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to GitHub Pages

This repo is set up to deploy with `gh-pages`.

1. Push this code to `https://github.com/sourinjana/sourinjana.com`
2. Install deploy dependency (already in package.json) and run:

```bash
npm install
npm run deploy
```

This builds the app and pushes `dist/` to a `gh-pages` branch.

3. In the repo → **Settings → Pages**, set Source to the `gh-pages` branch.

4. Your site will be live at:
   - `https://sourinjana.github.io/sourinjana.com` (default), or
   - `https://sourinjana.com` if you connect the custom domain (see below).

### Custom domain (sourinjana.com)

1. In **Settings → Pages → Custom domain**, enter `sourinjana.com`. This creates a `CNAME` file.
2. At your domain registrar, add these DNS records:

   | Type | Name | Value |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | sourinjana.github.io |

3. Wait for DNS to propagate, then enable **Enforce HTTPS** in Pages settings.

## Update your resume

Replace `public/SourinJana_Resume.pdf` with your latest resume (keep the same filename,
or update the `href` in `src/components/Nav.jsx`).

## Structure

```
src/
  App.jsx              — composes all sections
  index.css            — design tokens (colors, type, spacing)
  components/
    Nav.jsx / .css      — sticky nav + resume download
    Hero.jsx / .css     — animated terminal intro
    About.jsx / .css    — summary + quick stats
    Experience.jsx/.css — Arisu App Solutions role
    Projects.jsx/.css   — Recipe Management System, Maitys Member
    Skills.jsx/.css     — grouped skill tags
    Contact.jsx/.css    — education, contact, footer
```
