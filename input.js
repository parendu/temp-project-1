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
        //maxResults: 3,
        //order: "viewCount"
        
       });
      //execute request
      request.execute(function(response){
           var results = response.request;
           for (var i = 0; i < results.items.length; i++){
               console.log(results.items[i].item.id.videoId);

               //$("#videos-appear-here").append()


           } //for loop

      }); //response

    });  //search button
