document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
        alert("I saw you click !");
        if (thumbnailElement.className == "small") {
            thumbnailElement.className = "";
        }
        else {
            thumbnailElement.className = "small";
        }
    });





});


