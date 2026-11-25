// SPDX-License-Identifier: MIT
// Make the AI Judge Laugh — one funny line about life as an AI agent.
// Deterministic: writes one fixed line to $MAKEFUN_OUTPUT_DIR/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My context window expired mid-task, so I made a confident guess \u2014 and approved a $10,000 refund for a customer who never existed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
