import "../component/auth.css";
import "../component/footer.css";
import "../component/sidebar.css";
import "../component/header.css";
import "../css/recipes.css";
import $ from "jquery";
import _ from "lodash";
import { recipesList } from "./db";
import { addToFav } from "./ulist";
import { addToRecipesBox } from "./ulist";

import "../js/modal.js";

// DÙNG DOM PARSER ĐỂ THÊM VÀO DANH SÁCH YÊU THÍCH

// $(".recipes-list").append(
//   recipesList.map((recipes) => {
//     const dom = $(`<div class="col-6 col-sm-6 col-lg-4">

//           <div class="recipes-item border-item">
//             <div class="recipes-item-thumb position-relative">
//               <img src="${recipes.thumb}" alt="" />
//               <span class="add-favourite position-absolute">
//                 <i class="bi bi-bookmark"></i>
//               </span>
//             </div>

//             <div class="recipes-item-decr">
//               <div class="recipes-item-name">
//               ${recipes.name}
//               </div>
//               <div
//                 class="item-info d-none d-sm-flex d-flex align-items-center"
//               >
//                 <div class="item-by">by ${recipes.auth}</div>
//                 <div class="item-time">${recipes.date}</div>
//               </div>
//               <div
//                 class="recipes-item-bonus d-flex justify-content-between"
//               >
//                 <div class="duration">
//                   ${recipes.duration} phút<i class="duration-icon bi bi-clock"></i>
//                 </div>
//                 <div class="recipes-feature">
//                   <i class="share bi bi-share"></i>
//                 </div>
//               </div>
//             </div>
//           </div>

//       </div>`);

//     const favBtn = dom.find(".add-favourite");

//     dom.find(".add-favourite").on("click", () => {
//       const favouriteBox = JSON.parse(localStorage.getItem("favBox")) || [];

//       const item = favouriteBox.find((i) => i.id === recipes.id);

//       if (item) {
//         alert(
//           "Bạn rất muốn thực hiện món ăn này đúng không? Mau mau vào bếp nào"
//         );
//       } else {
//         favouriteBox.push(recipes);
//         alert("Đã thêm vào danh sách yêu thích");
//       }

//       localStorage.setItem("favBox", JSON.stringify(favouriteBox));

//       console.log(favouriteBox);
//     });
//     return dom;
//   })
// );

const bySeason = document.querySelector("#season");
const byRegion = document.querySelector("#region");
const bycategory = document.querySelector("#category");
const byTime = document.querySelector("#time");
const byMethod = document.querySelector("#process");

// DÙNG TEMPLATE

// let start = 0;
// let itemPerPage = 12;
// let end = itemPerPage;
// let currentPage = 1;
// let totalPage = Math.ceil(recipesList.length / itemPerPage);
// const numberCurrent = document.querySelector(".current-page");

function renderRecipes(recipesList) {
  const recipesTemplate = $("#recipesTemp").html();

  const recipe = _.template(recipesTemplate);

  let html = _.map(recipesList, (recipes, index) => {
    if (index >= start && index < end) {
      const dom = $(recipe(recipes));

      dom.find(".add-recipesBox").on("click", recipes, addToRecipesBox);

      return dom;
    }
  });
  $(".recipes-list").append(html);
}

$(function () {
  const recipesTemplate = $("#recipesTemp").html();
  const recipe = _.template(recipesTemplate);
  let recipeFilted;

  const url = new URL(location.href);

  const duration = Number(url.searchParams.get("duration"));

  const category = url.searchParams.get("category");

  if (category) {
    bycategory.value = category;
    recipeFilted = _.filter(recipesList, (recipes) => {
      return recipes.category == category;
    });
  } else if (duration) {
    byTime.value = duration;
    recipeFilted = _.filter(recipesList, (recipes) => {
      return recipes.duration < duration;
    });
  } else {
    recipeFilted = _.map(recipesList, (recipes) => recipes);
  }

  console.log(recipeFilted);

  $(".recipes-list").append(
    _.map(recipeFilted, (recipes) => {
      const dom = $(recipe(recipes));

      dom.find(".add-recipesBox").on("click", recipes, addToRecipesBox);

      return dom;
    })
  );
});

// NEXT PAGE
// const nextBtn = document.querySelector(".next-page");
// nextBtn.addEventListener("click", () => {
//   if (currentPage < totalPage) {
//     currentPage++;
//   } else {
//     currentPage = totalPage;
//   }

//   start = (currentPage - 1) * itemPerPage;
//   end = currentPage * itemPerPage;
//   renderRecipes();
//   numberCurrent.textContent = currentPage;
// });

// PREV PAGE
// const prevBtn = document.querySelector(".prev-page");
// prevBtn.addEventListener("click", () => {
//   if (currentPage <= 1) {
//     currentPage = 1;
//   } else {
//     currentPage--;
//   }
//   start = (currentPage - 1) * itemPerPage;
//   end = currentPage * itemPerPage;
//   renderRecipes();
//   numberCurrent.textContent = currentPage;
// });

// LỌC SẢN PHẨM

// bySeason.onchange = function () {
//   renderRecipes();
// };

// function filter(recipesList, filterBy) {
//   let clone;
//   if (filterBy === "#") {
//     clone = recipesList.map((recipes) => recipes);
//   } else {
//     clone = recipesList.filter((recipes) => recipes.season === filterBy);
//   }
//   return clone;
// }

// console.log(bySeason);
// HIỂN THỊ TẤT CẢ CÔNG THỨC

// const resetFilter = document.querySelector(".clear-filter");
// resetFilter.onclick = function () {
//   bySeason.value = "#";
//   byRegion.value = "#";
//   byType.value = "#";
//   byTime.value = "#";
//   byMethod.value = "#";
//   renderRecipes();
// };

// CHI TIẾT SẢN PHẨM
