/* Schmetterlingsfutter – Ambient-Falter (Website). Stand 15.11.2026, Claude.
   Regeln: max. 1 Falter gleichzeitig, erster Flug nach ~10 s, danach alle 25–45 s, nur am oberen/unteren Rand.
   Kein Einfluss aufs Layout (fester Container, pointer-events:none), aus bei „Bewegung reduzieren“, Pause-Knopf.
   70 % reine Atmosphäre, 30 % Botschafts-Falter (2/3 Mini-Aufgabe, 1/3 Geschenkidee).
   Geschenkideen verlinken auf eigene Ratgeberseiten, NICHT direkt zu Amazon (PartnerNet: keine Partnerlinks in Pop-ups). */

/* ===== Inhalte – hier pflegen ===== */
const AUFGABEN = [
  'Schick deinem Schatz heute ein Foto von etwas, das dich an ihn oder sie erinnert.',
  'Sag heute einen Satz, der mit „Ich mag an dir …“ anfängt. Ohne Anlass.',
  'Handys weg beim Abendessen – nur heute. Mal sehen, worüber ihr redet.',
  'Frag heute Abend: „Was war dein schönster Moment diese Woche?“',
  'Leg einen kleinen Zettel irgendwohin, wo er gefunden wird.',
  'Plant zusammen einen Ausflug, den ihr noch nie gemacht habt. Nur planen reicht schon.',
  'Erzähl deinem Schatz, wann du dich zum ersten Mal verliebt gefühlt hast.',
  'Macht heute zehn Minuten Spaziergang zu zweit. Einfach so.'
];
const GESCHENKE = [ /* href = eigene Ratgeberseite (dort stehen die gekennzeichneten Partnerlinks) */
  { t: 'Fragekarten für Paare', p: 'Für Abende ohne Handy – und 70 Fragen gratis dazu.', href: '/fragen-fuer-paare/' },
  { t: 'Geschenk für deinen Schatz?', p: 'Persönliche Ideen, sortiert nach Budget.', href: '/geschenkideen-freundin-freund/' },
  { t: 'Valentinstag kommt schneller als gedacht', p: 'Ideen für sie, ihn und euch zwei.', href: '/valentinstag-geschenke/' },
  { t: 'Wichteln steht an?', p: 'Lustige Ideen bis 10, 15 und 20 Euro.', href: '/wichtelgeschenke/' }
];
const ANTEIL_BOTSCHAFT = 0.3, ANTEIL_GESCHENK = 1 / 3;
const ERSTER_FLUG = 10000, PAUSE_MIN = 25000, PAUSE_MAX = 45000, FLUGDAUER = [14000, 20000];

