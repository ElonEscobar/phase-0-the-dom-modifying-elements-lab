// Write your code here!
const main = document.getElementById("main");
main.remove();

const newHeader = document.querySelector("h1#victory");
const newElement = document.createElement("div");

newElement.textContent = ("YOUR-NAME is the champion");
newHeader.appendChild(newElement);
document.body.append(newElement);