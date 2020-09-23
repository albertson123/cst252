/*Author: Caden Albertson <calbertson@csumb.edu>
*Created: 21 September
*License: Public Domain
*/

//will say my name
function sayMyName() {
  return "Caden";
}
document.write("My name is " + sayMyName());
//will reverse my array
function reverseSort(myArray) {
    return myArray.sort().reverse();
}
var myNumArray = [22, 56, 69, 18, 13, 10];
console.log(reverseSort(myNumArray));
document.write(console.log(reverseSort(myNumArray)));

//will reverse the string phrase I type
function reverseString(myString){
    return myString.split('').reverse().join('');
}
reverseString('Are you suggesting coconuts migrate');
document.write(reverseString('Are you suggesting coconuts migrate' .));


//sortUserName -  a function that takes user input and sorts the letters
//of their name
function sortUserName() {
var userName = window.prompt("Hi! Pleese teel me yoür namé soo I cån ffix iT.");
console.log("username =", userName);

var nameArray = userName.split('');
console.log("nameArray =", nameArray);

var nameArraySort = nameArray.sort();
console.log("nameArraySort =", nameArraySort);

var nameSorted = nameArraySort.join('');
console.log("nameSprted =", nameSorted);

return nameSorted;
}

//Output
document.writeln("Oh hey, I've fixed your name: ",
  sortUserName(), "</br>");
