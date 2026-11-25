// Baut die Ratgeber-Seiten von schmetterlingsfutter.de aus den Inhalten in ratgeber-inhalte.mjs.
// Aufruf (im Repo-Ordner):  node _werkzeug/ratgeber-bauen.mjs
// Ergebnis: <slug>/index.html je Seite und sitemap.xml. Ordner mit _ veröffentlicht GitHub Pages nicht.
// Kopf, Kopfzeile und Fuß kommen aus rahmen.mjs (gemeinsam mit funde-bauen.mjs).
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { SITE, PAGES } from './ratgeber-inhalte.mjs';
import { APP, esc, strip, amazon, rahmen } from './rahmen.mjs';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

function link(it) {
  // AE-14 Nachtrag: geprüfter Fund – direkt zur Produktseite (genau ein Amazon-Link je Karte)
  if (it.produkt) return `<p class="anzeige">Anzeige</p><a class="buy" href="${esc(it.produkt)}" target="_blank" rel="sponsored noopener">Bei Amazon ansehen *</a>`;
  if (it.q) return `<a class="buy" href="${esc(amazon(it.q, it.max))}" target="_blank" rel="sponsored noopener">Bei Amazon ansehen *</a>`;
  if (it.app) return `<a class="buy app" href="${APP}">${esc(it.app)} →</a>`;
  if (it.href) return `<a class="buy" href="${esc(it.href)}"${/^https?:/.test(it.href) ? ' target="_blank" rel="noopener"' : ''}>${esc(it.label)} →</a>`;
  return '';
}
function idea(it) {
  const extra = it.also ? `<a class="buy app" href="${esc(it.also.href)}">${esc(it.also.label)} →</a>` : '';
  return `<li class="idea"><h3>${it.t}</h3>${it.price ? `<span class="price">${esc(it.price)}</span>` : ''}<p>${it.p}</p>${link(it)}${extra}</li>`;
}
const LIC = { 'CC BY-SA 2.5': 'https://creativecommons.org/licenses/by-sa/2.5/deed.de', 'CC BY-SA 3.0': 'https://creativecommons.org/licenses/by-sa/3.0/deed.de',
  'CC BY-SA 3.0 de': 'https://creativecommons.org/licenses/by-sa/3.0/de/deed.de', 'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/deed.de' };
function art(a) {
  if (!LIC[a.lic]) throw new Error('Lizenz fehlt in LIC: ' + a.lic);
  const row = (k, v) => `<div><dt>${k}</dt><dd>${v}</dd></div>`;
  return `<li class="art" id="${a.id}"><figure><img src="${esc(a.img)}" width="${a.w}" height="${a.h}" loading="lazy" decoding="async" alt="${esc(a.name)} (${esc(a.lat)})"></figure>
<div class="art-body"><h3>${esc(a.name)} <i>${esc(a.lat)}</i></h3><dl class="steck">${row('Erkennen', a.erk)}${row('Fliegt', a.flug)}${row('Raupe frisst', a.futter)}</dl><p>${a.fakt}</p>
<small class="credit">Foto: ${esc(a.by)}, <a href="${LIC[a.lic]}" target="_blank" rel="noopener license">${esc(a.lic)}</a>, <a href="https://commons.wikimedia.org/wiki/File:${esc(a.file)}" target="_blank" rel="noopener">Wikimedia Commons</a></small></div></li>`;
}
function section(s) {
  let body = '';
  if (s.intro) body += `<p>${s.intro}</p>`;
  if (s.ideas) body += `<ul class="ideas">${s.ideas.map(idea).join('')}</ul>`;
  if (s.steps) body += `<ol class="steps">${s.steps.map((x) => `<li><span>${x}</span></li>`).join('')}</ol>`;
  if (s.qs) body += `<ol class="qs" start="1">${s.qs.map((x) => `<li>${esc(x)}</li>`).join('')}</ol>`;
  if (s.arten) body += `<ul class="arten">${s.arten.map(art).join('')}</ul>`;
  if (s.spr) body += `<ul class="spr">${s.spr.map((x) => `<li><p>„${esc(x)}“</p><a class="buy app" href="https://wa.me/?text=${encodeURIComponent('„' + x + '“ 🦋')}" target="_blank" rel="noopener">Per WhatsApp schicken →</a></li>`).join('')}</ul>`;
  if (s.html) body += s.html;
  if (s.fact) body += `<aside class="fact"><span class="fic" aria-hidden="true">🦋</span><p><b>Falter-Wissen:</b> ${s.fact}</p></aside>`;
  return `<section id="${s.id}"><h2><span class="ic" aria-hidden="true">${s.ic}</span>${s.h}</h2>${body}</section>`;
}

export function page(p) {
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
  const main = `<nav class="crumbs" aria-label="Brotkrumen"><a href="/">Start</a> › ${esc(p.crumb)}</nav>
<h1>${esc(p.h1)}</h1>
${p.top || ''}
<p class="lead">${p.lead}</p>
<p class="meta">Aktualisiert im ${esc(p.month)} · Links mit * sind Partnerlinks</p>
${p.sections.filter((s) => s.jump).length > 1 ? `<ul class="jump" aria-label="Inhalt">${p.sections.filter((s) => s.jump).map((s) => `<li><a href="#${s.id}">${s.ic} ${esc(s.jump)}</a></li>`).join('')}</ul>` : ''}
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
<p class="disclose">${p.disclose ? esc(p.disclose) : '* Partnerlink: Kaufst du darüber ein, bekommen wir eine kleine Provision. Am Preis ändert sich für dich nichts. Als Amazon-Partner verdienen wir an qualifizierten Verkäufen. Die Ideen wählen wir selbst aus. Budget-Angaben sind grobe Einordnungen, keine Preise.'}</p>`;
  return rahmen({ title: p.title, desc: p.desc, url, ogTitle: p.ogTitle || p.h1, ld, main, pages: PAGES, script: p.script });
}

export function seiteSchreiben(p, ziel = ROOT) {
  const file = join(ziel, p.slug, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page(p));
  return file;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  for (const p of PAGES) {
    seiteSchreiben(p);
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
}
