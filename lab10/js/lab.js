/*Author: Caden Albertson <calbertson@csumb.edu>
*Created: 27 September
*License: Public Domain
*Credit to: Wes Modes and their lecture notes, Val and Ashlyn for their help, and Kayla's friend Xue Ee for letting us be inspired by her code
*/

var button = document.getElementById("myButton");
var input = document.getElementById("input");
var heading = document.getElementById("heading");

function buttonPress() {

  // get input from field
  var inputText = input.value;

  // add input to h1
  heading.innerText = "Hello, " + inputText;

  // clear field value
  input.value = "";

  input.focus();
}

button.addEventListener("click", buttonPress);
