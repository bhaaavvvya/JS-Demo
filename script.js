//accessing greeting elements
var greetBtn = document.getElementById("greetBtn");
var nameInput = document.getElementById("nameInput");
var greeting = document.getElementById("greeting");

//function for greeting
greetBtn.addEventListener("click", function () {
  var name = nameInput.value; //reads input from input field
  greeting.textContent = "Hello " + name; //changing the greeting by adding the input received
});

//accessing boxes
var redBox = document.getElementById("red");
var blueBox = document.getElementById("blue");
var greenBox = document.getElementById("green");
var yellowBox = document.getElementById("yellow");

//function to toggle color of red box
redBox.addEventListener("click", function () {
  //when red -> change to white
  if (redBox.style.backgroundColor === "red") {
    redBox.style.backgroundColor = "white";
    redBox.style.color = "black";
  } 
  //when white -> change to red
  else {
    redBox.style.backgroundColor = "red";
    redBox.style.color = "white";
  }
});

//function to toggle color of blue box
blueBox.addEventListener("click", function () {
  //when blue -> change to white
  if (blueBox.style.backgroundColor === "blue") {
    blueBox.style.backgroundColor = "white";
    blueBox.style.color = "black";
  } 
  //when white -> change to blue
  else {
    blueBox.style.backgroundColor = "blue";
    blueBox.style.color = "white";
  }
});

//function to toggle color of green box
greenBox.addEventListener("click", function () {
  //when green -> change to white
  if (greenBox.style.backgroundColor === "green") {
    greenBox.style.backgroundColor = "white";
    greenBox.style.color = "black";
  } 
  //when white -> change to green
  else {
    greenBox.style.backgroundColor = "green";
    greenBox.style.color = "white";
  }
});

//function to toggle color of yellow box
yellowBox.addEventListener("click", function () {
  //when yellow -> change to white
  if (yellowBox.style.backgroundColor === "yellow") {
    yellowBox.style.backgroundColor = "white";
    yellowBox.style.color = "black";
  } 
  //when white -> change to yellow
  else {
    yellowBox.style.backgroundColor = "yellow";
    yellowBox.style.color = "black";
  }
});