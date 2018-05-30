$(function() {
  $(".clickable").click(function(){
    $("#walrus-showing").slideToggle("fast");
    $("#walrus-hidden").slideToggle("slow");
  });
});

$(function(){
  $(".img1").click(function(){
    $("#show1").toggle();
    $("#hidden1").toggle();
  });

  $(".img2").click(function(){
    $("#show2").toggle();
    $("#hidden2").toggle();
  });

  $(".img3").click(function(){
    $("#show3").toggle();
    $("#hidden3").toggle();
  });
});
