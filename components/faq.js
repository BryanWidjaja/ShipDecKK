const questionContainers = document.querySelectorAll(".faq-question-container");

const plusIcon = "./assets/icons/plus.svg";
const minusIcon = "./assets/icons/minus.svg";

questionContainers.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const faqBtn = question.querySelector("img");

    const isAnswerVisible = answer.classList.toggle("visible");
    faqBtn.src = isAnswerVisible ? minusIcon : plusIcon;
  });
});
