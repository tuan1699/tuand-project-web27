import "../css/user.css";

import "../component/auth.css";
import "../component/footer.css";
import "../component/sidebar.css";
import "../component/header.css";

import "../js/modal.js";

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
