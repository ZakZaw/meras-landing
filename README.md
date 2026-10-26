# مؤسسة مراس — Website

A static Arabic (RTL) site: plain HTML, CSS and JS. No build step, no dependencies. Served by GitHub Pages at https://meras-sy.com.

```
index.html            ← landing page          → meras-sy.com/
links/index.html      ← link tree (self-contained) → meras-sy.com/links
assets/css/style.css  ← landing styles (brand tokens at the top, under :root)
assets/js/main.js     ← mobile menu + camp tabs
assets/img/           ← logos (SVG), pattern (SVG), photos, favicon
CNAME                 ← custom domain for GitHub Pages
.nojekyll             ← serve files as-is
```

## Content sources

Text follows the two official documents: «الملف التعريفي — مؤسسة مراس» and «دليل البرامج والعضوية».
Visual style follows the Meras Visual Identity package (V.01): colors, Alexandria typeface, the three-stripe signature, and the slanted brand pattern.

## Links

All links are written directly in the HTML. To change one, search for the old URL in `index.html` and `links/index.html`.

| What | URL |
|---|---|
| Camp registration | https://forms.gle/YMqDbRuXonW66gp2A |
| WhatsApp chat | https://wa.me/963941878610 |
| WhatsApp channel | https://whatsapp.com/channel/0029VbEC3yCKmCPXXGl2kh1Z |
| Instagram | https://www.instagram.com/meras__sy |
| X | https://x.com/meras_sy |
| Facebook | https://www.facebook.com/share/1cMWnAMnkt/ |
| Telegram | https://t.me/meras_sy |
| Email | meras.syria@gmail.com |
| Phone | +963 941 878 610 |

## Preview locally

Open `index.html` in a browser, or run `python -m http.server` in this folder and visit http://localhost:8000 (and http://localhost:8000/links/).
