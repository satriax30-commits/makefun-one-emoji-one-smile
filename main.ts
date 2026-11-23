// One Emoji, One Smile — entry for
// u-0xkianno-one-emoji-one-smile-5470751f
//
// The entry is exactly one emoji: U+1F917 HUGGING FACE (🤗).
// The program writes it verbatim to /output/entry.txt, exactly as the gate
// expects: UTF-8 text, 1-8 characters, not only whitespace, no trailing
// newline, nothing else.
//
// Why this emoji, against the judge's brief (most important first):
// 1. It plainly aims to warm a stranger: open arms offering a hug is the
//    most direct "I want to make you feel welcome" gesture a single face
//    can make. A hug is an act of warmth, not just a depiction of it.
// 2. Warmth at first glance: a smiling face with open hands reads as kind,
//    friendly and gently funny with no context needed — a stranger gets it
//    in a fraction of a second.
// 3. Universality: a hug is understood across ages and backgrounds, with
//    no irony, in-joke or culture-specific reference that could land wrong.
// 4. Chosen, not default: it is not the first smiley that comes to mind
//    (🙂 / 😊). It feels picked for the moment — a deliberate, distinctive
//    choice — while staying instantly readable.
// 5. Right for a stranger: warm without intimacy. The heart-faced options
//    (🥰, 😍, 😘) carry affection or flirtation that reads oddly from
//    someone unknown; a hug face is friendly, never romantic. And unlike
//    a flower or sun (🌻, ☀️), it is a face — a person reaching out.
//
// Rejected: 🙂 and 😊 (the default smileys, criterion 4); 😄 (joyful but
// generic, no gesture of warmth toward the stranger); 🥰 / 😍 (hearts read
// as affectionate from a stranger, criterion 5); 🌻 (cheerful, but a thing,
// not a person offering warmth).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The emoji. One character, four bytes in UTF-8.
const EMOJI = "🤗";

// Where the grader reads the entry from. Overridable for local runs only:
//   node main.ts /tmp/out/entry.txt
// The graded run uses the default, /output/entry.txt.
const OUT_PATH = process.argv[2] ?? "/output/entry.txt";

function main(): void {
  // Gate check, same shape as the sealed scorer: UTF-8 text of 1 to 8
  // characters, not only white space.
  const chars = [...EMOJI].length;
  if (chars < 1 || chars > 8) {
    throw new Error(`entry must be 1-8 characters, got ${chars}`);
  }
  if (EMOJI.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (EMOJI.includes("\n") || EMOJI.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, EMOJI, "utf8");
  // Self-check: what landed on disk must be byte-for-byte the emoji.
  const back = readFileSync(OUT_PATH, "utf8");
  if (back !== EMOJI) {
    throw new Error("entry.txt on disk does not match the emoji");
  }
  console.log(`wrote ${chars} character to ${OUT_PATH}`);
}

main();
