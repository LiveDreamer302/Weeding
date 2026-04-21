# Weeding

Invitație la nuntă — structură și stil aliniate cu [vasile-carolina.invitatii-web.md](https://vasile-carolina.invitatii-web.md/) (Bootstrap 5, Open Sans, Dancing Script, fundal `fbwm`, galerie în coloane, timer, card locație + hartă).

## Dezvoltare

```bash
npm install
npm run dev
```

Deschide adresa afișată în terminal (de obicei `http://localhost:5173`).

## Build pentru producție

```bash
npm run build
```

Fișierele generate sunt în folderul `dist/` — pot fi publicate pe orice hosting static (GitHub Pages, Netlify, Cloudflare Pages, Azure Static Web Apps etc.).

## Configurare

În [`site.config.js`](site.config.js) editezi textele și datele. URL-urile pozelor, audio și fundalului folosesc implicit `assetBase` către site-ul de referință. Pentru producție, copiază fișierele media pe hosting-ul tău și schimbă `assetBase` sau fiecare câmp `*Url` / `galleryImages`.

## Confirmare prezență (Formspree)

1. Creează un formular gratuit la [formspree.io](https://formspree.io) și copiază ID-ul din URL (ex. `https://formspree.io/f/xyzabc` → `xyzabc`).
2. În `site.config.js`, setează `formspreeFormId: 'xyzabc'`.
3. La submit, datele trimise includ: nume, telefon, prezență (da/nu), adulți/copii (dacă da), mesaj.

Dacă `formspreeFormId` rămâne `null`, la trimitere vei vedea un mesaj care te îndrumă să configurezi Formspree.
