import "../css/index.css";
import "../component/auth.css";
import "../component/footer.css";
import $ from "jquery";
import _ from "lodash";

import "../js/modal.js";

const courseList = [
  {
    id: 1,
    name: "BỮA SÁNG THÔNG MINH",
    thumb: "/img/course/bua-sang-thong-minh.png",
    price: 1700000,
    decr: " Khóa học cung cấp công thức chế biến món ăn sáng ngon,phương pháp nấu tiết kiệm thời gian nhưng đảm bảo dinh dưỡng.",
  },
  {
    id: 2,
    name: "MÓN NGON BA MIỀN",
    thumb: "/img/course/mon-ngon-ba-mien.png",
    price: 1800000,
    decr: " Tham gia lớp học, bạn sẽ tích lũy được kiến thức, kỹ năng nấu nhiều món ăn hấp dẫn từ Chuyên gia",
  },
  {
    id: 3,
    name: "HÔM NAY ĂN GÌ",
    thumb: "/img/course/hom-nay-an-gi.png",
    price: 1600000,
    decr: " Khóa học giúp bạn có thể biến nguyên liệu quen thuộc thành món ăn thơm ngon, lạ miệng, làm phong phú thực đơn.",
  },

  {
    id: 4,
    name: "ĐIỂM TÂM HONGKONG",
    thumb: "/img/course/hong-kong.png",
    price: 1600000,
    decr: "Các món ăn đặc trưng của xứ Cảng Thơm để làm phong phú hơn bữa sáng cho cả gia đình của bạn.",
  },
  {
    id: 5,
    name: "MÓN ĂN ĐƯỜNG PHỐ",
    thumb: "/img/course/mon-an-duong-pho.png",
    price: 1600000,
    decr: "Giúp bạn thấu hiểu cặn kẽ cách chế biến thành công các món ăn vặt đường phố đặc trưng của Việt Nam.",
  },

  {
    id: 6,
    name: "MÓN ĂN ĐƯỜNG PHỐ",
    thumb: "/img/course/mon-an-duong-pho.png",
    price: 1600000,
    decr: "Giúp bạn thấu hiểu cặn kẽ cách chế biến thành công các món ăn vặt đường phố đặc trưng của Việt Nam.     ",
  },
  {
    id: 7,
    name: "MÓN ĂN BỔ DƯỠNG",
    thumb: "/img/course/mon-an-bo-duong.png",
    price: 1600000,
    decr: "Giúp bạn nắm vững kiến thứ chế biến nhiều món ngon bổ sung dưỡng chất, nâng cao sức khỏe cho người thân.",
  },
  {
    id: 8,
    name: "BÁNH PAPPAROTI",
    thumb: "/img/course/paroti.png",
    price: 500000,
    decr: "Nhiều người nghĩ rằng làm bánh papparoti thật khó, nhưng bất ngờ là món bánh này lại có công thức khá đơn giản. Bạn chỉ cần một chút bí quyết, một chút mẹo nhỏ là có thể tạo ra những chiếc bánh thơm lừng.",
  },
];

const addToCart = (event) => {
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

  localStorage.setItem("cartBox", JSON.stringify(cartBox));
};

$(function () {
  //   const courseTemp = $("#course-template").html();

  //   const course = _.template(courseTemp);

  //   console.log(recipe(recipesList[1]));

  $(".course-field").append(
    _.map(courseList, (courseItem) => {
      const dom = $(`<div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <a href="" class="course-link">
        <div class="course-item border-item">
          <div class="course-thumb">
            <img
              src="${courseItem.thumb}"
              alt=""
            />
          </div>
          <div class="course-info">
            <div class="course-name text-center">
            ${courseItem.name}
            </div>
            <p class="course-decr">
            ${courseItem.decr}
            </p>
          </div>
          <button class="course-register">ĐĂNG KÝ KHÓA HỌC</button>
        </div>
      </a>
    </div>`);

      dom.find(".course-register").on("click", courseItem, addToCart);

      return dom;
    })
  );
});
