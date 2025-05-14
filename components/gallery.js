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

const galleryRowClicked = (showCategory, categoryRow) => {
  showCategory.addEventListener("click", () => {
    selectCategory(showCategory);
    resetGalleryRows();
    showRow(categoryRow);
  });
};

showAll.addEventListener("click", () => {
  selectCategory(showAll);
  galleryRows.forEach((row) => {
    row.classList.remove("display-none");
  });
});

galleryRowClicked(showYacht, yachtRow);
galleryRowClicked(showLiner, linerRow);
galleryRowClicked(showCargo, cargoRow);
