// Button Event Listener
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
   let buttonInner = this.innerHTML;
    playSound(buttonInner);
    buttonAnimation(buttonInner);
})

};


function playSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
      default:
        console.log("Error");
        }
}
// Keyboard Event Listener

document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);

});

// Button Animation
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 1000);
}