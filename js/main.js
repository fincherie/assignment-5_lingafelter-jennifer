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
var x = document.getElementById("header");

x.addEventListener("click", myFunction);

function myFunction () {
  document.getElementById("paragraph").innerHTML = "This is click number ";
}
//<button onclick="myFunction(event)">Click count:</button>


function clickcount(event) {
    var y = event.detail;
document.getElementById("myInput").value = y;
}
