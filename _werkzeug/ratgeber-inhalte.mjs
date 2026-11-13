// Inhalte der Ratgeber-Seiten. Nach Änderungen: node _werkzeug/ratgeber-bauen.mjs
// Ideen: t = Titel, p = Satz, price = Spanne, q = Amazon-Suchbegriff (Partnerlink), app = Knopftext in die App,
// href/label = eigener Link, also = zweiter Link. In Texten ist einfaches HTML erlaubt.
export const SITE = 'https://schmetterlingsfutter.de';
const U25 = 'unter 25 €', M = '25–60 €', O60 = 'über 60 €';

const geschenke = {
  slug: 'geschenkideen-freundin-freund', ic: '🎁', crumb: 'Geschenkideen für Freundin & Freund', date: '2026-11-13', month: 'November 2026',
  title: 'Geschenkideen für Freundin & Freund: 33 Ideen mit Herz | Schmetterlingsfutter',
  desc: 'Persönliche Geschenkideen für deine Freundin oder deinen Freund – von der Sternenkarte bis zum Erlebnis für zwei, nach Budget sortiert. Mit Tipps, wie du das Richtige findest.',
  h1: 'Geschenkideen für Freundin und Freund',
  lead: 'Das beste Geschenk sagt: <b>Ich höre dir zu.</b> Hier sind Ideen, die persönlich wirken – für sie, für ihn und für euch beide, mit grober Preisspanne.',
  sections: [
    { id: 'persoenlich', ic: '💞', jump: 'Persönlich', h: 'Persönlich und mit Erinnerung', fact: "Der Zitronenfalter wird rund ein Jahr alt – so alt wie kaum ein anderer Schmetterling bei uns. Die meisten Falter leben nur wenige Wochen.", ideas: [
      { t: 'Sternenkarte von eurem Tag', price: M, p: 'Der Himmel genau so, wie er am Abend eures Kennenlernens oder eurer Hochzeit aussah – mit Datum und Ort.', q: 'Sternenkarte personalisiert' },
      { t: 'Schmuck mit Koordinaten', price: M, p: 'Kette oder Armband mit den Koordinaten eures ersten Treffens. Ein Geheimnis, das nur ihr zwei lesen könnt.', q: 'Armband Gravur Koordinaten' },
      { t: 'Fotoalbum eurer Geschichte', price: M, p: 'Vom ersten Date bis heute, mit kleinen Notizen zu jedem Bild. Wirkt am stärksten, wenn ihr schon länger zusammen seid.', q: 'Fotoalbum zum Selbstgestalten Paar' },
      { t: 'Puzzle aus eurem Lieblingsfoto', price: M, p: 'Ein Abend Puzzeln zu zweit – und am Ende hängt euer Bild an der Wand.', q: 'Fotopuzzle personalisiert' },
      { t: 'Glas mit 52 Gründen', price: U25, p: 'Kleine Zettel in einem Glas: ein Grund pro Woche, warum du sie oder ihn liebst. Kostet wenig, wird lange aufgehoben.', q: 'Glas Gründe warum ich dich liebe' },
      { t: 'Liebesgedicht als Motiv', price: M, p: 'Klassische Liebesgedichte von Goethe, Rilke und anderen – gestaltet im Schmetterlingsfutter-Shop.', href: 'https://schmetterlingsfutter-poesie.myspreadshop.de', label: 'Zum Poesie-Shop' },
    ] },
    { id: 'fuer-sie', ic: '🌷', jump: 'Für sie', h: 'Ideen, die bei ihr oft gut ankommen', fact: "Schmetterlinge sehen ultraviolettes Licht. Viele Blüten tragen Muster, die nur im UV-Licht sichtbar sind – wie Landebahnen zum Nektar.", intro: 'Natürlich passt vieles davon genauso für ihn – du kennst deinen Schatz am besten.', ideas: [
      { t: 'Seidenkissenbezug', price: M, p: 'Fühlt sich luxuriös an und ist jeden Abend im Einsatz. Ein Geschenk, das sie täglich an dich erinnert.', q: 'Seidenkissenbezug Maulbeerseide' },
      { t: 'Duftkerze mit Holzdocht', price: U25, p: 'Knistert leise wie ein Kaminfeuer. Wähle einen Duft, den sie wirklich mag – das zeigt, dass du aufpasst.', q: 'Duftkerze Holzdocht' },
      { t: 'Wellness-Abend für zu Hause', price: M, p: 'Badezusatz, Gesichtsmaske, Kuschelsocken – am besten mit dem Versprechen, dass du an dem Abend alles andere übernimmst.', q: 'Wellness Geschenkset Frauen' },
      { t: 'Rose, die monatelang hält', price: M, p: 'Eine haltbar gemachte Rose im Glas. Blüht nicht nach drei Tagen ab.', q: 'Infinity Rose im Glas' },
      { t: 'Kuscheldecke in XXL', price: M, p: 'Groß genug für zwei. Der Hintergedanke ist ausdrücklich erlaubt.', q: 'Kuscheldecke XXL flauschig' },
      { t: 'Schöne Ausgabe ihres Lieblingsbuchs', price: U25, p: 'Eine Schmuckausgabe des Buchs, das sie immer wieder erwähnt – mit einer Widmung von dir auf der ersten Seite.', q: 'Schmuckausgabe Roman Klassiker' },
    ] },
    { id: 'fuer-ihn', ic: '🧭', jump: 'Für ihn', h: 'Ideen, die bei ihm oft gut ankommen', fact: "Die großen „Augen“ auf den Flügeln des Tagpfauenauges sind ein Bluff: Klappt der Falter sie plötzlich auf, erschrecken Vögel und lassen ihn in Ruhe.", ideas: [
      { t: 'Portemonnaie mit Gravur', price: M, p: 'Gutes Leder und eine kurze Gravur innen – das trägt er jeden Tag bei sich.', q: 'Geldbörse Herren Leder Gravur' },
      { t: 'Tasting-Set zum Teilen', price: M, p: 'Gin, Whisky oder Kaffee zum Probieren. Plant einen gemeinsamen Abend daraus, dann ist es doppelt geschenkt.', q: 'Tasting Set Geschenk Männer' },
      { t: 'Grillbesteck im Koffer', price: M, p: 'Für alle, die am Grill gern das Kommando übernehmen. Solides Edelstahl hält viele Sommer.', q: 'Grillbesteck Set Edelstahl Koffer' },
      { t: 'Holzuhr mit Gravur', price: O60, p: 'Leicht, natürlich und mit einer Botschaft auf der Rückseite, die nur er kennt.', q: 'Holzuhr Herren Gravur' },
      { t: 'Bartpflege-Set', price: U25, p: 'Öl, Balsam und Kamm in einer schönen Box – praktisch und trotzdem ein kleiner Luxus.', q: 'Bartpflege Set Geschenk' },
      { t: 'Wasserfester Lautsprecher', price: M, p: 'Für die Dusche, den Grillabend und den nächsten Ausflug zu zweit.', q: 'Bluetooth Lautsprecher wasserdicht' },
    ] },
    { id: 'erlebnisse', ic: '🎟️', jump: 'Erlebnisse', h: 'Gemeinsam erleben', fact: "Der Distelfalter fliegt jedes Jahr aus Afrika bis nach Europa und zurück – rund 12.000 Kilometer, verteilt auf mehrere Generationen. Kein Falter schafft die Strecke allein, nur gemeinsam.", intro: 'Erlebnisse bleiben oft länger in Erinnerung als Dinge – und ihr habt sie zusammen.', ideas: [
      { t: 'Erlebnisbox für zwei', price: M, p: 'Ihr sucht euch gemeinsam ein Erlebnis aus – von Wellness bis Kanutour. Gut, wenn du dich nicht festlegen willst.', q: 'Erlebnisgeschenk für zwei Box' },
      { t: 'Kochkurs zu zweit', price: O60, p: 'Zusammen schnippeln, probieren, lachen – und danach könnt ihr das Gericht zu Hause nachkochen.', q: 'Erlebnisgutschein Kochkurs für zwei' },
      { t: 'Wochenende zu zweit', price: O60, p: 'Zwei Nächte raus aus dem Alltag. Schon die Vorfreude ist ein Geschenk.', q: 'Hotelgutschein zwei Übernachtungen für zwei' },
      { t: 'Escape-Spiel für zu Hause', price: U25, p: 'Rätseln unter Zeitdruck zeigt, wie gut ihr als Team seid – ganz ohne Anfahrt.', q: 'Escape Room Spiel für zwei' },
      { t: 'Ausflug nach euren Interessen', p: 'In der App findet ihr Erlebnis- und Ausflugsideen, die zu dem passen, was ihr beide mögt.', app: 'Ideen in der App' },
    ] },
    { id: 'kleines-budget', ic: '🪙', jump: 'Unter 25 €', h: 'Kleines Budget, große Wirkung', fact: "Schmetterlinge schmecken mit den Füßen. Landet ein Falter auf einer Blüte, weiß er sofort, ob sich das Naschen lohnt.", ideas: [
      { t: 'Fragekarten für Paare', price: U25, p: 'Für Abende ohne Handy – und für Antworten, mit denen ihr beide nicht gerechnet habt.', q: 'Fragekarten für Paare', also: { href: '/fragen-fuer-paare/', label: '70 Fragen gratis' } },
      { t: 'Pärchen-Tassen', price: U25, p: 'Zwei Tassen, die nur zusammen ein Bild ergeben. Der Kaffee am Morgen wird zum kleinen Ritual.', q: 'Pärchen Tassen Set' },
      { t: 'Collage-Bilderrahmen', price: U25, p: 'Druck eure zehn schönsten Handyfotos aus und gib ihnen endlich einen Platz an der Wand.', q: 'Bilderrahmen Collage mehrere Bilder' },
      { t: 'Kiste mit Kindheits-Süßigkeiten', price: U25, p: 'Die Naschereien, die er oder sie als Kind geliebt hat. Garantiert ein Lächeln.', q: 'Süßigkeiten Retro Box' },
      { t: 'Gutscheine für Liebesdienste', p: 'Massage, Frühstück ans Bett, einmal Abwasch: Gutscheine gestaltest du in der App und schickst sie direkt aufs Handy deines Schatzes. Kostenlos.', app: 'In der App gestalten' },
    ] },
    { id: 'selbstgemacht', ic: '✍️', jump: 'Selbstgemacht', h: 'Kostet nichts, bedeutet viel', fact: "In der Puppe löst sich der Körper der Raupe weitgehend auf und wird ganz neu gebaut. Was am Ende schlüpft, braucht Zeit – wie alles Schöne.", steps: [
      '<b>Ein handgeschriebener Brief.</b> Was du an ihr oder ihm liebst, was du nie vergessen wirst. Wird oft jahrelang aufgehoben.',
      '<b>Eure Playlist.</b> Die Lieder eurer Geschichte, in der richtigen Reihenfolge – vom ersten Date bis heute.',
      '<b>Ein Tag nach ihrem oder seinem Plan.</b> Du sagst einen ganzen Tag lang zu allem Ja.',
      '<b>Das Lieblingsessen nachkochen.</b> Besonders schön: das Gericht von eurem ersten Date.',
      '<b>Eine Schnitzeljagd durch die Wohnung.</b> Kleine Hinweise führen zum Geschenk. In der App gibt es dafür sogar ein eigenes Spiel.',
    ] },
    { id: 'tipps', ic: '💡', h: 'So findest du das passende Geschenk', steps: [
      '<b>Hör das ganze Jahr zu.</b> Was nebenbei erwähnt wird, ist oft der beste Hinweis. Schreib es sofort auf – zum Beispiel bei den Wünschen in der App.',
      '<b>Schenk eher Zeit als Zeug.</b> Ein gemeinsamer Tag schlägt fast jedes Ding.',
      '<b>Mach es persönlich.</b> Ein Datum, ein Insider, ein Foto – das macht aus einem Geschenk <i>euer</i> Geschenk.',
      '<b>Die Karte zählt.</b> Ein paar ehrliche Zeilen sind oft das, was am längsten bleibt.',
    ] },
  ],
  app: { h: 'Nie wieder ratlos vor dem Geburtstag', p: 'In <b>Schmetterlingsfutter</b> sammelst du die Wünsche deines Schatzes, sobald sie fallen, und wirst rechtzeitig an Jahrestag und Geburtstag erinnert. Kostenlos – deine Einträge bleiben auf deinem Handy.', btn: 'App kostenlos öffnen' },
  faq: [
    ['Was schenke ich meiner Freundin, wenn sie schon alles hat?', 'Etwas, das man nicht im Laden findet: ein gemeinsames Erlebnis, eine Sternenkarte von eurem Tag oder einen Brief. Persönliches ist nie doppelt.'],
    ['Was schenke ich meinem Freund, wenn er sich nichts wünscht?', 'Zeit und Erlebnisse: ein Tasting-Abend, ein Ausflug zu etwas, das ihn interessiert, oder ein Tag nach seinem Plan. Achte darauf, was er nebenbei erwähnt.'],
    ['Wie viel sollte ein Geschenk für den Partner kosten?', 'Es gibt keine Regel. Wichtiger als der Preis ist, dass es zu ihm oder ihr passt. Sprecht euch bei großen Anlässen ruhig ab, damit sich niemand unwohl fühlt.'],
    ['Was schenkt man zum ersten Jahrestag?', 'Etwas mit eurer Geschichte: ein Fotoalbum vom ersten Jahr, die Sternenkarte vom Kennenlerntag oder ein Date am Ort eures ersten Treffens. Traditionell steht das erste Jahr für Papier – ein Brief passt also perfekt.'],
    ['Was schenke ich, wenn wir erst kurz zusammen sind?', 'Lieber klein und aufmerksam: ein Buch, über das ihr gesprochen habt, gute Schokolade oder ein gemeinsames Date. Teurer Schmuck kann am Anfang zu viel wirken.'],
  ],
};

