const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
});

const hiddenElements = document.querySelectorAll(
  ".hidden-down, .hidden-left, .hidden-right"
);
hiddenElements.forEach((element) => observer.observe(element));
