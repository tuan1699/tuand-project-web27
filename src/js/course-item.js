import "../component/auth.css";
import "../component/footer.css";
import "../component/sidebar.css";
import "../component/header.css";
import "../css/course-item.css";

import "../js/modal.js";

import { courseList } from "./db";
import { addToCart } from "./ulist";
import $ from "jquery";
import _ from "lodash";

$(function () {
  const url = new URL(location.href);
  const id = Number(url.searchParams.get("id"));
  const course = _.find(courseList, { id });
  console.log(course);

  const courseTemplate = $("#courseTemplate").html();
  const courseTemp = _.template(courseTemplate);

  const dom = $(courseTemp(course));

  $(".course-container").append(dom);

  dom.find(".course-register").on("click", course, addToCart);
});