const valentin = {
  slug: 'valentinstag-geschenke', ic: '🌹', crumb: 'Valentinstag-Geschenke', date: '2026-11-13', month: 'November 2026',
  title: 'Valentinstag-Geschenke 2027: Ideen für sie, ihn und euch zwei | Schmetterlingsfutter',
  desc: 'Valentinstag ist am Sonntag, 14. Februar 2027. Geschenkideen für sie und ihn, Ideen für einen Abend zu Hause und Last-Minute-Ideen, die trotzdem von Herzen kommen.',
  h1: 'Valentinstag-Geschenke für sie, ihn und euch zwei',
  ogTitle: 'Valentinstag 2027: Geschenkideen mit Herz',
  top: '<p class="count" id="count">Valentinstag: Sonntag, 14. Februar 2027</p>',
  lead: 'Am 14. Februar zählt nicht der Preis, sondern die Geste. Hier findest du Geschenke, kleine Überraschungen und Ideen für einen Abend nur für euch.',
  sections: [
    { id: 'fuer-sie', ic: '🌹', jump: 'Für sie', h: 'Für sie', fact: "Schmetterlingsflügel sind mit winzigen Schuppen bedeckt, angeordnet wie Dachziegel. Daher kommt der Puder an den Fingern, wenn man einen Falter berührt – bitte nicht anfassen.", ideas: [
      { t: 'Rose, die monatelang hält', price: M, p: 'Der Klassiker zum Valentinstag – nur dass er nicht nach drei Tagen welkt.', q: 'Infinity Rose Valentinstag' },
      { t: 'Kette mit euren Initialen', price: M, p: 'Klein, schlicht und jeden Tag zu tragen. Am schönsten mit beiden Anfangsbuchstaben.', q: 'Kette Initialen Gravur' },
      { t: 'Richtig gute Pralinen', price: U25, p: 'Klassisch? Ja. Aber dann bitte die besonderen, nicht die von der Tankstelle.', q: 'Pralinen Valentinstag Geschenk' },
      { t: 'Parfum zum Entdecken', price: M, p: 'Statt einen Duft zu raten: ein Set mit Proben, aus dem sie ihren Liebling findet.', q: 'Parfum Probenset Damen' },
      { t: 'Briefpapier mit Siegel', price: U25, p: 'Und dann einen echten Liebesbrief schreiben. Der wird aufgehoben.', q: 'Briefpapier Set Siegelwachs' },
    ] },
    { id: 'fuer-ihn', ic: '💙', jump: 'Für ihn', h: 'Für ihn', fact: "Die Männchen des Kleinen Nachtpfauenauges können den Duft eines Weibchens noch aus mehreren Kilometern Entfernung wahrnehmen. Romantik auf Distanz.", ideas: [
      { t: 'Schlüsselanhänger mit Gravur', price: U25, p: 'Ein Datum oder ein Insider – er hat ihn jeden Tag in der Hand.', q: 'Schlüsselanhänger Gravur Mann' },
      { t: 'Lederarmband mit Botschaft', price: M, p: 'Unauffällig von außen, innen eine Gravur nur für ihn.', q: 'Lederarmband Herren Gravur' },
      { t: 'Kaffee-Entdeckerset', price: U25, p: 'Sorten aus aller Welt – für gemeinsame Sonntagmorgen.', q: 'Kaffee Probierset Geschenk' },
      { t: 'Grillgewürze im Set', price: U25, p: 'Damit der erste Grillabend im Frühling schon feststeht.', q: 'Grillgewürze Geschenkset' },
      { t: 'Socken mit eurem Foto', price: U25, p: 'Albern? Genau deshalb wird er lachen.', q: 'Socken mit Foto bedrucken' },
    ] },
    { id: 'zu-zweit', ic: '💞', jump: 'Für euch zwei', h: 'Für euch zwei', fact: "Schon im Februar kann an sonnigen Tagen ein Zitronenfalter fliegen: Er überwintert als fertiger Falter im Freien und übersteht dabei starken Frost.", ideas: [
      { t: 'Schokoladen-Fondue', price: U25, p: 'Obst schneiden, Schokolade schmelzen, Licht dimmen. Fertig ist das Date.', q: 'Schokoladenfondue Set' },
      { t: 'Erlebnis für zwei', price: M, p: 'Ihr sucht euch zusammen aus, was ihr erleben wollt – von Wellness bis Abenteuer.', q: 'Erlebnisgeschenk für zwei Box' },
      { t: 'Spiel für Paare', price: U25, p: 'Ein Abend mit Fragen, Aufgaben und viel Gelächter.', q: 'Spiel für Paare', also: { href: 'https://mojambaauto.github.io/schmetterlingsfutter/', label: 'Gratis: Spiele in der App' } },
      { t: 'Massageöl und Kerzen', price: U25, p: 'Das Geschenk ist eigentlich die Massage. Das Öl ist nur die Ausrede.', q: 'Massageöl Set Paare' },
      { t: 'Album für euer Jahr', price: U25, p: 'Ab dem 14. Februar füllt ihr es gemeinsam – ein Foto pro Woche.', q: 'Fotoalbum zum Einkleben Paar' },
    ] },
    { id: 'zu-hause', ic: '🕯️', jump: 'Abend zu Hause', h: 'Ein Abend zu Hause', fact: "Und die Schmetterlinge im Bauch? Das Kribbeln kommt von Stresshormonen wie Adrenalin, die bei Verliebtheit ausgeschüttet werden – der Körper ist in freudiger Alarmbereitschaft.", steps: [
      '<b>Handys weg, Kerzen an.</b> Eine Stunde ohne Bildschirm ist schon ein Geschenk.',
      '<b>Zusammen etwas Neues kochen.</b> Nicht einer für den anderen, sondern beide gemeinsam.',
      '<b>Eure Geschichte erzählen.</b> „Was war dein erster Eindruck von mir?“ – mehr davon bei den <a href="/fragen-fuer-paare/">Fragen für Paare</a>.',
      '<b>Eine Runde spielen.</b> Zum Beispiel „Zwei Wahrheiten, eine Lüge“ in der App. Wer verliert, schuldet einen kleinen Liebesdienst.',
      '<b>Drei Dinge aufschreiben</b>, die ihr am anderen liebt – und sie euch vorlesen.',
    ] },
    { id: 'last-minute', ic: '⏰', jump: 'Last Minute', h: 'Last Minute, aber von Herzen', ideas: [
      { t: 'Frühstück ans Bett', p: 'Valentinstag 2027 ist ein Sonntag – der perfekte Tag dafür. Brötchen holen reicht als Vorbereitung.' },
      { t: 'Liebesbotschaft aufs Handy', p: 'Ein liebevoller Spruch, ein gekritzeltes Herz oder ein Gedicht – in der App in Sekunden geschickt.', app: 'Botschaft schicken' },
      { t: 'Gutschein für einen Tag nach deinem Plan', p: 'Selbst geschrieben auf eine schöne Karte. Wird garantiert eingelöst.', app: 'Gutschein in der App' },
    ] },
  ],
  app: { h: 'Nie wieder den Valentinstag vergessen', p: '<b>Schmetterlingsfutter</b> erinnert dich rechtzeitig an Valentinstag, Jahrestag und Geburtstage – und liefert Ideen für jeden Tag dazwischen. Kostenlos.', btn: 'App kostenlos öffnen' },
  faq: [
    ['Wann ist Valentinstag 2027?', 'Am Sonntag, 14. Februar 2027. Der Valentinstag ist jedes Jahr am 14. Februar.'],
    ['Muss man zum Valentinstag etwas schenken?', 'Nein. Viele Paare feiern lieber mit Zeit als mit Geschenken. Sprecht vorher kurz ab, was ihr euch vorstellt – dann ist niemand enttäuscht.'],
    ['Was schenke ich, wenn wir erst ein paar Wochen zusammen sind?', 'Etwas Kleines: gute Schokolade, eine Karte mit ehrlichen Zeilen oder ein gemeinsames Date. Große Geschenke haben Zeit.'],
    ['Woher kommt der Valentinstag?', 'Er ist nach dem heiligen Valentin benannt. Mit der Liebe verbunden wird der Tag seit dem Mittelalter, vor allem in England und Frankreich. In Deutschland wurde er nach dem Zweiten Weltkrieg bekannt.'],
    ['Was kann ich am Valentinstag mit wenig Geld machen?', 'Ein selbst gekochtes Essen, ein Spaziergang zu eurem Lieblingsort, ein handgeschriebener Brief oder ein Spieleabend. Das wirkt oft mehr als ein teures Geschenk.'],
  ],
  script: `(function(){var e=document.getElementById('count');if(!e)return;var n=new Date();var y=n.getFullYear();var v=new Date(y,1,14);if(n>new Date(y,1,15))v=new Date(y+1,1,14);var t=Math.ceil((v-new Date(n.getFullYear(),n.getMonth(),n.getDate()))/864e5);
e.innerHTML=t<=0?'💘 Heute ist Valentinstag!':'Noch <span>'+t+'</span> '+(t===1?'Tag':'Tage')+' bis zum Valentinstag';})();`,
};

