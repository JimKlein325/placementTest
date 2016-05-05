// append pingpong and integer values in an unordered list below input box inline form.
var appendText = function(stringsToPrint) {
  // Removing all children from an element
  $("ul#textList").empty();

  for(var index = 0; index < stringsToPrint.length; index += 1) {
    $("ul#textList").append("<li>" + stringsToPrint[index] + "</li>");
    //debugger;
  }
}
// generates a list of integers from 1 to user input integer
var genrateArrayOfIntegers = function(userIntInput) {
  var integers = [];
  for(var index = 0; index < userIntInput; index += 1) {
    //debugger;
    var member = index + 1
    integers.push(member);
  }
  return integers;
}

// define tests for divisibility by 3 and 5
var divisibileBy3 = function (number) {
  return number%3 === 0;
}
var divisibileBy5 = function (number) {
  return number%5 === 0;
}

// define function to generate "ping" when number is divisible by 3(%3=0),
// "pong" when divisible by 5 (%5=0), and "pinpong" when divisible by both 3 and 5
var performPingPongTransformation = function(isDivisibleBy3, isDivisibleBy5)  {
  var outputString = ""
  if (isDivisibleBy3) { outputString += "ping"}
  if (isDivisibleBy5) { outputString += "pong"}
  return outputString
}

// define transform function that applies full set of rules for transformation
var transformIntToString = function(inputInteger) {

  let isDivisibleBy3 = divisibileBy3(inputInteger);
  let isDivisibleBy5 = divisibileBy5(inputInteger);

  if (!(isDivisibleBy3 || isDivisibleBy5)) { return inputInteger.toString();}
  else {
    return performPingPongTransformation(isDivisibleBy3, isDivisibleBy5);
  }
}


$(document).ready(function() {
  $("#user-input form").submit(function(event) {
    var userInput = $("input#userInputInteger").val();
    var inputAsInt = parseInt(userInput);
    //debugger;

    if (isNaN(inputAsInt)) {
      $("ul#textList").empty();
      alert("Please enter an integer number.")
    }
    else {
      var numbers = genrateArrayOfIntegers(inputAsInt);

      var strings = numbers.map(function(number) {
        return transformIntToString(number);
      });
      appendText(strings);
      //debugger;
    }
    event.preventDefault();
  });
});

/*
FYI:  I originally worked out the algorithm for the pingpong game in a swift playground
since I'm more comfortatble with the Swift syntax.
//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

// Swift PingPong code

var userInput = 33
// Build an array containing integers from 1 to the user selected value
var inputArray = Array<Int>()

var counter = 0

while counter < userInput {
    counter++
    inputArray.append(counter)
}

// define tests for divisibility by 3 and 5
func divisibileBy3 (i: Int) -> Bool
{
    return i%3 == 0
}
func divisibileBy5 (i: Int) -> Bool
{
    return i%5 == 0
}

// define function to generate "ping when number is %3=0, pong when %5=0, and pinpong when %3=0 && %5=0
func performPingPongTransformation (isDivisibleBy3: Bool, isDivisibleBy5: Bool, i: Int) -> String {
    var outputString = ""
    if isDivisibleBy3 { outputString += "ping"}
    if isDivisibleBy5 { outputString += "pong"}
    return outputString

}

// define transform function that applies full set of rules for transformation
func transformIntToString (inputInteger: Int) -> String {

    let isDivisibleBy3 = divisibileBy3(inputInteger)
    let isDivisibleBy5 = divisibileBy5(inputInteger)

    if !(isDivisibleBy3 || isDivisibleBy5) { return String(inputInteger)}
    else {
        return performPingPongTransformation(isDivisibleBy3, isDivisibleBy5: isDivisibleBy5, i: inputInteger)
        }
    }

var outputValuesToPrint = inputArray.map(transformIntToString)
*/
