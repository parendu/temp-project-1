

// Search for a specified string.
// // 
function init(){

       gapi.client.setApiKey("AIzaSyAs92o-m1w6elH20BhKZAIy0eggx8YCEmw");

       gapi.client.load("youtube", "v3", function(){

                // searchA();
                

       });

}

// function searchA() {
$(".search-button").on("click", function(event) {
   event.preventDefault();
   console.log("hello");
  // var q = $('#search-term').val();
  // console.log(q);
  var request = gapi.client.youtube.search.list({
    q: "java",
    part: 'snippet',
    type: "video",
    maxResult: 3,
    key: "AIzaSyAs92o-m1w6elH20BhKZAIy0eggx8YCEmw"
    
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    console.log(str);
    $('#videos-appear-here').html('<pre>' + str + '</pre>');
  });
});

// }












//
