import "../css/cart.css";

import "../component/auth.css";
import "../component/footer.css";
import "../component/sidebar.css";
import "../component/header.css";

import "../js/modal.js";

const payOption = document.querySelectorAll("#pay-option");
const methodDecr = document.querySelectorAll(".method-decr");
payOption.forEach((optionItem, index) => {
  optionItem.onclick = () => {
    document.querySelector(".method-decr.active").classList.remove("active");

    methodDecr[index].classList.add("active");
  };
});
