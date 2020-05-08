/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
  
$(document).ready(function() {

  $(function() {

    $( ".mydiv" ).draggable({      
    });
    });
});

// function myFunction() {
//   var x = document.getElementById("toggle");
//   if (x.innerHTML === "") {
//     x.innerHTML = "Gulls are typically medium to large birds, usually grey or white, often with black markings on the head or wings";
//   } else {
//     x.innerHTML = "";
//   }
// }

function myFunction() {
  var x = document.getElementById("content");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

