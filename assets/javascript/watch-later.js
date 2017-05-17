

     //capture search-term text box when user click favorite-button
         $(document).on('click', '.favorite-button', function(e) {
         console.log("clicked")
         e.preventDefault();
                            
          //get the data videoId, imageUrl and videoTitle from results

             var videoId = $(this).attr("data-videoId");
             // var videoId = $("data-videoId").val()
              console.log(videoId);
              var href = $(this).attr("data-href");
             // var videoId = $("data-videoId").val()
              console.log(href);


              var imageUrl = $(this).siblings('img').attr("src");
             // var videoId = $("data-videoId").val()
              console.log(imageUrl);
              var p = $(this).siblings('p');
              console.log(p);
             
             //border the video-display container
                 $('#favorite-video').addClass('bordered');

                 //create class image for each video        
                 var favDiv = $("<div class = 'col-sm-3 item' margin-bottom='10px'>");

                 //create favorite buttton
                 var deleteButton = $("<button type='button' data-videoId=" + videoId + "id = 'favorite' value='click' margin-bottom='10px' class='btn btn-default btn-sm favorite'>");

                 var addSpan = $("<span>");
                 addSpan.addClass('glyphicon glyphicon-remove')
                 addSpan.attr("aria-hidden", 'true');
                // favButton.attr("data-href", href);

                 //create play buttton


                 var playButton = $("<button type='button'  name=" + videoId + "value='click' margin-bottom='10px' class='btn btn-default btn-sm play-button'>");
                 var playSpan = $("<span>");
                 playSpan.addClass('glyphicon glyphicon-play')
                 playSpan.attr("aria-hidden", 'true');

                 //adding href to span

                 playButton.attr("data-href", href);

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
                 videoImage.attr("data-href", href);

                 
                 //prepend  video image to videoDiv

                 videoThumb.append(videoImage);
                 deleteButton.append(addSpan);

                 //playButton.append(playA);
                 playButton.append(playSpan);


                 videoThumb.prepend(deleteButton);
                 videoThumb.prepend(playButton);
                 videoThumb.append(p);
                 favDiv.prepend(videoThumb);

                 //  mouseover display full title
                 // $( ".thumbnail" )
                 //      .mouseover(function() {
                 //    $( this ).find( "p" ).text(videoTitleFull);
                 //  })

                 $("#favorite-appear-here").prepend(favDiv);

              
});
  //play video click play button
  $(document).on('click', '.play-button', function(e) {
         console.log("clicked")
         e.preventDefault();
         // console.log(data-href);
         var href = $(this).attr('data-href');
         console.log("src: " + href);
         // maybe use an ID instead
         $('iframe').attr('src', href);
     });
    //play video click image
     $(document).on('click', '.video-image', function(e) {
         console.log("clicked")
         e.preventDefault();
         var href = $(this).attr('data-href');
         console.log("src: " + href);
         // maybe use an ID instead
         $('iframe').attr('src', href);
     });
 //remove watch later video click remove button
  $(document).on('click', '.favorite-button', function(e) {
         console.log("clicked")
         e.preventDefault();
        $(this).attr(".thumbnail").empty()
          

        });
          