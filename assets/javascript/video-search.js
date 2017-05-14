 //ini function to load youtube api library and set apikey
 function init() {

     gapi.client.setApiKey("AIzaSyAs92o-m1w6elH20BhKZAIy0eggx8YCEmw");

     gapi.client.load("youtube", "v3", function() {

     });

 };

$(document).ready(function(){

 //capture search-term text box when user click search-button
 $("#search-button").on("click", function(event) {
     event.preventDefault();

     $("#company-name").hide();
     
     console.log("hello");
     var searchTerm = $('#search-term').val();
     console.log(searchTerm);
     // search(searchTerm);

     //prepare request
     var request = gapi.client.youtube.search.list({
         part: 'snippet',
         q: searchTerm +" tutorial",
         maxResults: 8,
         order: "viewCount",
         type: "video"

     });

     $("#video-appear-here").empty();
     //remove src from iframe
     $("iframe").removeAttr("src");


     //execute request
     request.execute(function(response) {
         console.log(response);

         var results = response.items;
         console.log(results);

         for (var i = 0; i < results.length; i++) {
             console.log(results[i]);

             //get the data videoId, imageUrl and videoTitle from results
             var videoId = results[i].id.videoId;
            // console.log(videoId);
             var imageUrl = results[i].snippet.thumbnails.default.url;
             console.log(imageUrl);
            var videoTitleFull = results[i].snippet.title;
             //console.log(videoTitleFull);

             //var textDiv = $("<div class='middle text'>" + videoTitle + "</div>");

            

             //trim video title so it display properly
             
             if (videoTitleFull.length > 40) {
             var videoTitle = (videoTitleFull.slice(0, 40) + "...");
             
           }
           else {

            var videoTitle = videoTitleFull;
           }
             var p = $("<p>").text(videoTitle);
             
             console.log(videoTitleFull);
             console.log(videoTitle);


             //border the video-display container
             $('#video-display').addClass('bordered');

             //create class image for each video        
             var videoDiv = $("<div class = 'col-sm-3 item' margin-bottom='10px'>");
             
             //create favorite buttton
             var favButton = $("<button type='button' id=" + videoId + "value='click' margin-bottom='10px' class='btn btn-default btn-sm favorite'>");

             var addSpan = $("<span>");
             addSpan.addClass('glyphicon glyphicon-star')
             addSpan.attr("aria-hidden", 'true');
             
             //create play buttton
             
             
             var playButton = $("<button type='button'  name=" +videoId + "value='click' margin-bottom='10px' class='btn btn-default btn-sm play-button'>");
             var playSpan = $("<span>");
             playSpan.addClass('glyphicon glyphicon-play')
             playSpan.attr("aria-hidden", 'true');
             
             //adding href to span

             playButton.attr("data-href", 'https://www.youtube.com/embed/' + videoId);

             //create image element
             var videoThumb = $("<div class='thumbnail'>");
                         
             var videoImage = $("<img>");

             //add class to image
             videoImage.addClass('video-image');

             //set src image
             //set data-videoid
             videoImage.attr("src", imageUrl);
             videoImage.attr("data-videoId", videoId);
             videoImage.attr("value", "click");
             videoImage.attr("data-href", 'https://www.youtube.com/embed/'+videoId);

            // videoImage.attr("href", 'https://www.youtube.com/watch?v='+videoId);
             //videoImage.append("<a href=https://www.youtube.com/watch?v="+ videoId + " target='video-play'");


             //prepend  video image to videoDiv
             
             videoThumb.append(videoImage);
             favButton.append(addSpan);
             
             //playButton.append(playA);
             playButton.append(playSpan);
            

             videoThumb.prepend(favButton);
             videoThumb.prepend(playButton);
             videoThumb.append(p);
             videoDiv.prepend(videoThumb);

            //  mouseover display full title
             // $( ".thumbnail" )
             //      .mouseover(function() {
             //    $( this ).find( "p" ).text(videoTitleFull);
             //  })

             $("#video-appear-here").prepend(videoDiv);

         }; //for loop

         // equalHeight($(".thumbnail")); 

     }); //response

   

 }); //search button
   // function equalHeight(group) {    
   //  var tallest = 0;    
   //  group.each(function() {       
   //      var thisHeight = $(this).height();       
   //      if(thisHeight > tallest) {          
   //          tallest = thisHeight;       
   //      }    
   //  });    
   //  group.each(function() { $(this).height(tallest); });
   //  } 

            //function to start video, click on play button
      
   
             $(document).on('click', '.play-button', function (e) {
                console.log("clicked")
                e.preventDefault();
                var href = $(this).attr('data-href');
                 console.log("src: " + href);
                // maybe use an ID instead
                $('iframe').attr('src', href);
             });
            //start video, click on image
          
          $(document).on('click', '.video-image', function (e) {
                console.log("clicked")
                e.preventDefault();
                var href = $(this).attr('data-href');
                 console.log("src: " + href);
                // maybe use an ID instead
                $('iframe').attr('src', href);
             });

}); //document.ready

 
