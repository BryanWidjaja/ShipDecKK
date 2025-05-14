const resizeText = () => {
  const cards = document.querySelectorAll(".ship-card");
  cards.forEach((card) => {
    const title = card.querySelector(".card-title");

    let fontSize = 1.25;

    title.style.fontSize = `${fontSize}rem`;

    const cardPaddingLeft = parseFloat(getComputedStyle(card).paddingLeft);
    const cardPaddingRight = parseFloat(getComputedStyle(card).paddingRight);

    const availableWidth =
      card.offsetWidth - cardPaddingLeft - cardPaddingRight;

    while (title.scrollWidth > availableWidth) {
      fontSize -= 0.05;
      title.style.fontSize = `${fontSize}rem`;
    }
  });
};

resizeText();

window.addEventListener("resize", resizeText);
