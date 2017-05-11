 //ini function to load youtube api library and set apikey
    function init(){

       gapi.client.setApiKey("AIzaSyAs92o-m1w6elH20BhKZAIy0eggx8YCEmw");

       gapi.client.load("youtube", "v3", function(){
                  
       });

    };

    //capture search-term text box when user click search-button
    $("#search-button").on("click", function(event){
            event.preventDefault();
        console.log("hello");
        var searchTerm = $('#search-term').val();
        console.log(searchTerm);
       // search(searchTerm);

      //prepare request
      var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: searchTerm,
        maxResults: 3,
        order: "viewCount",
        type: "video"
        
       });
      //execute request
      request.execute(function(response){
        console.log(response);
        
           var results = response.items;
        console.log(results);
          
           for (var i = 0; i < results.length; i++){
               console.log(results[i]);
             
             var videoId = results[i].id.videoId;
             console.log(videoId);
             var imageUrl = results[i].snippet.thumbnails.default.url;
             console.log(imageUrl);
             var videoTitle = results[i].snippet.title;
             console.log(videoTitle);
             
             //var textDiv = $("<div class='middle text'>" + videoTitle + "</div>");

                var p = $("<p>").text(videoTitle);
        


             //create class image for each video        
             var videoDiv = $("<div class = 'col-sm-3 item' >");
             //create image element
             var videoImage = $("<img>");
             //add class to image
             videoImage.addClass('video-image');
             
             //set src image
             //set data-videoid
             videoImage.attr("src", imageUrl);
             videoImage.attr("data-videoId", videoId);
             videoImage.attr("value", 'click');
             //create favorite buttton
             var favButton = $("<button type='button' id=" + videoId + "value='click' class='btn btn-default btn-sm'>");
             var addSpan = $("<span>");
             addSpan.addClass('glyphicon glyphicon-star')
             addSpan.attr("aria-hidden", 'true'); 
             //prepend  video image to videoDiv
             favButton.prepend(addSpan);
             videoDiv.prepend(p);
             videoDiv.prepend(videoImage);
             
             $("#video-appear-here").prepend(videoDiv);
            




           }; //for loop

      }); //response
    });  //search button
