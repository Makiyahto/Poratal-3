if (!window.PORTAL) {
  document.body.insertAdjacentHTML("afterbegin", '<p style="font:16px monospace;padding:2rem;color:#f55">⚠ js/data.js did not load. Keep index.html, css/, js/ and pages/ together in one folder, then open index.html.</p>');
  throw new Error("PORTAL data missing: js/data.js not loaded");
}
const D = window.PORTAL, root = ""; let page = "home";
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const url = p => root + p;
const NAV = [["home", "Home", "index.html"], ["members", "Members", "pages/members.html"], ["schedule", "Schedule", "pages/schedule.html"],
  ["resources", "Resources", "pages/resources.html"], ["projects", "Projects", "pages/projects.html"], ["announcements", "News", "pages/announcements.html"]];
NAV.forEach(n => n[2] = "#" + n[0]); // single page: links are #sections
const svg = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const ICON = {
  members: svg('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),
  schedule: svg('<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'),
  resources: svg('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>'),
  projects: svg('<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>'),
  announcements: svg('<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>')
};
const BLURB = { members: "Meet the classmates.", schedule: "Know where to be, and when.", resources: "Curated learning materials.", projects: "What we're building.", announcements: "Don't miss updates." };

function setTheme(t) { document.documentElement.dataset.theme = t; try { localStorage.setItem("theme", t); } catch {} }
try { setTheme(localStorage.getItem("theme") || "dark"); } catch { setTheme("dark"); }

function layout() {
  if (new URLSearchParams(location.search).has("embed")) document.body.classList.add("embed");
  $("#site-header").innerHTML = `<nav class="nav container"><a class="brand" href="${"#home"}">&gt;_ ${esc(D.site.short)}</a>
    <button class="burger" aria-label="Menu" aria-expanded="false">☰</button>
    <ul class="links">${NAV.map(([k, l, h]) => `<li><a href="${url(h)}"${k === page ? ' class="active" aria-current="page"' : ""}>${l}</a></li>`).join("")}
    <li><button class="theme" aria-label="Toggle theme">◐</button></li></ul></nav>`;
  $("#site-footer").innerHTML = `<div class="container"><p>© ${new Date().getFullYear()} ${esc(D.site.name)} · ${esc(D.site.school)}</p></div>`;
  const ul = $(".links");
  $(".burger").onclick = e => e.currentTarget.setAttribute("aria-expanded", ul.classList.toggle("open"));
  $(".theme").onclick = () => setTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light");
}

const head = (cmd, title, sub) => `<div class="page-head"><p class="prompt">$ cd ${cmd}</p><h1>${title}</h1><p class="muted">${sub}</p></div>`;
const ann = a => `<article class="row"><time>${esc(a.date)} · ${esc(a.tag)}</time><h3>${esc(a.title)}</h3><p class="muted">${esc(a.body)}</p></article>`;

function type(el, lines) {
  const text = lines.join("\n");
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) { el.textContent = text; return; }
  let i = 0; (function tick() { el.textContent = text.slice(0, ++i); if (i < text.length) setTimeout(tick, 35); })();
}

function browse(items, render, { chipKey, fields }) {
  const cats = chipKey ? ["All", ...new Set(items.map(i => i[chipKey]))] : [];
  let q = "", c = "All";
  $("#app").insertAdjacentHTML("beforeend", `<div class="tools"><input id="q" type="search" placeholder="Search…" aria-label="Search">
    ${cats.map((x, i) => `<button class="chip${i ? "" : " on"}">${esc(x)}</button>`).join("")}</div><div id="grid" class="grid"></div><p id="empty" class="muted" hidden>No matches found.</p>`);
  const paint = () => {
    const r = items.filter(i => (c === "All" || i[chipKey] === c) && fields.some(f => String(i[f]).toLowerCase().includes(q)));
    $("#grid").innerHTML = r.map(render).join(""); $("#empty").hidden = !!r.length;
  };
  $("#q").oninput = e => { q = e.target.value.toLowerCase(); paint(); };
  $$(".chip").forEach(b => b.onclick = () => { c = b.textContent; $$(".chip").forEach(x => x.classList.toggle("on", x === b)); paint(); });
  paint();
}

