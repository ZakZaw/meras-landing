(function () {
  // ---- Year ----
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // ---- Mobile menu ----
  const btn = document.querySelector(".menu-btn");
  const nav = document.getElementById("nav");
  const setOpen = open => {
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "إغلاق القائمة" : "فتح القائمة");
    document.body.classList.toggle("menu-open", open);
  };
  btn.addEventListener("click", () => setOpen(btn.getAttribute("aria-expanded") !== "true"));
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", e => { if (e.key === "Escape") setOpen(false); });

  // ---- Camp tabs (all panels stay visible if JS is off) ----
  const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
  const select = tab => {
    tabs.forEach(t => {
      const on = t === tab;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
    });
  };
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => select(t));
    t.addEventListener("keydown", e => {
      // RTL: ArrowLeft moves to the next tab
      const step = e.key === "ArrowLeft" ? 1 : e.key === "ArrowRight" ? -1 : 0;
      if (!step) return;
      const next = tabs[(i + step + tabs.length) % tabs.length];
      next.focus();
      select(next);
    });
  });
  if (tabs.length) select(tabs[0]);
})();
