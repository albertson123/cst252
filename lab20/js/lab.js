/*Author: Caden Albertson <calbertson@csumb.edu>
*Created: 29 November
*License: Public Domain
*Credit to: Wes Modes and Val for inspiring me and helping supply this recipe
*/

//The information below will use JSON to allow us to link the comic into our webpage
  endpoint="https://xkcd.com/info.0.json"

  //add event listener
$("button").click(function(){
  $.ajax({
    url:endpoint,
    type: "GET",
    dataType : "json",
  })
  .done(function( data ) {
    var imageUrl = data.img;
    var title = data.title;
    var alt = data.alt;
    var html = <div id="imageblock">
      <h2>$(title)</h2>
      <img src="${imageUrl}" + title="${alt}"><br>
    </div>

    console.log("My new html: ", html);
    $("#output").html(html)
  })

  .fail(function( xhr, status, errorThrown ) {
    console.log(errorThrown + "Status" + status );
  })
})
