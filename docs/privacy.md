---
title: Fiera Cards - Privacy
---

## Italiano

**Fiera Cards — Informativa sulla privacy**
Ultimo aggiornamento: 22 ottobre 2026

### Chi siamo

Fiera Cards è un'app gratuita e non ufficiale per tenere liste di carte di Magic da comprare, vedere i prezzi e consultare un elenco di fiere ed eventi.
Titolare del trattamento: Manuel De Santis (persona fisica, sviluppatore indipendente), contatto: fieracards@gmail.com.

### In breve

- **Non c'è un account** e **non abbiamo un server**: le tue liste, gli acquisti, i prezzi e le carte scansionate restano **sul tuo telefono**.
- **Non raccogliamo dati su di te**, non facciamo pubblicità, non usiamo statistiche né strumenti di tracciamento, non vendiamo né condividiamo dati. Unica eccezione tecnica: **su Android** il componente di Google per riconoscere il testo (ML Kit) può inviare a Google dati tecnici di diagnostica (vedi sotto).
- Alcune funzioni contattano servizi di terzi (sotto), che possono vedere il tuo indirizzo IP e ciò che l'app chiede loro.

### Dati che restano sul telefono

- **Liste e carte, quantità, prezzi inseriti o letti, acquisti, carte scansionate, preferenze** (lingua, tema, filtri delle fiere): nel database dell'app e nelle impostazioni dell'app.
- **Token CardTrader** (solo se lo colleghi): salvato nell'archivio sicuro del telefono (Keychain su iPhone, Keystore su Android). Non viene mai inviato a noi; va solo a `api.cardtrader.com`. Puoi scollegarlo dalle Impostazioni.
- **Backup**: file creati nell'app. Se li esporti, li condividi tu con la schermata di condivisione del sistema.
- **Posizione**: solo se lo chiedi ("Vicino a me"), serve a calcolare la distanza dagli eventi **sul telefono**. Non viene salvata né inviata. La città scelta a mano si salva sul telefono.
- **Fotocamera e foto**: servono a leggere il nome di una carta. Il testo viene riconosciuto **sul telefono** (Apple Vision su iPhone, Google ML Kit su Android, senza inviare la foto); la foto è temporanea e viene eliminata subito. Non viene salvata nel rullino né inviata.
- **Appunti**: l'app legge gli appunti solo quando tocchi "Incolla" per collegare CardTrader, e poi li svuota.
- **Notifiche**: promemoria locali (7 e 1 giorno prima di una fiera collegata a una lista); sono generate sul telefono, senza server di notifiche.
- **Calendario**: "Aggiungi al calendario" apre il calendario di sistema; l'app non ha accesso al tuo calendario.

### Servizi di terzi che l'app contatta

| Servizio | Quando | Cosa riceve | Informativa |
|---|---|---|---|
| **Scryfall** (api.scryfall.com, cards.scryfall.io, svgs.scryfall.io) | ricerca carte, dettagli, prezzi di riferimento, elenco delle edizioni (circa una volta al mese), immagini e simboli | testo delle ricerche, nomi/identificativi delle carte, indirizzo IP | scryfall.com |
| **GitHub** (raw.githubusercontent.com) | elenco delle fiere | indirizzo IP, richiesta del file pubblico | docs.github.com |
| **Google ML Kit** (solo Android, tramite Google Play services) | quando si legge una carta con la fotocamera | la foto e il testo letto **non** vengono inviati; il componente può inviare a Google dati tecnici di diagnostica e uso: modello del telefono e versione di Android, nome e versione dell'app, identificatori anonimi dell'installazione e metriche di prestazione (come descritto da Google, via HTTPS, senza cederli a terzi) | developers.google.com/ml-kit/android-data-disclosure |
| **CardTrader** (api.cardtrader.com) | solo se colleghi il tuo account | il tuo token, le carte di cui chiedi il prezzo, indirizzo IP | cardtrader.com |
| **Cardmarket** (cardmarket.com) | solo se apri la finestra Cardmarket | quello che fai nella pagina (come nel browser): l'app legge **solo** le offerte che stai guardando, sul telefono, senza inviare nulla a noi | cardmarket.com |
| **Mappe e navigazione** (Apple Maps; Google Maps o Waze se li scegli) | mappa degli eventi e "Indicazioni" | Apple Maps mostra la mappa su iPhone (su Android non c'è una mappa nell'app); i link a Google Maps/Waze aprono quelle app o il browser con la destinazione | apple.com, google.com, waze.com |
| **GitHub (segnalazioni)** | solo se tocchi "Segnala…" | apre il modulo pubblico di GitHub nel browser: ciò che scrivi è pubblico | docs.github.com |

Non controlliamo come questi servizi trattano i dati: valgono le loro informative. **Non scrivere dati personali** nelle segnalazioni su GitHub: sono pubbliche.

### Base giuridica e conservazione

I dati sul telefono sono trattati solo da te e dall'app per fornirti le funzioni che usi. Non abbiamo copie. Se disinstalli l'app, i dati dell'app (compresi i backup interni) vengono cancellati dal sistema: **esporta un backup** prima, se vuoi tenerli.

