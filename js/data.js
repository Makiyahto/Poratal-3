// Edit this file only — pages render from these arrays. Replace placeholders with real info.
window.PORTAL = {
  site: { name: "BSIT 1-3", short: "BSIT-1-3", school: "Cavite State University - Main Campus",
    tagline: "Your one-stop hub for schedules, resources, and projects. Compile. Debug. Repeat." },
  terminal: ["$ whoami", "> BSIT 1-3 // Cavite State University", "$ git log --oneline -1", "> feat: first year, let's build things", "$ ./start-portal.sh"],
  tips: ["Commit early, commit often.", "Read the error message. Really read it.", "Rubber-duck debugging works.", "Learn Git before you need it.", "Google it, then understand the answer."],
  members: [1,2,3,4,5,6,7,8].map(n => ({ name: "Student Name " + n, role: n === 1 ? "Class President" : "Student", github: "#", focus: ["Web Dev","Networking","Programming","UI/UX"][n % 4] })),
  schedule: {
    Mon: [{ time: "8:00 – 10:00", code: "SUBJ 101", name: "Subject Name", room: "Room 000", prof: "Instructor Name" }],
    Tue: [{ time: "10:00 – 12:00", code: "SUBJ 102", name: "Subject Name", room: "Lab 1", prof: "Instructor Name" }],
    Wed: [{ time: "1:00 – 3:00", code: "SUBJ 103", name: "Subject Name", room: "Room 000", prof: "Instructor Name" }],
    Thu: [{ time: "8:00 – 10:00", code: "SUBJ 104", name: "Subject Name", room: "Lab 2", prof: "Instructor Name" }],
    Fri: [{ time: "3:00 – 5:00", code: "SUBJ 105", name: "Subject Name", room: "Room 000", prof: "Instructor Name" }],
    Sat: []
  },
  resources: [
    { title: "Resource Title", desc: "Short description of the resource.", category: "Programming", url: "#resources" },
    { title: "Resource Title", desc: "Short description of the resource.", category: "Web Dev", url: "#resources" },
    { title: "Resource Title", desc: "Short description of the resource.", category: "Networking", url: "#resources" },
    { title: "Resource Title", desc: "Short description of the resource.", category: "Tools", url: "#resources" },
    { title: "Resource Title", desc: "Short description of the resource.", category: "Study", url: "#resources" },
    { title: "Resource Title", desc: "Short description of the resource.", category: "Programming", url: "#resources" }
  ],
  announcements: [
    { date: "2026-10-01", tag: "Exam", title: "Announcement Title", body: "Details about the announcement go here." },
    { date: "2026-09-28", tag: "Event", title: "Announcement Title", body: "Details about the announcement go here." },
    { date: "2026-09-20", tag: "Reminder", title: "Announcement Title", body: "Details about the announcement go here." }
  ],
  projects: [
    { name: "Project Name", desc: "What this project does.", tags: ["HTML", "CSS", "JS"], repo: "#" },
    { name: "Project Name", desc: "What this project does.", tags: ["Python"], repo: "#" },
    { name: "Project Name", desc: "What this project does.", tags: ["Java"], repo: "#" }
  ]
};
