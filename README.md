# liz-goldfish.github.io

Personal portfolio — Liz van Ginderen

## Setup & Deployment

### 1. Repository structure
Your GitHub repo must be named exactly `liz-goldfish.github.io`.
GitHub Pages will auto-publish from the `main` branch root.

### 2. Add your images
Place your images in the correct folders before pushing:

```
images/
├── profile/
│   └── profilepic.JFIF          ← your headshot
├── design/
│   ├── srd-thumb.jpg             ← thumbnail for SRD card
│   ├── fledge-thumb.jpg          ← thumbnail for Fledge card
│   └── s1-mindmap.png            ← mindmap image from Session 1
└── photography/
    ├── portsmouthportrait03.jpg
    ├── postcardautumn2.jpg
    ├── iceland.jpg
    ├── paaskermis1.1.jpg ... paaskermis3.3.jpg
    └── japankorea (1).jpg ... japankorea (12).jpg
```

**Note on filenames with spaces:** `japankorea (1).jpg` has spaces in the filename.
These work locally but can cause issues on GitHub. Rename to `japankorea-1.jpg` etc.
Then update the filenames in `photography/collections/japankorea.html`.

### 3. Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/liz-goldfish/liz-goldfish.github.io.git
git push -u origin main
```

### 4. Enable GitHub Pages
Go to repo Settings → Pages → Source: Deploy from branch → main → / (root) → Save.
Your site will be live at https://liz-goldfish.github.io within a few minutes.

### 5. Adding new content
- **New SRD session:** Edit `design/srd/index.html`, add a new `<div class="session-section">` block and a pill nav entry.
- **New photo collection:** Duplicate `photography/collections/paaskermis.html`, update filenames and text, add a new entry in `photography/index.html`.
- **New design project:** Add a folder under `design/`, add a project item in `design/index.html`.

### Analytics (optional)
Add Google Analytics or Plausible (privacy-friendly) by pasting a script tag in the `<head>` of each page, or create a shared `_includes` partial if you switch to Jekyll.

## File count
- `index.html` — landing/home
- `design/index.html` — design overview
- `design/srd/index.html` — full SRD portfolio
- `design/fledge/index.html` — Fledge project
- `photography/index.html` — photography overview
- `photography/collections/paaskermis.html`
- `photography/collections/japankorea.html`
- `css/style.css` — shared styles
- `js/main.js` — shared JS (lightbox, scroll reveal, nav)
