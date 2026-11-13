// Baut die Ratgeber-Seiten von schmetterlingsfutter.de aus den Inhalten in ratgeber-inhalte.mjs.
// Aufruf (im Repo-Ordner):  node _werkzeug/ratgeber-bauen.mjs
// Ergebnis: <slug>/index.html je Seite und sitemap.xml. Ordner mit _ veröffentlicht GitHub Pages nicht.
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, PAGES } from './ratgeber-inhalte.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TAG = 'schmetterlingsfutter-21';
const APP = 'https://mojambaauto.github.io/schmetterlingsfutter/';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = (s) => String(s).replace(/<[^>]+>/g, '');
const amazon = (q) => 'https://www.amazon.de/s?k=' + encodeURIComponent(q).replace(/%20/g, '+') + '&tag=' + TAG;

function link(it) {
  if (it.q) return `<a class="buy" href="${esc(amazon(it.q))}" target="_blank" rel="sponsored noopener">Bei Amazon ansehen *</a>`;
  if (it.app) return `<a class="buy app" href="${APP}">${esc(it.app)} →</a>`;
  if (it.href) return `<a class="buy" href="${esc(it.href)}"${/^https?:/.test(it.href) ? ' target="_blank" rel="noopener"' : ''}>${esc(it.label)} →</a>`;
  return '';
}
function idea(it) {
  const extra = it.also ? `<a class="buy app" href="${esc(it.also.href)}">${esc(it.also.label)} →</a>` : '';
  return `<li class="idea"><h3>${it.t}</h3>${it.price ? `<span class="price">${esc(it.price)}</span>` : ''}<p>${it.p}</p>${link(it)}${extra}</li>`;
}
function section(s) {
  let body = '';
  if (s.intro) body += `<p>${s.intro}</p>`;
  if (s.ideas) body += `<ul class="ideas">${s.ideas.map(idea).join('')}</ul>`;
  if (s.steps) body += `<ol class="steps">${s.steps.map((x) => `<li><span>${x}</span></li>`).join('')}</ol>`;
  if (s.qs) body += `<ol class="qs" start="1">${s.qs.map((x) => `<li>${esc(x)}</li>`).join('')}</ol>`;
  if (s.html) body += s.html;
  if (s.fact) body += `<aside class="fact"><span class="fic" aria-hidden="true">🦋</span><p><b>Falter-Wissen:</b> ${s.fact}</p></aside>`;
  return `<section id="${s.id}"><h2><span class="ic" aria-hidden="true">${s.ic}</span>${s.h}</h2>${body}</section>`;
}

function page(p) {
  const url = SITE + '/' + p.slug + '/';
  const others = PAGES.filter((o) => o.slug !== p.slug);
  const ld = [
    { '@context': 'https://schema.org', '@type': 'Article', headline: p.h1, description: p.desc, inLanguage: 'de-DE',
      datePublished: p.date, dateModified: p.date, mainEntityOfPage: url, image: SITE + '/og-image.jpg',
      author: { '@type': 'Organization', name: 'Schmetterlingsfutter', url: SITE + '/' },
      publisher: { '@type': 'Organization', name: 'Schmetterlingsfutter', url: SITE + '/' } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Schmetterlingsfutter', item: SITE + '/' },
      { '@type': 'ListItem', position: 2, name: p.crumb, item: url }] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: p.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: strip(a) } })) },
  ];
  return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.desc)}">
<meta name="theme-color" content="#1a0a1e">
<link rel="canonical" href="${url}">
<meta property="og:type" content="article">
<meta property="og:locale" content="de_DE">
<meta property="og:site_name" content="Schmetterlingsfutter">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(p.ogTitle || p.h1)}">
<meta property="og:description" content="${esc(p.desc)}">
<meta property="og:image" content="${SITE}/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/svg+xml" href="${APP}icons/icon.svg">
<link rel="apple-touch-icon" href="${APP}icons/apple-touch-icon.png">
<link rel="preload" as="font" type="font/woff2" crossorigin href="${APP}fonts/Lato-400.woff2">
<link rel="preload" as="font" type="font/woff2" crossorigin href="${APP}fonts/PlayfairDisplay-400i.woff2">
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
<nav class="crumbs" aria-label="Brotkrumen"><a href="/">Start</a> › ${esc(p.crumb)}</nav>
<h1>${esc(p.h1)}</h1>
${p.top || ''}
<p class="lead">${p.lead}</p>
<p class="meta">Aktualisiert im ${esc(p.month)} · Links mit * sind Partnerlinks</p>
<ul class="jump" aria-label="Inhalt">${p.sections.filter((s) => s.jump).map((s) => `<li><a href="#${s.id}">${s.ic} ${esc(s.jump)}</a></li>`).join('')}</ul>
${p.sections.map(section).join('\n')}
<aside class="appbox">
  <h2>${esc(p.app.h)}</h2>
  <p>${p.app.p}</p>
  <a class="pill" href="${APP}">${esc(p.app.btn)} <span aria-hidden="true">→</span></a>
</aside>
<section id="faq"><h2><span class="ic" aria-hidden="true">💬</span>Häufige Fragen</h2>
<div class="faq">${p.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${a}</p></details>`).join('')}</div>
</section>
<section><h2><span class="ic" aria-hidden="true">🦋</span>Mehr Ideen für euch</h2>
<ul class="more">${others.map((o) => `<li><a href="/${o.slug}/"><span aria-hidden="true">${o.ic}</span>${esc(o.crumb)}</a></li>`).join('')}<li><a href="/"><span aria-hidden="true">📲</span>Die Paar-App Schmetterlingsfutter</a></li></ul>
</section>
<p class="disclose">* Partnerlink: Kaufst du darüber ein, bekommen wir eine kleine Provision. Am Preis ändert sich für dich nichts. Als Amazon-Partner verdienen wir an qualifizierten Verkäufen. Die Ideen wählen wir selbst aus, Preise sind ungefähre Spannen.</p>
</main>
<footer>
  <div class="links"><a href="/">Startseite</a>${PAGES.map((o) => `<a href="/${o.slug}/">${esc(o.crumb)}</a>`).join('')}<a href="${APP}privacy.html">Datenschutz</a><a href="/#impressum">Impressum</a></div>
  © 2026 Schmetterlingsfutter · MoJamba – Stefan Wilhelm Münch, Alfter
</footer>
</div>
${p.script ? `<script>${p.script}</script>` : ''}
</body></html>
`;
}

for (const p of PAGES) {
  const file = join(ROOT, p.slug, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page(p));
  console.log('gebaut:', p.slug + '/index.html');
}
const today = new Date().toISOString().slice(0, 10);
const urls = [{ loc: SITE + '/', mod: today }, ...PAGES.map((p) => ({ loc: SITE + '/' + p.slug + '/', mod: p.date }))];
writeFileSync(join(ROOT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.mod}</lastmod>\n  </url>`).join('\n')}
</urlset>
`);
console.log('gebaut: sitemap.xml (' + urls.length + ' Adressen)');
