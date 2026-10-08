# BSIT 1-3 Section Portal

A mobile-first website for our section at Cavite State University – Main Campus. Plain HTML, CSS, and vanilla JavaScript; no build step, no dependencies.

## Run it
Open `index.html` in a browser. A single-file copy is also included: `section-portal-single.html`.

## Edit the content
Everything lives in the DATA section at the top of `js/script.js`:
- `schedule` – classes per day (code, room, start, end). Use `room: null` for "No room specified". Thursday and Friday are empty until you add classes.
- `quickLinks`, `resources`, `members` – cards (replace the `#/resources` links and "Student Name" placeholders).

## How it works
- Pages are sections switched by hash (`#/home`, `#/schedule`, `#/resources`, `#/members`), so back/forward and refresh work.
- Phones get a fixed bottom navigation bar; tablets and desktops get the top navbar.
- The theme (light/dark) follows the system setting until you toggle it, then your choice is saved in localStorage.
- Search on the Schedule page matches course code, room, day, and time.

## Structure
```
section-portal/
├── index.html
├── css/style.css
├── js/script.js
├── assets/favicon.svg
├── README.md
└── .gitignore
```

## Publish on GitHub Pages
Push the folder to a repo, then go to Settings → Pages and choose the main branch.
