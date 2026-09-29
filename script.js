/* =========================================================
   BSIT 1-3 Section Portal
   Edit the DATA section below to update the site content.
   ========================================================= */

/* ---------- Helpers for dates in sample data ---------- */
// Returns a date string (YYYY-MM-DD) n days from today.
// Sample data uses this so the demo never looks outdated.
// Replace with fixed dates like "2026-10-15" for real events.
function daysFromToday(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
}

/* =========================================================
   DATA
   ========================================================= */
const navSections = [
  { id: "home", label: "Home" },
  { id: "announcements", label: "Announcements" },
  { id: "schedule", label: "Schedule" },
  { id: "subjects", label: "Subjects" },
  { id: "activities", label: "Activities" },
  { id: "resources", label: "Resources" },
  { id: "officers", label: "Officers" },
];

const announcements = [
  {
    title: "Programming laboratory exercise is due Friday",
    description: "Submit your Computer Programming 1 lab exercise through Google Classroom.",
    details: "Upload your source file (.py or .java as instructed) and name it LastName_Lab1. Late submissions may lose points.",
    date: daysFromToday(-1),
    category: "Academic",
    priority: "high",
  },
  {
    title: "Bring your school ID on Monday",
    description: "IDs will be checked at the gate and at the laboratory.",
    details: "If you have not received your ID yet, bring your registration form instead.",
    date: daysFromToday(-2),
    category: "Reminder",
  },
  {
    title: "Section meeting this week",
    description: "Officers will discuss class fund contributions and the section shirt.",
    details: "Please attend so everyone can vote. Details of the venue will be posted in the group chat.",
    date: daysFromToday(-3),
    category: "General",
  },
  {
    title: "Intro to Computing quiz next meeting",
    description: "Coverage: history of computing and basic computer components.",
    details: "Review your notes and the shared slides in the class Drive folder.",
    date: daysFromToday(-4),
    category: "Academic",
    priority: "high",
  },
  {
    title: "Freshmen orientation activity",
    description: "A university activity for all first-year students.",
    details: "Wear the prescribed uniform and arrive 30 minutes early.",
    date: daysFromToday(-5),
    category: "Event",
  },
  {
    title: "Update your contact details",
    description: "Send your updated contact number and email to the secretary.",
    details: "This helps officers reach you when classes are suspended or changed.",
    date: daysFromToday(-7),
    category: "General",
  },
];

// Each class uses 24-hour time ("13:00") so the "Next Class" card can compare times.
const schedule = [
  { day: "Monday", classes: [
    { subject: "Computer Programming 1", start: "07:00", end: "08:00" },
    { subject: "Computer Programming 1", start: "10:00", end: "13:00" },
    { subject: "Introduction to Computing", start: "15:00", end: "17:00" },
    { subject: "Filipino", start: "17:00", end: "19:00" },
  ]},
  { day: "Tuesday", classes: [
    { subject: "Movement Enhancement", start: "07:00", end: "09:00" },
    { subject: "Ethics", start: "11:00", end: "13:00" },
    { subject: "Introduction to Computing", start: "17:00", end: "19:00" },
  ]},
  { day: "Wednesday", classes: [
    { subject: "Discrete Structures 1", start: "07:00", end: "09:00" },
    { subject: "Computer Programming 1", start: "10:00", end: "13:00" },
    { subject: "Purposive Communication", start: "15:00", end: "17:00" },
    { subject: "Institutional Orientation", start: "18:00", end: "19:00" },
  ]},
  { day: "Thursday", classes: [
    { subject: "Purposive Communication", start: "09:00", end: "10:00" },
    { subject: "Filipino", start: "12:00", end: "13:00" },
    { subject: "Ethics", start: "13:00", end: "14:00" },
  ]},
  { day: "Friday", classes: [] },
];

