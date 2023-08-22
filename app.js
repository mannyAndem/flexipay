// Interactions for the how-it-works section

const howItWorksImg = document.querySelector("#how-it-works-img");

// download hover
const download = document.querySelector("#download");
download.addEventListener("mouseover", () => {
  fadeInOut("assets/images/download.png");
});
// download.addEventListener("mouseleave", () => {
//   fadeInOut("assets/images/Frame 427321149.png");
// });

// register hover
const register = document.querySelector("#register");
register.addEventListener("mouseover", () => {
  fadeInOut("assets/images/register.png");
});
// register.addEventListener("mouseleave", () => {
//   howItWorksImg.src = "assets/images/Frame 427321149.png";
// });

// verify account hover
const verify = document.querySelector("#verify");
verify.addEventListener("mouseover", () => {
  fadeInOut("assets/images/verify-account.png");
});
// verify.addEventListener("mouseleave", () => {
//   howItWorksImg.src = "assets/images/Frame 427321149.png";
// });

// start transacting hover
const startTransacting = document.querySelector("#start-transacting");
startTransacting.addEventListener("mouseover", () => {
  fadeInOut("assets/images/start-transacting.png");
});
// startTransacting.addEventListener("mouseleave", () => {
//   howItWorksImg.src = "assets/images/Frame 427321149.png";
// });

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
