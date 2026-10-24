# مِراس — Landing Page

A static Arabic (RTL) landing page: plain HTML, CSS and JS with no build step and no dependencies.

```
index.html            ← the page
assets/css/style.css  ← styles (brand colors at the top, under :root)
assets/js/main.js     ← links config + menu + scroll animations
assets/img/           ← logos, photos, patterns, favicon
.nojekyll             ← tells GitHub Pages to serve files as-is
```

## 1. Set your links (one place)

Open `assets/js/main.js` and fill in `CONFIG`:

```js
const CONFIG = {
  register: "https://forms.gle/...", // registration form
  whatsapp: "9639XXXXXXXX",          // international format, no + or spaces
  facebook: "https://facebook.com/...",
  instagram: "https://instagram.com/...",
  youtube: "",
  telegram: ""
};
```

Any field left empty hides its button or icon. If `register` is empty, «سجّل الآن» scrolls to the joining section.

## 2. Put it on GitHub

```bash
cd meras-landing
git init
git add .
git commit -m "Meras landing page"
git branch -M main
git remote add origin https://github.com/<user>/meras-landing.git
git push -u origin main
```

(Or create the repo on github.com and drag the folder contents into **Add file → Upload files**.)

## 3. Deploy (choose one)

**GitHub Pages:** Repo → Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)` → Save.
The site goes live at `https://<user>.github.io/meras-landing/` within a minute or two.

**Netlify / Vercel / Cloudflare Pages:** Import the GitHub repo. Leave the build command empty and set the output/publish directory to `/` (the root). Each push to `main` redeploys automatically.

**Custom domain:** Add it in the host's domain settings, then point your DNS records to the host. On GitHub Pages, also add a `CNAME` file containing the domain.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Notes

- Font: Alexandria (Google Fonts), the official Meras typeface.
- Colors: green `#153E3A`, orange `#D97833`, sand `#D9C6A5`, cream `#F7F3E8`, charcoal `#1E2422`.
- For better link previews on social media, change `og:image` in `index.html` to an absolute URL once the domain is known, for example `https://example.com/assets/img/og.jpg`.
