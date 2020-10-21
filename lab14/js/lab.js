/*Author: Caden Albertson <calbertson@csumb.edu>
*Created: 27 September
*License: Public Domain
*/

function Vehicle(make, model, year, color, extras) {
  this.make = make;
	this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;

  this.says = function() {
    return this.make + " from " + this.sound + " that's " + this.year + this.color + " and, in fact, " + this.extras;
  }
}
var dragon = new Vehicle("Dragon", "Westeros", 7, "Quicksilver", "will breathe fire");

document.getElementById("output").innerHTML += "The vehicle that I drive is a " + dragon.info() + "</p>";
