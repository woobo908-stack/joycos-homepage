# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Single-page bilingual (Korean/English) brand homepage for JOYCOS (조이코스), a Seoul K-beauty company with three brands: Huksamsoo (흑삼수), True Island Honeybee (트루아일랜드 허니비), and Hope Girl (호피걸). Pure static site — no build step, no package manager, no dependencies, no tests. Three source files:

- `index.html` — the entire site; all copy (KO + EN) lives here
- `assets/css/style.css` — all styling
- `assets/js/main.js` — language toggle, mobile nav, scroll reveal

The site owner is non-technical and edits by asking Claude Code, so keep changes simple and self-contained.

## Preview and deploy

Preview locally (also configured in `.claude/launch.json`):

```
python3 -m http.server 8643
```

Deploys via GitHub Pages from `master` — whatever is on `master` is live at https://woobo908-stack.github.io/joycos-homepage. The custom domain joycos.co.kr is planned but not yet pointed at Pages (see README TODOs).

## Key conventions

### Bilingual content — the most important rule

Every visible sentence exists twice in `index.html`:

```html
<span class="ko">한국어 문장</span><span class="en">English sentence</span>
```

CSS on `html[lang]` shows one and hides the other (`style.css`: `html[lang="ko"] .en{display:none}` and vice versa). `main.js` sets `html.lang` from the KO/EN toggle and persists the choice to localStorage key `joycos-lang` (default: `ko`). **When adding or editing any copy, always write both the `.ko` and `.en` span.** Language-neutral text (numbers, "Korea", brand names) may appear once without spans.

### Scroll-reveal animation

Elements with class `rv` fade/slide in on scroll. The pattern is deliberately fail-safe: content is visible by default, and `main.js` adds `html.js` to opt in to the animation (with a 2.5s `revealAll()` safety net). A previous bug left content permanently invisible without JS — do not "simplify" this by hiding `.rv` elements in base CSS. Add `rv` to new sections/cards that should animate; nothing breaks if you omit it.

### Design system

The palette (espresso ink / amber gold / rice-paper ivory, drawn from the product photography) is defined as CSS custom properties in `:root` at the top of `style.css` — use those variables rather than new hex values. Headings use Noto Serif KR (`--serif`), body uses Pretendard (`--sans`); both load from CDNs in `index.html`. Sections alternate dark (`sec--dark`, `sec--dark2`) and ivory (`sec--ivory`, `sec--ivory2`) backgrounds. Responsive breakpoints: 960px (mobile layout, burger nav) and 520px.

### Images

`assets/img/` holds web-optimized JPEGs only; original photos stay in the owner's OneDrive folders, and the gitignored `_pick/` directory is scratch space for selecting them. Hero images ship a small variant (`hero-model-sm.jpg`) via `srcset`; below-the-fold images use `loading="lazy"`. When swapping in a new photo, optimize it (resize to roughly the sizes already in the folder, target ~100–300 KB) rather than committing camera originals.

## Known pending work (from README)

- "Where to buy" store cards link to `#buy` placeholders — search `TODO` in `index.html`; real store URLs still needed.
- Flagship section uses a stand-in photo until the real PDRN 샷 120 product shot exists; the Honeybee brand card has no model photography yet.
- Founding year is confirmed as 1989. The 사업자등록번호 (business registration number) is intentionally omitted from the footer — don't add one.
