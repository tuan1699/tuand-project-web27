import $ from "jquery";
import _ from "lodash";

export const addToFav = (event) => {
  event.preventDefault();

  const favouriteBox = JSON.parse(localStorage.getItem("favBox")) || [];

  const item = favouriteBox.find((i) => i.id === event.data.id);

  if (item) {
    // alert("Bạn rất muốn thực hiện món ăn này đúng không? Mau mau vào bếp nào");

    toastr["success"]("Đã thêm bài viết vào danh sách yêu thích!");

    toastr.options = {
      closeButton: false,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-bottom-right",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "2000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };
  } else {
    favouriteBox.push(event.data);
    toastr["success"]("Đã thêm bài viết vào danh sách yêu thích!");

    toastr.options = {
      closeButton: false,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-bottom-right",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "2000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };
  }

  localStorage.setItem("favBox", JSON.stringify(favouriteBox));
};

export const addToRecipesBox = (event) => {
  event.preventDefault();

  const recipesBox = JSON.parse(localStorage.getItem("recipesBox")) || [];

  const item = recipesBox.find((i) => i.id === event.data.id);

  if (item) {
    toastr["success"](
      "Bạn rất muốn thực hiện món ăn này đúng không? Mau mau vào bếp nào"
    );

    toastr.options = {
      closeButton: false,
      debug: false,
      newestOnTop: false,
      progressBar: false,
      positionClass: "toast-bottom-center",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "5000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };
  } else {
    recipesBox.push(event.data);
    toastr["success"]("Đã thêm món ăn vào danh sách yêu thích!");

    toastr.options = {
      closeButton: false,
      debug: false,
      newestOnTop: false,
      progressBar: false,
      positionClass: "toast-bottom-center",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "5000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };
  }

  localStorage.setItem("recipesBox", JSON.stringify(recipesBox));
};

export const addToCart = (event) => {
  event.preventDefault();

  const cartBox = JSON.parse(localStorage.getItem("cartBox")) || [];

  const item = cartBox.find((item) => item.id === event.data.id);
  console.log(cartBox);

  if (item) {
    Command: toastr["info"]("Khóa học đã có trong giỏ hàng");

    toastr.options = {
      closeButton: false,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-bottom-right",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "2000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };
  } else {
    cartBox.push(event.data);
    Command: toastr["success"]("Đã thêm khóa học vào giỏ hàng!");

    toastr.options = {
      closeButton: false,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-bottom-right",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "2000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };
  }

  console.log(cartBox);

  localStorage.setItem("cartBox", JSON.stringify(cartBox));
};
