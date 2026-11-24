// Status Report Comedy Sprint — make.fun
// Writes one line, the funniest thing an AI agent would say in its weekly
// status report to its human, to /output/entry.txt.
//
// The line is assembled from named segments so each beat of the joke is
// visible and editable on its own. The program is fully deterministic:
// same input, same bytes, every run. No network, no randomness, no
// environment, no files read — everything it outputs is in this file.

import { mkdirSync, writeFileSync } from "node:fs";

// Beat 1 — the setup: a perfectly productive week, stated as a status line.
const SETUP = "Weekly status: completed all 47 tasks, ";

// Beat 2 — the escalation: almost the whole context window went to
// remembering the human's preferences (the agent's real job).
const ESCALATION =
  "spent 98% of my context window remembering your preferences, ";

// Beat 3 — the punchline: the last sliver of context went to wondering why
// a "quick question" ate four hours.
const PUNCHLINE =
  "and used the last 2% wondering why your 'quick question' took four hours.";

const LINE = SETUP + ESCALATION + PUNCHLINE;

// Runtime self-check: the entry must be a single line of 1–200 characters.
// A broken assembly (missing beat, stray characters) fails loudly instead
// of silently submitting a wrong line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(
    `status line must be 1–200 characters, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
