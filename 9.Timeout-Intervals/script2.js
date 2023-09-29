//This function takes as argument an integer "size",
// and generate a random integer between 0 and "size".
function randomN(size){
    return Math.floor(Math.random()*size);
}
let circles = document.querySelectorAll('.game__circle');
let scoreNode = document.querySelector('.wrapScore__score');
let score = 0;
circles.forEach((circle) =>
    circle.addEventListener('click', (e) => {
        if (e.target.style.backgroundColor == "red") {
            scoreNode.textContent = ++score;
        }
    }))

let play = setInterval(() => {
    circles.forEach((circle) => circle.style.backgroundColor = "white");
    let placeNb = randomN(9);
    let place = circles[placeNb];
    place.style.backgroundColor = "red";
}, 1000);








