
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}
function handleClick(event) {
 console.log("I got clicked!");
}