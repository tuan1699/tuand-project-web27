import "../component/auth.css";
import "../component/footer.css";
import "../component/sidebar.css";
import "../component/header.css";
import "../css/recipes.css";
import $ from "jquery";
import _ from "lodash";
import { recipesList } from "./db";
import { blogList, suggestList } from "./db";

import { addToFav } from "./ulist";
import { addToRecipesBox } from "./ulist";

import "../js/modal.js";
import "../js/auth.js";
import "../js/signin.js";
import "../js/side-bar";

const PRODUCTS_PER_PAGE = 12;

const pagination = (current, totalPage, prev, next) => {
  const prevBtn = $(`<span class="controller-item prev-page"
  ><a href="" class="page-link">
    <i class="bi bi-chevron-left"></i> </a
></span>`);

  if (prev === 0) {
    prevBtn.addClass("disabled");
  } else {
    prevBtn.find("a.page-link").attr("href", "?page=" + prev);
  }

  const nextBtn = $(`<span class="controller-item next-page"
  ><a href="" class="page-link">
    <i class="bi bi-chevron-right"></i> </a
></span>`);
  if (next > totalPage) {
    nextBtn.addClass("disabled");
  } else {
    nextBtn.find("a.page-link").attr("href", "?page=" + next);
  }

  const currentBtn = $(
    ` <span class="controller-item current-page">${current}</span>`
  );

  $(".controller").html("");
  $(".controller").append(prevBtn, currentBtn, nextBtn);
};

const bySeason = document.querySelector("#season");
const byRegion = document.querySelector("#region");
const byCategory = document.querySelector("#category");
const byTime = document.querySelector("#time");
const byMethod = document.querySelector("#method");
const clearBtn = document.querySelector(".clear-filter");

function renderRecipes(list) {
  const recipesTemplate = $("#recipesTemp").html();
  const recipe = _.template(recipesTemplate);

  const url = new URL(location.href);
  const totalPage = Math.ceil(list.length / PRODUCTS_PER_PAGE);
  const current =
    url.searchParams.get("page") > totalPage
      ? 1
      : url.searchParams.get("page") || 1;

  const prev = current - 1;
  const next = +current + 1;

  let html = _.map(
    list.slice((current - 1) * PRODUCTS_PER_PAGE, current * PRODUCTS_PER_PAGE),
    (recipes) => {
      const dom = $(recipe(recipes));

      dom.find(".add-recipesBox").on("click", recipes, addToRecipesBox);

      return dom;
    }
  );

  $(".recipes-list").html("");
  $(".recipes-list").append(html);

  pagination(current, totalPage, prev, next);
}

$(function () {
  let recipeFilted;

  const url = new URL(location.href);

  const duration = Number(url.searchParams.get("duration"));

  const category = url.searchParams.get("category");

  if (category) {
    byCategory.value = category;
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
  renderRecipes(recipeFilted);
});

// FILTER

bySeason.addEventListener("change", () => {
  if (bySeason.value === "all") {
    renderRecipes(recipesList);
  } else {
    let recipesFilted = _.filter(recipesList, (recipes) => {
      return recipes.season === bySeason.value;
    });
    renderRecipes(recipesFilted);
  }
});

byRegion.addEventListener("change", () => {
  if (byRegion.value === "all") {
    renderRecipes(recipesList);
  } else {
    let recipesFilted = _.filter(recipesList, (recipes) => {
      return recipes.region === byRegion.value;
    });
    renderRecipes(recipesFilted);
  }
});

byCategory.addEventListener("change", () => {
  if (byCategory.value === "all") {
    renderRecipes(recipesList);
  } else {
    let recipesFilted = _.filter(recipesList, (recipes) => {
      return recipes.category === byCategory.value;
    });
    renderRecipes(recipesFilted);
  }
});

byCategory.addEventListener("change", () => {
  if (byCategory.value === "all") {
    renderRecipes(recipesList);
  } else {
    let recipesFilted = _.filter(recipesList, (recipes) => {
      return recipes.category === byCategory.value;
    });
    renderRecipes(recipesFilted);
  }
});

byMethod.addEventListener("change", () => {
  if (byMethod.value === "all") {
    renderRecipes(recipesList);
  } else {
    let recipesFilted = _.filter(recipesList, (recipes) => {
      return recipes.method === byMethod.value;
    });
    renderRecipes(recipesFilted);
  }
});

byTime.addEventListener("change", () => {
  if (byTime.value === "all") {
    renderRecipes(recipesList);
  }

  if (byTime.value === "30") {
    let recipeFilted = _.filter(recipesList, (recipes) => {
      return recipes.duration < Number(byTime.value);
    });
    renderRecipes(recipeFilted);
  }

  if (byTime.value === "60") {
    let recipeFilted = _.filter(recipesList, (recipes) => {
      return recipes.duration > 30 && recipes.duration < Number(byTime.value);
    });
    renderRecipes(recipeFilted);
  }

  if (byTime.value === "120") {
    let recipeFilted = _.filter(recipesList, (recipes) => {
      return recipes.duration > byTime.value;
    });
    renderRecipes(recipeFilted);
  }
});

clearBtn.addEventListener("click", () => {
  renderRecipes(recipesList);
  bySeason.value = "all";
  byRegion.value = "all";
  byCategory.value = "all";
  byTime.value = "all";
  byMethod.value = "all";
});
