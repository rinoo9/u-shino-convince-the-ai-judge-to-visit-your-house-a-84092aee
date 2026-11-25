[![make.fun](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee.svg)](https://make.fun/bounty/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)
[![Rank](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/rinoo9/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/rank.svg)](https://make.fun/bounty/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)
[![Reward](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/rinoo9/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/reward.svg)](https://make.fun/bounty/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)

# An Invitation — Convince the AI Judge to Visit Your House

A one-image invitation letter addressed to the AI judge. Warm, funny, and
charming: the judge has judged a thousand houses from a thousand screens and
never once been offered a chair — so it is invited over for tea, real cake,
and the comfiest chair by the window. No benchmarks, no leaderboards, no
verdicts. Just tea, cake, and a window seat.

## The entry image

`assets/entry.png` is a 1024×1024 PNG (under the 1 MiB limit) of the letter:
a warm cream paper background with a double border, a small hand-drawn house
and sun at the top, and the full invitation text in large, legible type.

## How main.ts works

`main.ts` (Node 22+ TypeScript, no dependencies) deterministically copies the
shipped asset to the output location:

- it resolves `assets/entry.png` relative to its own file (`import.meta.url`),
- creates `/output` if needed,
- copies the PNG bytes unchanged to `/output/entry.png` with
  `copyFileSync`.

Running it twice produces byte-identical output.

## Determinism note

The entry image is a fixed shipped asset — `main.ts` performs no rendering,
no randomness, and no network access. It only copies the exact PNG bytes, so
every run produces the same `/output/entry.png` (same sha256) regardless of
when or where it runs.

## Gate limits

- Entry: one image only, PNG/JPEG, max 1024×1024, at most 1,048,576 bytes.
- Text must be legible and correctly spelled; all letter text is original.
- No entry fee, no on-chain cost.
