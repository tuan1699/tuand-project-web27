import "../css/recipes.css";
import "../component/auth.css";
import "../component/footer.css";
import "../component/sidebar.css";
import "../component/header.css";
import $ from "jquery";
import _ from "lodash";

import "../js/modal.js";

const recipesList = [
  {
    id: 1,
    name: "CÁCH LÀM GÀ ĂN MÀY CAO SANG QUYỀN QUÝ",
    thumb: "./img/recipes/ga-an-may.png",
    auth: "Hà Vy",
    date: "March 13, 2021",
    duration: "45",
    season: "spring",
    region: "north",
    type: "main",
    method: "luoc",
  },

  {
    id: 2,
    name: "HÀU NƯỚNG PHOMAI NGON NHẤT THẾ GIỚI",
    thumb: "./img/recipes/ga-an-may.png",
    auth: "Hà Vy",
    date: "March 13, 2021",
    duration: "45",
    season: "spring",
    region: "north",
    type: "main",
    method: "luoc",
  },
  {
    id: 3,
    name: "CÁCH LÀM GÀ ĂN MÀY CAO SANG QUYỀN QUÝ",
    thumb: "./img/recipes/xoi-ga.png",
    auth: "Hà Vy",
    date: "March 13, 2021",
    duration: "45",
    season: "spring",
    region: "north",
    type: "main",
    method: "luoc",
  },

  {
    id: 4,
    name: "CÁCH LỌC XƯƠNG GÀ LUỘC CỰC DỄ",
    thumb: "./img/recipes/ga-luoc.png",
    auth: "Hà Vy",
    date: "March 13, 2021",
    duration: "45",
    season: "spring",
    region: "north",
    type: "main",
    method: "luoc",
  },

  {
    id: 5,
    name: "CÁCH MUỐI CÁ HỒI RUBY SIÊU TO KHỔNG LỒ",
    thumb: "./img/recipes/ca-hoi.png",
    auth: "Hà Vy",
    date: "March 13, 2021",
    duration: "45",
    season: "spring",
    region: "north",
    type: "main",
    method: "luoc",
  },

  {
    id: 6,
    name: "CÁ TRẮM KHO MĂNG CAY BẰNG NỒI ÁP SUẤT",
    thumb: "./img/recipes/ca-tram.png",
    auth: "Hà Vy",
    date: "March 13, 2021",
    duration: "45",
    season: "spring",
    region: "north",
    type: "main",
    method: "luoc",
  },

  {
    id: 7,
    name: "CÁ VƯỢC OM XỐT YOSENABE KIỂU NHẬT",
    thumb: "./img/recipes/ca-vuoc.png",
    auth: "Hà Vy",
    date: "March 13, 2021",
    duration: "45",
    season: "spring",
    region: "north",
    type: "main",
    method: "luoc",
  },

  {
    id: 8,
    name: "THỊT KHÂU NHỤC KIỂU QUẢNG ĐÔNG",
    thumb: "./img/recipes/khau-nhuc.png",
    auth: "Hà Vy",
    date: "March 13, 2021",
    duration: "45",
    season: "spring",
    region: "north",
    type: "main",
    method: "luoc",
  },
  {
    id: 9,
    name: "CÁCH LÀM GÀ NƯỚNG CAY XÈ PIRI PIRI",
    thumb: "./img/recipes/ga-nuong.png",
    auth: "Hà Vy",
    date: "March 13, 2021",
    duration: "45",
    season: "spring",
    region: "north",
    type: "main",
    method: "luoc",
  },
  {
    id: 10,
    name: "MẸO CHIÊN CÁ GIÒN TAN Bằng NCKD",
    thumb: "./img/recipes/ca-chien.png",
    auth: "Hà Vy",
    date: "March 13, 2021",
    duration: "45",
    season: "spring",
    region: "north",
    type: "main",
    method: "luoc",
  },
  {
    id: 11,
    name: "TỰ LÀM THỊT QUAY GIÒN BÌ",
    thumb: "./img/recipes/thit-quay.png",
    auth: "Hà Vy",
    date: "March 13, 2021",
    duration: "45",
    season: "spring",
    region: "north",
    type: "main",
    method: "luoc",
  },
];

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

// DÙNG TEMPLATE

const addToFav = (event) => {
  event.preventDefault();

  const favouriteBox = JSON.parse(localStorage.getItem("favBox")) || [];

  const item = favouriteBox.find((i) => i.id === event.data.id);

  if (item) {
    alert("Bạn rất muốn thực hiện món ăn này đúng không? Mau mau vào bếp nào");
  } else {
    favouriteBox.push(event.data);
    alert("Đã thêm vào danh sách yêu thích");
  }

  localStorage.setItem("favBox", JSON.stringify(favouriteBox));

  console.log("test");
};

let start = 0;
let itemPerPage = 3;
let end = itemPerPage;
let currentPage = 1;
let totalPage = Math.ceil(recipesList.length / itemPerPage);
const numberCurrent = document.querySelector(".current-page");

function renderRecipes() {
  const recipesTemplate = $("#recipesTemp").html();

  const recipe = _.template(recipesTemplate);

  let html = _.map(recipesList, (recipes, index) => {
    if (index >= start && index < end) {
      const dom = $(recipe(recipes));

      dom.find(".add-favourite").on("click", recipes, addToFav);

      return dom;
    }
  });
  $(".recipes-list").html("");
  $(".recipes-list").append(html);
}

// NEXT PAGE
const nextBtn = document.querySelector(".next-page");
nextBtn.addEventListener("click", () => {
  if (currentPage < totalPage) {
    currentPage++;
  } else {
    currentPage = totalPage;
  }
  console.log(currentPage);

  start = (currentPage - 1) * itemPerPage;
  end = currentPage * itemPerPage;
  renderRecipes();
  numberCurrent.textContent = currentPage;
});

// PREV PAGE
const prevBtn = document.querySelector(".prev-page");
prevBtn.addEventListener("click", () => {
  if (currentPage <= 1) {
    currentPage = 1;
  } else {
    currentPage--;
  }
  console.log(currentPage);
  start = (currentPage - 1) * itemPerPage;
  end = currentPage * itemPerPage;
  renderRecipes();
  numberCurrent.textContent = currentPage;
});

renderRecipes();
