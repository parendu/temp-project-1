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
        q: searchTerm
        maxResults: 3,
        order: "viewCount",
        type: "video"
        
       });
      //execute request
      request.execute(function(response){
        console.log(response);
        
           var results = response.items;
        console.log(results);
          //each(results.items, function(index, item) {
           for (var i = 0; i < results.length; i++){
               console.log(results[i]);
             
             var videoId = results[i].id.videoId;
             console.log(videoId);
             var imageUrl = results[i].snippet.thumbnails.default.url;
             var videoTitle = results[i].snippet.title;


                // <iframe width="560" height="315" src="https://www.youtube.com/embed/WPvGqX-TXP0" frameborder="0" allowfullscreen></iframe>
               $("#videos-appear-here").append("video image: " + results[i].snippet.thumbnails.default.url);
               $("#videos-appear-here").append("video id: " + results[i].id.videoId);
               $("#videos-appear-here").append("video title: " + results[i].snippet.title);
             //  $("#videos-appear-here").append("video id: " + item.id.video);


           }; //for loop

      }); //response
    });  //search button
