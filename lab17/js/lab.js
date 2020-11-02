//*Author: Caden Albertson <calbertson@csumb.edu>
//*Created: 1 November
//*License: Public Domain
//*Credit to: Eddie Aleman and Val Ramirez for troubleshooting and showing me the ropes
// The functions below will change the color of the text when pressed.

  // This changes the "Challenge" section to red.
    $(document).ready(function(){
      $("#challenge-button").click(function(){
          $("#challenge").css({"color": "red"});},
      );
    });

      // This changes the "Results" section to yellow.
        $(document).ready(function(){
          $("#results-button").click(function(){
              $("#results").css({"color": "yellow"});},
          );
        });
