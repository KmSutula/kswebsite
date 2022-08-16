const openFooter = document.getElementById("open");
const closeFooter = document.getElementById("close");
const socialFooter = document.getElementById("social-footer");

openFooter.addEventListener("click", () =>
  socialFooter.classList.add("show-nav")
);

closeFooter.addEventListener("click", () =>
  socialFooter.classList.remove("show-nav")
);

const blockOverlay = document.querySelectorAll(".overlay");

blockOverlay.forEach((block) => {
  block.addEventListener("mouseenter", () => {
    block.classList.contains("overlay-active")
      ? block.classList.remove("overlay-active")
      : block.classList.add("overlay-active");
  });
});

blockOverlay.forEach((block) => {
  block.addEventListener("mouseleave", () => {
    block.classList.contains("overlay-active")
      ? block.classList.remove("overlay-active")
      : block.classList.add("overlay-active");
  });
});

const menuButton = document.getElementById("menulines");
const navMenu = document.getElementById("nav-menu");
const hamburger = document.getElementById("hamburger");

menuButton.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
