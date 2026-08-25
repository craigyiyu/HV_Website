#!/usr/bin/env node
/**
 * Export content: extract the I18N dictionary from script.js into content/*.json
 * files (one per section, en/zh nested) so Pages CMS can edit them.
 *
 * Usage: node tools/export-content.js
 * Run from the repository root. Regenerates the content/ folder.
 */
"use strict";

const fs = require("fs");
const path = require("path");

// ---- read I18N literal from script.js (balanced-brace extraction) ----
const js = fs.readFileSync(path.join(__dirname, "..", "script.js"), "utf8");
const start = js.indexOf("var I18N = {");
if (start === -1) throw new Error("I18N not found in script.js");
let depth = 0, i = js.indexOf("{", start);
for (; i < js.length; i++) {
  const c = js[i];
  if (c === "{") depth++;
  else if (c === "}") { depth--; if (depth === 0) break; }
}
const literal = js.slice(start + "var I18N = ".length, i + 1);
const I18N = eval("(" + literal + ")");

// ---- section definitions: which flat keys go to which file, and the flatten prefix ----
const SECTIONS = [
  { name: "site",       prefix: "",        keys: ["title", "meta.desc", "lang.toggle", "nav.services", "nav.industries", "nav.cases", "nav.about", "nav.contact", "nav.cta", "typing.words"] },
  { name: "hero",       prefix: "hero." },
  { name: "services",   prefix: "services." },
  { name: "industries", prefix: "industries." },
  { name: "cases",      prefix: "cases." },
  { name: "about",      prefix: "about." },
  { name: "contact",    prefix: "contact." },
  { name: "footer",     prefix: "footer." },
];

// helper: build nested object from a flat key ("services.mode1.detail" -> {services:{mode1:{detail}}})
function nest(key, value) {
  const parts = key.split(".");
  let node = {};
  let cur = node;
  for (let p = 0; p < parts.length - 1; p++) {
    cur[parts[p]] = {};
    cur = cur[parts[p]];
  }
  cur[parts[parts.length - 1]] = value;
  return node;
}

// merge nested object b into a (mutates)
function merge(a, b) {
  for (const k of Object.keys(b)) {
    if (b[k] && typeof b[k] === "object" && !Array.isArray(b[k])) {
      if (!a[k] || typeof a[k] !== "object") a[k] = {};
      merge(a[k], b[k]);
    } else {
      a[k] = b[k];
    }
  }
  return a;
}

// build per-section, per-language nested objects
const outDir = path.join(__dirname, "..", "content");
fs.mkdirSync(outDir, { recursive: true });

const leftovers = [];
for (const sec of SECTIONS) {
  const doc = {};
  for (const lang of ["en", "zh"]) {
    const dict = I18N[lang];
    let root = {};
    const keys = sec.keys || Object.keys(dict).filter((k) => k.startsWith(sec.prefix) && k !== sec.prefix.replace(/\.$/, ""));
    for (const key of keys) {
      if (dict[key] === undefined) continue;
      if (sec.prefix === "") {
        merge(root, nest(key, dict[key]));
      } else {
        const rest = key.slice(sec.prefix.length);
        merge(root, nest(rest, dict[key]));
      }
    }
    doc[lang] = root;
  }
  fs.writeFileSync(path.join(outDir, sec.name + ".json"), JSON.stringify(doc, null, 2) + "\n");
  console.log("wrote content/" + sec.name + ".json");
}

// sanity: any keys not covered by a section?
const covered = new Set();
for (const sec of SECTIONS) {
  for (const lang of ["en", "zh"]) {
    for (const k of Object.keys(I18N[lang])) {
      if (sec.prefix === "" ? (sec.keys || []).includes(k) : k.startsWith(sec.prefix)) covered.add(k);
    }
  }
}
for (const lang of ["en", "zh"]) {
  for (const k of Object.keys(I18N[lang])) {
    if (!covered.has(k) && k !== "typing.words") leftovers.push(lang + ":" + k);
  }
}
console.log(leftovers.length ? "uncovered keys: " + leftovers.join(", ") : "all keys covered (typing.words intentionally stays in script.js)");
