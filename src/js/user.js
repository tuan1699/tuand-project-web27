import "../css/user.css";

import "../component/auth.css";
import "../component/footer.css";
import "../component/sidebar.css";
import "../component/header.css";
import $ from "jquery";
import _ from "lodash";
// import { recipesList } from "./db";

import "../js/modal.js";

//  NAVBAR JS
const navItems = document.querySelectorAll(".user-nav-item");
const userContents = document.querySelectorAll(".user-content-item");

navItems.forEach((navItem, index) => {
  navItem.onclick = () => {
    document.querySelector(".user-nav-item.active").classList.remove("active");
    document
      .querySelector(".user-content-item.active")
      .classList.remove("active");
    navItem.classList.add("active");
    userContents[index].classList.add("active");
  };
});

// BÀI VIẾT ĐÃ THÍCH

$(function () {
  const favBox = JSON.parse(localStorage.getItem("favBox")) || [];
  const favTemp = $("#favItem").html();

  const favItem = _.template(favTemp);
  $(".fav-field").append(
    _.map(favBox, (fav) => {
      const dom = $(favItem(fav));
      dom.find(".remove-btn").on("click", fav, deleteItem);
      return dom;
    })
  );
});

const deleteItem = (event) => {
  event.preventDefault();
  let favBox = JSON.parse(localStorage.getItem("favBox")) || [];
  favBox = _.filter(favBox, (i) => i.id !== event.data.id);

  localStorage.setItem("favBox", JSON.stringify(favBox));

  event.target.closest(".blog-item").remove();
};
