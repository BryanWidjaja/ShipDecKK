const socialIcons = document.querySelectorAll(".footer-links img");

socialIcons.forEach((img) => {
  const src = img.getAttribute("src");
  const parts = src.split("/");
  const filename = parts.pop();
  const path = parts.join("/");
  const primary = `${path}/primary_${filename}`;

  img.addEventListener("mouseenter", () => {
    img.setAttribute("src", primary);
  });

  img.addEventListener("mouseleave", () => {
    img.setAttribute("src", src);
  });
});
