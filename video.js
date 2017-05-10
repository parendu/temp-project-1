//create empty array for videos



//Create the function to display videos






// Search for a specified string.
$("#search-button").on("click", function(event) {

  var q = $('#search-term').val();
  console.log.(q)
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    console.log(str);
    $('#videos-appear-here').html('<pre>' + str + '</pre>');
  });










}; 


//