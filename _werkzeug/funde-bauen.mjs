// Baut aus dem Feed der Amazon-Engine die festen Fund-Seiten von schmetterlingsfutter.de (Paket AE-07):
//   funde/<slug>/index.html je Fund, funde/index.html mit fester Liste, sitemap-funde.xml, Sitemap-Zeile in robots.txt.
// Aufruf: node _werkzeug/funde-bauen.mjs [--feed <datei>] [--feed-url <adresse>] [--ziel <ordner>]
// Feed nicht erreichbar oder keine Liste: Meldung, Exit-Code 0, nichts ändern. Ungültige Einträge werden übersprungen.
// Ruft nie amazon.de auf – die Amazon-Links werden nur als Text gebaut.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { SITE, PAGES, KANAL, fundeSeite, wichtelSeite, geprueftLink, geprueftDatenLesen } from './ratgeber-inhalte.mjs';
import { APP, esc, rahmen } from './rahmen.mjs';
import { ROOT, page } from './ratgeber-bauen.mjs';

export const FEED_URL = 'https://mojambaauto.github.io/amazon-engine/feed/funde.json';
// AE-14 Nachtrag: alle Funde mit gültiger Sichtprüfung (für die Wichtel-Seite)
export const GEPRUEFT_URL = 'https://mojambaauto.github.io/amazon-engine/feed/geprueft.json';
// Kopie aus amazon-engine/config.json (verbotene_muster, Schalter i und u) und pflichttexte.web_hinweis
const VERBOTENE_MUSTER = [
  '\\d\\s?(€|Euro|EUR)',
  '\\b(günstig|billig|reduziert|rabatt|angebot|schnäppchen|bestpreis|sale|deal)\\b',
  '\\b(sterne|rezension|bewertung|bestseller)\\b',
  '\\b(lieferung|lieferbar|auf lager|prime)\\b',
  '(bit\\.ly|tinyurl|t\\.co|goo\\.gl|ow\\.ly)',
];
export const WEB_HINWEIS = '* Partnerlink: Kaufst du darüber ein, bekommen wir eine kleine Provision. Am Preis ändert sich für dich nichts. Als Amazon-Partner verdienen wir an qualifizierten Verkäufen. Die Funde wählen wir selbst aus.';
// AE-14: kein suchbegriff mehr – der Knopf nimmt das Feld link aus dem Feed (nur das Produkt-Muster, sonst kein Knopf)
const PFLICHT = ['id', 'slug', 'datum', 'titel', 'text_h', 'text_p'];
const ttmmjjjj = (d) => `${d.slice(8, 10)}.${d.slice(5, 7)}.${d.slice(0, 4)}`;

// Liefert { gueltig, fehler } – gueltig neueste zuerst, je slug nur der neueste Eintrag.
export function pruefen(feed) {
  const gueltig = [], fehler = [];
  for (const [i, f] of feed.entries()) {
    const name = (f && f.slug) || `#${i + 1}`;
    const fehlt = PFLICHT.filter((k) => !f || typeof f[k] !== 'string' || !f[k].trim());
    if (fehlt.length) { fehler.push(`${name}: Pflichtfeld fehlt (${fehlt.join(', ')})`); continue; }
    if (!/^f-\d{4}-[a-z0-9-]+$/.test(f.slug)) { fehler.push(`${name}: slug ungültig`); continue; }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(f.datum)) { fehler.push(`${name}: datum ungültig`); continue; }
    const treffer = VERBOTENE_MUSTER.filter((m) => [f.titel, f.text_h, f.text_p].some((t) => new RegExp(m, 'iu').test(t)));
    if (treffer.length) { fehler.push(`${name}: verbotenes Muster ${treffer.join(' ')}`); continue; }
    gueltig.push(f);
  }
  gueltig.sort((a, b) => (a.datum < b.datum ? 1 : a.datum > b.datum ? -1 : 0));
  const gesehen = new Set();
  return { gueltig: gueltig.filter((f) => !gesehen.has(f.slug) && gesehen.add(f.slug)), fehler };
}

