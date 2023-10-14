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


// ##### fade in effect function #####

const fadeInContainerElements = document.querySelectorAll("[data-fadeInEffectContainerId]");

function fadeInEffect() {

  fadeInContainerElements.forEach(fadeInContainerElement => {

    let fadeInContainerElementId = fadeInContainerElement.dataset.fadeineffectcontainerid;
    let top = window.scrollY + window.innerHeight;
    
    let fadeInElements = document.querySelectorAll("[data-fadeInEffectElementId="+ fadeInContainerElementId +"]");
    
    fadeInElements.forEach(fadeInElement => {
      let offset = fadeInElement.offsetTop + fadeInElement.scrollHeight;
      
      if(top >= offset) {
        let fadeInDirection = fadeInElement.dataset.fadeineffectdirection;

        switch (fadeInDirection) {
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
      }});
  });
}

