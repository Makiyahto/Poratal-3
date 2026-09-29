# BSIT 1-3 Section Portal

A simple, mobile-friendly portal for BSIT 1-3 at Cavite State University. It keeps announcements, the class schedule, subject information, activities, and useful links in one place.

This is a student project created for BSIT 1-3, built with plain HTML, CSS, and JavaScript.

## Features

- Dashboard cards: latest announcement, next class, upcoming activity, and an important reminder
- Announcements with category filters and expandable details
- Weekly class schedule that switches to stacked cards on small screens
- Subject cards (units, schedule, instructor placeholder)
- Upcoming activities, with a highlight for activities happening within 3 days
- Resource links, section officers, and reminders
- Search across announcements, subjects, activities, and resources
- Light/dark theme toggle, saved with `localStorage`
- Responsive navigation with smooth scrolling and active section highlight
- Current date display and a back-to-top button
- Keyboard-friendly controls, visible focus states, and a skip link

## Tech Stack

- HTML5
- CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (no frameworks)
- Google Fonts (Public Sans)

## Project Structure

```
section-portal/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   └── icons/
├── README.md
└── .gitignore
```

## How to Run Locally

1. Download or clone this repository.
2. Open `index.html` in your browser.

No installation or build step is needed. An internet connection is only used to load the Google Font.

## How to Customize

All content lives in the arrays at the top of `js/script.js`:

| Array | What it controls |
| --- | --- |
| `announcements` | Announcement cards and the latest announcement card |
| `schedule` | Weekly schedule and the Next Class card (use 24-hour times like `"13:00"`) |
| `subjects` | Subject cards (`scheduleKey` must match a subject name in `schedule`) |
| `activities` | Upcoming activities |
| `resources` | Resource links (replace each `"#resources"` with a real URL) |
| `officers` | Section officers (replace `"Student Name"`) |
| `reminders` | Reminder list |

The sample data uses `daysFromToday(n)` so dates always look current. For real events, replace it with a fixed date such as `"2026-10-15"`.

The semester label in the hero is in `index.html`. Colors are defined as variables at the top of `css/style.css`.

## Future Improvements

- Add a calendar view for activities
- Move the data into a separate JSON file
- Add a "copy link" button for announcements
- Add an installable offline version (PWA)

## Author

Created by a BSIT 1-3 student at Cavite State University. Replace this line with your name and GitHub profile link.
