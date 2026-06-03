function toggleColor(box, color) {
  if (box.dataset.colored === "true") 
    {
    box.style.backgroundColor = "#ffffff";
    box.style.color = "#000";
    box.style.borderColor = "#ccc";
    box.dataset.colored = "false";
    } 
    else 
    {
    box.style.backgroundColor = color;
    box.style.color = color === "yellow" ? "#333" : "#fff";
    box.style.borderColor = color;
    box.dataset.colored = "true";
    }
}

function greet() 
{
  const name = document.getElementById("nameInput").value.trim();
  const heading = document.getElementById("greeting");
  heading.textContent = name ? "Hello, " + name : "Hello";
}

document.getElementById("nameInput").addEventListener("keydown", function (e) 
{
  if (e.key === "Enter") greet();
});