# BSIT 1-3 Section Portal

Plain HTML, CSS and vanilla JS. No build step, no frameworks.

## Structure
```
section-portal/
├── index.html           # the page (loads the files below)
├── css/style.css        # colors, layout, theme (edit :root to re-color)
├── js/
│   ├── data.js          # ← edit this: all content lives here
│   ├── script.js        # nav, theme toggle, rendering, icons
│   └── embed.js         # drop-in widget
├── assets/              # favicon files
└── embed-demo.html
```
Sections (Home, Members, Schedule, Resources, Projects, News) are routes on one page: `index.html#members`, etc.

## Edit
- **Content:** `js/data.js`
- **Colors / fonts:** top of `css/style.css`
- **Icons:** the `ICON` object in `js/script.js` (inline SVG, inherits the accent color)
- **Add a section:** add a row to `NAV` and a function to `PAGES` in `js/script.js`
- **Favicon:** replace `assets/favicon.svg` (and the two PNGs)

## Embed
```html
<div data-portal="announcements" data-limit="3"></div>
<script src="js/data.js"></script>
<script src="js/embed.js"></script>
```
Options: `data-limit`, `data-theme="light"`. Or iframe `index.html?embed#resources`.

## Publish (GitHub Pages)
Push to GitHub → Settings → Pages → deploy from the `main` branch, root folder.
