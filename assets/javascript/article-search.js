 //capture search-term text box when user click search-button
 $("#search-button").on("click", function(event) {
     event.preventDefault();

     var searchTerm = $('#search-term').val();
     console.log(searchTerm);
     // The Base URL
     var queryUrl = "https://newsapi.org/v1/articles?source=ars-technica&sortBy=top&apiKey=2d7535a7fe9c4f85a3ecff0e4993a567";

     // putting the url togehter and append &callback=?
     var url = queryUrl;
     console.log(url);

     // Call The API for a JSON
     $.getJSON(url, function() {
         console.log("success");
     }).done(function(response) {
         console.log("second success");

         console.log(response.articles);

         //var results = response.articles;

         console.log(response.articles);

         // create a var for the results and append a header
         var results = '<li data-role="list-divider">articles:</li>';

         for (var i = 0; i < response.articles.length; i++) {

             results += '<li>';
             results += response.articles[i].title;
             results += '</li>';
         }; //loop
          
          //add border
          $('#articles-display').addClass('bordered');
         // // clear the results . append the re sults .refresh the listview
         $('#results').empty().append(results);

         // }).fail(function() {
         //   console.log("error");
         //  }).always(function() {
         //  console.log("always");
         //  });

     }); //response
   

 });
