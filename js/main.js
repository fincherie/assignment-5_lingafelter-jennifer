//This listens for a mouseover on the beach image and displays a Welcome message

document.getElementById("beach").addEventListener("mouseover", display);

function display () {
  document.getElementById("pcustom").innerHTML = "Welcome to the Beach!";
}

document.getElementById("pcustom").addEventListener("mouseout", removeDisplay);

function removeDisplay () {
  document.getElementById("pcustom").innerHTML = "";
}
//This event listens for a click so a coupon code is displayed
document.getElementById("header3").addEventListener("click", code);

function code () {
  document.getElementById("p2custom").innerHTML = "CODE 15OFF";
}
//This event listens for a click to show what you can do at the beach
document.getElementById("activities").addEventListener("click", picture);

function picture () {
  document.getElementById("p3custom").innerHTML = "<img src = img/relax.jpg>";
}
