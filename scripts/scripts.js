// ##### scroll window functions trigger #####

window.onscroll = () => {
  showNavbar();
  highlightNavbarLink();
  fadeInEffect();
}

// ##### show navbar function #####

const navbarHeaderElement = document.querySelector("[data-showNavbarHeader]");

function showNavbar() {
  let documentElementScrollTop = document.documentElement.scrollTop;
  
  if (documentElementScrollTop > 20) {
    navbarHeaderElement.style.top = "0";
  } else {
    navbarHeaderElement.style.top = "-110px";
  }
}

// ##### highlight navbar link function #####

const navbarLinkSectionElements = document.querySelectorAll("[data-highlightNavbarLinkSection]");
const navbarLinkBtnElements = document.querySelectorAll("[data-highlightNavbarLinkBtn]");

function highlightNavbarLink() {
  navbarLinkSectionElements.forEach(navbarLinkSectionElement => {
    let top = window.scrollY;
    let offset = navbarLinkSectionElement.offsetTop - 150;
    let height = navbarLinkSectionElement.offsetHeight;
    let id = navbarLinkSectionElement.getAttribute("id");

    if(top >= offset && top < offset + height) {
      navbarLinkBtnElements.forEach(navbarLinkBtnElement => {
        navbarLinkBtnElement.classList.remove("active");
        document.querySelector("[data-highlightNavbarLinkBtn][href*=" + id + "]").classList.add("active");
      });

    }
  });
}


// ##### fade in effect direction #####

// const fadeInContainerElements = document.querySelectorAll("[data-fadeInEffectContainer]");
// const fadeInElements = document.querySelectorAll("[data-fadeInEffectDirection]");

// function fadeInEffect() {


//   fadeInContainerElements.forEach(fadeInContainerElement => {

//     let top = window.scrollY;
//     let offset = fadeInContainerElement.offsetTop;
//     let id = fadeInElement.dataset.fadeineffectid;

//     let matchId = document.querySelector("[data-fadeInEffectDirection][href*=" + id + "]")
    
//     if(top >= offset) {
//       fadeInElements.forEach(fadeInElement => {
        
//         let fadeInDirection = fadeInElement.dataset.fadeineffectdirection;

//         switch (fadeInDirection) {
//           case 'top':
//             fadeInElement.classList.add("fadeInTop");
//             break;
//           case 'bottom':
//             fadeInElement.classList.add("fadeInBottom");
//             break;
//           case 'left':
//             fadeInElement.classList.add("fadeInLeft");
//             break;
//           case 'right':
//             fadeInElement.classList.add("fadeInRight");
//           break;
//         }
//       });
//     }
//   });
// }



// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       let fadeInElements = document.querySelectorAll("[data-fadeInDirection]");
//       fadeInElements.forEach(fadeInElement => {
//         let direction = fadeInElement.dataset.fadeindirection;
//         console.log(fadeInElement);
//         switch (direction) {
//           case 'top':
//             fadeInElement.classList.add("fadeInTop");
//             break;
//           case 'bottom':
//             fadeInElement.classList.add("fadeInBottom");
//             break;
//           case 'left':
//             fadeInElement.classList.add("fadeInLeft");
//             break;
//           case 'right':
//             fadeInElement.classList.add("fadeInRight");
//           break;
//         }
//       });
//     };
//   });
// });

// const fadeInElementsContainers = document.querySelectorAll("[data-fadeIn]");
// fadeInElementsContainers.forEach(fadeInElementsContainer => {
//   observer.observe(fadeInElementsContainer);
// })

