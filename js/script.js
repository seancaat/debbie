// different width set on mobile
var widths = (window.innerWidth > 500) ? ["mw5", "mw6", "mw7"] : ["mw4", "mw4", "mw5"];
var floats = (window.innerWidth > 500) ? ["fl", "fr"] : ["fl", "fr", "middle", "middle"];
var cards = document.querySelectorAll(".gallery-card ");

document.querySelector("main").style.opacity = "1.0";
console.log(document.querySelector("main"));

for(var i = 0; i < cards.length; i++){
    cards[i].classList.add(randof(floats));
    cards[i].classList.add(randof(widths));
}



function randof(array) {
    return(array[Math.floor(Math.random() * array.length)]);
}