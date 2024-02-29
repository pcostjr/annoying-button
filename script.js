// Annoying Button | script.js
// Mr. Costantino  | February 22nd, 2024


// get document elements
const mainbutton = document.getElementById("mainbutton");
const speech = document.getElementById("speech");
const playarea = document.getElementById("playarea");

// variables for tracking clicks
let clicks = 0;
let coming = 25;

// add event listeners
mainbutton.addEventListener('click', () => onButtonClick());


// main driver for annoying button
function onButtonClick() {

    clicks++;
    if(clicks == 1)
    {
        speech.innerText = "DO NOT PRESS";
    }
    else if(clicks == 5)
    {
        speech.innerText = "Not cool...";
        let newbutton = document.createElement("BUTTON");
        newbutton.textContent = "PRESS";
        newbutton.classList.add('mainbutton');
        newbutton.classList.add('green');
        playarea.appendChild(newbutton);
    }
    else if(clicks == 10)
    {
        speech.innerText = "You're not very good at following directions, are you?";
    }
    else if(clicks == 15)
    {
        speech.innerText = "10.52.0.7";
    }
    else if(clicks == 20)
    {
        speech.innerText = "Your family is not safe.";
    }
    else if(clicks == 25)
    {
        speech.innerText = "I am heading towards your location.";
    }
    else if(clicks >= 25 && clicks <= 51)
    {
        speech.innerText = "I am. " + coming + "ft. away from your location.";
        coming--;
    }
    else if(clicks == 52)
    {
        mainbutton.classList.add('.angry');
        document.body.classList.add(".angrybody");
    }
    console.log(clicks);




}