const QS = {
  kennenlernen: [
    'Was war dein erster Eindruck von mir – ehrlich?', 'Womit kann man dir einen ganz normalen Tag retten?', 'Welches Essen erinnert dich an deine Kindheit?',
    'Was machst du an einem freien Sonntag am liebsten?', 'Welcher Ort fühlt sich für dich nach Zuhause an?', 'Worüber könntest du stundenlang reden?',
    'Welches Lied hörst du heimlich in Dauerschleife?', 'Was war der beste Rat, den du je bekommen hast?', 'Bist du eher Frühaufsteher oder Nachteule?',
    'Welche kleine Sache bringt dich zuverlässig zum Lachen?', 'Wie hast du dir als Kind dein Erwachsenenleben vorgestellt?', 'Worauf bist du stolz, obwohl es kaum jemand weiß?',
  ],
  tief: [
    'Wann hast du dich zuletzt so richtig verstanden gefühlt?', 'Was hat dich mehr geprägt, als du anderen zeigst?', 'Wovor hast du Angst, worüber du selten sprichst?',
    'Was bedeutet Vertrauen für dich ganz konkret?', 'Woran merkst du, dass es dir nicht gut geht – und was hilft dir dann?', 'Welche Entscheidung würdest du heute anders treffen?',
    'Wofür bist du in deinem Leben am dankbarsten?', 'Was möchtest du an dir selbst noch lernen?', 'Wie zeigst du Liebe – und wie bekommst du sie am liebsten?',
    'Welcher Moment mit mir hat dich besonders berührt?', 'Was sollte ich über dich wissen, wonach ich noch nie gefragt habe?', 'Was gibt dir das Gefühl, sicher zu sein?',
  ],
  lustig: [
    'Welche Superkraft hättest du gern – aber nur eine ziemlich nutzlose?', 'Wenn wir eine Kochshow hätten: Wie hieße sie?', 'Welches Tier wäre ich – und warum?',
    'Was war dein peinlichster Moment in der Schule?', 'Welche Serie würdest du nie zugeben, gern zu schauen?', 'Wenn unser Leben ein Film wäre: Wer spielt uns?',
    'Welches Gericht könntest du ein Jahr lang jeden Tag essen?', 'Welche Regel würdest du einführen, wenn du einen Tag lang Kanzlerin oder Kanzler wärst?', 'Welche seltsame Angewohnheit kennst du von mir?',
    'Mit welcher berühmten Person würdest du gern einen Tag tauschen?', 'Wie würdest du als Wrestler heißen?', 'Welcher Gegenstand in unserer Wohnung hätte die meisten Geschichten zu erzählen?',
  ],
  lange: [
    'Welcher gemeinsame Moment fällt dir als Erstes ein, wenn du an uns denkst?', 'Was mache ich, das dir guttut – vielleicht ohne dass ich es merke?', 'Was hat sich an uns zum Guten verändert, seit wir zusammen sind?',
    'Was sollten wir wieder öfter machen?', 'Worauf freust du dich gerade am meisten?', 'Was beschäftigt dich zurzeit, worüber wir noch nicht gesprochen haben?',
    'Welches Hobby würdest du gern mit mir ausprobieren?', 'Welche unserer Gewohnheiten möchtest du nie aufgeben?', 'Wann warst du zuletzt richtig stolz auf mich?',
    'Wie sähe für dich ein perfekter gemeinsamer Tag aus?', 'Was wünschst du dir von mir, wenn du einen schlechten Tag hast?', 'Was haben wir zusammen geschafft, das allein schwer gewesen wäre?',
  ],
  zukunft: [
    'Wo siehst du uns in fünf Jahren?', 'Welche Reise wollen wir unbedingt zusammen machen?', 'Wie stellst du dir unser Zuhause in zehn Jahren vor?',
    'Was möchtest du einmal im Leben erleben?', 'Welche Tradition wollen wir zusammen anfangen?', 'Was ist dir bei Geld wichtig – sparen, genießen oder beides?',
    'Wie möchtest du alt werden?', 'Welche Rolle sollen Freunde und Familie in unserem Leben spielen?', 'Was nehmen wir uns für das nächste Jahr vor?',
    'Gibt es einen Traum, den du noch nie ausgesprochen hast?', 'Welches Haustier hätten wir, wenn alles möglich wäre?', 'Was soll man in 30 Jahren über uns erzählen?',
  ],
  eher: [
    'Wer von uns würde sich eher auf dem Weg zu einem neuen Ort verlaufen?', 'Wer von uns würde eher bei einem Liebesfilm weinen?', 'Wer von uns würde eher spontan einen Flug buchen?',
    'Wer von uns würde eher beim Brettspiel schummeln?', 'Wer von uns würde eher mit Fremden ins Gespräch kommen?', 'Wer von uns würde eher das letzte Stück Pizza essen?',
    'Wer von uns würde eher ein Haustier mitbringen, ohne zu fragen?', 'Wer von uns würde eher als Erstes einschlafen?', 'Wer von uns würde eher eine Quizshow gewinnen?',
    'Wer von uns würde eher einen Jahrestag vergessen?',
  ],
};
const ALLQ = Object.values(QS).flat();

