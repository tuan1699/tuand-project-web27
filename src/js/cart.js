import "../component/auth.css";
import "../component/footer.css";
import "../component/sidebar.css";
import "../component/header.css";
import "../css/cart.css";
import $ from "jquery";
import _ from "lodash";

import "../js/modal.js";
import "../js/auth.js";
import "../js/signin.js";

// PAY METHOD

const btnPayMethodList = document.querySelectorAll("#pay-option");

btnPayMethodList.forEach((btnPayMethod) => {
  btnPayMethod.addEventListener("click", () => {
    const parrent = btnPayMethod.parentElement;
    const methodDecr = parrent.querySelector(".method-decr");
    const methodDecrtList = document.querySelectorAll(".method-decr");
    for (let i = 0; i < methodDecrtList.length; i++) {
      methodDecrtList[i].style.maxHeight = null;
    }
    if (methodDecr.style.maxHeight) {
      methodDecr.style.maxHeight = null;
    } else {
      methodDecr.style.maxHeight = methodDecr.scrollHeight + "px";
    }
  });
});

// Render cart từ local Storage

function renderCart() {
  const cartBox = JSON.parse(localStorage.getItem("cartBox")) || [];
  const cartItemTemp = $("#item-in-cart").html();

  const cartItem = _.template(cartItemTemp);

  if (cartBox.length !== 0) {
    $(".cart-list").html("");
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
        <div class="course-price">${course.price} Đ</div>
      </div>`;
      }).join("")
    );
    sum();
  }
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
const checkoutForm = document.querySelector("#check-out-form");
const firstNameCheckout = document.querySelector("#first-name");
const lastNameCheckout = document.querySelector("#last-name");
const phoneCheckout = document.querySelector("#number-phone");
const mailCheckout = document.querySelector("#email-checkout");
const addressCheckout = document.querySelector("#address");

function showError(input, message) {
  let errorMessage = input.parentElement.querySelector(".message-error");

  input.classList.add("error");
  errorMessage.innerText = message;
}

function showSucess(input) {
  let errorMessage = input.parentElement.querySelector(".message-error");

  input.classList.remove("error");
  errorMessage.innerText = "";
}

function checkEmptyError(listInput) {
  let isEmptyError = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();

    if (!input.value) {
      isEmptyError = true;
      showError(input, "Vui lòng nhập đầy đủ thông tin");
    } else {
      showSucess(input);
    }
  });

  return isEmptyError;
}

function checkEmailError(input) {
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  input.value = input.value.trim();
  let isEmailError = !regexEmail.test(input.value);

  if (regexEmail.test(input.value)) {
    showSucess(input);
  } else {
    showError(input, "Email không hợp lệ");
  }

  return isEmailError;
}

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let isEmptyErr = checkEmptyError([
    firstNameCheckout,
    lastNameCheckout,
    phoneCheckout,
    addressCheckout,
  ]);

  let isEmailErr = checkEmailError(mailCheckout);

  if (isEmailErr || isEmptyErr) {
  } else {
    Command: toastr["success"](
      "Đăng ký khóa học thành công, vui lòng kiểm tra Email để nhận thông tin chi tiết"
    );

    toastr.options = {
      closeButton: false,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-bottom-right",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "2000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };

    firstNameCheckout.value = "";
    lastNameCheckout.value = "";
    phoneCheckout.value = "";
    addressCheckout.value = "";
    mailCheckout.value = "";
  }
});