const PAGES = {
  home() {
    const tip = D.tips[Math.floor(Math.random() * D.tips.length)];
    $("#app").innerHTML = `<section class="hero"><pre class="term" id="term" aria-label="Terminal intro"></pre>
      <h1>${esc(D.site.name)} <span class="grad">Portal</span></h1><p class="lead">${esc(D.site.tagline)}</p>
      <div class="cta"><a class="btn" href="${"#resources"}">Browse resources</a><a class="btn ghost" href="${"#schedule"}">View schedule</a></div></section>
      <section class="stats">${[["Members", D.members.length], ["Resources", D.resources.length], ["Projects", D.projects.length], ["Updates", D.announcements.length]].map(([l, n]) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`).join("")}</section>
      <h2 class="sec">// quick_access</h2><div class="grid quick">${NAV.slice(1).map(([k, l, h]) => `<a class="card" href="${url(h)}"><span class="ico">${ICON[k]}</span><h3>${l}</h3><p>${BLURB[k]}</p></a>`).join("")}</div>
      <h2 class="sec">// latest_announcements</h2><div class="stack">${D.announcements.slice(0, 3).map(ann).join("")}</div>
      <h2 class="sec">// dev_tip</h2><div class="card"><p><span class="prompt">tip$</span> ${esc(tip)}</p></div>`;
    type($("#term"), D.terminal);
  },
  members() {
    $("#app").innerHTML = head("members", "Meet the Section", "The people behind BSIT 1-3.");
    browse(D.members, m => `<div class="card"><div class="avatar">${esc(m.name.split(" ").map(w => w[0]).join("").slice(0, 2))}</div><h3>${esc(m.name)}</h3><p>${esc(m.role)}</p><span class="tag">${esc(m.focus)}</span><a class="tag" href="${esc(m.github)}">GitHub ↗</a></div>`, { fields: ["name", "role", "focus"] });
  },
  schedule() {
    const days = Object.keys(D.schedule), today = new Date().toLocaleDateString("en-US", { weekday: "short" });
    let cur = days.includes(today) ? today : days[0];
    $("#app").innerHTML = head("schedule", "Class Schedule", "Pick a day to see your classes.") + `<div class="tools">${days.map(d => `<button class="chip" data-d="${d}">${d}</button>`).join("")}</div><div id="day" class="stack"></div>`;
    const paint = () => {
      $$(".chip").forEach(b => b.classList.toggle("on", b.dataset.d === cur));
      const l = D.schedule[cur];
      $("#day").innerHTML = l.length ? l.map(s => `<article class="row"><time>${esc(s.time)}</time><h3>${esc(s.code)} · ${esc(s.name)}</h3><p class="meta">${esc(s.room)} · ${esc(s.prof)}</p></article>`).join("") : `<p class="muted">No classes. Go touch grass (or commit code).</p>`;
    };
    $$(".chip").forEach(b => b.onclick = () => { cur = b.dataset.d; paint(); }); paint();
  },
  resources() {
    $("#app").innerHTML = head("resources", "Resources", "Learning materials, tools, and cheat sheets.");
    browse(D.resources, r => `<a class="card" href="${esc(r.url)}"><h3>${esc(r.title)}</h3><p>${esc(r.desc)}</p><span class="tag">${esc(r.category)}</span></a>`, { chipKey: "category", fields: ["title", "desc", "category"] });
  },
  projects() {
    $("#app").innerHTML = head("projects", "Projects", "Things we built. Add yours via pull request!") + `<div class="grid">${D.projects.map(p => `<div class="card"><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p>${p.tags.map(t => `<span class="tag">${esc(t)}</span>`).join("")}<a class="tag" href="${esc(p.repo)}">Repo ↗</a></div>`).join("")}</div>`;
  },
  announcements() {
    $("#app").innerHTML = head("announcements", "Announcements", "Latest updates first.") + `<div class="stack">${[...D.announcements].sort((a, b) => b.date.localeCompare(a.date)).map(ann).join("")}</div>`;
  }
};

function route() {
  page = location.hash.slice(1) || "home";
  if (!PAGES[page]) page = "home";
  document.title = (page === "home" ? "" : NAV.find(n => n[0] === page)[1] + " | ") + D.site.name + " Portal";
  layout(); PAGES[page](); window.scrollTo(0, 0);
}
addEventListener("hashchange", route);
route();
