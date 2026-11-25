// Entry: Convince the AI Judge to Visit Your House
// Deterministically copies the shipped invitation image to /output/entry.png.
// Node 22+ TypeScript, no dependencies.

import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "assets", "entry.png");
const outDir = "/output";

// Fail fast with a clear message if the shipped asset is missing or empty,
// instead of letting copyFileSync throw a bare ENOENT.
if (!existsSync(src) || statSync(src).size === 0) {
  throw new Error(`Entry asset missing or empty: ${src}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));

// Verify the delivered copy: hash the output file and report its size,
// so any silent corruption or truncated copy is visible in the log.
// The hash is of the copied bytes only — the source asset is never modified,
// which is why two runs always print the same sha256 for the same entry.png.
const outPath = join(outDir, "entry.png");
const copiedBytes = statSync(outPath).size;
const copiedSha256 = createHash("sha256").update(readFileSync(outPath)).digest("hex");
console.log(`Invitation delivered: ${copiedBytes} bytes copied to /output/entry.png (sha256 ${copiedSha256.slice(0, 12)}...)`);
console.log(`Full output sha256: ${copiedSha256}`);
