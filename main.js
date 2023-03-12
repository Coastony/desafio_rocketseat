const btnMobile = document.getElementById("btn-mobile");

// Toggle nav
function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();

  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");

  event.currentTarget.setAttribute("aria-expanded", active);

  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// Scroll Reveal

ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400
});

ScrollReveal().reveal('.square, .earth', { delay: 300, origin: 'right'});
ScrollReveal().reveal('.square_kid, .kid', { delay: 300, origin: 'left'});
ScrollReveal().reveal('.img_service', { delay: 300, origin: 'top'});
ScrollReveal().reveal('.card', { delay: 300, origin: 'top'});
ScrollReveal().reveal('.lets-right, .lets-left', { delay: 300, origin: 'left'});
