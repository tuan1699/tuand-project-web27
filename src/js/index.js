import "../css/index.css";
import "../component/auth.css";
import "../component/footer.css";
import "../component/header.css";
import $ from "jquery";
import _ from "lodash";
import { addToCart } from "./ulist";
import { addToFav } from "./ulist";
import { addToRecipesBox } from "./ulist";
import { blogList, suggestList } from "./db";
import { recipesList } from "./db";
import { courseList } from "./db";

import "../js/modal.js";
import "../js/auth.js";
import "../js/signin.js";

// SEARCH DISPLAY
const searchInput = document.querySelector(".search-input");

document.querySelector(".bi-search").onclick = function () {
  searchInput.classList.remove("d-none");
  searchInput.classList.toggle("d-block");
};

window.addEventListener("click", function (e) {
  if (!e.target.matches(".search-input") && !e.target.matches(".bi-search")) {
    searchInput.classList.remove("d-block");

    searchInput.classList.add("d-none");
  }
});

$(function () {
  const recipesTemplate = $("#recipesTemplate").html();

  const recipe = _.template(recipesTemplate);
  const recipesHomeList = recipesList.slice(-6);

  const suggestTemplate = $("#suggestTemplate").html();
  const suggestTemp = _.template(suggestTemplate);

  const quickMealTemp = $("#quickTemplate").html();
  const quickTemp = _.template(quickMealTemp);

  const blogTemplate = $("#blogTemplate").html();
  const blogTem = _.template(blogTemplate);

  $(".course-field").append(
    _.map(courseList, (courseItem) => {
      const dom = $(`<div class="col-6 col-sm-6 col-md-4 col-lg-3">
      <a href="course-item.html?id=${courseItem.id}" class="course-link">
        <div class="course-item border-item">
          <div class="course-thumb">
            <img
              src="${courseItem.thumb}"
              alt=""
            />
          </div>
          <div class="course-info">
            <div class="course-name text-center">
            ${courseItem.name}
            </div>
            <p class="course-decr">
            ${courseItem.decr}
            </p>
          </div>
          <button class="course-register">ĐĂNG KÝ KHÓA HỌC</button>
        </div>
      </a>
    </div>`);

      dom.find(".course-register").on("click", courseItem, addToCart);

      return dom;
    })
  );

  $(".recipes-list").append(
    _.map(recipesHomeList, (recipes) => {
      const dom = $(recipe(recipes));

      dom.find(".add-recipesBox").on("click", recipes, addToRecipesBox);

      return dom;
    })
  );

  $(".suggest-list").append(
    _.map(suggestList, (suggest) => {
      const dom = $(suggestTemp(suggest));

      return dom;
    })
  );

  $(".quick-meal-list").append(
    _.map(
      recipesList
        .filter((quickRecipes) => quickRecipes.duration <= 30)
        .slice(0, 6),
      (quickMeal) => {
        const dom = $(quickTemp(quickMeal));

        return dom;
      }
    )
  );

  $(".blog-field").append(
    _.map(blogList.slice(3, 7), (blog) => {
      const dom = $(blogTem(blog));

      dom.find(".add-favourite").on("click", blog, addToFav);

      return dom;
    })
  );
});
