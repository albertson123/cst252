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

credit = '<div class="credits">Personality house descriptions courtesy of <a href="https://www.urbandictionary.com/">iamjustdandi</a></div>';


// Return Soft, Chaotic, Cursed, and Feral
// depending on length mod 4
function sortingHatLength(str) {
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

// take a string and return a hashed checksum of the string
// from https://stackoverflow.com/questions/26057572/
function checksum(s) {
 var hash = 0, strlen = s.length, i, c;
 if ( strlen === 0 ) {
   return hash;
 }
 for ( i = 0; i < strlen; i++ ) {
   c = s.charCodeAt( i );
   hash = ((hash << 5) - hash) + c;
   hash = hash & hash; // Convert to 32bit integer
 }
 return hash;
};

// Given a name, hash the string, and
// return Soft, Chaotic, Cursed, and Feral
function sortingHatHash(str) {
 checksumValue = checksum(str);
 mod = Math.abs(checksumValue) % housesArray.length;
 return housesArray[mod];      // returns an object from the array
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
 // get value from input field
 var name = document.getElementById("input").value;
 // use name to get house from SortingHat function
 var houseObj = sortingHatHash(name);
 // output to output div (adding some text and HTML around the results)
 newText = "<h3>This man with a plan has sorted you into " + houseObj.title + "</h3>" +
         "<p>" + houseObj.text + "</p>" + credit;
 document.getElementById("output").innerHTML = newText;
})
