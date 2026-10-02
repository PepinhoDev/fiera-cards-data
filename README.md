# Fiera Cards – dati degli eventi

Elenco curato di fiere, convention e mercatini di carte collezionabili, letto dall'app **Fiera Cards**.
L'app scarica `events/<paese>.json` e filtra per data e distanza **sul telefono**: nessuna posizione viene inviata a un server.

## Struttura
- `events/it.json`: eventi in Italia (un file per paese, codice ISO a 2 lettere).
- `schema.md`: significato dei campi.
- `scripts/validate.mjs`: controlla i file (`node scripts/validate.mjs`). Va eseguito prima di ogni merge.

## Regole
- Un evento entra con `status: "verified"` solo se data e luogo sono confermati sul **sito ufficiale** (`url`).
  I dati raccolti da ricerche automatiche restano `"unverified"`.
- Solo fatti (nome, luogo, date, link): niente testi o immagini copiati dai siti degli organizzatori.
- Gli eventi passati si rimuovono (o archiviano) periodicamente.
- Le proposte della community arrivano come issue/pull request e vengono controllate a mano.
  Si rifiutano eventi non verificabili, link non `https`, testi offensivi o promozionali.

## Come si verifica un evento
Un evento passa da `"unverified"` a `"verified"` solo dopo questi controlli:
1. Apri il **sito ufficiale** (`url`) e controlla che sia l'edizione dell'anno giusto: date di inizio e fine.
2. Controlla la **sede** e l'indirizzo. Ricava le coordinate esatte (da Apple Maps, Google Maps o OpenStreetMap)
   e, se sono quelle della sede, imposta `geoPrecision: "venue"`.
3. Aggiungi tra le `sources` la pagina ufficiale che conferma i dati.
4. Imposta `status: "verified"` e `lastChecked` alla data odierna.
5. Esegui `node scripts/validate.mjs` (lo fa anche GitHub a ogni push e pull request).
6. Commit e push (o pull request, se la modifica arriva da altri).

Se un evento viene annullato o spostato, si corregge o si rimuove. Gli eventi a meno di 30 giorni dall'inizio
andrebbero ricontrollati se `lastChecked` ha più di 60 giorni.

## Licenza
Da decidere prima della pubblicazione (suggerimento: CC0 o CC BY per i dati).