const kurz = (s, n = 155) => {
  if ([...s].length <= n) return s;
  const t = [...s].slice(0, n - 1).join('');
  return t.slice(0, Math.max(t.lastIndexOf(' '), n - 30)).trimEnd() + '…';
};

export function fundSeite(f) {
  const url = `${SITE}/funde/${f.slug}/`;
  const desc = kurz(f.text_p);
  const ld = [
    { '@context': 'https://schema.org', '@type': 'Article', headline: f.text_h, description: desc, inLanguage: 'de-DE',
      datePublished: f.datum, dateModified: f.datum, mainEntityOfPage: url, image: SITE + '/og-image.jpg',
      author: { '@type': 'Organization', name: 'Schmetterlingsfutter', url: SITE + '/' },
      publisher: { '@type': 'Organization', name: 'Schmetterlingsfutter', url: SITE + '/' } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Schmetterlingsfutter', item: SITE + '/' },
      { '@type': 'ListItem', position: 2, name: 'Papillons Fund des Tages', item: SITE + '/funde/' },
      { '@type': 'ListItem', position: 3, name: f.titel, item: url }] },
  ];
  const app = PAGES[0].app;
  const main = `<nav class="crumbs" aria-label="Brotkrumen"><a href="/">Start</a> › <a href="/funde/">Funde</a> › ${esc(f.titel)}</nav>
<h1>${esc(f.text_h)}</h1>
<p class="meta">Papillons Fund des Tages · ${ttmmjjjj(f.datum)}</p>
<p class="lead">${esc(f.text_p)}</p>
${geprueftLink(f) ? `<p class="anzeige">Anzeige</p>
<a class="buy" href="${esc(geprueftLink(f))}" target="_blank" rel="sponsored noopener">Bei Amazon ansehen *</a>` : '<p class="neu-pruefen">Diesen Fund prüfen wir gerade neu.</p>'}
<ul class="more fund-weiter"><li><a href="/funde/"><span aria-hidden="true">🔍</span>Alle Funde →</a></li><li><a href="${KANAL}" target="_blank" rel="noopener"><span aria-hidden="true">💬</span>Jeden Tag im WhatsApp-Kanal</a></li><li><a href="/wichtelgeschenke/"><span aria-hidden="true">🎅</span>Lustige Wichtelgeschenke</a></li></ul>
<aside class="appbox">
  <h2>${esc(app.h)}</h2>
  <p>${app.p}</p>
  <a class="pill" href="${APP}">${esc(app.btn)} <span aria-hidden="true">→</span></a>
</aside>
<p class="disclose">${esc(WEB_HINWEIS)}</p>`;
  return rahmen({ title: `${f.titel} – Papillons Fund des Tages | Schmetterlingsfutter`, desc, url, ogTitle: f.text_h, ld, main, pages: PAGES });
}

export function sitemap(liste) {
  const urls = [{ loc: `${SITE}/funde/`, mod: liste[0] ? liste[0].datum : null }, ...liste.map((f) => ({ loc: `${SITE}/funde/${f.slug}/`, mod: f.datum }))];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>${u.mod ? `\n    <lastmod>${u.mod}</lastmod>` : ''}\n  </url>`).join('\n')}
</urlset>
`;
}

// Schreibt nur, wenn sich der Inhalt ändert (Zeilenenden egal). Liefert true bei Änderung.
function schreiben(pfad, inhalt) {
  if (existsSync(pfad) && readFileSync(pfad, 'utf8').replace(/\r\n/g, '\n') === inhalt) return false;
  mkdirSync(dirname(pfad), { recursive: true });
  writeFileSync(pfad, inhalt, 'utf8');
  return true;
}

