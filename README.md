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

## Licenza
Da decidere prima della pubblicazione (suggerimento: CC0 o CC BY per i dati).
