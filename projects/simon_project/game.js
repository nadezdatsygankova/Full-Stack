let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);
function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
}