// scheduleKey must match a subject name used in the schedule above.
const subjects = [
  { name: "Computer Programming 1", scheduleKey: "Computer Programming 1", units: 3, instructor: "Instructor Name",
    description: "Introduction to programming logic, syntax, and problem solving." },
  { name: "Introduction to Computing", scheduleKey: "Introduction to Computing", units: 3, instructor: "Instructor Name",
    description: "Foundations of computing, hardware, software, and digital literacy." },
  { name: "Discrete Structures 1", scheduleKey: "Discrete Structures 1", units: 3, instructor: "Instructor Name",
    description: "Logic, sets, relations, and functions used in computer science." },
  { name: "Ethics", scheduleKey: "Ethics", units: 3, instructor: "Instructor Name",
    description: "Moral reasoning and ethical decision making in everyday and professional life." },
  { name: "Purposive Communication", scheduleKey: "Purposive Communication", units: 3, instructor: "Instructor Name",
    description: "Effective written, oral, and digital communication for different audiences." },
  { name: "Filipino", scheduleKey: "Filipino", units: 3, instructor: "Instructor Name",
    description: "Komunikasyon sa wikang Filipino sa akademikong konteksto." },
  { name: "Movement Enhancement", scheduleKey: "Movement Enhancement", units: 2, instructor: "Instructor Name",
    description: "Physical fitness, movement skills, and healthy habits." },
  { name: "Institutional Orientation / CVSU 101", scheduleKey: "Institutional Orientation", units: 1, instructor: "Instructor Name",
    description: "Orientation to university life, policies, and student services." },
];

const activities = [
  { title: "Section meeting", date: daysFromToday(2), time: "1:00 PM", location: "Room TBA",
    description: "Discuss class fund, section shirt, and upcoming requirements." },
  { title: "Programming study session", date: daysFromToday(6), time: "4:00 PM", location: "Computer Laboratory",
    description: "Group practice for loops and conditionals before the next lab." },
  { title: "College orientation activity", date: daysFromToday(12), time: "8:00 AM", location: "University Gymnasium",
    description: "Program for first-year students. Wear the prescribed uniform." },
];

// Replace each "#..." with the real link when you have it.
const resources = [
  { name: "Google Drive", description: "Shared notes, slides, and references.", url: "#resources" },
  { name: "Class group chat", description: "Quick updates and discussions.", url: "#resources" },
  { name: "Google Classroom", description: "Activities, quizzes, and submissions.", url: "#resources" },
  { name: "GitHub repository", description: "Source code of this portal.", url: "#resources" },
  { name: "Shared files", description: "Forms, templates, and class documents.", url: "#resources" },
  { name: "School portal", description: "Official university student portal.", url: "#resources" },
];

const officers = [
  { role: "President", name: "Student Name" },
  { role: "Vice President", name: "Student Name" },
  { role: "Secretary", name: "Student Name" },
  { role: "Treasurer", name: "Student Name" },
  { role: "Auditor", name: "Student Name" },
  { role: "Public Information Officer", name: "Student Name" },
  { role: "Representative", name: "Student Name" },
];

const reminders = [
  "Check announcements regularly.",
  "Submit requirements before the deadline.",
  "Bring your school ID when required.",
  "Keep shared files organized.",
  "Inform classmates about important updates.",
];

/* =========================================================
   FORMATTING HELPERS
   ========================================================= */
const $ = (selector) => document.querySelector(selector);

function parseLocalDate(dateString) {
  return new Date(`${dateString}T00:00:00`);
}

function formatDate(dateString) {
  return parseLocalDate(dateString).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  });
}

function formatTime(time24) {
  const [hours, minutes] = time24.split(":").map(Number);
  const suffix = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 || 12;
  return `${hour12}:${String(minutes).padStart(2, "0")} ${suffix}`;
}

function formatRange(item) {
  return `${formatTime(item.start)}–${formatTime(item.end)}`;
}

function daysUntil(dateString) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.round((parseLocalDate(dateString) - today) / 86400000);
}

function isSoon(activity) {
  const days = daysUntil(activity.date);
  return days >= 0 && days <= 3;
}

function scheduleTextFor(subject) {
  const parts = [];
  schedule.forEach((day) => {
    day.classes
      .filter((item) => item.subject === subject.scheduleKey)
      .forEach((item) => parts.push(`${day.day.slice(0, 3)} ${formatRange(item)}`));
  });
  return parts.join(", ");
}

/* =========================================================
   CARD TEMPLATES
   ========================================================= */
function announcementCard(item) {
  const priority = item.priority === "high" ? '<span class="badge high">Important</span>' : "";
  return `
    <article class="card">
      <span class="badge">${item.category}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <p class="meta">${formatDate(item.date)}</p>
      ${priority}
      <details>
        <summary>More details</summary>
        <p>${item.details}</p>
      </details>
    </article>`;
}

