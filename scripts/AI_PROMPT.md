# Prompt for finding events with an AI assistant

Paste everything inside the block below into an AI chat (Gemini, ChatGPT, Claude…). The output is **a list of candidates to check by hand**:
nothing from an AI goes into `events/` until a person has verified it on the official website (see "How to verify an event" in the README).
Before using it, update the list of ids to skip and the date range.

Tips: run it in several rounds (one macro-area at a time: North, Centre, South and Islands); keep the AI's output as is and bring it for review;
do not ask the same AI to "verify" its own results.

```text
Role: you are helping build a public list of fairs and events in Italy where trading card games (TCG) are present, with a focus on Magic: The Gathering. The list will be checked by a person afterwards, so I want COMPLETENESS of candidates AND HONESTY about what is uncertain. Never invent facts.

GOAL
Find events in ITALY starting between 1 November 2026 and 31 December 2027 that are:
- comic, game or collectibles fairs/conventions with a card area or card sellers;
- fairs or markets specialised in collectible cards;
- organised Magic events and tournaments (including Pauper, Commander, Draft, prereleases, regional championships);
- small and regional events too, not only the famous ones.
Include candidates even when you are NOT sure about the dates or the card presence: mark them as unverified (see below). I will verify them myself.

ALREADY PRESENT (skip them): romics-autunno-2026, lucca-comics-games-2026, milan-games-week-cartoomics-2026, nerd-show-bologna-2027-01.

RULES
1. Prefer the OFFICIAL website of the organiser for dates, place and link. If you only find the data on third-party sites (aggregators, news, social media), include the event anyway with "status": "unverified" and list those pages in "sources".
2. Do NOT invent dates, places, exhibitor names or coordinates. If a date is only approximate or unknown, do not put it in block A: put the event in block C.
3. "magicSellers" (are Magic card sellers present?):
   - "confirmed" ONLY if the official page or exhibitor list NAMES sellers of Magic cards; write what you found and where in "evidence" (max 300 characters);
   - "likely" if there is a TCG area or Magic tournaments but sellers are not named;
   - "unknown" if it is a generic fair and you know nothing more;
   - "none" only if it is stated that there are no Magic sellers;
   - never use "reported".
4. "lat"/"lon" are the coordinates of the venue. If you do not know the exact venue, use the city centre and set "geoPrecision": "city". Use "venue" only if you are sure.
5. Do not copy descriptions, texts, photos or logos from websites: facts only (name, dates, place, link). Write "notes" in your own words, in English, short.
6. For recurring events, include only the next edition with a certain or announced date; do not invent future editions.
7. "id" is unique, lowercase, letters, digits and hyphens only, e.g. "event-name-2027".
8. All links must be https.

OUTPUT: give me THREE blocks.

BLOCK A: a JSON array (nothing else inside the block) of events with confirmed or announced dates, each exactly in this format:
{
  "id": "event-name-2027",
  "name": "Event name (max 100 characters)",
  "type": "convention" | "fair" | "market" | "tournament",
  "tcg": "core" (card-focused event) | "area" (has a card area) | "unknown",
  "startDate": "YYYY-MM-DD",
  "endDate": "YYYY-MM-DD",
  "city": "...", "region": "...", "country": "IT",
  "venue": "venue name",
  "lat": 0.0, "lon": 0.0,
  "geoPrecision": "venue" | "city",
  "url": "https://official-website-of-the-event",
  "sources": ["https://...", "https://..."],
  "magicSellers": "confirmed" | "likely" | "unknown" | "none",
  "evidence": "only if needed: what supports magicSellers (max 300 characters)",
  "status": "verified" (dates confirmed on the official website) | "unverified",
  "lastChecked": "YYYY-MM-DD (today)",
  "notes": "optional, max 300 characters"
}

BLOCK B (in Italian): a short table "Da controllare a mano" with, for each event in block A, what you could NOT confirm (dates, venue, sellers) and why.

BLOCK C (in Italian): "Candidati senza date certe": a list of events or recurring events you found but could not put in block A (date missing, only the month, edition not announced yet, source doubtful). For each: name, city, what you know, the link where you found it, and what is missing.

At the end write how many events are in block A, how many are "verified", and how many candidates are in block C.
```

## After you get the answer
1. Save the output as it is; do not trust "verified" or "confirmed" until you have checked the official page.
2. For each event follow "How to verify an event" in the README, then move it into `events/it.json` and run `node scripts/validate.mjs`.
3. Events in block C go to the working registry (`sources/it.json`) or are checked again when the organiser announces the dates.
