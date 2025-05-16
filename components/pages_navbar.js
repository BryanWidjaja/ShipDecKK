const navBar = document.querySelector(".navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
  const currentScrollY = window.scrollY;

  let opacity = currentScrollY / 300;
  if (currentScrollY === 0) {
    opacity = 1;
  } else {
    opacity = currentScrollY / 300;
    if (opacity > 1) opacity = 1;
  }

  if (!navBar.classList.contains("visible")) {
    navBar.style.background = `linear-gradient(135deg, rgba(41, 55, 59, ${opacity}), rgba(24, 39, 48, ${opacity}))`;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      navBar.style.transform = "translateY(-100%)";
    } else {
      navBar.style.transform = "translateY(0)";
    }
  }

  lastScrollY = currentScrollY;
});

const hamburgerBtn = document.getElementById("hamburger-btn");
const linksContainer = document.querySelector(".links");

const hamburgerIcon = "../assets/icons/hamburger.svg";
const closeIcon = "../assets/icons/white_close.svg";

hamburgerBtn.addEventListener("click", () => {
  const isMenuVisible = linksContainer.classList.toggle("visible");
  navBar.classList.toggle("visible");

  hamburgerBtn.src = isMenuVisible ? closeIcon : hamburgerIcon;
});
