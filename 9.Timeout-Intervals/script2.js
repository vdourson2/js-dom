//This function takes as argument an integer "size",
// and generate a random integer between 0 and "size".
function randomN(size){
    return Math.floor(Math.random()*size);
}
let circles = document.querySelectorAll('.game__circle');


let scoreNode = document.querySelector('.wrapScore__score');
let score = 0;
//Add event on each div to increase score if the click happen when the div is red
for (let circle of circles) {
    circle.addEventListener('click', (e) => {
        if (e.target.style.backgroundColor == "red") {
            scoreNode.textContent = ++score;
        }
    })
}
let previousPlaceNb = 0;
let counter = 0;
let play = setInterval(() => {

    //Color the previous red div in white to reset the screen:
    circles[previousPlaceNb].style.backgroundColor = "white";

    if (counter++ == 20) { 
        //Increase counter and end game after 50 times of the mole appearance :
        clearInterval(play);
    }
    else {
        //Generates a random number different from the precedent one,
        //and color the corresponding div in red : 
        let placeNb = randomN(9);
        while (placeNb == previousPlaceNb) {
            placeNb = randomN(9);
        }
        previousPlaceNb = placeNb;
        circles[placeNb].style.backgroundColor = "red";
    } 
}, 800);








