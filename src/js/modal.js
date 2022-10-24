// MODAL SIGIN IN/ SIGN UP
import $ from "jquery";


const modalBg = document.querySelector(".modal-bg");
const registerForm = document.querySelector(".register-form");
const modalOverlay = document.querySelector(".modal-overlay");
const direcRegister = document.querySelector(".direc-register");
const direcLogin = document.querySelector(".direc-login");
const loginForm = document.querySelector(".login-form");

$(function () {


  modalOverlay.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (!e.target.matches(".register-form")) {
      modalBg.style.display = "none";
    }
  });

  direcRegister.addEventListener("click", function (e) {
    registerForm.style.display = "block";
    loginForm.style.display = "none";
  });

  direcLogin.addEventListener("click", function (e) {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
  });

  // MODAL MENU

  const menuBtn = document.querySelector(".menu-btn");
  const menuSidebar = document.querySelector(".menu-sidebar");
  const modalLayer = document.querySelector(".modal-layer");

  menuBtn.addEventListener("click", function () {
    modalLayer.style.display = "block";
    console.log("t");
  });

  window.addEventListener("click", function (e) {
    if (
      !e.target.matches(".menu-sidebar") &&
      e.target.matches(".modal-layer")
    ) {
      modalLayer.style.display = "none";
    }
  });
});
