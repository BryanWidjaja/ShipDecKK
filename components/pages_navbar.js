const navBar = document.querySelector(".navbar");
const landingSection = document.querySelector(".landing");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
  const landingHeight = landingSection.offsetHeight;
  const currentScrollY = window.scrollY;

  let opacity = currentScrollY / landingHeight;
  if (currentScrollY === 0) {
    opacity = 1;
  } else {
    opacity = currentScrollY / landingHeight;
    if (opacity > 1) opacity = 1;
  }

  navBar.style.background = `linear-gradient(135deg, rgba(41, 55, 59, ${opacity}), rgba(24, 39, 48, ${opacity}))`;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    navBar.style.transform = "translateY(-100%)";
  } else {
    navBar.style.transform = "translateY(0)";
  }

  lastScrollY = currentScrollY;
});
