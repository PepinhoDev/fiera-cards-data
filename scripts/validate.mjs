// Controlla i file in events/. Uso: node scripts/validate.mjs
import { readdirSync, readFileSync } from "node:fs";

const TYPES = ["convention", "fair", "market", "tournament"];
const TCG = ["core", "area", "unknown"];
const STATUS = ["verified", "unverified"];
const PRECISION = ["venue", "city"];
const isDate = (s) => /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s));
const isHttps = (s) => typeof s === "string" && /^https:\/\/[^\s<>"']+$/.test(s);
// niente caratteri di controllo né parentesi angolari (i testi non devono contenere markup)
const isText = (s, max) => typeof s === "string" && s.trim() !== "" && s.length <= max && !/[\u0000-\u001f<>]/.test(s);

let errors = 0;
const fail = (file, id, msg) => {
  errors++;
  console.error(`${file} [${id ?? "?"}]: ${msg}`);
};

for (const file of readdirSync("events").filter((f) => f.endsWith(".json"))) {
  const data = JSON.parse(readFileSync(`events/${file}`, "utf8"));
  const ids = new Set();
  if (data.schemaVersion !== 1) fail(file, null, "schemaVersion deve essere 1");
  for (const e of data.events ?? []) {
    const f = (m) => fail(file, e.id, m);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(e.id ?? "")) f("id non valido");
    if (ids.has(e.id)) f("id duplicato");
    ids.add(e.id);
    if (!isText(e.name, 100)) f("name non valido");
    if (!TYPES.includes(e.type)) f("type non valido");
    if (!TCG.includes(e.tcg)) f("tcg non valido");
    if (!isDate(e.startDate) || !isDate(e.endDate) || e.endDate < e.startDate) f("date non valide");
    for (const k of ["city", "region", "venue"]) if (!isText(e[k], 100)) f(`${k} non valido`);
    if (!/^[A-Z]{2}$/.test(e.country ?? "")) f("country non valido");
    if (!(e.lat >= -90 && e.lat <= 90 && e.lon >= -180 && e.lon <= 180)) f("coordinate non valide");
    if (!PRECISION.includes(e.geoPrecision)) f("geoPrecision non valido");
    if (!isHttps(e.url)) f("url deve essere https");
    if (!Array.isArray(e.sources) || e.sources.length === 0 || !e.sources.every(isHttps)) f("sources non valide");
    if (!STATUS.includes(e.status)) f("status non valido");
    if (!isDate(e.lastChecked)) f("lastChecked non valido");
    if (e.notes !== undefined && !isText(e.notes, 300)) f("notes non valido");
  }
}
if (errors) process.exit(1);
console.log("OK");
