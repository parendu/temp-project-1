 //capture search-term text box when user click search-button

 $("#search-button").on("click", function(event) {
     event.preventDefault();

     var searchTerm = $('#search-term').val();
     console.log(searchTerm);
     // The Base URL
     var queryUrl = "https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=2d7535a7fe9c4f85a3ecff0e4993a567";

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
         // var results = '<li data-role="list-divider"><strong>Articles:</strong</li>';
         
         //<p><strong>Articles:</strong></p>
         //create news articles list creating li attribute
         for (var i = 0; i < response.articles.length; i++) {


               var list = $("<li>");
                var link = $("<a>");
                link.attr("href", response.articles[i].url);
                link.attr("title", response.articles[i].title);
                
                link.prepand(list);

                // results += "<li>";
                // results +=  "'<a href='" + response.articles[i].url>;
                // results += '</li>';
                // $("<a>").attr("href", response.articles[i].url);
                // $("<a>").attr("title", response.articles[i].title);



               console.log(results);

            //  results += '<li>';
            //  results += '<a href=' + response.articles[i].url + ">" + response.articles[i].title +'</a>';
            // // results += response.articles[i].description+'<br>';
            //  //results += response.articles[i].url;
            //  results += '</li>';


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
