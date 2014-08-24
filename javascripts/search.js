$(document).ready(function () {
  $("#search-icon").click(function() {
    $("#search form").slideDown(function() {
      $(this).find("input[type=text]").focus();
    })
    return false;
  });
});