const fragen = {
  slug: 'fragen-fuer-paare', ic: '💬', crumb: 'Fragen für Paare', date: '2026-11-13', month: 'November 2026',
  title: 'Fragen für Paare: ' + ALLQ.length + ' Fragen zum Kennenlernen, Lachen und Näherkommen | Schmetterlingsfutter',
  desc: ALLQ.length + ' Fragen für Paare: zum Kennenlernen, tiefgründig, lustig, über die Zukunft und „Wer würde eher“. Mit Zufallsfrage – ideal für Date-Abend, Autofahrt oder Abende ohne Handy.',
  h1: 'Fragen für Paare',
  ogTitle: ALLQ.length + ' Fragen für Paare – und eine Zufallsfrage für heute Abend',
  lead: 'Ob frisch verliebt oder seit Jahren zusammen: Gute Fragen bringen euch ins Gespräch – und oft zu Antworten, mit denen keiner gerechnet hat.',
  top: `<div class="zufall" aria-live="polite"><p class="frage" id="frage">${ALLQ[0]}</p><div class="row"><button class="pill" id="next" type="button">Nächste Frage 🎲</button><a class="pill ghost" id="wa" href="https://wa.me/?text=" target="_blank" rel="noopener">Per WhatsApp fragen</a></div></div>`,
  sections: [
    { id: 'kennenlernen', ic: '🌱', jump: 'Kennenlernen', h: 'Fragen zum Kennenlernen', fact: "In Deutschland leben rund 3.700 Schmetterlingsarten – davon sind nur etwa 190 Tagfalter. Die meisten Falter fliegen nachts, und kaum jemand kennt sie. Bei Menschen lohnt sich das genaue Hinsehen auch.", intro: 'Leicht und neugierig – ideal für die ersten Dates.', qs: QS.kennenlernen },
    { id: 'tiefgruendig', ic: '🌙', jump: 'Tiefgründig', h: 'Tiefgründige Fragen', intro: 'Für ruhige Abende. Nehmt euch Zeit, und überspringen ist immer erlaubt.', qs: QS.tief },
    { id: 'lustig', ic: '😄', jump: 'Lustig', h: 'Lustige Fragen', qs: QS.lustig },
    { id: 'lange-zusammen', ic: '🗺️', jump: 'Lange zusammen', h: 'Für Paare, die schon lange zusammen sind', fact: "Manche Falter kehren über Generationen an dieselben Orte zurück. Der Admiral etwa zieht im Herbst nach Süden, seine Nachkommen kommen im Frühling wieder.", intro: 'Auch nach Jahren gibt es Neues zu entdecken.', qs: QS.lange },
    { id: 'zukunft', ic: '✨', jump: 'Zukunft', h: 'Fragen über eure Zukunft', qs: QS.zukunft },
    { id: 'wer-wuerde-eher', ic: '🎲', jump: 'Wer würde eher', h: 'Wer von uns würde eher …', intro: 'Beide zeigen gleichzeitig auf sich oder den anderen – und dann wird diskutiert.', qs: QS.eher },
    { id: 'so-gehts', ic: '💡', h: 'So wird daraus ein schöner Abend', steps: [
      '<b>Handys weg</b> – oder nur eins, für die Zufallsfrage oben.', '<b>Abwechselnd fragen</b>, und beide antworten.',
      '<b>Nachfragen statt bewerten.</b> „Wie meinst du das?“ bringt mehr als jeder Kommentar.', '<b>Nichts erzwingen.</b> Wer eine Frage nicht beantworten mag, überspringt sie.',
    ] },
    { id: 'naechster-abend', ic: '🃏', jump: 'Für den nächsten Abend', h: 'Für den nächsten Abend', ideas: [
      { t: 'Fragekarten zum Anfassen', price: U25, p: 'Eine Box mit Karten für den Tisch – schön für Abende, an denen das Handy ganz wegbleiben soll.', q: 'Fragekarten für Paare' },
      { t: 'Paar-Buch zum Ausfüllen', price: U25, p: 'Ihr beantwortet Fragen schriftlich und habt am Ende ein Buch über euch.', q: 'Buch zum Ausfüllen für Paare' },
      { t: 'Spiele zu zweit', p: 'Zwei Wahrheiten und eine Lüge, Satz für Satz, Schmetterlinge fangen: In der App spielt ihr an einem Handy oder auf zwei. Kostenlos.', app: 'Jetzt spielen' },
    ] },
  ],
  app: { h: 'Wie gut kennst du deinen Schatz?', p: 'In <b>Schmetterlingsfutter</b> spielt ihr zu zweit, stellt euch Fragen und schickt euch kleine Botschaften. Wer verliert, schuldet einen kleinen Liebesdienst. Kostenlos.', btn: 'App kostenlos öffnen' },
  faq: [
    ['Welche Fragen eignen sich für das erste Date?', 'Leichte, offene Fragen: Hobbys, Lieblingsorte, Kindheitserinnerungen. Tiefe Fragen lieber erst, wenn ihr euch wohlfühlt.'],
    ['Was sind die 36 Fragen zum Verlieben?', 'Ein Fragenkatalog aus einer Studie des Psychologen Arthur Aron von 1997: Zwei Menschen stellen sich abwechselnd immer persönlichere Fragen und fühlen sich danach deutlich verbundener. Unsere Listen funktionieren nach demselben Prinzip – von leicht zu tief.'],
    ['Wie oft sollten Paare solche Gespräche führen?', 'Es gibt kein Muss. Manche Paare machen einen festen Abend pro Woche oder Monat daraus – schon eine Frage beim Abendessen wirkt.'],
    ['Was, wenn eine Frage unangenehm wird?', 'Dann einfach überspringen. Es geht nicht um richtige Antworten, sondern darum, sich besser zu verstehen. Später kann man immer noch darauf zurückkommen.'],
  ],
  script: `(function(){var Q=${JSON.stringify(ALLQ)};var f=document.getElementById('frage'),b=document.getElementById('next'),w=document.getElementById('wa'),i=0,last=-1;
function set(k){f.textContent=Q[k];w.href='https://wa.me/?text='+encodeURIComponent(Q[k]+' 🦋 Mehr Fragen: https://schmetterlingsfutter.de/fragen-fuer-paare/');}
function next(){var k;do{k=Math.floor(Math.random()*Q.length)}while(k===last&&Q.length>1);last=k;set(k);}
b.addEventListener('click',next);next();})();`,
};

