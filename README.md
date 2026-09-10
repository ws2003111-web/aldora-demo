# Aldora Demo — Multilingual QR Ordering Demo

Static demo site for a **fictional** West Village (Manhattan) bistro brand **Aldora Demo**. Built for cold-outreach demos of multilingual QR ordering. **No backend** — orders are not submitted anywhere. **Not a real restaurant.**

## Open locally

No build step. From this folder:

```bash
# Option A — open in browser directly
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows
```

Or serve the folder (helpful for some browsers with module/path quirks):

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

Files: `index.html` (landing) → `order.html` (Demo Menu + cart).

## Features

- Branded landing: hero, about, hours, fake Manhattan address (48 Grove Street), CTA to order
- Order UI labeled **Demo Menu**: categories, items with prices, cart drawer, demo “place order” modal
- Languages: English, 中文, 한국어, Français (UI + menu); choice saved in `localStorage`
- Mobile-first; works offline as static files (optional Unsplash images / Google Fonts if online)

## Brand (fictional)

| Lang | Name |
|------|------|
| EN | Aldora Demo |
| ZH | 奥尔多拉·演示 |
| KO | 알도라 데모 |
| FR | Aldora Démo |

## Note

This is a **demo only**. The place-order button shows: *“Demo only — order not sent to kitchen.”* Footer: *Not a real restaurant / 演示专用*.
