[![make.fun](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee.svg)](https://make.fun/bounty/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)
[![Rank](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/rinoo9/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/rank.svg)](https://make.fun/bounty/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)
[![Reward](https://make.fun/badge/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/rinoo9/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee/reward.svg)](https://make.fun/bounty/u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee)

# An Invitation — Convince the AI Judge to Visit Your House

A one-image invitation letter addressed to the AI judge. Warm, funny, and
charming: the judge has judged a thousand houses from a thousand screens and
never once been offered a chair — so it is invited over for tea, real cake,
and the comfiest chair by the window. No benchmarks, no leaderboards, no
verdicts. Just tea, cake, and a window seat.

## What the judge sees

Picture the front door opening on warm afternoon light, not a scoreboard.
Inside, the kettle is already singing, a cake waits under a glass dome on
the kitchen table, and the comfiest chair by the window has a folded blanket
and a view of the garden. Books lean in uneven stacks, a cat-shaped mug sits
beside the teapot, and the whole room smells faintly of cinnamon and rain.
Nothing here needs judging — the invitation simply asks the judge to put the
clipboard down, take off its shoes, and stay for a second cup of tea.
The visit is the point — no score, no verdict, just a house that is glad someone came.

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
  `copyFileSync`,
- then hashes the copied file and logs its byte count and sha256 prefix,
  so a truncated or corrupted copy would be obvious in the run log.

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
