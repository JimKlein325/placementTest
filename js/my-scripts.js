$(document).ready(function() {
  $("#user-input form").submit(function(event) {
    $("ul#textList").append("<li>blah blah</li>");

    event.preventDefault();
  });
});
