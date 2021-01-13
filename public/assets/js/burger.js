// burger app - /public/assets/js/burger.js
$(function() {
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        if ($("#burger").val() === "") {
            // if value for new burger is empty
            $("#inputModal").modal('show');
        } else {
            var newBurger = {
            name: $("#burger").val().trim(),
            };
        
            // Send the POST request.
            $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
            }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
            );
        }
      });
    
      $(".change-devoured").on("click", function(event) {
        let id = $(this).data("id");
        let newDevoured = {
          devoured: true
        };
    
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevoured
        }).then(function() {
          console.log("changed devoured to " + newDevoured);
          location.reload();
        });
      });
    
      $(".delete-burger").on("click", function(event) {
        let id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then( function() {
          location.reload();
        })
      })
});