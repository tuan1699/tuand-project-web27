import "../component/auth.css";
import "../component/footer.css";
import "../component/sidebar.css";
import "../component/header.css";
import "../css/course.css";

import $ from "jquery";
import _ from "lodash";
import { courseList } from "./db";
import { addToCart } from "./ulist";

import "../js/modal.js";
import "../js/auth.js";
import "../js/signin.js";
import "../js/side-bar";

$(function () {
  const courseTemplate = $("#courseTemplate").html();
  const courseTemp = _.template(courseTemplate);

  $(".course-list").append(
    _.map(courseList, (course) => {
      const dom = $(courseTemp(course));

      dom.find(".course-register").on("click", course, addToCart);

      return dom;
    })
  );
});