function subjectCard(subject) {
  return `
    <article class="card">
      <h3>${subject.name}</h3>
      <p>${subject.description}</p>
      <p class="meta">${subject.units} units</p>
      <p class="meta">${scheduleTextFor(subject)}</p>
      <p class="meta">Instructor: ${subject.instructor}</p>
    </article>`;
}

function activityCard(activity) {
  const soon = isSoon(activity);
  const days = daysUntil(activity.date);
  const soonLabel = days === 0 ? "Today" : days === 1 ? "Tomorrow" : `In ${days} days`;
  return `
    <article class="card ${soon ? "is-soon" : ""}">
      ${soon ? `<span class="badge soon">${soonLabel}</span>` : ""}
      <h3>${activity.title}</h3>
      <p>${activity.description}</p>
      <p class="meta">${formatDate(activity.date)} · ${activity.time}</p>
      <p class="meta">${activity.location}</p>
    </article>`;
}

function resourceCard(resource) {
  return `
    <a class="card resource-card" href="${resource.url}">
      <h3>${resource.name}</h3>
      <p>${resource.description}</p>
    </a>`;
}

function officerCard(officer) {
  return `
    <article class="card officer-card">
      <div class="avatar" aria-hidden="true">${officer.role.charAt(0)}</div>
      <h3>${officer.name}</h3>
      <p class="meta">${officer.role}</p>
    </article>`;
}

function dayCard(day, todayName) {
  const items = day.classes.length
    ? day.classes.map((item) => `
        <li class="class-item">
          <strong>${item.subject}</strong>
          <span class="meta">${formatRange(item)}</span>
        </li>`).join("")
    : '<li class="empty-day">No scheduled classes</li>';
  return `
    <article class="card day-card ${day.day === todayName ? "today" : ""}">
      <h3>${day.day}${day.day === todayName ? " (today)" : ""}</h3>
      <ul>${items}</ul>
    </article>`;
}

function renderList(selector, items, template) {
  $(selector).innerHTML = items.map(template).join("");
}

/* =========================================================
   DASHBOARD
   ========================================================= */
function findNextClass() {
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  for (let offset = 0; offset < 7; offset++) {
    const date = new Date(now);
    date.setDate(now.getDate() + offset);
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    const day = schedule.find((entry) => entry.day === dayName);
    if (!day) continue;

    const upcoming = day.classes.find((item) => {
      const [h, m] = item.start.split(":").map(Number);
      return offset > 0 || h * 60 + m > nowMinutes;
    });
    if (upcoming) return { ...upcoming, dayName: offset === 0 ? "Today" : offset === 1 ? "Tomorrow" : dayName };
  }
  return null;
}

function renderDashboard() {
  const latest = [...announcements].sort((a, b) => b.date.localeCompare(a.date))[0];
  const nextClass = findNextClass();
  const nextActivity = [...activities]
    .filter((a) => daysUntil(a.date) >= 0)
    .sort((a, b) => a.date.localeCompare(b.date))[0];

  const cards = [
    { type: "", label: "Latest announcement", title: latest.title, text: formatDate(latest.date) },
    nextClass
      ? { type: "", label: "Next class", title: nextClass.subject, text: `${nextClass.dayName}, ${formatRange(nextClass)}` }
      : { type: "", label: "Next class", title: "No upcoming class", text: "Check the schedule below." },
    nextActivity
      ? { type: "activity", label: "Upcoming activity", title: nextActivity.title, text: `${formatDate(nextActivity.date)} · ${nextActivity.time}` }
      : { type: "activity", label: "Upcoming activity", title: "Nothing scheduled", text: "New activities will appear here." },
    { type: "reminder", label: "Important reminder", title: reminders[0], text: "See all reminders below." },
  ];

  $("#dashboard").innerHTML = cards.map((card) => `
    <article class="card dash-card ${card.type}">
      <span class="card-label">${card.label}</span>
      <h3>${card.title}</h3>
      <p>${card.text}</p>
    </article>`).join("");
}

/* =========================================================
   ANNOUNCEMENT FILTERS
   ========================================================= */
let activeCategory = "All";

