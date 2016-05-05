var appendText = function(stringsToPrint) {
  for(var index = 0; index < stringsToPrint.length; index += 1) {
    $("ul#textList").append("<li>" + stringsToPrint[index] + "</li>");
    $("ul#textList").append("<li>blah</li>");
    //debugger;
  }
}

var genrateArrayOfIntegers = function(userIntInput) {
  var integers = [];
  for(var index = 0; index < userIntInput; index += 1) {
    debugger;
    var member = index + 1
    integers.push(member);
  }
  return integers;
}

$(document).ready(function() {
  $("#user-input form").submit(function(event) {
    var userInput = $("input#userInputInteger").val();
    var inputAsInt = parseInt(userInput);
    //debugger;
    var blanks = ["HTML", "Javascript"];
    appendText(blanks);
    var test = genrateArrayOfIntegers(inputAsInt);
    debugger;
//$
//alert("got to the start" + blanks[0])
//languages.forEach(function(blank)){
//$("ul#textList").append("<li>" + blanks[0] + "</li>");
//}
    event.preventDefault();

  });

});
