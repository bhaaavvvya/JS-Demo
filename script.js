var greetBtn = document.getElementById("greetBtn");
var nameInput = document.getElementById("nameInput");
var greeting = document.getElementById("greeting");

greetBtn.addEventListener("click", function () {
  var name = nameInput.value;
  greeting.textContent = "Hello " + name;
});

var redBox    = document.getElementById("red");
var blueBox   = document.getElementById("blue");
var greenBox  = document.getElementById("green");
var yellowBox = document.getElementById("yellow");

redBox.addEventListener("click", function () {
  if (redBox.style.backgroundColor === "red") {
    redBox.style.backgroundColor = "white";
    redBox.style.color = "black";
  } else {
    redBox.style.backgroundColor = "red";
    redBox.style.color = "white";
  }
});

blueBox.addEventListener("click", function () {
  if (blueBox.style.backgroundColor === "blue") {
    blueBox.style.backgroundColor = "white";
    blueBox.style.color = "black";
  } else {
    blueBox.style.backgroundColor = "blue";
    blueBox.style.color = "white";
  }
});

greenBox.addEventListener("click", function () {
  if (greenBox.style.backgroundColor === "green") {
    greenBox.style.backgroundColor = "white";
    greenBox.style.color = "black";
  } else {
    greenBox.style.backgroundColor = "green";
    greenBox.style.color = "white";
  }
});

yellowBox.addEventListener("click", function () {
  if (yellowBox.style.backgroundColor === "yellow") {
    yellowBox.style.backgroundColor = "white";
    yellowBox.style.color = "black";
  } else {
    yellowBox.style.backgroundColor = "yellow";
    yellowBox.style.color = "black";
  }
});