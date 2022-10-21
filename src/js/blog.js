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

const PRODUCTS_PER_PAGE = 7;

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

$(function () {
  const blogTemplate = $("#blogTemplate").html();
  const blogTemp = _.template(blogTemplate);

  const url = new URL(location.href);
  const totalPage = Math.ceil(blogList.length / PRODUCTS_PER_PAGE);
  const current = url.searchParams.get("page") || 1;
  const prev = current - 1;
  const next = +current + 1;

  $(".blog-list").append(
    _.map(
      blogList.slice(
        (current - 1) * PRODUCTS_PER_PAGE,
        current * PRODUCTS_PER_PAGE
      ),
      (blog) => {
        const dom = $(blogTemp(blog));

        dom.find(".add-favourite").on("click", blog, addToFav);

        return dom;
      }
    )
  );

  pagination(current, totalPage, prev, next);
});
