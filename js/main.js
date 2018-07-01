var first = document.getElementById("firstname");
var last =  document.getElementById("lastname");
var email = document.getElementById("email");
var comments = document.getElementById("comments");

document.getElementById("submit").addEventListener("click", prevent);

function prevent () {
  event.preventDefault()
  console.log("The firstName is: " + first.value);
  console.log("The lastName is: " + last.value);
  console.log("The email is: " + email.value);
  console.log("The message is: " + comments.value);
}
