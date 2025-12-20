const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  const open = navMenu.classList.toggle("show");
  menuBtn.textContent = open ? "✕" : "☰";
  document.body.style.overflow = open ? "hidden" : "auto";
});

navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    menuBtn.textContent = "☰";
    document.body.style.overflow = "auto";
  });
});
