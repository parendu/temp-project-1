//create empty array for videos
var searchVideos=[];
var videoName='';


//Create the function to display videos




//clear all the videos
  
//   $("#videos-appear-here").empty();

// //save input value in variable from search

// var video = $(this).attr("data-name");
// console.log("video: "+ video);

//create queryurl for ajax call with apiKey - youtube

// After the API loads, call a function to enable the search box.
//function handleAPILoaded() {
//  $('#search-button').attr('disabled', false);
//}

// Search for a specified string.
function search() {
  var q = $('#search-term').val();
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