function renderFilters() {
  const categories = ["All", ...new Set(announcements.map((a) => a.category))];
  $("#announcement-filters").innerHTML = categories.map((category) => `
    <button class="filter-btn" type="button" data-category="${category}"
            aria-pressed="${category === activeCategory}">${category}</button>`).join("");
}

function renderAnnouncements() {
  const visible = announcements
    .filter((a) => activeCategory === "All" || a.category === activeCategory)
    .sort((a, b) => b.date.localeCompare(a.date));
  $("#announcement-list").innerHTML = visible.length
    ? visible.map(announcementCard).join("")
    : '<p class="empty-state">No announcements in this category yet.</p>';
}

$("#announcement-filters").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderFilters();
  renderAnnouncements();
});

/* =========================================================
   SEARCH
   ========================================================= */
function buildSearchIndex() {
  return [
    ...announcements.map((a) => ({ type: "Announcement", title: a.title, text: a.description, target: "announcements" })),
    ...subjects.map((s) => ({ type: "Subject", title: s.name, text: s.description, target: "subjects" })),
    ...activities.map((a) => ({ type: "Activity", title: a.title, text: a.description, target: "activities" })),
    ...resources.map((r) => ({ type: "Resource", title: r.name, text: r.description, target: "resources" })),
  ];
}

function runSearch(query) {
  const resultsSection = $("#search-results");
  const list = $("#search-results-list");
  const term = query.trim().toLowerCase();

  if (!term) {
    resultsSection.hidden = true;
    return;
  }

  const matches = buildSearchIndex().filter((item) =>
    `${item.title} ${item.text}`.toLowerCase().includes(term)
  );

  resultsSection.hidden = false;
  if (matches.length === 0) {
    list.innerHTML = '<p class="empty-state">No results found. Try a different keyword, like a subject name.</p>';
    return;
  }
  list.innerHTML = matches.map((item) => `
    <a class="card" href="#${item.target}">
      <span class="badge">${item.type}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </a>`).join("");
}

$("#search-input").addEventListener("input", (event) => runSearch(event.target.value));
$("#search-form").addEventListener("submit", (event) => event.preventDefault());

/* =========================================================
   NAVIGATION
   ========================================================= */
function setupNavigation() {
  $("#nav-links").innerHTML = navSections.map((s) =>
    `<li><a href="#${s.id}" data-section="${s.id}">${s.label}</a></li>`).join("");

  const nav = $("#site-nav");
  const menuButton = $("#menu-toggle");

  function setMenu(open) {
    nav.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  menuButton.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  nav.addEventListener("click", (event) => { if (event.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") setMenu(false); });

  // Highlight the link of the section currently in view
  const links = document.querySelectorAll("[data-section]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        const isActive = link.dataset.section === entry.target.id;
        link.classList.toggle("active", isActive);
        if (isActive) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  navSections.forEach((s) => observer.observe(document.getElementById(s.id)));
}

/* =========================================================
   THEME, DATE, BACK TO TOP
   ========================================================= */
function setupTheme() {
  const button = $("#theme-toggle");
  const root = document.documentElement;
  const saved = localStorage.getItem("portal-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  function applyTheme(theme) {
    root.dataset.theme = theme;
    button.textContent = theme === "dark" ? "☀️" : "🌙";
    button.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }

  applyTheme(saved || (prefersDark ? "dark" : "light"));

  button.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("portal-theme", next);
  });
}

function setupBackToTop() {
  const button = $("#back-to-top");
  window.addEventListener("scroll", () => { button.hidden = window.scrollY < 500; });
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function showCurrentDate() {
  $("#current-date").textContent = new Date().toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });
}

/* =========================================================
   START
   ========================================================= */
function init() {
  const todayName = new Date().toLocaleDateString("en-US", { weekday: "long" });

  showCurrentDate();
  setupTheme();
  setupNavigation();
  setupBackToTop();

  renderDashboard();
  renderFilters();
  renderAnnouncements();
  renderList("#schedule-grid", schedule, (day) => dayCard(day, todayName));
  renderList("#subject-list", subjects, subjectCard);
  renderList("#activity-list", activities, activityCard);
  renderList("#resource-list", resources, resourceCard);
  renderList("#officer-list", officers, officerCard);
  $("#reminder-list").innerHTML = reminders.map((text) => `<li>${text}</li>`).join("");
}

init();
