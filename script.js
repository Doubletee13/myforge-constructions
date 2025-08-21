const slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 5000); // 5 seconds per slide





 const toggle = document.getElementById("toggle-menu");
  const nav = document.querySelector("nav");

  document.addEventListener("click", function (e) {
    // Ignore clicks on hamburger itself (label + checkbox)
    if (e.target.closest(".hamburger") || e.target.id === "toggle-menu") return;

    // Close if open and click outside nav
    if (toggle.checked && !nav.contains(e.target)) {
      toggle.checked = false;
    }
  });