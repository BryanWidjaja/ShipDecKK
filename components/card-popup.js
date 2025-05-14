const popup = document.getElementById("popup");
const popupImg = document.querySelector(".popup-img");
const popupTitle = document.querySelector(".popup-title");
const popupPrice = document.querySelector(".popup-price");
const popupDesc = document.querySelector(".popup-desc");
const popupClose = document.querySelector(".popup-close");

const cards = document.querySelectorAll(".ship-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img").src;
    const title = card.querySelector(".card-title").textContent;
    const price = card.querySelector(".card-price").textContent;
    const desc = card.querySelector(".card-desc").textContent;

    popupImg.src = img;
    popupTitle.textContent = title;
    popupPrice.textContent = price;
    popupDesc.textContent = desc;

    popup.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

popupClose.addEventListener("click", () => {
  popup.style.display = "none";
  document.body.style.overflow = "visible";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
    document.body.style.overflow = "visible";
  }
});
