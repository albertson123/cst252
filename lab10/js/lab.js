/*Author: Caden Albertson <calbertson@csumb.edu>
*Created: 27 September
*License: Public Domain
*Credit to: Wes Modes and their lecture notes, Val and Ashlyn for their help, and Kayla's friend Xue Ee for letting us be inspired by her code
*/

//create an event handler
var button = document.getelementById("my-button");
console.log("Button baybee", button);

button.addEventListener("click", function () {
  //button is pressed and user is prompted to add their name to the functions
  var name = document.getElementById("user-name").value;
  console.log("Name is", name);
  //changes from greeting to hello and user
  var heading = document.getElementById("heading");
  console.log("heading", heading);
  heading.innerHTML = "Hello," + name;

  //string to array
  var nameArray = name.split('');
  console.log("nameArray", nameArray)

  //sorting
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort=", nameArraySort);

  //back together string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted=", nameSorted);
  heading.innerHTML = "Hello, " + nameSorted;
})
