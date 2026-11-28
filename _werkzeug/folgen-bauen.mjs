// Baut die Seite /folgen/ von schmetterlingsfutter.de: Ziel der QR-Codes auf Plakat, Signage und Aufklebern
// (Mo 28.11.2026: „Alles sollte auf alles querverweisen und überall verlinkt sein“).
// Ein QR-Code für alles: Kommt Instagram dazu, wird nur diese Seite ergänzt, gedruckte Codes bleiben gültig.
// Seite steht nicht in der Sitemap (noindex).
// Aufruf (im Repo-Ordner): node _werkzeug/folgen-bauen.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { SITE, PAGES, SOZIAL } from './ratgeber-inhalte.mjs';
import { APP, esc, rahmen } from './rahmen.mjs';
import { ROOT } from './ratgeber-bauen.mjs';

const ICON = { WhatsApp: '💬', Telegram: '✈️', TikTok: '🎵', Facebook: '👍', Instagram: '📸' };
const ZEILE = { WhatsApp: 'Jeden Tag der Fund aufs Handy', Telegram: 'Jeden Tag der Fund aufs Handy', TikTok: 'Kurze Videos für Paare', Facebook: 'Neuigkeiten und Spiele', Instagram: 'Bilder und Reels' };

export function folgenSeite() {
  const knoepfe = SOZIAL.map((k) => `<li><a class="folgen-k" href="${esc(k.url)}" target="_blank" rel="noopener"><span class="fi" aria-hidden="true">${ICON[k.name] || '🦋'}</span><span><b>${esc(k.name)}</b><small>${esc(ZEILE[k.name] || '')}</small></span></a></li>`).join('');
  const main = `<h1>Papillon folgen</h1>
<p class="lead">Jeden Tag ein kurioser Fund, den es wirklich gibt. Kostenlos, jederzeit abbestellbar.</p>
<ul class="folgen">${knoepfe}</ul>
<ul class="more"><li><a href="/funde/"><span aria-hidden="true">🔍</span>Der Fund von heute →</a></li><li><a href="${APP}"><span aria-hidden="true">🦋</span>Die App für Paare – kostenlos →</a></li></ul>
<style>.folgen{list-style:none;padding:0;margin:18px 0;display:grid;gap:12px}.folgen-k{display:flex;align-items:center;gap:14px;min-height:72px;padding:14px 18px;border-radius:18px;border:1px solid var(--line);background:rgba(255,255,255,.04);color:var(--text);text-decoration:none;font-size:20px}.folgen-k:hover{background:rgba(255,100,150,.14)}.folgen-k .fi{font-size:30px}.folgen-k b{display:block}.folgen-k small{display:block;font-size:16px;color:var(--text-soft)}</style>`;
  const ld = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Papillon folgen', url: `${SITE}/folgen/` };
  return rahmen({ title: 'Papillon folgen – WhatsApp, Telegram, TikTok, Facebook | Schmetterlingsfutter', desc: 'Papillons Fund des Tages kostenlos aufs Handy: WhatsApp-Kanal, Telegram-Kanal, TikTok und Facebook.',
    url: `${SITE}/folgen/`, ogTitle: 'Papillon folgen', ld, main, pages: PAGES, robots: 'noindex,follow' });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const ziel = join(ROOT, 'folgen');
  mkdirSync(ziel, { recursive: true });
  writeFileSync(join(ziel, 'index.html'), folgenSeite());
  console.log('gebaut: folgen/index.html');
}
