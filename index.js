// Detecting button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttoninnerHTML = this.innerHTML;

    makeSound(buttoninnerHTML);
    buttonAnimation(buttoninnerHTML);
  });
}
// Detecting keyboard press
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {
    case "q":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;
    case "e":
      var tom5 = new Audio("tom-5.mp3");
      tom5.play();
      break;
    case "w":
      var steeldrum = new Audio("steeldrum.mp3");
      steeldrum.play();
      break;
    case "a":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;
    case "p":
      var tabla1 = new Audio("tabla1.mp3");
      tabla1.play();
      break;
    case "j":
      var tabla2 = new Audio("tabla2.mp3");
      tabla2.play();
      break;
    case "k":
      var tabla5 = new Audio("tabla5.mp3");
      tabla5.play();
      break;
    case "l":
      var tabla6 = new Audio("tabla6.mp3");
      tabla6.play();
      break;
    case "s":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;
    case "d":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;
    case "i":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;
    case "o":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;
    default:alert("select a proper letter");
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function (){
    activeButton.classList.remove("pressed",400);
  });
}
