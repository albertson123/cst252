/*Author: Caden Albertson <calbertson@csumb.edu>
*Created: 27 September
*License: Public Domain
*Credit to: Wes Modes for their inspirational code
*/

housesArray = [
   {
       title: "Soft",
       text: "Values 'safety, loving, wholesomeness, and bubbly.' Those sorted in this house are often the type of people to stay up with someone purely because they care about that person. They often feel bubbly and happy and safe. On days that end in Y, these people have heart emojis floating around their head."
   },
   {
       title: "Chaotic",
       text: "Values 'crackhead energy, honesty, improvisation, and fun.' Those sorted in this house often radiate a specific energy and love to do things out of line or without thought, but all in good laughs so that no one is harmed. They love banter and have a super fun and honest personality. If you encounter a chaotic person in the tall grass, they'll most likely be wearing an inflatable T-Rex costume."
   },
   {
       title: "Cursed",
       text: "Values 'obscurity, being mysterious, and the disturbing.' The trolls of the houses, but in the best way. Those sorted in this house find joy in the outlandish and disturbing content the world has to offer. These people love to bless others with their knowledge and have a keen sense of how to make images awful, like artists of the dark side. If you're wondering where to find these people, your best bet is the Uncanny Valley."
   },
   {
       title: "Feral",
       text: "Values 'animosity, freedom, and straying off the beaten path.' Those sorted in this house are true goblins in the best way. They are relaxed by their freedom of thought and societal behavior. With the power of insanity on their side, these people can truly achieve anything that they set their goals to and can probably talk to animals. If you want to find these people out in the wild, they will be in the trees and they will be eating Taco Bell."
   }
]

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
  newText = "<h3>This man with a plan has sorted you into " + house.title + "</h3>" +
         "<p>" + house.text + "</p>" + credit;
 document.getElementById("output").innerHTML = newText;
})
