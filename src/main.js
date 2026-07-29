const header = document.querySelector("[data-nav]");
const toggle = document.querySelector(".nav-toggle");
const toggleLabel = document.querySelector("[data-toggle-label]");

function setMenu(isOpen) {
  header?.classList.toggle("is-open", isOpen);
  toggle?.setAttribute("aria-expanded", String(isOpen));
  if (toggleLabel) toggleLabel.textContent = isOpen ? "Cerrar menú" : "Abrir menú";
}

toggle?.addEventListener("click", () => {
  setMenu(!header?.classList.contains("is-open"));
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});
