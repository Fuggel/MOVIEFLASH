// Open Movies Popup
function toggle(target) {
  let popup = document.querySelector(target); // get id from html target (onclick)
  popup.classList.toggle("active"); // if html element has onclick="toggle" -> activate active class in css
}

let video = document.getElementById("video");
function stopVideo() {
  video.pause();
  video.currentTime = 0;
}
