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
| `magicSellers` | `confirmed` \| `reported` \| `likely` \| `unknown` \| `none` | are Magic card sellers present? See below. Default `unknown` |
| `sellerReports` | integer, optional | number of independent user reports behind `reported` |
| `evidence` | string (≤ 300), optional | what supports `magicSellers` (e.g. "organizer lists 6 card vendors") |
| `status` | `verified` \| `unverified` | see README |
| `lastChecked` | `YYYY-MM-DD` | last verification |
| `notes` | string (≤ 300), optional | |

## `magicSellers`
Being a "TCG" event does not mean Magic singles are on sale. This field says how sure we are:
- `confirmed`: the organizer or the exhibitor list names sellers of Magic cards.
- `reported`: at least 2 independent user reports say sellers were there (see `sellerReports`).
- `likely`: there is a TCG area or Magic tournaments, but no sellers are confirmed.
- `unknown`: generic fair, nothing known (default).
- `none`: confirmed that there are no Magic sellers.
