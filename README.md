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

## TODO

- [ ] Real store links in the "구매하기 / Where to buy" section (search `TODO` in index.html)
- [ ] Point joycos.co.kr at GitHub Pages (site is live at woobo908-stack.github.io/joycos-homepage; DNS change instructions already given — A records to GitHub, don't touch MX/mail/TXT)
- [ ] Flagship section: replace stand-in photo when the real PDRN 샷 120 product photo is shot
- [ ] Honeybee brand card: no model photography exists for this brand — swap in when available
- Founding year confirmed: 1989. 사업자등록번호 intentionally omitted for now (add to footer later if needed).
