/* ==========================================================
   BSIT 1-3 Section Portal
   Edit the DATA section. The rest renders it.
   ========================================================== */

// ===== DATA =====
const ROOM_NONE = "No room specified";

const schedule = [
  {
    day: "Monday",
    classes: [
      { code: "DCIT 22", room: "ITC 201", start: "7:00 AM", end: "8:00 AM" },
      { code: "CVSU 101", room: null, start: "8:00 AM", end: "9:00 AM" },
      { code: "DCIT 22", room: "CCL 204", start: "10:00 AM", end: "1:00 PM" },
      { code: "DCIT 21", room: "CCL 102", start: "3:00 PM", end: "5:00 PM" },
      { code: "GNED 11", room: "LH101 CAS", start: "5:00 PM", end: "7:00 PM" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { code: "FITT", room: "GYM", start: "7:00 AM", end: "9:00 AM" },
      { code: "GNED 02", room: "LH 305b CAS", start: "11:00 AM", end: "1:00 PM" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { code: "COSC 50", room: "ITC 408", start: "7:00 AM", end: "9:00 AM" },
      { code: "DCIT 22", room: "CCL 102", start: "10:00 AM", end: "1:00 PM" },
      { code: "GNED 05", room: "CAFENR 105", start: "3:00 PM", end: "5:00 PM" },
      { code: "DCIT 21", room: "ITC 408", start: "5:00 PM", end: "7:00 PM" },
    ],
  },
  { day: "Thursday", classes: [] },
  { day: "Friday", classes: [] },
];

const quickLinks = [
  { icon: "calendar", title: "Class schedule", text: "Rooms and times, per day", href: "#/schedule" },
  { icon: "folder", title: "Resources", text: "Modules, slides, and notes", href: "#/resources" },
  { icon: "users", title: "Members", text: "Who's in our section", href: "#/members" },
];

const resources = [
  { icon: "book", title: "Course modules", text: "Replace with your drive link", href: "#/resources" },
  { icon: "link", title: "Class group", text: "Replace with your group link", href: "#/resources" },
  { icon: "folder", title: "Shared files", text: "Replace with your folder link", href: "#/resources" },
];

const members = [
  { icon: "users", title: "Student Name", text: "President" },
  { icon: "users", title: "Student Name", text: "Vice President" },
  { icon: "users", title: "Student Name", text: "Secretary" },
];

const ROUTES = { home: "Home", schedule: "Schedule", resources: "Resources", members: "Members" };

// ===== ICONS =====
const icons = {
  home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0 1 14 0M16 4.5a3.5 3.5 0 0 1 0 7M22 20a7 7 0 0 0-4-6.3"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
  pin: '<path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
};
const svg = (name) => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || ""}</svg>`;

document.querySelectorAll("[data-icon]").forEach((el) => {
  el.innerHTML = svg(el.dataset.icon);
});

// ===== HELPERS =====
const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const todayName = () => new Date().toLocaleDateString("en-US", { weekday: "long" });

function toMinutes(t) {
  const m = /(\d+):(\d+)\s*(AM|PM)/i.exec(t);
  if (!m) return 0;
  let h = Number(m[1]) % 12;
  if (m[3].toUpperCase() === "PM") h += 12;
  return h * 60 + Number(m[2]);
}

function isInSession(day, c) {
  if (day !== todayName()) return false;
  const d = new Date();
  const now = d.getHours() * 60 + d.getMinutes();
  return now >= toMinutes(c.start) && now < toMinutes(c.end);
}

const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "es"}`;

// ===== CARDS (links) =====
function renderCards(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items
    .map((i) => {
      const tag = i.href ? "a" : "div";
      const href = i.href ? ` href="${i.href}"` : "";
      return `<${tag} class="card"${href}>
        <span class="icon">${svg(i.icon)}</span>
        <div><h3>${i.title}</h3><p>${i.text}</p></div>
      </${tag}>`;
    })
    .join("");
}

// ===== CLASS CARDS =====
function classCard(day, c, { showDay = false } = {}) {
  const now = isInSession(day, c);
  const room = c.room || ROOM_NONE;
  return `<li class="class-card${now ? " is-now" : ""}">
    <div class="cc-top">
      <h3 class="cc-code">${c.code}</h3>
      ${now ? '<span class="badge">In session</span>' : ""}
      ${showDay ? `<span class="cc-day">${day}</span>` : ""}
    </div>
    <p class="cc-meta cc-room${c.room ? "" : " is-none"}">${svg("pin")}<span>${room}</span></p>
    <p class="cc-meta cc-time">${svg("clock")}<span><time>${c.start}</time> – <time>${c.end}</time></span></p>
  </li>`;
}

const emptyState = (text) => `<li class="empty">${svg("calendar")}<span>${text}</span></li>`;

// ===== SEARCH =====
const normalize = (s) => s.toLowerCase();
const compact = (s) => normalize(s).replace(/[^a-z0-9]/g, "");
const shortTime = (t) => t.replace(":00", "").replace(/\s/g, "");

function matches(day, c, query) {
  const text = normalize(
    `${day} ${c.code} ${c.room || ROOM_NONE} ${c.start} ${c.end} ${shortTime(c.start)} ${shortTime(c.end)}`
  );
  const flat = compact(text);
  return query
    .split(/\s+/)
    .filter(Boolean)
    .every((t) => text.includes(normalize(t)) || flat.includes(compact(t)));
}

// ===== SCHEDULE VIEW =====
const state = { day: null, query: "" };

function renderDayNav() {
  const nav = document.getElementById("day-nav");
  const today = todayName();
  nav.classList.toggle("is-searching", state.query.trim() !== "");
  nav.innerHTML = schedule
    .map((d) => {
      const isToday = d.day === today;
      const label = `${d.day}, ${plural(d.classes.length, "class")}${isToday ? ", today" : ""}`;
      return `<button type="button" class="day-btn${isToday ? " is-today" : ""}" data-day="${d.day}"
        aria-pressed="${d.day === state.day}" aria-label="${label}">
        <span class="d-name">${d.day.slice(0, 3)}</span>
        <span class="d-count">${d.classes.length}</span>
      </button>`;
    })
    .join("");
}

function renderSchedule() {
  const list = document.getElementById("schedule-list");
  const title = document.getElementById("list-title");
  const meta = document.getElementById("list-meta");
  const query = state.query.trim();

  renderDayNav();

  if (query) {
    const hits = [];
    schedule.forEach((d) =>
      d.classes.forEach((c) => matches(d.day, c, query) && hits.push({ day: d.day, c }))
    );
    title.textContent = "Search results";
    meta.textContent = `${hits.length} ${hits.length === 1 ? "match" : "matches"}`;
    list.innerHTML = hits.length
      ? hits.map((h) => classCard(h.day, h.c, { showDay: true })).join("")
      : emptyState(`No classes match “${query}”.`);
    return;
  }

  const entry = schedule.find((d) => d.day === state.day);
  title.textContent = entry.day + (entry.day === todayName() ? " · Today" : "");
  meta.textContent = plural(entry.classes.length, "class");
  list.innerHTML = entry.classes.length
    ? entry.classes.map((c) => classCard(entry.day, c)).join("")
    : emptyState(`No classes scheduled for ${entry.day}.`);
}

function initSchedule() {
  const today = todayName();
  state.day = (schedule.find((d) => d.day === today) || schedule[0]).day;

  document.getElementById("day-nav").addEventListener("click", (e) => {
    const btn = e.target.closest(".day-btn");
    if (!btn) return;
    state.day = btn.dataset.day;
    state.query = "";
    document.getElementById("schedule-search").value = "";
    renderSchedule();
  });

  document.getElementById("schedule-search").addEventListener("input", (e) => {
    state.query = e.target.value;
    renderSchedule();
  });

  renderSchedule();
}

// ===== TODAY (home) =====
function renderToday() {
  const now = new Date();
  const dayName = todayName();
  document.getElementById("today-date").textContent = now.toLocaleDateString("en-US", {
    weekday: "short", month: "short", day: "numeric",
  });
  const entry = schedule.find((d) => d.day === dayName);
  document.getElementById("today-list").innerHTML =
    entry && entry.classes.length
      ? entry.classes.map((c) => classCard(entry.day, c)).join("")
      : emptyState("No classes scheduled today.");
}

// ===== ROUTER (hash-based, keeps back/forward and refresh working) =====
const views = document.querySelectorAll(".view");
let firstRoute = true;

function route() {
  const name = location.hash.replace(/^#\/?/, "") || "home";
  const key = ROUTES[name] ? name : "home";

  views.forEach((v) => { v.hidden = v.dataset.view !== key; });
  document.querySelectorAll("[data-route]").forEach((a) => {
    if (a.dataset.route === key) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  document.title = `${ROUTES[key]} · BSIT 1-3 Portal`;

  if (!firstRoute) {
    window.scrollTo(0, 0);
    const heading = document.querySelector(`.view[data-view="${key}"] h1`);
    if (heading) heading.focus({ preventScroll: true });
  }
  firstRoute = false;
}

// ===== THEME =====
function initTheme() {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  const meta = document.querySelector('meta[name="theme-color"]');
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const saved = () => { try { return localStorage.getItem("theme"); } catch (e) { return null; } };

  const apply = (theme) => {
    root.setAttribute("data-theme", theme);
    btn.innerHTML = svg(theme === "dark" ? "sun" : "moon");
    btn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0b130e" : "#f4f6f1");
  };

  apply(root.getAttribute("data-theme") || saved() || (mq.matches ? "dark" : "light"));

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    if (!reducedMotion()) {
      root.classList.add("theme-transition");
      setTimeout(() => root.classList.remove("theme-transition"), 400);
    }
    apply(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  mq.addEventListener("change", (e) => { if (!saved()) apply(e.matches ? "dark" : "light"); });
}

// ===== INIT =====
renderCards("quick-list", quickLinks);
renderCards("resource-list", resources);
renderCards("member-list", members);
initSchedule();
renderToday();
initTheme();
window.addEventListener("hashchange", route);
route();

// Keep the "In session" badge current while the page stays open.
setInterval(() => { renderToday(); renderSchedule(); }, 60000);
