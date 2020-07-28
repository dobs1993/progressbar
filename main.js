// Grabbing items from the dom

const start = document.querySelector("button");
const progress = document.querySelector('div');
const bar = document.getElementById('bar');
const reset = document.getElementById("reset");

// An event listener listening for a click to the start button when clicked start the green progress bar animation

start.addEventListener('click', function(){
    bar.style.animation = 'move 8s forwards'
});

// An event listener listening for a click to the stop button when clicked the animation of the green progress bar resets to the beginning

reset.addEventListener('click', function(){
    bar.style.animation = "";
})