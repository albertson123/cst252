/*Author: Caden Albertson <calbertson@csumb.edu>
*Created: 11 October
*License: Public Domain
*Wes for their knowledge and slides, and Val for saving my beans and helping me get through this lab
*/

//Generate the viewable counting list
for (i = 1; i <= 200; i++) {
  outputEl = document.getElementById("output");
  newEl = document.createElement("p");

  //conditions that will also appear

    if (i%105 ==0) {
      newEl.innerHTML = i + " - FizzBuzzBoom";
      outputEl.appendChild(newEl);
      console.log("FizzBuzzBoom");

    } else if (i%21 ==0) {
      newEl.innerHTML = i + " - FizzBoom";
      outputEl.appendChild(newEl);
      console.log("FizzBoom");

    } else if (i%15 ==0) {
      newEl.innerHTML = i + " - FizzBuzz";
      outputEl.appendChild(newEl);
      console.log("FizzBuzz");

    } else if (i%3 == 0) {
      newEl.innerHTML = i + " - Fizz";
      outputEl.appendChild(newEl);
      console.log("Fizz");

    } else if (i%5 ==0) {
      newEl.innerHTML = i + " - Buzz";
      outputEl.appendChild(newEl);
      console.log("Buzz");

    } else if (i%7 ==0) {
      newEl.innerHTML = i + " - Boom"
      outputEl.appendChild(newEl);
      console.log("Boom");

    } else {
      outputEl.appendChild(newEl);
      console.log(i);


  }
}