const C = 'https://thumb.wikimedia.org/wikipedia/commons/thumb/';
const ARTEN = [
  { id: 'kohlweissling', name: 'Kleiner Kohlweißling', lat: 'Pieris rapae', img: C + '3/3c/Pieris.rapae.6834.jpg/960px-Pieris.rapae.6834.jpg', w: 640, h: 640, by: 'Olaf Leillinger', lic: 'CC BY-SA 3.0', file: 'Pieris.rapae.6834.jpg',
    erk: 'Weiß, Vorderflügelspitzen grau, ein bis zwei dunkle Punkte.', flug: 'Etwa März bis Oktober, in mehreren Generationen.', futter: 'Kohl und andere Kreuzblütler, auch Kapuzinerkresse.',
    fakt: 'Einer der häufigsten Tagfalter in Gärten – und oft der erste, den Kinder „Schmetterling“ nennen.' },
  { id: 'zitronenfalter', name: 'Zitronenfalter', lat: 'Gonepteryx rhamni', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Zitronenfalter_auf_Sommerflieder.jpg', w: 640, h: 535, by: 'Arieswings', lic: 'CC BY-SA 4.0', file: 'Zitronenfalter_auf_Sommerflieder.jpg',
    erk: 'Männchen leuchtend zitronengelb, Weibchen blass grünlich-weiß; Flügel mit kleiner Spitze und einem orangen Punkt.', flug: 'Ab Juli; nach dem Winter schon ab Februar oder März bis in den Frühsommer.', futter: 'Faulbaum und Kreuzdorn.',
    fakt: 'Sitzt fast immer mit zugeklappten Flügeln, überwintert ungeschützt im Freien und wird rund ein Jahr alt – so alt wie kaum ein anderer Falter bei uns.' },
  { id: 'blaeuling', name: 'Hauhechel-Bläuling', lat: 'Polyommatus icarus', img: C + 'c/c7/Polyommatus_icarus_%28male%29_-_Niitv%C3%A4lja.jpg/960px-Polyommatus_icarus_%28male%29_-_Niitv%C3%A4lja.jpg', w: 640, h: 800, by: 'Ivar Leidus', lic: 'CC BY-SA 4.0', file: 'Polyommatus_icarus_(male)_-_Niitvälja.jpg',
    erk: 'Männchen oben himmelblau, Weibchen meist braun mit orangen Randflecken; Unterseite mit vielen kleinen Augenpunkten.', flug: 'Etwa Mai bis September.', futter: 'Hornklee, Hauhechel und andere Schmetterlingsblütler.',
    fakt: 'Die Raupen werden oft von Ameisen umsorgt: Sie geben eine süße Flüssigkeit ab, und die Ameisen halten dafür Feinde fern.' },
  { id: 'kleiner-fuchs', name: 'Kleiner Fuchs', lat: 'Aglais urticae', img: C + '3/35/Kleiner_Fuchs%2C_Aglais_urticae.JPG/960px-Kleiner_Fuchs%2C_Aglais_urticae.JPG', w: 640, h: 443, by: 'Böhringer Friedrich', lic: 'CC BY-SA 2.5', file: 'Kleiner_Fuchs,_Aglais_urticae.JPG',
    erk: 'Orange mit schwarzen und gelben Flecken am Vorderrand und einer Reihe blauer Randflecken.', flug: 'Vom zeitigen Frühjahr bis in den Herbst.', futter: 'Brennnessel.',
    fakt: 'Überwintert als fertiger Falter, gern in Schuppen, Kellern und auf Dachböden – darum gehört er zu den ersten Schmetterlingen im Jahr.' },
  { id: 'tagpfauenauge', name: 'Tagpfauenauge', lat: 'Aglais io', img: C + '4/48/Tagpfauenauge_Aglais_io.jpg/960px-Tagpfauenauge_Aglais_io.jpg', w: 640, h: 427, by: 'Morbakka', lic: 'CC BY-SA 4.0', file: 'Tagpfauenauge_Aglais_io.jpg',
    erk: 'Rotbraun mit vier großen, bunt schillernden Augenflecken; Unterseite fast schwarz.', flug: 'Im Frühling nach der Überwinterung und wieder ab Juli.', futter: 'Brennnessel – die schwarzen, bedornten Raupen leben in Gruppen.',
    fakt: 'Zugeklappt sieht er aus wie ein welkes Blatt. Klappt er die Flügel plötzlich auf, erschrecken Vögel vor den „Augen“.' },
  { id: 'admiral', name: 'Admiral', lat: 'Vanessa atalanta', img: C + '2/24/VanessaAtalanta_Closeup.jpg/960px-VanessaAtalanta_Closeup.jpg', w: 640, h: 427, by: 'Christian Fischer', lic: 'CC BY-SA 4.0', file: 'VanessaAtalanta_Closeup.jpg',
    erk: 'Samtschwarz mit leuchtend roter Binde und weißen Flecken an den Flügelspitzen.', flug: 'Etwa Mai bis Oktober, im Spätsommer gern an Fallobst.', futter: 'Brennnessel.',
    fakt: 'Ein Wanderfalter: Viele kommen im Frühjahr aus dem Süden zu uns, ihre Nachkommen ziehen im Herbst zurück. In milden Wintern bleiben inzwischen auch einige hier.' },
  { id: 'schwalbenschwanz', name: 'Schwalbenschwanz', lat: 'Papilio machaon', img: C + 'c/c4/Papilio_Machaon_imago_01.jpeg/960px-Papilio_Machaon_imago_01.jpeg', w: 640, h: 425, by: 'hamon jp', lic: 'CC BY-SA 3.0', file: 'Papilio_Machaon_imago_01.jpeg',
    erk: 'Groß, gelb mit schwarzer Zeichnung, blauem Band, rotem Augenfleck und „Schwänzchen“ an den Hinterflügeln.', flug: 'Etwa April bis August, in ein bis zwei Generationen.', futter: 'Doldenblütler wie Wilde Möhre, Dill und Fenchel.',
    fakt: 'Einer der größten Tagfalter Deutschlands und besonders geschützt. Bei Gefahr streckt die Raupe eine orange, streng riechende „Nackengabel“ aus.' },
  { id: 'distelfalter', name: 'Distelfalter', lat: 'Vanessa cardui', img: C + '9/9f/Distelfalter-JR-A40-613-2009-05-24.jpg/960px-Distelfalter-JR-A40-613-2009-05-24.jpg', w: 640, h: 428, by: 'Johannes Robalotoff', lic: 'CC BY-SA 3.0 de', file: 'Distelfalter-JR-A40-613-2009-05-24.jpg',
    erk: 'Orange-braun mit schwarzen Flecken; Vorderflügelspitzen schwarz mit weißen Punkten.', flug: 'Je nach Jahr ab Mai – in manchen Jahren in riesigen Mengen.', futter: 'Disteln, auch Brennnessel und Malven.',
    fakt: 'Wandert jedes Jahr aus Nordafrika bis weit in den Norden Europas und zurück – rund 12.000 Kilometer, verteilt auf mehrere Generationen.' },
];

