/* ===== Kamil — CV & Portfolio ===== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const escapeHTML = (s = "") =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

$("#year").textContent = new Date().getFullYear();

// ----- Motyw jasny / ciemny -----
const themeBtn = $("#themeBtn");
const setTheme = (t) => {
  document.documentElement.dataset.theme = t;
  themeBtn.textContent = t === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", t);
};
setTheme(localStorage.getItem("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
themeBtn.addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));

// ----- Automatyczne liczenie czasu pracy & lokalizacja -----
const months = (from, to = "now") => {
  const [fy, fm] = from.split("-").map(Number);
  const now = new Date();
  const [ty, tm] = to === "now" ? [now.getFullYear(), now.getMonth() + 1] : to.split("-").map(Number);
  return (ty - fy) * 12 + (tm - fm) + 1;
};

function formatDuration(y, m, lang) {
  if (lang === "en") {
    const yStr = y ? (y === 1 ? "1 yr" : `${y} yrs`) : "";
    const mStr = m ? (m === 1 ? "1 mo." : `${m} mos`) : "";
    return [yStr, mStr].filter(Boolean).join(" ");
  }
  const yStr = y ? (y === 1 ? "1 rok" : `${y} ${y % 10 >= 2 && y % 10 <= 4 && (y % 100 < 12 || y % 100 > 14) ? "lata" : "lat"}`) : "";
  const mStr = m ? `${m} mies.` : "";
  return [yStr, mStr].filter(Boolean).join(" ");
}

function updateDurations(lang) {
  $$(".dur").forEach((el) => {
    const t = months(el.dataset.from, el.dataset.to);
    const y = Math.floor(t / 12), m = t % 12;
    el.textContent = formatDuration(y, m, lang);
  });
  $$(".counter").forEach((el) => (el.textContent = Math.floor(months(el.dataset.from) / 12) + "+"));
  $$(".dur-static").forEach((el) => {
    el.textContent = lang === "en" ? "1 mo." : "1 mies.";
  });
}

// ----- Obsługa wielojęzyczności (PL / EN) -----
let currentLang = localStorage.getItem("lang") || "pl";

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);

  if (typeof translations !== "undefined" && translations[lang]) {
    const dict = translations[lang];
    if (dict.meta_title) document.title = dict.meta_title;
    const metaDesc = $('meta[name="description"]');
    if (metaDesc && dict.meta_desc) metaDesc.setAttribute("content", dict.meta_desc);

    $$("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });
  }

  $$(".lang-opt").forEach((opt) => {
    opt.classList.toggle("active", opt.dataset.langOpt === lang);
  });

  updateDurations(lang);
}

const langBtn = $("#langBtn");
if (langBtn) {
  langBtn.addEventListener("click", (e) => {
    const targetOpt = e.target.closest("[data-lang-opt]");
    const nextLang = targetOpt ? targetOpt.dataset.langOpt : (currentLang === "pl" ? "en" : "pl");
    setLanguage(nextLang);
  });
}

// Inicjalizacja języka
setLanguage(currentLang);

// ----- Nawigacja: tło po przewinięciu, aktywny link, menu mobilne -----
const nav = $("#nav");
const onScroll = () => nav.classList.toggle("scrolled", scrollY > 20);
onScroll(); addEventListener("scroll", onScroll, { passive: true });

const navLinks = $$(".links a");
const spy = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
$$("main section").forEach((s) => spy.observe(s));

$("#menuBtn").addEventListener("click", () => $("#links").classList.toggle("open"));
navLinks.forEach((a) => a.addEventListener("click", () => $("#links").classList.remove("open")));

// ----- Animacje przy przewijaniu -----
const reveal = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); reveal.unobserve(e.target); } });
}, { threshold: 0.12 });
$$(".section-title, .t-item, .sm-card, .project-showcase")
  .forEach((el) => { el.classList.add("reveal"); reveal.observe(el); });
