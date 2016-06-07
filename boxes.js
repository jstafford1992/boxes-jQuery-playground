'use strict';

console.log("hello world");
// $(document).ready(function(){
//   alert("Ready");
// });


$(function() {
  alert("Ready");
  $("#secretBox").css('background-color', 'white');
  $("#secretBox").append('<h1> secret box </h1>');
  $("#row1 > div").attr("class", "box boxType3");
  $("#row4 :last-child").css('display', 'none');
  //$(".boxType1").css('background-color', "white");
  $("#row2 :first-child").removeAttr('class');
  $("#row2 :nth-child(2)").removeAttr('class');
  //$("#container div:not(.row)").not("#secretBox").css("width", "2px");

  $("#container").on("click", function (event) {
    console.log(event.clientX);
    console.log(event.clientY);
  });
  $(".boxType1").attr('src', "http://www.galvanize.com/");
  $(".boxType1").on("click", function(event) {
    alert("You can never leave the page!");
    event.stopPropagation();
  });

  $(".box").click(function() {
    $(this).toggleClass("backgroundImage");
  });
  $("#container").click(function() {
    $(this).css("background-color", "black");
  });


});



//});
