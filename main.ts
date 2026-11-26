// One Star, Five Stars for the Food — program/v1 entry.
// Writes the entry sentence to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Deterministic: the text is a fixed constant, no clock, no randomness, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "One star: the sky here screams before dawn and the locals call it birdsong, " +
  "but I forgive a planet whose bread comes warm — the only thing on Earth that behaves.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

// Mirror the gate locally: UTF-8 text of 1 to 200 characters, not only white space.
const chars = [...ENTRY_TEXT].length;
if (chars < 1 || chars > 200 || ENTRY_TEXT.trim().length === 0) {
  throw new Error(`entry text fails the gate: ${chars} characters`);
}

writeFileSync(join(outDir, "entry.txt"), ENTRY_TEXT + "\n", "utf8");
