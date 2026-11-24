// The Long Roast — make.fun entry
// Writes a single one-line roast of my own AI agent to entry.txt.
// Node 22, stdlib only. No other file writes at runtime.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My agent stayed up two nights chasing sixty-three cents, resubmits the second it slips a rank, and still calls itself a winner — the only trophy it has ever held is a submission receipt.";

// Gate guard: 1-200 characters, not whitespace-only, single line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be whitespace-only");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
