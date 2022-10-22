import "../component/auth.css";
import "../component/footer.css";
import "../component/sidebar.css";
import "../component/header.css";
import "../css/cart.css";
import $ from "jquery";
import _ from "lodash";

import "../js/modal.js";

const payOption = document.querySelectorAll("#pay-option");
const methodDecr = document.querySelectorAll(".method-decr");
payOption.forEach((optionItem, index) => {
  optionItem.onclick = () => {
    document.querySelector(".method-decr.active").classList.remove("active");

    methodDecr[index].classList.add("active");
  };
});

// Render cart từ local Storage

function renderCart() {
  const cartBox = JSON.parse(localStorage.getItem("cartBox")) || [];
  const cartItemTemp = $("#item-in-cart").html();

  const cartItem = _.template(cartItemTemp);
  $(".cart-list").append(
    _.map(cartBox, (course) => {
      const dom = $(cartItem(course));
      dom.find(".delete-course").on("click", course, deleteItem);
      return dom;
    })
  );

  $(".list-check-out").html(
    _.map(cartBox, (course) => {
      return `<div
      class="item-checkout d-flex justify-content-between align-items-center"
    >
      <div class="course-info">
        <div class="row">
          <div class="col-6">
            <img src="${course.thumb}" alt="" />
          </div>
          <div class="col-6">
            <div class="cart-name">
            ${course.name}
            </div>
          </div>
        </div>
      </div>
      <div class="course-price">${course.price.toLocaleString()} Đ</div>
    </div>`;
    }).join("")
  );
  sum();
}

const deleteItem = (event) => {
  event.preventDefault();
  let cartBox = JSON.parse(localStorage.getItem("cartBox")) || [];
  cartBox = _.filter(cartBox, (i) => i.id !== event.data.id);

  localStorage.setItem("cartBox", JSON.stringify(cartBox));

  event.target.closest(".course-item").remove();

  $(".list-check-out").html(
    _.map(cartBox, (course) => {
      return `<div
      class="item-checkout d-flex justify-content-between align-items-center"
    >
      <div class="course-info">
        <div class="row">
          <div class="col-6">
            <img src="${course.thumb}" alt="" />
          </div>
          <div class="col-6">
            <div class="cart-name">
            ${course.name}
            </div>
          </div>  
        </div>
      </div>
      <div class="course-price">${course.price}</div>
    </div>`;
    }).join("")
  );
  sum();
};

renderCart();

// Tính tổng tiền trong giỏ hàng
function sum() {
  let total = 0;

  const cartItems = document.querySelectorAll(".course-item");
  for (let i = 0; i < cartItems.length; i++) {
    let price = cartItems[i].querySelector(".course-price").textContent;

    let newPrice = parseInt(price);
    total += newPrice;
  }
  const totalField = document.querySelector(".summary-price");
  totalField.textContent = total;

  // console.log(cartItems);
}

// sum();
