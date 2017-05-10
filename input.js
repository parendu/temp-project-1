

https://www.googleapis.com/customsearch/v1?parameters



//Create array for animals

var animals = ["india", "tiger"];
var animalName = "";
//create function to display GIF

function animalGif() {
    //clear gifs-appear-here area
    $('#videos-appear-here').empty();

    //save input value in variable
    var animal = $(this).attr("data-name");
    console.log(animal);
    //create queryurl for ajax call with apiKey
    var queryURL = "https://www.googleapis.com/youtube/v3/search?q=" + animal + "&part=snippet"+"&key=AIzaSyAs92o-m1w6elH20BhKZAIy0eggx8YCEmw";
    //Call ajax function
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        //set animal-view att animal
        console.log(response);
        $("#animal-view").attr(animal);

        //set results with resopnse data
        var results = response.data;
        console.log("resoponse" + results);

        
            //create img element var animalImage
            var animalImage = $("<img>");
            //add class animal-image
            animalImage.addClass('animal-image');
            //get src url
            //set still url attr
            //set animate url attr 
            //set data-state attr 
            // animalImage.attr("src", results[i].images.fixed_width_still.url);
            // animalImage.attr("data-still", results[i].images.fixed_width_still.url);
            // animalImage.attr("data-animate", results[i].images.fixed_width.url);
            // animalImage.attr("data-state", "still");

            //prepend rating p to gifDiv

            //prepend animalImage to gifDiv
            gifDiv.prepend(p);
            gifDiv.prepend(animalImage);

            $("#videos-appear-here").prepend(gifDiv);
        }
    });

};



//Create function to render

function displayButton() {

    // Delete the content inside the animal-view div
    $("#animal-view").empty();

    //Loop the array animals list and generate button
    for (var i = 0; i < animals.length; i++) {
        console.log("animals: " + animals[i]);

        //create button

        var addButton = $("<button>");
        //add class to button
        addButton.addClass('btn btn-info');
        addButton.attr('id', "button-id");
        //add text value to button
        addButton.text(animals[i]);

        //append button
        $("#animal-view").append(addButton);

        //add attr to button data-name
        animalName = addButton.text();
        addButton.attr("data-name", animalName);
        console.log("button name: " + animalName);
    }
}
// on click function to get input value
$("#search-term").on("click", function(event) {


    event.preventDefault();
    //set varialbe for input value
    var addAnimal = $("#animal-input").val();
    console.log("my animal: " + addAnimal);

    //add input value to array
    animals.push(addAnimal);
    console.log("array: " + animals);

    //call displayButton function to render button
    displayButton();

});

//clean up animal view and called displayButton call
 
$("#animal-view").empty();
 
displayButton();
