/*Author: Caden Albertson <calbertson@csumb.edu>
*Created: 27 September
*License: Public Domain
*Credit to: Wes Modes for their inspirational code, Eddie and Val for helpiung the the best they could to succeed in showoing this code.
*/

// These are the conditional options that will be assigned to the user.
function houseSort(str) {
 len = str.length;
 mod = len % 4;


 if (mod == 0) {
   return "Soft"
 }
 else if (mod == 1) {
   return "Chaotic"
 }
 else if (mod == 2) {
   return "Cursed"
 }
 else if (mod == 3) {
   return "Feral"
 }
}

var myButton = document.getElementById("mybutton");
myButton.addEventListener("click", function() {
var name = document.getElementById("input").value;
  var house = houseSort(name);
  newText = "<p>Based on the answer you provided, your visible aura is clearly " + house + "</p>";
 document.getElementById("output").innerHTML = newText;
})
