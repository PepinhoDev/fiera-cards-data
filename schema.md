# Campi di un evento

| Campo | Tipo | Note |
|---|---|---|
| `id` | stringa | minuscolo, cifre e `-`, es. `lucca-comics-games-2026` (unico) |
| `name` | stringa (≤ 100) | nome dell'evento |
| `type` | `convention` \| `fair` \| `market` \| `tournament` | |
| `tcg` | `core` \| `area` \| `unknown` | quanto è rilevante per le carte: evento dedicato / con area carte / non noto |
| `startDate`, `endDate` | `AAAA-MM-GG` | `endDate` ≥ `startDate` |
| `city`, `region`, `country` | stringhe | `country` = codice ISO a 2 lettere |
| `venue` | stringa | sede (es. quartiere fieristico) |
| `lat`, `lon` | numeri | coordinate della sede |
| `geoPrecision` | `venue` \| `city` | `city` = coordinate approssimate al centro città |
| `url` | `https://…` | sito ufficiale dell'evento |
| `sources` | lista di `https://…` | dove sono stati trovati i dati |
| `status` | `verified` \| `unverified` | vedi README |
| `lastChecked` | `AAAA-MM-GG` | ultima verifica |
| `notes` | stringa (≤ 300), opzionale | |
