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

- [ ] Real store links in the "구매하기 / Where to buy" section — each card is an <a> with NO href, showing an honest "준비 중 / Soon" state. Add href="https://..." to a card and the link + hover turn on automatically (see the comment above .buy-grid in index.html).
- [ ] Flagship/Signature: replace the Huksamsoo stand-in when the real PDRN 샷 120 product photo is shot
- [ ] Optional: apex joycos.co.kr has only ONE of GitHub's four IPs (185.199.108.153). Cafe24's "A 레코드 추가" form rejects a blank host for the apex, so the other three could not be added. www has all four. Works fine as-is.

## Live

- **https://joycos.co.kr** — GitHub Pages, HTTPS enforced, cert auto-renews
- www.joycos.co.kr → CNAME → woobo908-stack.github.io → redirects to apex
- Old Cafe24 mall still reachable at https://joycos04.cafe24.com
- Email untouched at Cafe24: MX → mail.joycos.co.kr (222.231.33.170), SPF intact.
  **Do NOT cancel Cafe24** — domain registration, DNS and email all still live there.

Founding year confirmed: 1994. 사업자등록번호 intentionally omitted for now.
