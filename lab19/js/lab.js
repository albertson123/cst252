/*Author: Caden Albertson <calbertson@csumb.edu>
*Created: November 8
*License: Public Domain
*Credit to: Wes Modes for their JS fiddle example to go off of, and Val for helping me link this to my HMTL
*/
endpoint="https://api.whatdoestrumpthink.com/api/v1/quotes/random"

// add event listener
$("#activate").click(function(){
  // alert("pressed");
	$.ajax({
      // The URL for the request
    url: endpoint,
    // The data to send (will be converted to a query string)
    data: {
    	latitude: "45.575",
      longitude: "-124.565",
      api_key: "5JNF4JJDJ33J3JH402900"
    },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
  })
  // If the request succeeds
  .done(function( data ) {
      // alert("Success!");
      var quote = data.message;
      $("#output").append("<p>" + quote)
  })
  // If the request fails
  .fail(function( xhr, status, errorThrown ) {
      console.log(errorThrown + " Status:" + status );
	})
})
