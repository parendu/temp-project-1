

    //ini function to load youtube api library and set apikey
    function init(){

       gapi.client.setApiKey("AIzaSyAs92o-m1w6elH20BhKZAIy0eggx8YCEmw");

       gapi.client.load("youtube", "v3", function(){
                  
       });

    };

    //Get user entered search terms and assign to variable q
    $("#search-button").on("click", function(event) {
        event.preventDefault();
        console.log("hello");
        var searchTerm = $('#search-term').val();
        console.log(searchTerm);
        search(searchTerm);

      });

     //create function to send api request to youtube server
     function search(searchTerm){
       
       
       //create queryurl for ajax call with apiKey
    
    var queryURL = "https://www.googleapis.com/youtube/v3/search?q=" + searchTerm + "&part=snippet"+"&key=AIzaSyAs92o-m1w6elH20BhKZAIy0eggx8YCEmw";
    //Call ajax function
    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "JSON"
    }).done(function(response) {
        //set animal-view att animal
        console.log(response);
         //set results with resopnse data
        var results = response.data;
      console.log("response" + results);
     
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}







     // var videoId = results[0].items.id.videoId;
     // var videoTitle = results[0].items.snippet.title;
     // var videoThumbnail = results[0].items.snippet.thumbnails.default.url;
     // console.log(videoId);
     // console.log(videoTitle);
     // console.log(videoThumbnail);



     //create vidDiv and addclass for each search
      // for (var i = 0; i < results.length; i++) {
      //     var vidDiv = $("<div class = 'item' >")
      //      //create img element var videoImage
      //      var videoImage = $("<img>");
      //       //add class video-image
      //       videoImage.addClass('video-image');

      //       //get src url 
      //       //set mostviewed attr
      //       //set highly rated attr 
           
      //       videoImage.attr("url", results[i].);
      //       videoImage.attr("data-", results[i].);
      //       videoImage.attr("data-", results[i].);
      //       videoImage.attr("data-",);



      //   }  //for closing



       }); //done closing
     }  //search closing




















 