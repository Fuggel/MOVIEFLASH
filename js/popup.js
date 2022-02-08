// Open Movies Popup
function toggle(target) {
  let popup = document.querySelector(target); // get id from html target (onclick)
  popup.classList.toggle("active"); // if html element has onclick="toggle" -> activate active class in css
}
