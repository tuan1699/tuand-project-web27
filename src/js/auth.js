let signUpName = document.querySelector("#signup-name");
let signUpEmail = document.querySelector("#signup-email");
let signUpPassword = document.querySelector("#signup-password");
let confirmPassword = document.querySelector("#confirm-password");
let formSignUp = document.querySelector("#sign-up-form");

function showError(input, message) {
  let errorMessage = input.parentElement.querySelector(".message-error");

  input.classList.add("error");
  errorMessage.innerText = message;
}

function showSucess(input) {
  let errorMessage = input.parentElement.querySelector(".message-error");

  input.classList.remove("error");
  errorMessage.innerText = "";
}

// VALIDATOR FUNCTION

// Check lỗi bỏ trống không nhập input

function checkEmptyError(listInput) {
  let isEmptyError = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();

    if (!input.value) {
      isEmptyError = true;
      showError(input, "Vui lòng nhập đầy đủ thông tin");
    } else {
      showSucess(input);
    }
  });

  return isEmptyError;
}

// Check lỗi nhập sai cú pháp email

function checkEmailError(input) {
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  input.value = input.value.trim();
  let isEmailError = !regexEmail.test(input.value);

  if (regexEmail.test(input.value)) {
    showSucess(input);
  } else {
    showError(input, "Email không hợp lệ");
  }

  return isEmailError;
}

// Check độ dài ký tự tối thiểu và tối đa

function checkLengthError(input, min, max) {
  input.value = input.value.trim();

  if (input.value.length < min) {
    showError(input, `Mật khẩu phải có ít nhất ${min} ký tự`);
    return true;
  }

  if (input.value.length > max) {
    showError(input, `Mật khẩu không được dài quá ${max}`);
    return true;
  }

  showSucess(input);
  return false;
}

// Check nhập lại mật khẩu
function checkMatchPassword(signUpPassword, confirmPassword) {
  if (signUpPassword.value !== confirmPassword.value) {
    showError(confirmPassword, "Mật khẩu không trùng khớp");
    return true;
  }

  return false;
}

formSignUp.addEventListener("submit", (e) => {
  e.preventDefault();

  let isEmptyErr = checkEmptyError([
    signUpName,
    signUpEmail,
    signUpPassword,
    confirmPassword,
  ]);
  let isEmailErr = checkEmailError(signUpEmail);
  let isPasswordLengthErr = checkLengthError(signUpPassword, 6, 10);
  let isMatchErr = checkMatchPassword(signUpPassword, confirmPassword);

  if (isEmailErr || isEmptyErr || isPasswordLengthErr || isMatchErr) {
    console.log("test");
  } else {
    console.log("đăng ký thành công");
    const listAcc = JSON.parse(localStorage.getItem("listAccount")) || [];
    let newAcc = {
      name: `${signUpName.value}`,
      password: `${signUpPassword.value}`,
      email: `${signUpEmail.value}`,
    };

    Command: toastr["success"]("Đăng ký tài khoản thành công");

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

    listAcc.push(newAcc);

    localStorage.setItem("listAccount", JSON.stringify(listAcc));
    signUpName.value = "";
    signUpEmail.value = "";
    signUpPassword.value = "";
    confirmPassword.value = "";
  }
});
