// nav menu functionality
const navMenu = document.querySelector(".nav-menu-mobile");
const navToggle = document.querySelector(".nav-toggle");
const navToggleOpen = document.querySelector(".open");
const navToggleClose = document.querySelector(".close");

navToggleOpen.addEventListener("click", () => {
  navToggleOpen.classList.add("nav-hidden");
  navMenu.classList.remove("nav-hidden");
  navToggleClose.classList.remove("nav-hidden");
});
navToggleClose.addEventListener("click", () => {
  navToggleClose.classList.add("nav-hidden");
  navMenu.classList.add("nav-hidden");
  navToggleOpen.classList.remove("nav-hidden");
});

// Interactions for the how-it-works section

// function to make the images fade smoothly in and out
function fadeInOut(imgUrl) {
  howItWorksImg.classList.add("fade-out");
  setTimeout(() => {
    howItWorksImg.src = imgUrl;
    howItWorksImg.classList.add("fade-in");
    howItWorksImg.classList.remove("fade-out");
    setTimeout(() => {
      howItWorksImg.classList.remove("fade-in");
    }, 100);
  }, 100);
}
const howItWorksImg = document.querySelector("#how-it-works-img");

// download hover
const download = document.querySelector("#download");
download.addEventListener("mouseover", () => {
  fadeInOut("assets/images/download-img.png");
});

// register hover
const register = document.querySelector("#register");
register.addEventListener("mouseover", () => {
  fadeInOut("assets/images/register.png");
});

// verify account hover
const verify = document.querySelector("#verify");
verify.addEventListener("mouseover", () => {
  fadeInOut("assets/images/verify-account.png");
});

// start transacting hover
const startTransacting = document.querySelector("#start-transacting");
startTransacting.addEventListener("mouseover", () => {
  fadeInOut("assets/images/start-transacting.png");
});

// Interactions for the accordion section

const accordion = document.querySelector("#accordion");
let accordionToggles = document.querySelectorAll(".faq-toggle");

accordionToggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    toggle.parentElement.nextElementSibling.classList.toggle("hidden");
    accordionToggles.forEach((toggle) => {
      if (toggle != e.target) {
        toggle.parentElement.nextElementSibling.classList.add("hidden");
      }
    });
  });
});
