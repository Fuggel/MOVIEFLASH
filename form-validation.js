// Form Validation

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const agreement = document.getElementById("agreement");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const mobileValue = mobile.value.trim();
  const password1Value = password1.value.trim();
  const password2Value = password2.value.trim();
  const agreementValue = agreement.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  }

  if (mobileValue === "") {
    setErrorFor(mobile, "Phone cannot be blank");
  }

  if (password1Value === "") {
    setErrorFor(password1, "Password cannot be blank");
  } else if (password1Value.value.length <= 7) {
    setErrorFor(password1, "Password has to be at least 8 characters");
  }

  if (password2Value === "") {
    setErrorFor(password2, "Please confirm your password");
  } else if (password1Value !== password2Value) {
    setErrorFor(password2, "Passwords does not match");
  }

  if (!agreementValue.checked) {
    setErrorFor(agreement, "Agreement cannot be unchecked");
  }
}
checkInputs();

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const span = formControl.querySelector("span");
  formControl.className = "form-control";
  span.style.visibility = "visible";
  span.innerText = message;
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