const arten = {
  slug: 'schmetterlingsarten', ic: '🦋', crumb: 'Schmetterlingsarten in Deutschland', date: '2026-11-13', month: 'November 2026',
  title: 'Schmetterlingsarten in Deutschland: 8 Falter erkennen – mit Bildern | Schmetterlingsfutter',
  desc: 'Die bekanntesten Schmetterlingsarten in Deutschland mit Bildern: Tagpfauenauge, Zitronenfalter, Admiral, Kleiner Fuchs und mehr – woran du sie erkennst, wann sie fliegen und was ihre Raupen fressen.',
  h1: 'Schmetterlingsarten in Deutschland',
  ogTitle: '8 Schmetterlinge, die du in Deutschland kennen solltest',
  lead: 'Acht Falter, die du im Garten, im Park und auf der Wiese triffst: woran du sie erkennst, wann sie fliegen und was ihre Raupen fressen. Alle acht flattern auch durch unsere Paar-App.',
  sections: [
    { id: 'wie-viele', ic: '🔢', jump: 'Wie viele?', h: 'Wie viele Schmetterlingsarten gibt es?', intro: 'Weltweit sind rund <b>180.000 Schmetterlingsarten</b> beschrieben. In Deutschland leben etwa <b>3.700</b> – die allermeisten davon sind Nachtfalter. Tagfalter gibt es bei uns nur rund <b>190 Arten</b>. Die acht hier gehören zu denen, die du am ehesten zu sehen bekommst.' },
    { id: 'die-acht', ic: '🦋', jump: 'Die 8 Falter', h: '8 Falter erkennen', arten: ARTEN },
    { id: 'garten', ic: '🌼', jump: 'Im Garten', h: 'So kommen Schmetterlinge in euren Garten', steps: [
      '<b>Eine Brennnessel-Ecke stehen lassen.</b> Tagpfauenauge, Kleiner Fuchs und Admiral legen dort ihre Eier ab.',
      '<b>Heimische Blüten pflanzen</b> wie Dost, Thymian, Natternkopf oder Flockenblume – sie liefern Nektar vom Frühling bis in den Herbst.',
      '<b>Im Herbst nicht alles abschneiden.</b> In hohlen Stängeln und im Laub überwintern Eier, Raupen und Puppen.',
      '<b>Auf Gift verzichten.</b> Was Blattläuse trifft, trifft auch Raupen.',
      '<b>Fallobst liegen lassen.</b> Admiral und Co. naschen im Spätsommer gern daran.',
    ], fact: 'Schmetterlinge schmecken mit den Füßen: Landet ein Falter auf einer Blüte, weiß er sofort, ob sich das Naschen lohnt.' },
    { id: 'entdecken', ic: '🔍', jump: 'Entdecken', h: 'Zum Entdecken zu zweit', ideas: [
      { t: 'Saatgut für eine Schmetterlingswiese', price: U25, p: 'Ein Quadratmeter reicht schon. Säen, warten, gemeinsam zählen, wer zu Besuch kommt.', q: 'Saatgut Schmetterlingswiese heimisch' },
      { t: 'Bestimmungsbuch für Schmetterlinge', price: U25, p: 'Für Spaziergänge, bei denen ihr endlich wisst, wer da vorbeiflattert.', q: 'Schmetterlinge bestimmen Buch' },
      { t: 'Falter fangen – nur virtuell', p: 'In der App sammelt ihr die acht Arten bei der Falterjagd draußen und auf der Heide, ganz ohne Kescher.', app: 'Falterjagd starten' },
    ] },
  ],
  app: { h: 'Alle acht Falter fliegen auch in der App', p: 'In <b>Schmetterlingsfutter</b> fangt ihr sie zu zweit, füllt euer Schmetterlingsbuch und füttert euren eigenen Falter mit kleinen Liebesgesten. Kostenlos.', btn: 'App kostenlos öffnen' },
  faq: [
    ['Wie viele Schmetterlingsarten gibt es in Deutschland?', 'Etwa 3.700 Arten, davon nur rund 190 Tagfalter. Der große Rest sind Nachtfalter, die tagsüber gut versteckt ruhen.'],
    ['Welche Schmetterlinge sieht man im Frühjahr zuerst?', 'Zitronenfalter, Kleiner Fuchs und Tagpfauenauge. Sie überwintern als fertige Falter und fliegen schon an den ersten warmen Tagen, oft im Februar oder März.'],
    ['Woran erkennt man Tagfalter und Nachtfalter?', 'Ein guter Hinweis sind die Fühler: Tagfalter haben dünne Fühler mit einer kleinen Keule am Ende. Bei Nachtfaltern sind sie oft fadenförmig oder gefiedert.'],
    ['Darf man Schmetterlinge fangen?', 'Viele Arten stehen unter Naturschutz, zum Beispiel der Schwalbenschwanz. Am besten nur anschauen und fotografieren – und nicht anfassen, denn die Flügelschuppen gehen leicht ab.'],
    ['Wie alt werden Schmetterlinge?', 'Die meisten Falter leben nur wenige Wochen. Arten, die als Falter überwintern, werden deutlich älter – der Zitronenfalter rund ein Jahr.'],
  ],
};

