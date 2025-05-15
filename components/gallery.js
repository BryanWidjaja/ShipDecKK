const categories = document.querySelectorAll(".category");
const galleryRows = document.querySelectorAll(".gallery-row");

const showAll = document.getElementById("show-all");
const showYacht = document.getElementById("show-yacht");
const showLiner = document.getElementById("show-liner");
const showCargo = document.getElementById("show-cargo");

const yachtRow = document.getElementById("yacht");
const linerRow = document.getElementById("liner");
const cargoRow = document.getElementById("cargo");

const resetCategories = () => {
  categories.forEach((category) => {
    category.classList.remove("selected");
  });
};

const resetGalleryRows = () => {
  galleryRows.forEach((row) => {
    row.classList.add("display-none");
  });
};

const selectCategory = (category) => {
  resetCategories();
  category.classList.add("selected");
};

const showRow = (row) => {
  row.classList.remove("display-none");
};

const galleryRowClicked = (showCategory, category) => {
  showCategory.addEventListener("click", () => {
    window.location.hash = `#${category}`;
  });
};

const showAllCategories = () => {
  selectCategory(showAll);
  galleryRows.forEach((row) => {
    row.classList.remove("display-none");
  });
  window.location.hash = "";
};

const changeCategory = (showCategory, categoryRow) => {
  selectCategory(showCategory);
  resetGalleryRows();
  showRow(categoryRow);
};

const hashChange = () => {
  const hash = window.location.hash;
  switch (hash) {
    case "#yachts":
      changeCategory(showYacht, yachtRow);
      break;
    case "#liners":
      changeCategory(showLiner, linerRow);
      break;
    case "#cargos":
      changeCategory(showCargo, cargoRow);
      break;
    default:
      showAllCategories();
      break;
  }
};

document.addEventListener("DOMContentLoaded", hashChange);
window.addEventListener("hashchange", hashChange);

showAll.addEventListener("click", () => {
  showAllCategories();
});

galleryRowClicked(showYacht, "yachts");
galleryRowClicked(showLiner, "liners");
galleryRowClicked(showCargo, "cargos");