// geprueft: Liste aus feed/geprueft.json; null = nicht erreichbar → letzte Kopie (_werkzeug/geprueft-daten.json)
export function bauen(feed, ziel = ROOT, geprueft = null) {
  const { gueltig, fehler } = pruefen(feed);
  let geaendert = 0;
  for (const f of gueltig) geaendert += schreiben(join(ziel, 'funde', f.slug, 'index.html'), fundSeite(f));
  geaendert += schreiben(join(ziel, '_werkzeug', 'funde-daten.json'), JSON.stringify(gueltig, null, 2) + '\n');
  geaendert += schreiben(join(ziel, 'funde', 'index.html'), page(fundeSeite(gueltig)));
  // AE-14: Wichtel-Seite täglich mitbauen – ein Geschenk bekommt seinen Knopf, sobald sein Fund geprüft ist
  const gepruefteListe = Array.isArray(geprueft)
    ? geprueft.filter((e) => e && /^f-\d{4}$/.test(e.id) && geprueftLink(e)).map((e) => ({ id: e.id, link: e.link, gueltig_bis: e.gueltig_bis ?? null }))
    : geprueftDatenLesenAus(ziel);
  if (Array.isArray(geprueft)) geaendert += schreiben(join(ziel, '_werkzeug', 'geprueft-daten.json'), JSON.stringify(gepruefteListe, null, 2) + '\n');
  geaendert += schreiben(join(ziel, 'wichtelgeschenke', 'index.html'), page(wichtelSeite(gueltig, gepruefteListe)));
  geaendert += schreiben(join(ziel, 'sitemap-funde.xml'), sitemap(gueltig));
  const robotsPfad = join(ziel, 'robots.txt');
  const robots = existsSync(robotsPfad) ? readFileSync(robotsPfad, 'utf8').replace(/\r\n/g, '\n') : 'User-agent: *\nAllow: /\n';
  const zeile = `Sitemap: ${SITE}/sitemap-funde.xml`;
  if (!robots.split('\n').includes(zeile)) geaendert += schreiben(robotsPfad, robots.replace(/\n*$/, '\n') + zeile + '\n');
  return { gueltig, fehler, geaendert };
}

function geprueftDatenLesenAus(ziel) {
  if (resolve(ziel) === resolve(ROOT)) return geprueftDatenLesen();
  try { const d = JSON.parse(readFileSync(join(ziel, '_werkzeug', 'geprueft-daten.json'), 'utf8')); return Array.isArray(d) ? d : []; } catch { return []; }
}

export async function feedLaden({ datei, url = FEED_URL } = {}) {
  if (datei) return JSON.parse(readFileSync(datei, 'utf8'));
  const r = await fetch(url, { signal: AbortSignal.timeout(20000), cache: 'no-store' });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json();
}

function argWert(name) {
  const i = process.argv.indexOf(name);
  return i > 0 ? process.argv[i + 1] : undefined;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  let feed;
  try {
    feed = await feedLaden({ datei: argWert('--feed'), url: argWert('--feed-url') ?? FEED_URL });
  } catch (e) {
    console.log(`Feed nicht erreichbar (${e.message}) – nichts geändert.`);
    process.exit(0);
  }
  if (!Array.isArray(feed)) {
    console.log('Feed ist keine Liste – nichts geändert.');
    process.exit(0);
  }
  let geprueft = null;
  try {
    geprueft = await feedLaden({ datei: argWert('--geprueft'), url: argWert('--geprueft-url') ?? GEPRUEFT_URL });
    if (!Array.isArray(geprueft)) throw new Error('keine Liste');
  } catch (e) {
    geprueft = null;
    console.log(`Liste geprüfter Funde nicht erreichbar (${e.message}) – Wichtel-Seite nutzt die letzte Kopie.`);
  }
  const { gueltig, fehler, geaendert } = bauen(feed, resolve(argWert('--ziel') ?? ROOT), geprueft);
  for (const x of fehler) console.log('übersprungen:', x);
  console.log(`funde: ${gueltig.length} Fund-Seiten, ${geaendert} Dateien geändert`);
}
