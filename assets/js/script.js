$(document).ready(function() {

  $(".project-img").hover(function() {
    // $("#" + this.id + "-after").css("display", "block");
    $("#" + this.id + "-after").fadeIn("2000");
  }, function() {
    // $("#" + this.id + "-after").css("display", "none");
    $("#" + this.id + "-after").fadeOut("2000");
  });
});
