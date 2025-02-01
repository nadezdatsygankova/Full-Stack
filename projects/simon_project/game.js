const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
  // Generate random number between 0 and 3
  let randomNumber = Math.floor(Math.random() * 4);
  // Use the random number to select a random colour from the buttonColours array
  let randomChosenColour = buttonColours[randomNumber];
  // Add the random colour to the game pattern
  gamePattern.push(randomChosenColour);

  // Flash the selected button
  let button = $("#" + randomChosenColour);
  button.addClass("flash");
  playSound(randomChosenColour);
  setTimeout(function () {
      button.removeClass("flash");
  }, 100);
}
function playSound(color) {
  const audio = new Audio(`sounds/${color}.mp3`);
  audio.play();
}
    // Trigger next sequence on click anywhere for testing
    $(document).on("click", function () {
      nextSequence();
  });