/* ===== Technik ===== */
(() => {
  const d = document, KEY = 'sf-falter-aus';
  const still = matchMedia('(prefers-reduced-motion: reduce)');
  let aus = false; try { aus = localStorage.getItem(KEY) === '1'; } catch (e) {}
  let timer = 0, flug = null, karte = null;

  const css = d.createElement('style');
  css.textContent = `
.sf-fl{position:fixed;inset:0;pointer-events:none;z-index:5;overflow:hidden;contain:strict}
.sf-f{position:absolute;left:0;top:0;width:56px;height:44px;margin:-22px 0 0 -28px;padding:0;border:0;background:none;will-change:transform;opacity:0;transition:opacity .8s ease}
.sf-f.on{opacity:1}
.sf-f img{display:block;width:100%;height:100%;object-fit:contain;transform-origin:50% 50%;animation:sf-flap .32s ease-in-out infinite alternate;filter:drop-shadow(0 4px 6px rgba(0,0,0,.35))}
.sf-f.ruht img{animation-duration:1.4s}
@keyframes sf-flap{from{transform:scaleX(1)}to{transform:scaleX(.28)}}
button.sf-f{pointer-events:auto;cursor:pointer;touch-action:manipulation}
button.sf-f::after{content:"";position:absolute;left:50%;bottom:-6px;width:9px;height:9px;margin-left:-4.5px;border-radius:50%;background:#fff3c4;box-shadow:0 0 10px 4px rgba(255,214,120,.75);animation:sf-glow 1.6s ease-in-out infinite alternate}
@keyframes sf-glow{from{opacity:.55}to{opacity:1}}
button.sf-f:focus-visible{outline:2px solid var(--accent-2,#ff85a1);outline-offset:4px;border-radius:50%}
.sf-k{position:fixed;z-index:6;width:min(300px,calc(100vw - 24px));padding:18px 18px 16px;border-radius:18px;text-align:left;
  background:rgba(45,17,51,.94);border:1px solid var(--accent-2,#ff85a1);color:var(--text,#fff1f5);box-shadow:0 18px 40px -12px rgba(0,0,0,.6);
  font:17px/1.45 var(--sans,system-ui);opacity:0;transform:translate3d(0,8px,0) scale(.97);transition:opacity .25s ease,transform .25s ease}
.sf-k.on{opacity:1;transform:none}
.sf-k b{display:block;font-family:var(--serif,Georgia);font-style:italic;font-weight:400;font-size:21px;line-height:1.25;margin:0 28px 6px 0;color:#fff}
.sf-k p{margin:0 0 12px;color:var(--text-soft,#f6dbe6)}
.sf-k a{display:inline-flex;align-items:center;min-height:44px;padding:8px 18px;border-radius:22px;background:var(--accent-deep,#dc2a55);color:#fff;font-weight:700;text-decoration:none}
.sf-k .x{position:absolute;top:6px;right:6px;width:44px;height:44px;border:0;background:none;color:var(--text-soft,#f6dbe6);font-size:26px;line-height:1;cursor:pointer;border-radius:50%}
.sf-k .x:focus-visible{outline:2px solid var(--accent-2,#ff85a1)}
.sf-k small{display:block;font-size:15px;color:var(--text-muted,#f2bfd0);margin-top:8px}
.sf-t{position:fixed;left:12px;bottom:12px;z-index:6;opacity:0;visibility:hidden;transition:opacity .4s ease,visibility .4s;min-height:44px;padding:8px 14px;border-radius:22px;border:1px solid var(--line,rgba(255,150,180,.3));
  background:rgba(26,10,30,.82);color:var(--text-soft,#f6dbe6);font:15px/1 var(--sans,system-ui);cursor:pointer}
.sf-t:focus-visible{outline:2px solid var(--accent-2,#ff85a1)}
.sf-t.on{opacity:1;visibility:visible}
.sf-t2{margin-top:10px;min-height:44px;padding:8px 14px;border-radius:22px;border:1px solid var(--line,rgba(255,150,180,.3));background:none;color:var(--text-soft,#f6dbe6);font:15px/1 var(--sans,system-ui);cursor:pointer}
@media (prefers-reduced-motion:reduce){.sf-fl,.sf-t,.sf-t2{display:none}}`;
  d.head.appendChild(css);

  const box = d.createElement('div'); box.className = 'sf-fl'; box.setAttribute('aria-hidden', 'true');
  const live = d.createElement('div'); live.className = 'sf-fl'; /* Botschafts-Falter: eigener, nicht versteckter Container */
  d.body.append(box, live);

  /* Schalter: schwebend nur während eines Flugs, dauerhaft im Fußbereich (WCAG 2.2.2 Pausieren) */
  const t = d.createElement('button'); t.type = 'button'; t.className = 'sf-t';
  const t2 = d.createElement('button'); t2.type = 'button'; t2.className = 'sf-t2';
  const tLabel = () => [t, t2].forEach((x) => { x.textContent = aus ? '🦋 Fliegende Falter an' : '🦋 Fliegende Falter aus'; x.setAttribute('aria-pressed', String(!aus)); });
  tLabel(); d.body.appendChild(t);
  const fuss = d.querySelector('footer'); if (fuss) { fuss.appendChild(d.createElement('br')); fuss.appendChild(t2); }
  [t, t2].forEach((x) => x.addEventListener('click', () => {
    aus = !aus; try { localStorage.setItem(KEY, aus ? '1' : '0'); } catch (e) {}
    tLabel(); if (aus) stopp(); else plane(3000);
  }));

  const r = (a, b) => a + Math.random() * (b - a);
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const pfad = location.pathname;

  function plane(ms) { clearTimeout(timer); if (!aus && !still.matches) timer = setTimeout(start, ms); }
  function stopp() { clearTimeout(timer); t.classList.remove('on'); if (flug) { flug.el.remove(); cancelAnimationFrame(flug.raf); flug = null; } zu(); }

  /* Flugbahn: kubische Bezier von Rand zu Rand, nur im oberen (6–20 %) oder unteren (78–92 %) Band */
  function bahn() {
    const W = innerWidth, H = innerHeight, oben = Math.random() < 0.5, l2r = Math.random() < 0.5;
    const band = oben ? [0.06, 0.2] : [0.78, 0.92], y = () => H * r(band[0], band[1]);
    const x0 = l2r ? -40 : W + 40, x3 = l2r ? W + 40 : -40;
    return [[x0, y()], [W * r(.2, .4), y()], [W * r(.6, .8), y()], [x3, y()]];
  }
  const bez = (p, s) => { const u = 1 - s; return [0, 1].map(k => u*u*u*p[0][k] + 3*u*u*s*p[1][k] + 3*u*s*s*p[2][k] + s*s*s*p[3][k]); };

  function start() {
    if (aus || still.matches || d.hidden || flug) return plane(r(PAUSE_MIN, PAUSE_MAX));
    const botschaft = Math.random() < ANTEIL_BOTSCHAFT;
    const el = d.createElement(botschaft ? 'button' : 'div'); el.className = 'sf-f';
    if (botschaft) { el.type = 'button'; el.setAttribute('aria-label', 'Ein Falter bringt dir eine kleine Botschaft – öffnen'); }
    const img = new Image(); img.alt = ''; img.width = 56; img.height = 44; img.decoding = 'async';
    img.src = '/img/falter/' + (1 + Math.floor(Math.random() * 9)) + '.webp';
    el.appendChild(img);
    (botschaft ? live : box).appendChild(el);
    const p = bahn(), dauer = r(FLUGDAUER[0], FLUGDAUER[1]);
    flug = { el, p, dauer, t0: 0, s: 0, halt: false, raf: 0, letzt: 0 };
    img.onload = () => { el.classList.add('on'); t.classList.add('on'); flug && (flug.raf = requestAnimationFrame(tick)); };
    img.onerror = () => { el.remove(); flug = null; plane(r(PAUSE_MIN, PAUSE_MAX)); };
    if (botschaft) {
      const auf = (e) => { e.preventDefault(); if (flug) { flug.halt = true; el.classList.add('ruht'); } oeffne(el, e.type === 'click' || e.type === 'keydown'); };
      el.addEventListener('click', auf);
      el.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') auf(e); });
    }
  }

  function tick(now) {
    const f = flug; if (!f) return;
    if (!f.letzt) f.letzt = now;
    const dt = now - f.letzt; f.letzt = now;
    if (!f.halt && !d.hidden) f.s += dt / f.dauer;
    if (f.s >= 1) { f.el.remove(); flug = null; t.classList.remove('on'); return plane(r(PAUSE_MIN, PAUSE_MAX)); }
    const [x, y] = bez(f.p, f.s), [x2] = bez(f.p, Math.min(1, f.s + 0.01));
    const wackel = Math.sin(now / 420) * 10, dreh = (x2 >= x ? 1 : -1) * 8 + Math.sin(now / 600) * 6;
    f.el.style.transform = `translate3d(${x}px,${y + wackel}px,0) rotate(${dreh}deg)`;
    f.raf = requestAnimationFrame(tick);
  }

  function oeffne(el, perTastatur) {
    if (karte) return;
    const geschenk = Math.random() < ANTEIL_GESCHENK ? pick(GESCHENKE.filter(g => g.href !== pfad)) : null;
    karte = d.createElement('div'); karte.className = 'sf-k'; karte.setAttribute('role', 'dialog'); karte.setAttribute('aria-label', 'Botschaft vom Falter');
    karte.innerHTML = geschenk
      ? `<button type="button" class="x" aria-label="Schließen">×</button><b>${geschenk.t}</b><p>${geschenk.p}</p><a href="${geschenk.href}">Ideen ansehen →</a>`
      : `<button type="button" class="x" aria-label="Schließen">×</button><b>Kleine Aufgabe für heute</b><p>${pick(AUFGABEN)}</p><a href="https://app.schmetterlingsfutter.de/">Mehr davon in der App →</a><small>Kostenlos, ohne Anmeldung.</small>`;
    d.body.appendChild(karte);
    const b = el.getBoundingClientRect(), kw = karte.offsetWidth, kh = karte.offsetHeight;
    const left = Math.min(Math.max(12, b.left + b.width / 2 - kw / 2), innerWidth - kw - 12);
    const top = b.top > innerHeight / 2 ? Math.max(12, b.top - kh - 12) : Math.min(innerHeight - kh - 12, b.bottom + 12);
    karte.style.left = left + 'px'; karte.style.top = top + 'px';
    requestAnimationFrame(() => karte && karte.classList.add('on'));
    karte.querySelector('.x').addEventListener('click', zu);
    if (perTastatur) karte.querySelector('a').focus();
    setTimeout(() => { d.addEventListener('pointerdown', aussen, true); d.addEventListener('keydown', esc); }, 0);
  }
  function aussen(e) { if (karte && !karte.contains(e.target) && !(flug && flug.el.contains(e.target))) zu(); }
  function esc(e) { if (e.key === 'Escape') zu(); }
  function zu() {
    d.removeEventListener('pointerdown', aussen, true); d.removeEventListener('keydown', esc);
    if (karte) { karte.remove(); karte = null; }
    if (flug) { flug.halt = false; flug.el.classList.remove('ruht'); }
  }

  d.addEventListener('visibilitychange', () => { if (!d.hidden && !flug) plane(r(4000, 9000)); });
  still.addEventListener && still.addEventListener('change', () => (still.matches ? stopp() : plane(5000)));
  plane(ERSTER_FLUG);
})();
