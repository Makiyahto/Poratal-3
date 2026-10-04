/* Drop-in widget: <div data-portal="schedule"></div>
   Sections: announcements | schedule | resources | members | projects
   Options:  data-limit="3"  data-theme="light"
   Needs js/data.js loaded first. Styles are isolated (Shadow DOM) so it won't clash with the host page. */
(function () {
  const D = window.PORTAL;
  if (!D) return console.warn("[portal-embed] Load js/data.js before js/embed.js");
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const CSS = `
  :host{display:block;--bg:#0b0f14;--s:#121923;--t:#e6edf3;--m:#8b98a9;--a:#39ff9c;--b:#223044;font-family:system-ui,sans-serif;color:var(--t)}
  :host([data-theme=light]){--bg:#f4f7fb;--s:#fff;--t:#0f1722;--m:#5b6778;--a:#00875a;--b:#d8e0ea}
  .box{background:var(--bg);border:1px solid var(--b);border-radius:12px;padding:1rem}
  h3{font:700 .95rem ui-monospace,Consolas,monospace;color:var(--a);margin:0 0 .8rem}
  .i{background:var(--s);border:1px solid var(--b);border-left:3px solid var(--a);border-radius:8px;padding:.6rem .8rem;margin-bottom:.5rem}
  .i b{display:block;font-size:.9rem}.i small{color:var(--m)}
  .g{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:.5rem}
  a{color:inherit;text-decoration:none}a.i:hover{border-color:var(--a)}`;
  const item = (t, s, href) => `<${href ? `a href="${esc(href)}"` : "div"} class="i"><b>${esc(t)}</b><small>${esc(s)}</small></${href ? "a" : "div"}>`;
  const R = {
    announcements: () => D.announcements.map(a => item(a.title, `${a.date} · ${a.tag}`)),
    schedule: () => Object.entries(D.schedule).flatMap(([d, l]) => l.map(s => item(`${d} · ${s.code} ${s.name}`, `${s.time} · ${s.room}`))),
    resources: () => D.resources.map(r => item(r.title, r.category, r.url)),
    members: () => D.members.map(m => item(m.name, m.role)),
    projects: () => D.projects.map(p => item(p.name, p.tags.join(", "), p.repo))
  };
  document.querySelectorAll("[data-portal]").forEach(el => {
    const k = el.dataset.portal, fn = R[k];
    if (!fn) return console.warn("[portal-embed] Unknown section:", k);
    const rows = fn().slice(0, +el.dataset.limit || undefined).join("");
    el.attachShadow({ mode: "open" }).innerHTML = `<style>${CSS}</style><div class="box"><h3>&gt;_ ${esc(k)}</h3><div class="${k === "members" ? "g" : ""}">${rows}</div></div>`;
  });
})();
