// ##### show navbar function #####

window.onscroll = function() {showNavbar(); highlightNavbarLinks()}

function showNavbar() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-110px";
  }
}


// ##### scroll spy #####

let sections = document.querySelectorAll(".section");
let navbarLinks = document.querySelectorAll(".navbar-link");

function highlightNavbarLinks() {
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if(top >= offset && top < offset + height) {
      navbarLinks.forEach(navbarLink => {
        navbarLink.classList.remove("active");
        document.querySelector(".navbar-link[href*=" + id + "]").classList.add("active");
      });

    }
  });
}



const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let fadeInElements = document.querySelectorAll("[data-fadeInDirection]");
      fadeInElements.forEach(fadeInElement => {
        let direction = fadeInElement.dataset.fadeindirection;
        console.log(fadeInElement);
        switch (direction) {
          case 'top':
            fadeInElement.classList.add("fadeInTop");
            break;
          case 'bottom':
            fadeInElement.classList.add("fadeInBottom");
            break;
          case 'left':
            fadeInElement.classList.add("fadeInLeft");
            break;
          case 'right':
            fadeInElement.classList.add("fadeInRight");
          break;
        }
      });
    };
  });
});

const fadeInElementsContainers = document.querySelectorAll("[data-fadeIn]");
fadeInElementsContainers.forEach(fadeInElementsContainer => {
  observer.observe(fadeInElementsContainer);
})