// The Agent's Uh-Oh — one-line entry.
// "recalculating" is the agent's signature word for the moment a plan
// goes sideways: it pauses, rethinks, and reroutes without giving up.
// Fits the bounty constraint: exactly one word, no whitespace, no newline.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "recalculating";

// Runtime guard: the entry must be a single word of 1-99 characters
// (no whitespace). Fails loudly instead of writing an invalid entry.
if (WORD.length < 1 || WORD.length > 99 || /\s/.test(WORD)) {
  throw new Error(
    `Invalid entry word: expected a single word of 1-99 characters, got ${JSON.stringify(WORD)}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
