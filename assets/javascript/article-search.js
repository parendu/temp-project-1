 //capture search-term text box when user click search-button
 $("#search-button").on("click", function(event) {
     event.preventDefault();

     var searchTerm = $('#search-term').val();
     console.log(searchTerm);
     // The Base URL
     var queryUrl = "https://newsapi.org/v1/sources?language=en&category=technology&sortBy=top&apiKey=2d7535a7fe9c4f85a3ecff0e4993a567";

     // putting the url togehter and append &callback=?
     var url = queryUrl;
     console.log(url);

     // Call The API for a JSON
     $.getJSON(url, function() {
         console.log("success");
     }).done(function(response) {
         console.log("second success");

         console.log(response.sources);

         //var results = response.articles;

         console.log(response.sources);

         // create a var for the results and append a header
         var results = '<li data-role="list-divider"><strong>Articles:</strong</li>';
         //create news articles list creating li attribute
         for (var i = 0; i < response.sources.length; i++) {

             results += '<li>';
             results += '<a href=' + response.sources[i].url + 'name='+ response.sources[i].description+'</a>';
            // results += response.sources[i].description+'<br>';
             //results += response.sources[i].url;
             results += '</li>';

a = document.createElement('a');
    a.href =  'google.com'; // Insted of calling setAttribute 
    a.innerHTML = "Link" // <a>INNER_TEXT</a>
    leftDiv.appendChild(a); // Append the link to the div
    document.body.appendChild(leftDiv); // And append the div to the document body




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
