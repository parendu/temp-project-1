

// Search for a specified string.
// // 
function init(){

       gapi.client.setApiKey("AIzaSyAs92o-m1w6elH20BhKZAIy0eggx8YCEmw");

       gapi.client.load("youtube", "v3", function(){

  //     search();               

       });

};

function search(){
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
   
    request.execute(onSearchResponse);
});
};
   
function resultResponse(response) {
   
     var str = JSON.stringify(response, '', 2);
    console.log(str);
   
  $('#videos-appear-here').html('<pre>' + str + '</pre>');


  };


// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    resultResponse(response);
};