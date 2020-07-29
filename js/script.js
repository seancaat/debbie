// different width set on mobile
var widths = (window.innerWidth > 500) ? ["mw5", "mw6", "mw7"] : ["mw5", "mw6"];
var offsets = ["ml0", "ml1", "ml2", "ml3", "ml4", "ml5", "ml6", "ml7"];
var floats = ["fl", "fr", "middle"];
var cards = document.querySelectorAll(".gallery-card ");

document.querySelector("main").style.opacity = "1.0";
console.log(document.querySelector("main"));

for(var i = 0; i < cards.length; i++){
    // right or left 
    cards[i].classList.add(randof(floats));  

    cards[i].classList.add(randof(widths));
    // cards[i].classList.add(randof(offsets));
}



function randof(array) {
    return(array[Math.floor(Math.random() * array.length)]);
}