const bauch = {
  slug: 'schmetterlinge-im-bauch', ic: '💓', crumb: 'Schmetterlinge im Bauch', date: '2026-11-13', month: 'November 2026',
  title: 'Schmetterlinge im Bauch: Was dahintersteckt – und wie das Gefühl bleibt | Schmetterlingsfutter',
  desc: 'Was bedeutet „Schmetterlinge im Bauch“, was passiert dabei im Körper und wie lange hält das Gefühl? Mit Tipps, wie ihr es zurückholt, und Sprüchen zum Verschicken.',
  h1: 'Schmetterlinge im Bauch',
  ogTitle: 'Schmetterlinge im Bauch: Was dahintersteckt',
  lead: 'Das Kribbeln, wenn eine Nachricht kommt. Das Flattern, wenn der andere lacht. Was dabei im Körper passiert – und wie ihr die Schmetterlinge auch nach Jahren noch füttert.',
  sections: [
    { id: 'koerper', ic: '🧪', jump: 'Im Körper', h: 'Was im Körper passiert', steps: [
      '<b>Alarm, aber ein schöner.</b> Bei Verliebtheit schüttet der Körper Stresshormone wie Adrenalin aus. Das Herz schlägt schneller, die Hände werden feucht.',
      '<b>Der Bauch fährt kurz herunter.</b> In Aufregung wird die Verdauung gebremst und das Blut anders verteilt. Genau das spüren wir als Flattern und Kribbeln.',
      '<b>Das Gehirn feiert.</b> Das Belohnungssystem schüttet Dopamin aus – darum denken Verliebte ständig an den anderen.',
      '<b>Der Bauch fühlt mit.</b> Der Darm hat ein eigenes, dichtes Nervengeflecht und reagiert stark auf Gefühle. Daher kommt auch das „Bauchgefühl“.',
    ] },
    { id: 'herkunft', ic: '🗣️', jump: 'Bedeutung', h: 'Was die Redewendung bedeutet', intro: '„Schmetterlinge im Bauch haben“ heißt: verliebt sein, aufgeregt und voller Vorfreude. Das Bild passt gut – das Kribbeln fühlt sich an wie unzählige kleine Flügel. Im Englischen gibt es fast dieselbe Redewendung: <i>to have butterflies in your stomach</i>. Dort meint sie aber oft einfach Lampenfieber, zum Beispiel vor einer Prüfung.' },
    { id: 'wie-lange', ic: '⏳', jump: 'Wie lange?', h: 'Wie lange halten die Schmetterlinge?', intro: 'Die stürmische Verliebtheit dauert meist einige Monate bis etwa zwei Jahre – Fachleute schätzen das unterschiedlich. Danach wird aus Aufregung Vertrautheit. Das ist kein Verlust: Nähe, Berührung und gemeinsame Zeit setzen das Bindungshormon Oxytocin frei. Die Schmetterlinge fliegen dann ruhiger, aber sie bleiben – wenn man sie füttert.', fact: 'Auch echte Falter brauchen Zeit: In der Puppe löst sich der Körper der Raupe weitgehend auf und wird ganz neu gebaut.' },
    { id: 'fuettern', ic: '🦋', jump: 'Zurückholen', h: 'So füttert ihr eure Schmetterlinge', steps: [
      '<b>Gemeinsam Neues erleben.</b> Studien zeigen: Wer zusammen Neues und Aufregendes unternimmt, fühlt sich danach verbundener. Ein neues Restaurant, ein Ausflug, ein Kurs.',
      '<b>Kleine Überraschungen.</b> Ein Zettel in der Jackentasche, eine Nachricht mitten am Tag.',
      '<b>Fragen stellen.</b> Auch nach Jahren gibt es Neues zu entdecken – unsere <a href="/fragen-fuer-paare/">70 Fragen für Paare</a> helfen dabei.',
      '<b>Berührung.</b> Umarmungen, Hand halten, Massage – das setzt Oxytocin frei.',
      '<b>Danke sagen.</b> Wer sich gesehen fühlt, verliebt sich immer wieder ein bisschen neu.',
      '<b>Zeit ohne Handy.</b> Eine Stunde am Abend nur für euch.',
    ] },
    { id: 'sprueche', ic: '💌', jump: 'Sprüche', h: 'Sprüche über Schmetterlinge im Bauch', spr: [
      'Seit du da bist, nehmen meine Schmetterlinge Flugstunden.', 'Du bist der Grund, warum in meinem Bauch immer Frühling ist.', 'Meine Schmetterlinge fliegen nur auf dich.',
      'Jedes Lächeln von dir ist Futter für meine Schmetterlinge.', 'Andere haben Hunger. Ich habe Schmetterlinge.', 'Jahre später – und die Schmetterlinge sind immer noch nicht ausgezogen.',
      'Wenn du mich ansiehst, hebt in meinem Bauch ein ganzer Schwarm ab.', 'Ich bin nicht nervös. Das sind nur die Schmetterlinge.',
    ] },
    { id: 'echte-falter', ic: '🌿', jump: 'Echte Falter', h: 'Und die echten Schmetterlinge?', intro: 'In Deutschland leben rund 3.700 Schmetterlingsarten. Woran du Tagpfauenauge, Zitronenfalter und Admiral erkennst, steht bei unseren <a href="/schmetterlingsarten/">Schmetterlingsarten mit Bildern</a>.', fact: 'Die Männchen des Kleinen Nachtpfauenauges können den Duft eines Weibchens noch aus mehreren Kilometern Entfernung wahrnehmen. Auch Falter wissen, wann es knistert.' },
    { id: 'verschenken', ic: '🎁', h: 'Schmetterlinge zum Verschenken', ideas: [
      { t: 'Kette mit Schmetterling', price: M, p: 'Ein kleiner Anhänger als Erinnerung an das Kribbeln vom Anfang.', q: 'Kette Schmetterling Silber' },
      { t: 'Eine Wiese für echte Falter', price: U25, p: 'Saatgut für eine Schmetterlingswiese – gemeinsam säen und zusehen, wer einzieht.', q: 'Saatgut Schmetterlingswiese heimisch' },
      { t: 'Liebesgedicht als Motiv', price: M, p: 'Goethe, Heine und Rilke, gestaltet im Schmetterlingsfutter-Shop.', href: 'https://schmetterlingsfutter-poesie.myspreadshop.de', label: 'Zum Poesie-Shop' },
    ] },
  ],
  app: { h: 'Futter für eure Schmetterlinge – jeden Tag', p: 'Genau dafür gibt es <b>Schmetterlingsfutter</b>: kleine Ideen, liebe Botschaften und Spiele zu zweit, damit das Kribbeln bleibt. Kostenlos.', btn: 'App kostenlos öffnen' },
  faq: [
    ['Was bedeutet „Schmetterlinge im Bauch“?', 'Die Redewendung beschreibt das Gefühl, frisch verliebt zu sein: aufgeregt, voller Vorfreude, mit einem Kribbeln im Bauch.'],
    ['Warum kribbelt es im Bauch, wenn man verliebt ist?', 'Der Körper schüttet Stresshormone wie Adrenalin aus. Die Verdauung wird kurz gebremst und das Blut anders verteilt – das spüren wir als Flattern.'],
    ['Wie heißt „Schmetterlinge im Bauch“ auf Englisch?', '„To have butterflies in your stomach“. Im Englischen meint man damit aber häufig auch Nervosität, etwa vor einem Auftritt.'],
    ['Kann man die Schmetterlinge zurückholen?', 'Ja, zumindest ein Stück weit: gemeinsame neue Erlebnisse, kleine Überraschungen, Berührung und echte Gespräche wecken das Kribbeln immer wieder.'],
    ['Sind Schmetterlinge im Bauch dasselbe wie Liebe?', 'Nicht ganz. Das Kribbeln gehört zur Verliebtheit am Anfang. Liebe ist das, was danach bleibt – ruhiger, tiefer und genauso schön.'],
  ],
};

export const PAGES = [geschenke, valentin, fragen, bauch, arten];
