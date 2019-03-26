$(document).on("click", "#scraper", function () {
  console.log("scraper button clicked")
  $.ajax({
    method: "GET",
    url: "/scrape"
  })
    .then(function (data) {
      console.log("scrape reloaded");
      location.reload();
    });
});

$(document).on("click", ".comment", function () {
  var thisID = $(this).attr("data-id");
  console.log("comment button clicked for Id: " + thisID);
  var url = "/articles/" + thisID;
  location.assign(url);
  $.ajax({
    method: "GET",
    url: "/articles/" + thisID
  })
    .then(function (data) {
      console.log(data);
      // this is where we need to figure out how to do handlebars to show comment and 
      // allow user to add, update or delete comment

    });
});



// When you click the savenote button
$(document).on("click", "#savenote", function () {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      // Value taken from title input
      title: $("#titleinput").val(),
      // Value taken from note textarea
      body: $("#bodyinput").val()
    }
  })
    // With that done
    .then(function (data) {
      // Log the response
      console.log(data);
      location.assign("/");
    });

  
});

// When you click the close X button
$(document).on("click", ".close", function () {
  location.assign("/");
});


// When you click the deletenote button
$(document).on("click", "#deletenote", function () {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");

  // Run a Delete request to delete the note, using what's entered in the inputs
  $.ajax({
    method: "DELETE",
    url: "/note/" + thisId,
   
  })
    // With that done
    .then(function (data) {
      // Log the response
      console.log(data);
      location.assign("/");
    });
  });

  // When you click the updatenote button
$(document).on("click", "#updatenote", function () {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "PUT",
    url: "/note/" + thisId,
    data: {
      // Value taken from title input
      title: $("#titleinput").val(),
      // Value taken from note textarea
      body: $("#bodyinput").val()
    }
  })
    // With that done
    .then(function (data) {
      // Log the response
      console.log(data);
      location.assign("/");
    });

  
});