import "css/index.css";

const menuBtn = document.querySelector(".menu-btn");
const menuSidebar = document.querySelector(".menu-sidebar");
const modalLayer = document.querySelector(".modal-layer");

menuBtn.addEventListener("click", function () {
  modalLayer.style.display = "block";
  console.log("t");
});

window.addEventListener("click", function (e) {
  if (!e.target.matches(".menu-sidebar") && e.target.matches(".modal-layer")) {
    modalLayer.style.display = "none";
  }
});
