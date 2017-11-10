$(document).ready( function() {

	// $("#btn-submit").on("click", function(event) {
	// 	event.preventDefault();

	// 	var newBurger = {
	// 		name: $("#new-burger").val().trim(),
	// 	};

	// 	// Send the POST request
	// 	$.ajax("/api/burgers", {
	// 		type: "POST",
	// 		data: newBurger
	// 	}).then ( function() {
	// 		console.log("Created new burger");
	// 		// Reload the page to get the updated list
	// 		location.reload();
	// 	});
	// });


	// $(".devour-burger").on("click", function(event) {
	// 	event.preventDefault();

	// 	var id = $(this).data("id");
	// 	var devoured = true;
	// });

});




// $(".change-sleep").on("click", function(event) {
//     var id = $(this).data("id");
//     var newSleep = $(this).data("newsleep");

//     var newSleepState = {
//       sleepy: newSleep
//     };

//     // Send the PUT request.
//     $.ajax("/api/cats/" + id, {
//       type: "PUT",
//       data: newSleepState
//     }).then(
//       function() {
//         console.log("changed sleep to", newSleep);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });