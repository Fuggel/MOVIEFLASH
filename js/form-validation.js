// Run function when DOM Content has loaded
document.addEventListener("DOMContentLoaded", init);

// Function to run when DOM Content has loaded
function init() {
  // Get registration form and keep in global scope
  regForm = document.forms["registration"];

  // Listen for form submit
  regForm["register"].addEventListener("click", (e) => {
    validateForm(e);
  });
}

// Function to validate form elements
function validateForm(e) {
  e.preventDefault(); // prevents submit from auto reload

  // Array to contain all error messages
  var errorMessages = Array();

  // Find out if a gender has been selected
  var isChecked = false;
  for (var i = 0; i < regForm["gender"].length; i++) {
    if (regForm["gender"][i].checked) {
      isChecked = true; // Found a checked radio button!
      break; // No need to continue the search
    }
  }

  // If a gender selection was not found
  if (!isChecked) {
    errorMessages.push("* Please choose your gender");
  }

  // If username is empty
  if (!regForm["username"].value) {
    errorMessages.push("* Please enter your username");
  } else if (!checkUser(regForm["username"].value.length)) {
    errorMessages.push("* Username must be at least 6 characters long.");
  }

  function checkUser(userLength) {
    if (regForm["username"].value.length > 5) {
      return userLength;
    }
  }

  // If email is empty
  if (!regForm["email"].value) {
    errorMessages.push("* Please enter your email");
  } else if (!isEmail(regForm["email"].value)) {
    errorMessages.push("* Email is not valid");
  }

  function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  // If mobile is empty
  if (!regForm["mobile"].value) {
    errorMessages.push("* Please enter your mobile number");
  } else if (!isMobile(regForm["mobile"].value)) {
    errorMessages.push("* Mobile number is not valid");
  }

  function isMobile(mobile) {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
      mobile
    );
  }

  // If password1 is empty
  if (!regForm["password1"].value) {
    errorMessages.push("* Please enter your password");
  } else if (!checkPass(regForm["password1"].value.length)) {
    errorMessages.push("* Password must be at least 8 characters long.");
  } else if (!checkUpper(regForm["password1"].value)) {
    errorMessages.push("* Password needs at least one upper case letter.");
  } else if (!checkLower(regForm["password1"].value)) {
    errorMessages.push("* Password needs at least one lower case letter.");
  }

  function checkPass(pwLength) {
    if (regForm["password1"].value.length > 7) {
      return pwLength;
    }
  }

  function checkUpper(upper) {
    return /[A-Z]/.test(upper);
  }

  function checkLower(lower) {
    return /[a-z]/.test(lower);
  }

  // If password2 is empty
  if (!regForm["password2"].value) {
    errorMessages.push("* Please confirm your password");
  }

  // If both passwords have values
  if (regForm["password1"].value && regForm["password2"].value) {
    // If passwords don't match
    if (regForm["password1"].value != regForm["password2"].value) {
      errorMessages.push("* Passwords do not match");
    }
  }

  // If agreement is not checked
  if (!regForm["agreement"].checked) {
    errorMessages.push("* Agreement cannot be blank");
  }

  // Show error messages
  displayErrors(errorMessages);

  // If there are errors
  if (errorMessages.length) {
    // Stop the form from submitting
    return false;
  }

  // Reset form after 3 seconds
  setTimeout(() => {
    window.location.reload();
  }, 3000);
}

function displayErrors(errors) {
  var errorBox = document.getElementById("errorMessages");

  // If there aren't any errors
  if (!errors.length) {
    errorBox.innerHTML = "Your registration was successful!";
    return false;
  }

  // Get reference to error box
  var errorBox = document.getElementById("errorMessages");

  // Prepare a container to hold the completed error message string
  var messageString = "<ul>";

  // Loop through each error to display
  for (var i = 0; i < errors.length; i++) {
    messageString += "<li>" + errors[i] + "</li>";
  }

  messageString += "</ul>";

  errorBox.innerHTML = messageString;
}
