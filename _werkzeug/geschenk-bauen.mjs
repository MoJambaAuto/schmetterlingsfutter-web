// Baut die Seite /geschenk/ von schmetterlingsfutter.de (Paket AE-09 der Amazon-Engine).
// Die Play-App (TWA) verlinkt Amazon nicht direkt, sondern auf diese Seite: /geschenk/?q=<Suchbegriff>[&m=<Cent>][&a=1].
//   q = Suchbegriff (nur als Text eingesetzt), m = Höchstbetrag in Cent (Preisfilter), a=1 = ohne Partnerkennung.
// Ohne q: Weiterleitung auf /geschenkideen-freundin-freund/. Die Seite steht nicht in der Sitemap (noindex).
// Aufruf (im Repo-Ordner): node _werkzeug/geschenk-bauen.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { SITE, PAGES } from './ratgeber-inhalte.mjs';
import { TAG, esc, amazon, rahmen } from './rahmen.mjs';
import { ROOT } from './ratgeber-bauen.mjs';

export const TIPPS = [
  'Denk an etwas, das sie oder er zuletzt erwähnt hat. Das schlägt jede Bestenliste.',
  'Lieber klein und passend als groß und beliebig.',
  'Ein paar persönliche Zeilen dazu machen aus jedem Geschenk ein besonderes.',
];
const HINWEIS = '* Partnerlink: Kaufst du darüber ein, bekommen wir eine kleine Provision. Am Preis ändert sich für dich nichts. Als Amazon-Partner verdienen wir an qualifizierten Verkäufen. Die Ideen wählen wir selbst aus.';

const SKRIPT = `(function(){var p=new URLSearchParams(location.search),q=(p.get('q')||'').replace(/\\s+/g,' ').trim().slice(0,100);
if(!q){location.replace('/geschenkideen-freundin-freund/');return}
var a=p.get('a')==='1',m=p.get('m')||'';
document.getElementById('gk-h1').textContent='Geschenkidee: '+q;
var u='https://www.amazon.de/s?k='+encodeURIComponent(q).replace(/%20/g,'+')+(/^\\d{1,7}$/.test(m)&&+m>0?'&rh=p_36%3A-'+m:'')+(a?'':'&tag=${TAG}');
var b=document.getElementById('gk-buy');b.href=u;
if(a){b.textContent='Bei Amazon ansehen';b.rel='noopener';['gk-anz','gk-hinweis'].forEach(function(i){var e=document.getElementById(i);if(e)e.remove()})}
document.getElementById('gk-inhalt').hidden=false})();`;

export function geschenkSeite() {
  const main = `<nav class="crumbs" aria-label="Brotkrumen"><a href="/">Start</a> › Geschenkidee</nav>
<h1 id="gk-h1">Geschenkidee</h1>
<div id="gk-inhalt" hidden>
<ol class="steps">${TIPPS.map((t) => `<li><span>${esc(t)}</span></li>`).join('')}</ol>
<p class="anzeige" id="gk-anz">Anzeige</p>
<a class="buy" id="gk-buy" href="${esc(amazon('Geschenk'))}" target="_blank" rel="sponsored noopener">Bei Amazon ansehen *</a>
</div>
<noscript><p>Hier geht es zu unseren <a href="/geschenkideen-freundin-freund/">Geschenkideen für Freundin &amp; Freund</a>.</p></noscript>
<ul class="more fund-weiter"><li><a href="/geschenkideen-freundin-freund/"><span aria-hidden="true">🎁</span>Geschenkideen für Freundin &amp; Freund</a></li><li><a href="/funde/"><span aria-hidden="true">🔍</span>Papillons Fund des Tages</a></li></ul>
<p class="disclose" id="gk-hinweis">${esc(HINWEIS)}</p>`;
  return rahmen({
    title: 'Geschenkidee | Schmetterlingsfutter', desc: 'Geschenkidee aus der App Schmetterlingsfutter – mit drei kleinen Tipps fürs passende Geschenk.',
    url: `${SITE}/geschenk/`, ogTitle: 'Geschenkidee', ld: [], main, pages: PAGES, script: SKRIPT, robots: 'noindex,follow',
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const datei = join(ROOT, 'geschenk', 'index.html');
  mkdirSync(join(ROOT, 'geschenk'), { recursive: true });
  writeFileSync(datei, geschenkSeite(), 'utf8');
  console.log('gebaut: geschenk/index.html');
}
