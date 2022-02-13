// Open Movies Popup
function toggle(target, id) {
  let popup = document.querySelector(target); // get id from html target (onclick)
  popup.classList.toggle("active"); // if html element has onclick="toggle" -> activate active class in css

  // avoid error in console -> for the use case when toggle is defined without id parameter in HTML
  if (id != null) {
    let video = document.getElementById(id); // Uebergabeparameter for all video id's in HTML
    video.pause(); // function to set the video on pause
    video.currentTime = 0; // set video time to 0
  }
}
