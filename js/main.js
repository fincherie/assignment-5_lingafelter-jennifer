/*var paragraph = getElementById('id')
function modifyHTML () {
 var heading = document.getElementById('h1');
  console.log("hello");


paragraph.addEventListener("click", modifyHTML);


function myFunction () {
  var x = document.getElementById("h1");
  document.getElementById("ddddd").innerHTML = "You clicked " + y.value;
}
*/
var clicks = 0;
var header = document.getElementById("header");

header.addEventListener("click", myFunction);

function myFunction () {
  document.getElementById("paragraph").innerHTML = "This is click number " + (++clicks);
}
