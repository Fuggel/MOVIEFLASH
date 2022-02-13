// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Set slide # to 1
var slideIndex = 1;
// Show the current slide
showSlides(slideIndex);

// Next/previous controls
function plusSlides(number) {
  // Increase the slide by 1 and show that image
  showSlides((slideIndex += number));
}

// Thumbnail image controls
function currentSlide(number) {
  // Show the current slide
  showSlides((slideIndex = number));
}

// Toggle correct slides
function showSlides(number) {
  let i;
  // All of the slides in the document
  let slides = document.getElementsByClassName("mySlides");
  // All of the slide dots in the document
  let dots = document.getElementsByClassName("demo");
  // The element with an id of caption
  let captionText = document.getElementById("caption");

  // If slide # is greater than the total number of slides
  if (number > slides.length) {
    slideIndex = 1;
  }

  // If slide # is less than total number of slides
  if (number < 1) {
    slideIndex = slides.length;
  }

  // Hide slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Replace each of the dots with the class "active" with ""
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Set the current slide to display as a block element
  slides[slideIndex - 1].style.display = "block";

  // Set the current slide's respective dot to the "active" class
  dots[slideIndex - 1].className += " active";

  // Set the caption text to the current slide's caption text
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
