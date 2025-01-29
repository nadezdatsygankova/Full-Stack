let AudioList = ["crash", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"];
console.log(AudioList);
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
  switch (this.innerHTML) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      let kissBass = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log("Error");
      }
  }
  );
}
