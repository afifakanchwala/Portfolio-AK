/*================ Toggle icon navbar ================*/
let menuIcon = document.querySelector(`#menu-icon`);
let navbar = document.querySelector(`.navbar`);

menuIcon.onclick = () => {
  menuIcon.classList.toggle(`bx-x`);
  navbar.classList.toggle(`active`);
};

/*================ Scroll sections active link ================*/

let sections = document.querySelectorAll(`section`);
let navLinks = document.querySelectorAll(`header nav a`);

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute(`id`);

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove(`active`);
        document
          .querySelector(`header nav a[href*=` + id + `]`)
          .classList.add(`active`);
      });
    }
  });

  /*================ Sticky navbar ================*/
  let header = document.querySelector(`header`);
  header.classList.toggle(`sticky`, window.scrollY > 100);

  /*================ Remove toggle icon and navar when click navbar link (scroll) ================*/
  menuIcon.classList.remove(`bx-x`);
  navbar.classList.remove(`active`);
};

/*================ Scroll Reveal ================*/
ScrollReveal({
  //reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(`.home-content, .heading`, { origin: `top` });
ScrollReveal().reveal(
  `.home-img, .service-container, .portfolio-box, .contact .social-media`,
  { origin: `bottom` }
);
ScrollReveal().reveal(`.home-content h1, .certifications div h3, .skill-left`, {
  origin: `left`,
});
ScrollReveal().reveal(
  `.home-content p, .about-content, .certifications-media, .skill-right`,
  { origin: `right` }
);

/*================ Typed js ================*/
const typed = new Typed(`.multiple-text`, {
  strings: [`MERN Stack Developer`, `Web Developer`, `Tech-Zealot`],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/*================ Circle skills ================*/
const circles = document.querySelectorAll(`.circle`);
circles.forEach((elem) => {
  var dots = elem.getAttribute(`data-dots`);
  var marked = elem.getAttribute(`data-percent`);
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll(`.points`);
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add(`marked`);
  }
});
