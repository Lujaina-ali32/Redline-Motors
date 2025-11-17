const btn = document.querySelector('nav button');
const menu = document.getElementById('mobileMenu');

btn.addEventListener('click', () => {
  menu.classList.toggle('max-h-0');
  menu.classList.toggle('max-h-[500px]');
});


document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("preload");
});

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