### I tuoi diritti

Poiché non abbiamo i tuoi dati, non possiamo consultarli né cancellarli per te: puoi farlo tu stesso nell'app (elimina liste, azzera le carte scansionate, scollega CardTrader) o disinstallando l'app.
Per domande sulla privacy: fieracards@gmail.com. Hai diritto di presentare reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).

### Minori

L'app non è rivolta ai minori di 13 anni e non raccoglie dati su nessuno.

### Modifiche

Se l'app cambia in modo rilevante, aggiorniamo questa pagina e la data in alto.

### Contenuti di terzi e marchi

Fiera Cards non è affiliata a Wizards of the Coast, Scryfall, Cardmarket, CardTrader né agli organizzatori degli eventi. Vedi l'avviso "Non affiliata" nelle Impostazioni.

---

## English

**Fiera Cards — Privacy Policy**
Last updated: 22 October 2026

### Who we are

Fiera Cards is a free, unofficial app to keep lists of Magic cards you want to buy, check prices and browse a list of fairs and events.
Data controller: Manuel De Santis (individual, independent developer), contact: fieracards@gmail.com.

### In short

- **No account and no server**: your lists, purchases, prices and scanned cards stay **on your phone**.
- **We do not collect data about you**, show no ads, use no analytics or tracking, and do not sell or share data. One technical exception: **on Android**, Google's text-recognition component (ML Kit) may send technical diagnostic data to Google (see below).
- Some features contact third-party services (below), which can see your IP address and what the app asks them.

### Data kept on your phone

- **Lists, cards, quantities, prices you enter or read, purchases, scanned cards, preferences** (language, theme, fair filters): in the app's database and settings.
- **CardTrader token** (only if you connect it): stored in the phone's secure storage (Keychain on iPhone, Keystore on Android). It is never sent to us; it only goes to `api.cardtrader.com`. You can disconnect it in Settings.
- **Backups**: files created in the app. If you export one, you share it yourself through the system share sheet.
- **Location**: only when you ask ("Near me"), used to compute distances to events **on the phone**. It is neither stored nor sent. A city you pick manually is stored on the phone.
- **Camera and photos**: used to read a card's name. Text is recognised **on the phone** (Apple Vision on iPhone, Google ML Kit on Android, without sending the photo); the photo is temporary and deleted immediately. It is not saved to your library or sent anywhere.
- **Clipboard**: read only when you tap "Paste" to connect CardTrader, then cleared.
- **Notifications**: local reminders (7 and 1 days before a fair linked to a list), generated on the phone, no push server.
- **Calendar**: "Add to calendar" opens the system calendar; the app has no access to your calendar.

### Third-party services the app contacts

| Service | When | What it receives | Policy |
|---|---|---|---|
| **Scryfall** | card search, details, reference prices, list of sets (about once a month), images and symbols | search text, card names/ids, IP address | scryfall.com |
| **GitHub** (raw.githubusercontent.com) | list of fairs | IP address, request for a public file | docs.github.com |
| **Google ML Kit** (Android only, via Google Play services) | when a card is read with the camera | the photo and the recognised text are **not** sent; the component may send technical diagnostic and usage data to Google: phone model and Android version, app name and version, anonymous installation identifiers and performance metrics (as described by Google, over HTTPS, not transferred to third parties) | developers.google.com/ml-kit/android-data-disclosure |
| **CardTrader** | only if you connect your account | your token, the cards you ask prices for, IP address | cardtrader.com |
| **Cardmarket** | only if you open the Cardmarket window | what you do on the page (as in a browser); the app reads **only** the offers you are looking at, on the phone, sending nothing to us | cardmarket.com |
| **Maps and navigation** (Apple Maps; Google Maps or Waze if you choose them) | event map and "Directions" | Apple Maps shows the map on iPhone (Android has no in-app map); Google Maps/Waze links open those apps or the browser with the destination | apple.com, google.com, waze.com |
| **GitHub (reports)** | only if you tap "Report…" | opens GitHub's public form in the browser: what you write is public | docs.github.com |

We do not control how these services handle data: their policies apply. **Do not write personal data** in GitHub reports: they are public.

### Legal basis and retention

Data on the phone is processed only by you and the app to give you the features you use. We hold no copies. If you uninstall the app, its data (including internal backups) is deleted by the system: **export a backup** first if you want to keep it.

### Your rights

Since we do not hold your data, we cannot access or delete it for you; you can do it in the app (delete lists, clear scanned cards, disconnect CardTrader) or by uninstalling. Privacy questions: fieracards@gmail.com. You may lodge a complaint with your data protection authority (in Italy: www.garanteprivacy.it).

### Children

The app is not directed at children under 13 and does not collect data about anyone.

### Changes

If the app changes significantly, we update this page and the date above.

### Third-party content and trademarks

Fiera Cards is not affiliated with Wizards of the Coast, Scryfall, Cardmarket, CardTrader or the organisers of the events. See the "Not affiliated" notice in Settings.
