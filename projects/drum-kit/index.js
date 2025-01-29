let AudioList = ["crash", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"];
console.log(AudioList);
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    console.log("I got clicked!");
    var buttonInnerHTML = this.style;
    console.log(buttonInnerHTML);
    let audio = new Audio( "./sounds/crash.mp3");
    audio.play();
  });



}
