// script.js
// Annoying Button
// Mr. Costantino
// 2.22.24

// get document elements
const redbutton = document.getElementById("redbutton");

// add event listeners
redbutton.addEventListener('click', () => onButtonClick());

// main driver for annoying button
function onButtonClick() {

    alert("Hey! Stop That!");

}

