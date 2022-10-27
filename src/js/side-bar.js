import $ from "jquery";
import _ from "lodash";

import { blogList, suggestList } from "./db";
import { recipesList } from "./db";
import { courseList } from "./db";
import "../component/sidebar.css";

$(function () {
  const popularTemplate = $("#popular-template").html();
  const popularTem = _.template(popularTemplate);
  $(".recipes-popular").append(
    _.map(recipesList.slice(0, 5), (recipes) => {
      const dom = $(popularTem(recipes));

      return dom;
    })
  );

  const popularBlogTemplate = $("#blog-template").html();
  const popularBlogTem = _.template(popularBlogTemplate);
  $(".popular-blog-list").append(
    _.map(blogList.slice(0, 5), (blog) => {
      const dom = $(popularBlogTem(blog));

      return dom;
    })
  );

  const popularCourseTemplate = $("#course-popular-template").html();
  const popularCourseTem = _.template(popularCourseTemplate);
  $(".popular-course").append(
    _.map(courseList.slice(0, 4), (course) => {
      const dom = $(popularCourseTem(course));

      return dom;
    })
  );
});
