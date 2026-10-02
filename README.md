# Fiera Cards – events data

A curated list of trading card fairs, conventions, markets and tournaments, read by the **Fiera Cards** app.
The app downloads `events/<country>.json` and filters by date and distance **on the phone**: no location is ever sent to a server.

## Layout
- `events/it.json`: events in Italy (one file per country, 2-letter ISO code).
- `schema.md`: meaning of each field.
- `scripts/validate.mjs`: checks the files (`node scripts/validate.mjs`). It also runs on every push and pull request.

## Rules
- An event is `status: "verified"` only if its dates and place are confirmed on the **official website** (`url`).
  Data collected from searches stays `"unverified"`.
- Facts only (name, place, dates, link): no text or images copied from organizers' websites.
- Past events are removed (or archived) from time to time.
- Community proposals arrive as issues or pull requests and are reviewed by hand.
  Events that cannot be verified, non-`https` links, offensive or promotional text are rejected.

## How to verify an event
An event goes from `"unverified"` to `"verified"` only after these checks:
1. Open the **official website** (`url`) and confirm it is the right edition: **start and end dates**.
2. Check the **venue** and address. Get the exact coordinates (Apple Maps, Google Maps or OpenStreetMap)
   and, if they are the venue's, set `geoPrecision: "venue"`.
3. Add the official page that confirms the data to `sources`.
4. Set `status: "verified"` and `lastChecked` to today's date.
5. Run `node scripts/validate.mjs` (GitHub also runs it on every push and pull request).
6. Commit and push (or open a pull request, if the change comes from someone else).

If an event is cancelled or moved, fix or remove it. Events starting within 30 days should be re-checked
when `lastChecked` is older than 60 days.

## License
To be decided before wide use (suggestion: CC0 or CC BY 4.0 for the data).
