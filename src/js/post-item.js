import "../component/auth.css";
import "../component/footer.css";
import "../component/sidebar.css";
import "../component/header.css";
import "../css/post-item.css";
import { recipesList } from "./db";

import $ from "jquery";
import _ from "lodash";

import "../js/modal.js";
import "../js/side-bar";
import "../js/auth.js";
import "../js/signin.js";

$(function () {
  const url = new URL(location.href);
  const id = Number(url.searchParams.get("id"));
  const recipes = _.find(recipesList, { id });
  console.log(recipes);

  const postTemplate = $("#postTemplate").html();
  const templatePostItem = _.template(postTemplate);

  const dom = $(templatePostItem(recipes));

  $(".post-container").append(dom);
});
