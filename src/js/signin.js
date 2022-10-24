const signInForm = document.querySelector("#sign-in-form");
const modalBg = document.querySelector(".modal-bg");
const userBtn = document.querySelector(".bi-person-circle");
const userFeatures = document.querySelector(".user-features ");
const signInName = document.querySelector(".signin-name");
const signInPasswors = document.querySelector(".signin-password");
import $ from "jquery";

let isLogin = localStorage.getItem("token") ? true : false;

$(function () {
  if (isLogin) {
    const userFeatures = document.querySelector(".user-features");

    userFeatures.style.display = "block";
  }
});
const logOut = document.querySelector(".log-out");

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();

  login();
});

function login() {
  const listAccount = JSON.parse(localStorage.getItem("listAccount"));

  let checkLogin = listAccount.some(
    (acc) =>
      acc.name === signInName.value && acc.password === signInPasswors.value
  );

  if (checkLogin) {
    alert("Đăng nhập thành công");
    isLogin = true;
    localStorage.setItem("token", JSON.stringify(signInName.value));
    signInName.value = "";
    signInPasswors.value = "";
    modalBg.style.display = "none";
  } else {
    let errorMessage = signInForm.querySelector(".message-error");

    errorMessage.innerText = "Tài khoản hoặc mật khẩu không chính xác";
    signInName.value = "";
    signInPasswors.value = "";
    isLogin = false;
  }

  const userFeatures = document.querySelector(".user-features");

  userFeatures.style.display = "block";

  console.log(localStorage.getItem("token"));
}

logOut.onclick = function () {
  localStorage.removeItem("token");
  const userFeatures = document.querySelector(".user-features");
  userFeatures.style.display = "none";

  window.location.href = "index.html";
};

userBtn.onclick = function () {
  let isLogin = localStorage.getItem("token") ? true : false;

  if (isLogin) {
  } else {
    modalBg.style.display = "flex";
  }
};
