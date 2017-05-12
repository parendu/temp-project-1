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
        maxResults: 8,
        order: "viewCount",
        type: "video"
        
       });

       $("#video-appear-here").empty();
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

                videoTitle = (videoTitle.slice(0, 36) + "...");
                var p = $("<p>").text(videoTitle);
                 
                

             $('#video-display').addClass('bordered');

             //create class image for each video        
             var videoDiv = $("<div class = 'col-sm-3 item' margin-bottom='10px'>");
             //create favorite buttton
             var favButton = $("<button type='button' id=" + videoId +  "value='click' margin='5px' class='btn btn-default btn-sm'>");
             
             var addSpan = $("<span>");
             addSpan.addClass('glyphicon glyphicon-star')
             addSpan.attr("aria-hidden", 'true');
            //create image element
             
             var videoThumb = $("<div class='thumbnail' text-align='left'>");
             var videoImage = $("<img>");
             

             //add class to image
             videoImage.addClass('video-image');
             
             //set src image
             //set data-videoid
             videoImage.attr("src", imageUrl);
             videoImage.attr("data-videoId", videoId);
             videoImage.attr("value", 'click');
             
             
             //prepend  video image to videoDiv
             videoThumb.append(videoImage);
             favButton.append(addSpan);
             videoThumb.append(favButton);
             videoThumb.prepend(p);
             videoDiv.prepend(videoThumb);
             
             $("#video-appear-here").prepend(videoDiv);
            




           }; //for loop

      }); //response
    });  //search button
