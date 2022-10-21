import "../css/blog.css";
import "../component/auth.css";
import "../component/footer.css";
import "../component/sidebar.css";
import "../component/header.css";
import $ from "jquery";
import _ from "lodash";
import { blogList } from "./db";
import { addToFav } from "./ulist";

import "../js/modal.js";

$(function () {
  const blogTemplate = $("#blogTemplate").html();
  const blogTemp = _.template(blogTemplate);

  $(".blog-list").append(
    _.map(blogList, (blog) => {
      const dom = $(blogTemp(blog));

      dom.find(".add-favourite").on("click", blog, addToFav);

      return dom;
    })
  );
});

