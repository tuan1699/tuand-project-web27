import $ from "jquery";
import _ from "lodash";

export const addToFav = (event) => {
  event.preventDefault();

  const favouriteBox = JSON.parse(localStorage.getItem("favBox")) || [];

  const item = favouriteBox.find((i) => i.id === event.data.id);

  if (item) {
    alert("Bạn rất muốn thực hiện món ăn này đúng không? Mau mau vào bếp nào");
  } else {
    favouriteBox.push(event.data);
    alert("Đã thêm vào danh sách yêu thích");
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
