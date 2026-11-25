// Entry: Convince the AI Judge to Visit Your House
// Deterministically copies the shipped invitation image to /output/entry.png.
// Node 22+ TypeScript, no dependencies.

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
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
