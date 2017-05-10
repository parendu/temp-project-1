//create empty array for videos



//Create the function to display videos






// Search for a specified string.
$("#search-button").on("click", function(event) {
   event.preventDefault();
  var q = $('#search-term').val();
  console.log(q);
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet',
    type: "video",
    maxResult: 3
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    console.log(str);
    $('#videos-appear-here').html('<pre>' + str + '</pre>');
  });


});

function init(){
<<<<<<< HEAD
       gapi.client.setApiKey("AIzaSyAs92o-m1w6elH20BhKZAIy0eggx8YCEmw");
=======
       gapi.client.setApiKey("AIzaSyBLYFa-iwmIdBWQWTGLOEIWFSfFqFFns0Q");
>>>>>>> ce836b358fc95f85e3a9aa2b7212e82dc506ba4b
       gapi.client.load("youtube", "v3", function(){

       });

}










//
