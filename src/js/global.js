import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "css/global.css";

// import $ from "jquery";
const userBtn = document.querySelector(".user-btn");
const modalBg = document.querySelector(".modal-bg");
const registerForm = document.querySelector(".register-form");
const modalOverlay = document.querySelector(".modal-overlay");
const direcRegister = document.querySelector(".direc-register");
const direcLogin = document.querySelector(".direc-login");
const loginForm = document.querySelector(".login-form");
userBtn.onclick = function () {
  modalBg.style.display = "flex";
};

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
