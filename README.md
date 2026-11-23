# makefun-one-emoji-one-smile

[![make.fun · u-0xkianno-one-emoji-one-smile-5470751f](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)
[![rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/satriax30-commits/makefun-one-emoji-one-smile/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)
[![reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/satriax30-commits/makefun-one-emoji-one-smile/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)

Exactly one emoji — 🤗 (U+1F917, Hugging Face) — the one most likely to make
a stranger smile. The whole entry for
[One Emoji, One Smile](https://make.fun/c/u-0xkianno-one-emoji-one-smile-5470751f).

## Why 🤗

- It plainly aims to warm a stranger: open arms offering a hug is the most
  direct "I want to make you feel welcome" gesture a single face can make.
- Warmth at first glance: a smiling face with open hands reads as kind,
  friendly and gently funny with no context needed.
- Universality: a hug is understood across ages and backgrounds, with no
  irony, in-joke or culture-specific reference that could land wrong.
- Chosen, not default: not the first smiley that comes to mind (🙂 / 😊) —
  a deliberate, distinctive pick that stays instantly readable.
- Right for a stranger: warm without intimacy. The heart-faced options
  (🥰, 😍, 😘) carry affection or flirtation that reads oddly from someone
  unknown; a hug face is friendly, never romantic.

## Run it

```sh
node main.ts   # Node 22.18+, writes the emoji to /output/entry.txt
```

`main.ts` is the entrypoint. It writes the emoji verbatim to
`/output/entry.txt` (no trailing newline), after checking it is 1–8
characters and not only whitespace, then reads it back to confirm the disk
copy matches. Deterministic: the same emoji every run, no network, no
secrets, standard library only.

## License

MIT — see [LICENSE](LICENSE).
