for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var innerHTML = this.innerHTML;
    gotten(innerHTML);
    buttonAnimation(innerHTML);
  })
}




// Key Press Sounds

document.addEventListener("keydown", function(onKeyDown) {
  var pressedKey = onKeyDown.key.toLowerCase();
  gotten(pressedKey);
  buttonAnimation(pressedKey);
  // var allButtons = document.querySelectorAll("button");
  // var selectedAttributes = allButtons[1].getAttribute("class");
  // console.log(selectedAttributes);
  // var keyArray = ["a", "s", "d", "f", "j", "k", "l"];
  // var gottenKey = keyArray.indexOf(pressedKey);
  // console.log(gottenKey);
  // if (keyArray.includes(pressedKey)) {
  // document.getElementsByClassName("s").classList.toggle("flash");
});

function gotten(key) {
  switch (key) {
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "f":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick.mp3");
      kick.play();
      break;
  }
}

function buttonAnimation(currentKey) {
  var selectedKey = document.querySelector("." + currentKey);
  selectedKey.classList.add("pressed");
  setTimeout(function() {
    selectedKey.classList.remove("pressed");
  }, 150);
}
