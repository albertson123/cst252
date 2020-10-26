/*Author: Caden Albertson <calbertson@csumb.edu>
*Created: 25 October
*License: Public Domain
*Credit to: Tyler Wilson for his inspiring code recipe, and Val Ramirez for running so I could walk
*/

class Car {
  constructor(brand, model, year, color) {
    this.carname = brand;
    this.carmodel = model;
    this.caryear = year;
    this.carcolor = color;
  }
  info() {
    return "I have a " + this.carname + " " + this.carmodel + " " + this.caryear + " " + this.carcolor + ".";
  }
}

mycar = new Car("Dragon", "Westeros", "7 AC", "Quicksilver");
// mycar.info()
// << "I have a Ford"


// document.getElementById("output").innerHTML += "<p>" + mycar.info() + "</p>";





//use mycar.info() to call the function.
