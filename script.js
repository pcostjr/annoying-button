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

function annoy() {

    // conditional ladder that modifies button's behaviors based off of the number of times it's been pressed
    if(annoyed == 1)
      alert("Stop That!") 
    else if(annoyed == 5)
      alert("I said stop that!")
    else if(annoyed == 10)
    {
      var greenbutton = document.createElement("BUTTON")
      greenbutton.appendChild(document.createTextNode("PRESS"))
      greenbutton.classList.add("greenbutton")
      playarea.appendChild(greenbutton)
    }
    else if(annoyed == 15)
    {
      redvoice.innerText = "are you serious?"
    }
    // increments annoyed
    annoyed++
  }