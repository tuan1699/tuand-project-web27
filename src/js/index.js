import "../css/index.css";
import "../component/auth.css";
import "../component/footer.css";
import $ from "jquery";
import _ from "lodash";
import { addToCart } from "./ulist";
import { addToFav } from "./ulist";
import { suggestList } from "./db";
import { recipesList } from "./db";
import { courseList } from "./db";

import "../js/modal.js";

$(function () {
  const recipesTemplate = $("#recipesTemplate").html();

  const recipe = _.template(recipesTemplate);
  const recipesHomeList = recipesList.slice(-6);

  const suggestTemplate = $("#suggestTemplate").html();
  const suggestTemp = _.template(suggestTemplate);

  $(".course-field").append(
    _.map(courseList, (courseItem) => {
      const dom = $(`<div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <a href="" class="course-link">
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

      dom.find(".add-favourite").on("click", recipes, addToFav);

      return dom;
    })
  );

  $(".suggest-list").append(
    _.map(suggestList, (suggest) => {
      const dom = $(suggestTemp(suggest));

      return dom;
    })
  );
});
