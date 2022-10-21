import "../component/auth.css";
import "../component/footer.css";
import "../component/sidebar.css";
import "../component/header.css";
import "../css/blog-item.css";

import "../js/modal.js";

import { blogList } from "./db";

import $ from "jquery";
import _ from "lodash";

$(function () {
  const url = new URL(location.href);
  const id = Number(url.searchParams.get("id"));
  const blog = _.find(blogList, { id });

  const blogTemplate = $("#blogItemTemplate").html();
  const blogTemp = _.template(blogTemplate);

  const dom = $(blogTemp(blog));

  $(".blog-container").append(dom);
});
