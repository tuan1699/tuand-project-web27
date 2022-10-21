import $ from "jquery";
import _ from "lodash";

export const addToFav = (event) => {
  event.preventDefault();

  const favouriteBox = JSON.parse(localStorage.getItem("favBox")) || [];

  const item = favouriteBox.find((i) => i.id === event.data.id);

  if (item) {
    // alert("Bạn rất muốn thực hiện món ăn này đúng không? Mau mau vào bếp nào");
    toastr["success"]("I do not think that means what you think it means.");

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
    favouriteBox.push(event.data);
    toastr["success"]("I do not think that means what you think it means.");

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

  localStorage.setItem("favBox", JSON.stringify(favouriteBox));

  console.log("test");
};

export const addToCart = (event) => {
  event.preventDefault();

  const cartBox = JSON.parse(localStorage.getItem("cartBox")) || [];

  const item = cartBox.find((item) => item.id === event.data.id);
  console.log(cartBox);

  if (item) {
    alert("Khóa học đã có trong giỏ hàng");
  } else {
    cartBox.push(event.data);
    alert("Đã thêm khóa học vào giỏ hàng");
  }

  console.log(cartBox);

  localStorage.setItem("cartBox", JSON.stringify(cartBox));
};
