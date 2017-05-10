

// //ini function to load youtube api library and set apikey
// function init(){

//        gapi.client.setApiKey("AIzaSyAs92o-m1w6elH20BhKZAIy0eggx8YCEmw");

//        gapi.client.load("youtube", "v3", function(){

//        search();               

//        });

// };

// //Get user entered search terms and assign to variable q
// $("#search-button").on("click", function(event) {
//    event.preventDefault();
//    console.log("hello");
//   var q = $('#search-term').val();
//   console.log(q);
  
// });

// //create function to send api request to youtube server
// function search(){
//  // console.log("q: "+ q);
//   var request = gapi.client.youtube.search.list({
//     q: 'india',
//     part: 'snippet',
//     type: "video",
//     maxResults: 3,
//     key: "AIzaSyAs92o-m1w6elH20BhKZAIy0eggx8YCEmw"
    
//   });
   
//    //send request to youtube server
//     request.execute(onSearchResponse);

// };

//create the function to display content   
// function resultResponse(response) {
   
//      var str = JSON.stringify(response, '', 2);
//     console.log(str);
   
//   $('#videos-appear-here').html('<pre>' + str + '</pre>');


//   };


// // Called automatically with the response of the YouTube API request.
// function onSearchResponse(response) {
//     resultResponse(response);
// };



  $(document).ready(function(){

  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#search-term').val();
    search(searchTerm);
  });

// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.

function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('videos-appear-here').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See https://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyAs92o-m1w6elH20BhKZAIy0eggx8YCEmw');

    search();
}

function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var q = $('#search-term').val();
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: q,
        maxResults: 3
       
        
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
     request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#videos-appear-here').html('<pre>' + str + '</pre>');
  });
}

// Called automatically with the response of the YouTube API request.
   function onSearchResponse(response) {
     showResponse(response);
}
}