const hamburgerBtn = document.getElementById("hamburger-btn");
const linksContainer = document.querySelector(".links");

const hamburgerIcon = "../assets/icons/hamburger.svg";
const closeIcon = "../assets/icons/white_close.svg";

hamburgerBtn.addEventListener("click", () => {
  const isMenuVisible = linksContainer.classList.toggle("visible");
  navBar.classList.toggle("visible");

  hamburgerBtn.src = isMenuVisible ? closeIcon : hamburgerIcon;
});
