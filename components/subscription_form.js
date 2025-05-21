const subscriptionForm = document.querySelector(".subscription-form");

const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const ageInput = document.getElementById("age-input");
const interestsInput = document.querySelectorAll("#interests-input");
const termsInput = document.getElementById("terms-input");
const privacyInput = document.getElementById("privacy-input");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const ageError = document.getElementById("age-error");
const interestsError = document.getElementById("interests-error");
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
  } else valid = validEmail(emailInput.value.trim());

  if (!passwordInput.value.trim()) {
    displayErrorMsg(passwordError, "Please enter your password!");
    valid = false;
  } else valid = validPassword(passwordInput.value.trim());

  const age = Number(ageInput.value.trim());

  if (isNaN(age)) {
    displayErrorMsg(ageError, "Please enter a number!");
    valid = false;
  } else if (age < 18) {
    displayErrorMsg(ageError, "Age must be atleast 18!");
    valid = false;
  } else if (age > 99) {
    displayErrorMsg(ageError, "Age must be below 99!");
    valid = false;
  }

  let interestChecked = false;

  interestsInput.forEach((checkbox) => {
    if (checkbox.checked) interestChecked = true;
  });

  if (!interestChecked) {
    displayErrorMsg(interestsError, "Please select at least one interest");
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
    resetAllErrorMsg();
    alert("Form Successfuly Submitted!");
  }
});

const displayErrorMsg = (element, str) => {
  element.textContent = str;
};

const resetAllErrorMsg = () => {
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  ageError.textContent = "";
  interestsError.textContent = "";
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

const validPassword = (passwordInput) => {
  if (passwordInput.length < 8) {
    displayErrorMsg(
      passwordError,
      "Password must be longer than 8 characters!"
    );
    return false;
  }

  if (!hasUppercase(passwordInput)) {
    displayErrorMsg(
      passwordError,
      "Password must contain an uppercase letter!"
    );
    return false;
  }

  if (!hasNumber(passwordInput)) {
    displayErrorMsg(passwordError, "Password must contain a number!");
    return false;
  }

  if (hasSpecialChars(passwordInput)) {
    displayErrorMsg(
      passwordError,
      "Password musn't contain special characters!"
    );
    return false;
  }

  return true;
};

const hasSpecialChars = (passwordInput) => {
  const specialChars = [
    '"',
    "'",
    "\\",
    "/",
    ";",
    ":",
    "&",
    "<",
    ">",
    "`",
    "%",
    "*",
    "?",
    "^",
    "~",
  ];

  return specialChars.some((char) => passwordInput.includes(char));
};

const hasUppercase = (passwordInput) => {
  return [...passwordInput].some((char) => char >= "A" && char <= "Z");
};

const hasNumber = (passwordInput) => {
  return [...passwordInput].some((char) => char >= "0" && char <= "9");
};
