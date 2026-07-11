# JOYCOS Homepage

새 조이코스 브랜드 홈페이지 (New JOYCOS brand homepage).
Korean + English in one page, works on phone and desktop.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole site — all text lives here (KO + EN side by side) |
| `assets/css/style.css` | Design: colors, fonts, layout |
| `assets/js/main.js` | Language toggle, mobile menu, scroll animation |
| `assets/img/` | Optimized photos (originals stay in the OneDrive photo folders) |

## How to edit

Just ask Claude Code. Examples:
- "Change the hero headline to ..."
- "Swap the Honeybee photo for the one in [folder]"
- "Add a new product to the flagship section"

Every visible sentence exists twice in `index.html`:
`<span class="ko">한국어</span><span class="en">English</span>` — edit both.

## Preview locally

Open the folder in Claude Code and ask to "run the site", or:
`python3 -m http.server 8643` then open http://localhost:8643

## TODO before going live

- [ ] Real store links in the "구매하기 / Where to buy" section (search `TODO` in index.html)
- [ ] Confirm founding year (currently shows 1989)
- [ ] 사업자등록번호 in the footer (currently `[입력 예정]`)
- [ ] Host it (Cloudflare Pages / Vercel, free) and point joycos.co.kr at it
