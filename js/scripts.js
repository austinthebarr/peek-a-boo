$(function() {
  $(".clickable").click(function(){
    $("#walrus-showing").slideToggle("fast");
    $("#walrus-hidden").slideToggle("slow");
  });
});
