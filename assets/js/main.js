/* =========================================================
   إعدادات الروابط — عدّلها هنا فقط
   Edit your links here (leave "" to hide a button/icon)
   ========================================================= */
const CONFIG = {
  register: "",        // رابط نموذج التسجيل، مثل: https://forms.gle/xxxx
  whatsapp: "",        // رقم واتساب بصيغة دولية بدون + أو مسافات، مثل: 9639XXXXXXXX
  facebook: "",
  instagram: "",
  youtube: "",
  telegram: ""
};

(function () {
  // ---- Apply links ----
  const reg = document.querySelector('[data-link="register"]');
  const wa = document.querySelector('[data-link="whatsapp"]');
  if (reg) {
    if (CONFIG.register) { reg.href = CONFIG.register; reg.target = "_blank"; reg.rel = "noopener"; }
    else reg.href = "#join";
  }
  if (wa) {
    if (CONFIG.whatsapp) { wa.href = "https://wa.me/" + CONFIG.whatsapp; wa.target = "_blank"; wa.rel = "noopener"; }
    else wa.remove();
  }
  const socials = { "فيسبوك": "facebook", "إنستغرام": "instagram", "يوتيوب": "youtube", "تلغرام": "telegram" };
  document.querySelectorAll(".social a").forEach(a => {
    const url = CONFIG[socials[a.getAttribute("aria-label")]];
    if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; } else a.remove();
  });

  // ---- Year ----
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // ---- Header state ----
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

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

  // ---- Reveal on scroll ----
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach(el => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach(el => io.observe(el));
})();
