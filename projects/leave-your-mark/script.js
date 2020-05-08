/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
  
$(document).ready(function() {

  $(function() {

    $( ".mydiv, #yellow, #pink, #green, #blue, #purple, #orange").draggable({      
    });
    });
});
// 
// $(document).ready(function() {
// 
//   $(function() {
// 
//     $("#yellow, #pink").draggable({      
//     });
//     });
// });

// $(document).ready(function() {
// 
//   $(function() {
// 
//     $( "#pink").draggable({      
//     });
//     });
// });

// 
function myFunction() {
  var x = document.getElementById("content");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction1() {
  var x = document.getElementById("yellow");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction2() {
  var x = document.getElementById("pink");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction3() {
  var x = document.getElementById("green");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction4() {
  var x = document.getElementById("blue");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction5() {
  var x = document.getElementById("purple");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction6() {
  var x = document.getElementById("orange");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

