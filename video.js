

// Search for a specified string.
// // 
function init(){

       gapi.client.setApiKey("AIzaSyAs92o-m1w6elH20BhKZAIy0eggx8YCEmw");

       gapi.client.load("youtube", "v3", function(){

                // searchA();               

       });

}


$(".search-button").on("click", function(event) {
   event.preventDefault();
   console.log("hello");
  var q = $('#search-term').val();
  console.log(q);
  var request = gapi.client.youtube.search.list({
    q: 'q',
    part: 'snippet',
    type: "video",
    maxResults: 3,
    key: "AIzaSyAs92o-m1w6elH20BhKZAIy0eggx8YCEmw"
    
  });
   
   console.log(request);
  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    console.log(str);
   
     var results = response.data;

// for (var i = 0; i < results.length; i++) {
//             //create div class item
//             var gifDiv = $("<div class='item'>");

//             // get rating, if rating is not r and pg-13 display GIFs

//             if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

//                 var rating = results[i].rating;
//                 // set varialbe p and display Rating on page
//                 var p = $("<p>").text("Rating: " + rating);
//                 console.log(p);
//             }

//             //create img element var animalImage
//             var animalImage = $("<img>");
//             //add class animal-image
//             animalImage.addClass('animal-image');

//             //prepend animalImage to gifDiv
//             gifDiv.prepend(p);
//             gifDiv.prepend(animalImage);

// $("##videos-appear-here").prepend(gifDiv);
  $('#videos-appear-here').html('<pre>' + str + '</pre>');
// }

  });
});

// }












//
