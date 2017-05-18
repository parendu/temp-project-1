 //capture search-term text box when user click search-button
$(document).ready(function(){
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
       // var p = "<h3>Articles:</h3>";
         
         //$("#article-header").html(p);

         //create news articles list creating li attribute
         for (var i = 0; i < response.articles.length; i++) {

              var eachPaper = $("<div class='eachPaper'>");
              var articleTitle = $("<h3 id='paper_1_title'>");
              articleTitle.text(response.articles[i].title);
              eachPaper.append(articleTitle);
              var articleDiscription = $("<p id='paper_1_body'>");
              articleDiscription.text(response.articles[i].description);
              eachPaper.append(articleDiscription);

              var articlesButtons =$("<button type='button' class='btn btn-primary paperButtons' id='paperButton_1' style='float: right'>");
              articlesButtons.attr("href", response.articles[i].utl);
              articlesButtons.text("Read");
              
              $("#articles").append(eachPaper);

              // //create list
              //  var list = $("<li>");
              //     list.text(response.articles[i].title);
              //       console.log(list);
              //     var link = $("<a>");
              //     link.attr("href", response.articles[i].url);
              //     //link.attr("title", response.articles[i].title);
              //     link.attr("target", "_blank");

              //      link.append(list);
              //      $('#results').append(link);

         }; //loop
          
          //add border
         // $('#articles-display').addClass('bordered');
         
          

         // }).fail(function() {
         //   console.log("error");
         //  }).always(function() {
         //  console.log("always");
         //  });

     }); //response
   

 }); //click
});  //document ready