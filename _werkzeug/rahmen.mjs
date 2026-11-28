// Gemeinsamer Seitenrahmen der Ratgeber- und Fund-Seiten von schmetterlingsfutter.de (Kopf, Kopfzeile, Fuß).
// Genutzt von ratgeber-bauen.mjs und funde-bauen.mjs (Paket AE-07).
import { SITE, SOZIAL } from './ratgeber-inhalte.mjs';

export const TAG = 'schmetterlingsfutter-21';
export const APP = 'https://app.schmetterlingsfutter.de/';
export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const strip = (s) => String(s).replace(/<[^>]+>/g, '');
// max = Preisfilter in Cent (optional): setzt bei Amazon &rh=p_36%3A-<max>, also nur Treffer bis zu diesem Betrag.
export const amazon = (q, max) => 'https://www.amazon.de/s?k=' + encodeURIComponent(q).replace(/%20/g, '+')
  + (max > 0 ? '&rh=p_36%3A-' + Math.round(max) : '') + '&tag=' + TAG;

// main = Inhalt zwischen <main> und </main>; pages = Seiten für die Fußzeile (slug, crumb).
// robots (optional, z. B. 'noindex,follow' für /geschenk/) – ohne Angabe bleibt der Kopf wie bisher.
export function rahmen({ title, desc, url, ogTitle, ld, main, pages, script, robots }) {
  return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">${robots ? `\n<meta name="robots" content="${esc(robots)}">` : ''}
<meta name="theme-color" content="#1a0a1e">
<link rel="canonical" href="${url}">
<meta property="og:type" content="article">
<meta property="og:locale" content="de_DE">
<meta property="og:site_name" content="Schmetterlingsfutter">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(ogTitle)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${SITE}/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/svg+xml" href="${APP}icons/icon.svg">
<link rel="apple-touch-icon" href="${APP}icons/apple-touch-icon.png">
<link rel="preload" as="font" type="font/woff2" crossorigin href="/fonts/Lato-400.woff2">
<link rel="preload" as="font" type="font/woff2" crossorigin href="/fonts/PlayfairDisplay-400i.woff2">
<link rel="stylesheet" href="/ratgeber.css">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
<div class="wrap">
<header class="top">
  <a class="brand" href="/"><img src="${APP}icons/icon.svg" alt="" width="36" height="36"><span>Schmetterlingsfutter</span></a>
  <a class="pill" href="${APP}">App öffnen <span aria-hidden="true">→</span></a>
</header>
<main>
${main}
</main>
<footer>
  <div class="links"><a href="/">Startseite</a>${pages.map((o) => `<a href="/${o.slug}/">${esc(o.crumb)}</a>`).join('')}<a href="${APP}privacy.html">Datenschutz</a><a href="/#impressum">Impressum</a></div>
  <div class="sozial"><b>Folge Papillon:</b>${SOZIAL.map((k) => `<a href="${k.url}" target="_blank" rel="noopener">${k.name}</a>`).join('')}</div>
  © 2026 Schmetterlingsfutter · MoJamba – Stefan Wilhelm Münch, Alfter
</footer>
</div>
${script ? `<script>${script}</script>` : ''}
<script>addEventListener('load',function(){var s=document.createElement('script');s.src='/js/falter.js';document.body.appendChild(s)})</script>
</body></html>
`;
}
