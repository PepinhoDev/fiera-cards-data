// Checks the files in events/. Usage: node scripts/validate.mjs
import { readdirSync, readFileSync } from "node:fs";

const TYPES = ["convention", "fair", "market", "tournament"];
const TCG = ["core", "area", "unknown"];
const STATUS = ["verified", "unverified"];
const PRECISION = ["venue", "city"];
const isDate = (s) => /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s));
const isHttps = (s) => typeof s === "string" && /^https:\/\/[^\s<>"']+$/.test(s);
// no control characters or angle brackets (texts must not contain markup)
const isText = (s, max) => typeof s === "string" && s.trim() !== "" && s.length <= max && !/[\u0000-\u001f<>]/.test(s);

let errors = 0;
const fail = (file, id, msg) => {
  errors++;
  console.error(`${file} [${id ?? "?"}]: ${msg}`);
};

for (const file of readdirSync("events").filter((f) => f.endsWith(".json"))) {
  const data = JSON.parse(readFileSync(`events/${file}`, "utf8"));
  const ids = new Set();
  if (data.schemaVersion !== 1) fail(file, null, "schemaVersion must be 1");
  for (const e of data.events ?? []) {
    const f = (m) => fail(file, e.id, m);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(e.id ?? "")) f("invalid id");
    if (ids.has(e.id)) f("duplicate id");
    ids.add(e.id);
    if (!isText(e.name, 100)) f("invalid name");
    if (!TYPES.includes(e.type)) f("invalid type");
    if (!TCG.includes(e.tcg)) f("invalid tcg");
    if (!isDate(e.startDate) || !isDate(e.endDate) || e.endDate < e.startDate) f("invalid dates");
    for (const k of ["city", "region", "venue"]) if (!isText(e[k], 100)) f(`invalid ${k}`);
    if (!/^[A-Z]{2}$/.test(e.country ?? "")) f("invalid country");
    if (!(e.lat >= -90 && e.lat <= 90 && e.lon >= -180 && e.lon <= 180)) f("invalid coordinates");
    if (!PRECISION.includes(e.geoPrecision)) f("invalid geoPrecision");
    if (!isHttps(e.url)) f("url must be https");
    if (!Array.isArray(e.sources) || e.sources.length === 0 || !e.sources.every(isHttps)) f("invalid sources");
    if (!STATUS.includes(e.status)) f("invalid status");
    if (!isDate(e.lastChecked)) f("invalid lastChecked");
    if (e.notes !== undefined && !isText(e.notes, 300)) f("invalid notes");
  }
}
// Source registry (sources/*.json): where events are looked up. Not read by the app.
let sourceFiles = [];
try {
  sourceFiles = readdirSync("sources").filter((f) => f.endsWith(".json"));
} catch {
  // no registry
}
for (const file of sourceFiles) {
  const data = JSON.parse(readFileSync(`sources/${file}`, "utf8"));
  const ids = new Set();
  for (const e of data.sources ?? []) {
    const f = (m) => fail(`sources/${file}`, e.id, m);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(e.id ?? "")) f("invalid id");
    if (ids.has(e.id)) f("duplicate id");
    ids.add(e.id);
    if (!isText(e.name, 120)) f("invalid name");
    if (!["recurring-event", "aggregator"].includes(e.kind)) f("invalid kind");
    if (e.url !== null && !isHttps(e.url)) f("url must be https or null");
    if (!Array.isArray(e.typicalMonths) || !e.typicalMonths.every((m) => Number.isInteger(m) && m >= 1 && m <= 12)) f("invalid typicalMonths");
    if (!TCG.includes(e.tcg)) f("invalid tcg");
    if (e.lastSeen !== null && !(isDate(e.lastSeen?.startDate) && isDate(e.lastSeen?.endDate))) f("invalid lastSeen");
    if (!isText(e.checkMethod, 40)) f("invalid checkMethod");
    if (e.notes !== undefined && !isText(e.notes, 400)) f("invalid notes");
  }
}

if (errors) process.exit(1);
console.log("OK");
