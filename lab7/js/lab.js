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
//will reverse the string phrase I type
function reverseString(myString){
    return myString.split('').reverse().join('');
}
reverseString('Are you suggesting coconuts migrate');
