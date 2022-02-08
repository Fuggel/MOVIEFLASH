// Run function when DOM Content has loaded
document.addEventListener("DOMContentLoaded", init);

function init() {
  // Get registration form
  regForm = document.forms["registration"];

  // Listen for form submit
  regForm["register"].addEventListener("click", (e) => {
    validateForm(e);
  });
}

// Function to validate form elements
function validateForm(e) {
  e.preventDefault(); // prevents submit from auto reload

  // Array to contain error messages
  var errorMessages = Array();

  // Find out if a gender has been selected
  var isChecked = false;
  for (var i = 0; i < regForm["gender"].length; i++) {
    if (regForm["gender"][i].checked) {
      isChecked = true; // checked radio button
      break; // Stop continuing the search
    }
  }

  // If a gender selection was not found
  if (!isChecked) {
    errorMessages.push("* Please choose your gender");
  }

  // If username is empty
  if (!regForm["username"].value) {
    // If regForm username (#registration) is not entered
    errorMessages.push("* Please enter your username"); // return error
  } else if (!checkUser(regForm["username"].value.length)) {
    // If user length is not higher than 5
    errorMessages.push("* Username must be at least 6 characters long.");
  }

  function checkUser(userLength) {
    if (regForm["username"].value.length > 5) {
      // Function check if user length is not higher than 5
      return userLength;
    }
  }

  // If email is empty
  if (!regForm["email"].value) {
    // If regForm email (#registration) is not entered
    errorMessages.push("* Please enter your email");
  } else if (!isEmail(regForm["email"].value)) {
    // If email has invalid characters
    errorMessages.push("* Email is not valid");
  }

  function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      // Check if email has invalid characters with regex
      email
    );
  }

  // If mobile is empty
  if (!regForm["mobile"].value) {
    // If regForm mobile (#registration) is not entered
    errorMessages.push("* Please enter your mobile number");
  } else if (!isMobile(regForm["mobile"].value)) {
    // If mobile has invalid characters
    errorMessages.push("* Mobile number is not valid");
  }

  function isMobile(mobile) {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
      // Check if mobile has invalid characters with regex
      mobile
    );
  }

  // If password1 is empty
  if (!regForm["password1"].value) {
    // If regForm pw1 (#registration) is not entered
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
      // password must be at least 8 characters long
      return pwLength;
    }
  }

  function checkUpper(upper) {
    return /[A-Z]/.test(upper); // check if password contains one uppercase letter
  }

  function checkLower(lower) {
    return /[a-z]/.test(lower); // check if password contains one lowercase letter
  }

  // If password2 is empty
  if (!regForm["password2"].value) {
    // If regForm pw2 (#registration) is not entered
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
    // If regForm agreement (#registration) is not checked
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

  messageString += "</ul>"; // display message as ul

  errorBox.innerHTML = messageString; // display message innerHTML
}
