const header = document.querySelector("[data-nav]");
const toggle = document.querySelector(".nav-toggle");

toggle?.addEventListener("click", () => {
  const isOpen = header?.classList.toggle("is-open") || false;
  toggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    header?.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});
