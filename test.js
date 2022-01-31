// Run function when DOM Content has loaded
document.addEventListener("DOMContentLoaded", init);

// Function to run when DOM Content has loaded
function init(event) {
  // Get registration form and keep in global scope
  regForm = document.forms["registration"];

  // Listen for form submit
  regForm["register"].onclick = validateForm;
}

// Function to validate form elements
function validateForm(event) {
  // Array to contain all error messages
  var errorMessages = Array();

  // If username is empty
  if (!regForm["username"].value) {
    errorMessages.push("* Please enter Username");
  }

  // If email is empty
  if (!regForm["email"].value) {
    errorMessages.push("* Please enter Email");
  } else if (!isEmail(regForm["email"].value)) {
    errorMessages.push("* Email is not valid");
  }

  function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  // If username is empty
  if (!regForm["mobile"].value) {
    errorMessages.push("* Please enter Mobile");
  }

  // If password1 is empty
  if (!regForm["password1"].value) {
    errorMessages.push("* Please enter Password");
  }

  // If password2 is empty
  if (!regForm["password2"].value) {
    errorMessages.push("* Please confirm Password");
  }

  // If both passwords have values
  if (regForm["password1"].value && regForm["password2"].value) {
    // If passwords don't match
    if (regForm["password1"].value != regForm["password2"].value) {
      errorMessages.push("* Passwords do not match");
    }
  }

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
}

function displayErrors(errors) {
  var errorBox = document.getElementById("errorMessages");

  // If there aren't any errors
  if (!errors.length) {
    errorBox.innerHTML = "";
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
