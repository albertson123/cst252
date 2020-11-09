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

// ------------------- Task 2: Design an OOP Design for Hangman -------------------

document.getElementById("output").innerHTML += "<p>" + "To view the second task for this lab, click on the link below." + "</p>";

// this code was shared with me from val and is a psudocode for hangman, it is up to step 4 cause after that the it became slightly confusing

      // set up the game
          // create player
          // create game board

      // start the game loop [Hangman]
          // render the board
          // render alphabet
          // Player selects letters to play the game
              // if player guesses letters correctly then game ends
              // stop looping
          // Else
              // Keep looping until Player reaches max amount of tries
              // End Screen with a big old "You Lose :("
              // Switch to next player and continue looping
