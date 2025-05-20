const plusBtn = document.querySelectorAll(".faq-plusBtn");

const plusIcon = "./assets/icons/plus.svg";
const minusIcon = "./assets/icons/minus.svg";

plusBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    const questionContainer = btn.closest(".faq-question-container");
    const answer = questionContainer.nextElementSibling;

    const isAnswerVisible = answer.classList.toggle("visible");
    btn.src = isAnswerVisible ? minusIcon : plusIcon;
  });
});
