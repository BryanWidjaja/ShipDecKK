const subscriptionForm = document.querySelector(".subscription-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const termsInput = document.getElementById("terms");
const privacyInput = document.getElementById("privacy");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const termsError = document.getElementById("terms-error");
const privacyError = document.getElementById("privacy-error");

subscriptionForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  resetAllErrorMsg();

  if (!nameInput.value.trim()) {
    displayErrorMsg(nameError, "Please enter your name!");
    valid = false;
  }

  if (!emailInput.value.trim()) {
    displayErrorMsg(emailError, "Please enter your email!");
    valid = false;
  } else valid = valid && validEmail(emailInput.value.trim());

  if (!passwordInput.value.trim()) {
    displayErrorMsg(passwordError, "Please enter your password!");
    valid = false;
  }

  if (!termsInput.checked) {
    displayErrorMsg(termsError, "You must agree to the Terms & Conditions!");
    valid = false;
  }

  if (!privacyInput.checked) {
    displayErrorMsg(privacyError, "You must agree to the Privacy Policies!");
    valid = false;
  }

  if (valid) {
    console.log("Form submitted successfully");
    resetAllErrorMsg();
    alert("test");
  }
});

const displayErrorMsg = (element, str) => {
  element.textContent = str;
};

const resetAllErrorMsg = () => {
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  termsError.textContent = "";
  privacyError.textContent = "";
};

const validEmail = (emailInput) => {
  const atIndex = emailInput.indexOf("@");
  if (atIndex <= 0) return false;

  const afterAt = emailInput.substring(atIndex + 1);
  const dotIndex = afterAt.indexOf(".");

  if (!(dotIndex > 0 && dotIndex < afterAt.length - 1)) {
    displayErrorMsg(emailError, "Invalid domain name");
    return false;
  }

  return true;
};

const showPassBtn = document.querySelector(".show-pass-btn");

showPassBtn.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPassBtn.src = "../assets/icons/hide.png";
  } else {
    passwordInput.type = "password";
    showPassBtn.src = "../assets/icons/show.png";
  }
});
