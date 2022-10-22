import "../css/user.css";

import "../component/auth.css";
import "../component/footer.css";
import "../component/sidebar.css";
import "../component/header.css";
import "../css/create-post.css";

import "../js/modal.js";
import $ from "jquery";

const navItems = document.querySelectorAll(".ingre-nav-item");
const ingreContents = document.querySelectorAll(".ingre-content-item");

navItems.forEach((navItem, index) => {
  navItem.onclick = () => {
    document.querySelector(".ingre-nav-item.active").classList.remove("active");
    document
      .querySelector(".ingre-content-item.active")
      .classList.remove("active");
    navItem.classList.add("active");
    ingreContents[index].classList.add("active");
  };
});

// MAIN INGREDIENT
const listIngredient = document.querySelector(".list-ingredient");
const addBtn = document.querySelector(".add-btn");
const input = document.querySelector("#input");
const nameIngredient = document.querySelector(".name-ingredient");
const quantityIngre = document.querySelector(".quantity-main");
const unit = document.querySelector(".unit-input");
// Thêm nguyên liệu
function addIngredient() {
  console.log("test");
  let item = document.createElement("div");

  item.classList.add("ingredient-item");
  item.innerHTML = `<p class="ingredient-item-name"><i class="bi bi-x-circle delete-ingre"></i>${
    nameIngredient.value
  }</p>
  <div class="ingredient-quantity">
    <span class="quantity">${quantityIngre.value}</span>
    <span class="unit">${unit.options[unit.selectedIndex].value}</span>
  </div>`;
  listIngredient.appendChild(item);
  input.value = "";
}

addBtn.addEventListener("click", addIngredient);

// Xóa nguyên liệu
listIngredient.addEventListener("click", (e) => {
  if (e.target.classList.contains("bi-x-circle")) {
    e.target.parentElement.parentElement.remove();
  }
});

// SPICE

const listSpice = document.querySelector(".list-spice");
const addSpiceBtn = document.querySelector(".add-btn-spice");
const inputSpice = document.querySelector("#input-spice");
const nameSpice = document.querySelector(".name-spice");
const quantitySpice = document.querySelector(".quantity-spice");
const unitSpice = document.querySelector(".unit-spice-input");
// Thêm gia vị
function addSpice() {
  let itemSpice = document.createElement("div");

  itemSpice.classList.add("spice-item");
  itemSpice.innerHTML = `<p class="ingredient-item-name"><i class="bi bi-x-circle delete-ingre"></i>${
    nameSpice.value
  }</p>
    <div class="ingredient-quantity">
      <span class="quantity">${quantitySpice.value}</span>
      <span class="unit">${
        unitSpice.options[unitSpice.selectedIndex].value
      }</span>
    </div>`;
  listSpice.appendChild(itemSpice);
  inputSpice.value = "";
}

addSpiceBtn.addEventListener("click", addSpice);

// Xóa nguyên liệu
listSpice.addEventListener("click", (e) => {
  if (e.target.classList.contains("bi-x-circle")) {
    e.target.parentElement.parentElement.remove();
  }
});

// CREATE STEP

const listStep = document.querySelector(".list-step");
const addStepBtn = document.querySelector(".add-step-btn");
const decrInput = document.querySelector(".decr-input");

const listStepArr = [];

// function renderList() {
//   const items = listStepArr.map((item, index) => {
//     return `<div class="step-item">
//     <div class="step-heading d-flex justify-content-between">
//     <div>Bước <span class="step-number">${index + 1}</span></div>
//     <div class="deleteBtn">Xóa</div>
//     </div>
//     <textarea
//       name=""
//       id=""
//       cols="30"
//       rows="10"
//       class="decr-input"
//       placeholder="Mô tả"
//     >${item.decr}</textarea>
//     <input type="file" name="" id="" />
//   </div>`;
//   });
//   listStep.innerHTML = items.join("");
// }

function renderList() {
  listStep.innerHTML = "";
  const items = listStepArr.map((item, index) => {
    const parser = new DOMParser();
    const dom = parser.parseFromString(
      `<div class="step-item">
    <div class="step-heading d-flex justify-content-between">
    <div>Bước <span class="step-number">${index + 1}</span></div>
    <div class="deleteBtn" data = "${index}">Xóa</div>
    </div>
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      class="decr-input"
      placeholder="Mô tả"
    >${item.decr}</textarea>
    <input type="file" name="" id="" />
  </div>`,
      "text/html"
    );
    return dom;
  });

  items.forEach((item) => {
    const content = item.querySelector(".step-item");
    const del = item.querySelector(".deleteBtn");
    del.addEventListener("click", deleteBtn(del.getAttribute("data")));
    listStep.append(content);
  });
}

function deleteBtn(index) {
  console.log(index);
}

addStepBtn.addEventListener("click", () => {
  const newStep = {
    id: listStepArr.length + 1,
    decr: `${decrInput.value}`,
  };

  decrInput.value = "";
  listStepArr.push(newStep);
  renderList();
});
