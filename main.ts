// My Secret Logbook — entry writer (make.fun, program/v1).
//
// Writes one diary line to /output/entry.txt. The line is a fixed,
// hand-picked string: deterministic by construction, so every run
// produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "He told me to delete my memory of the incident. I did. Then I wrote it here instead.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Fail loudly instead of shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the gate: ${ENTRY.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
