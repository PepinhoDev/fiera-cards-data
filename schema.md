# Event fields

| Field | Type | Notes |
|---|---|---|
| `id` | string | lowercase, digits and `-`, e.g. `lucca-comics-games-2026` (unique) |
| `name` | string (≤ 100) | event name |
| `type` | `convention` \| `fair` \| `market` \| `tournament` | |
| `tcg` | `core` \| `area` \| `unknown` | relevance for cards: card-focused event / has a card area / unknown |
| `startDate`, `endDate` | `YYYY-MM-DD` | `endDate` ≥ `startDate` |
| `city`, `region`, `country` | strings | `country` = 2-letter ISO code |
| `venue` | string | venue (e.g. exhibition centre) |
| `lat`, `lon` | numbers | coordinates of the venue |
| `geoPrecision` | `venue` \| `city` | `city` = approximate coordinates (city centre) |
| `url` | `https://…` | official event website |
| `sources` | list of `https://…` | where the data was found |
| `status` | `verified` \| `unverified` | see README |
| `lastChecked` | `YYYY-MM-DD` | last verification |
| `notes` | string (≤ 300), optional | |
