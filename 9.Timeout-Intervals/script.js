//Using setInterval display the word Keller one character at a time (one letter per second).
//Once the word is written on the screen clear the interval.

let place = document.createElement('p');
document.body.appendChild(place);
let word = Array.from("Keller");
let i = 0;

function type(wordArray) {
    if (i < wordArray.length) {
        place.textContent += wordArray[i++];
    } 
    else {
        clearInterval(typewriter);
    }
}

let typewriter = setInterval(() => type(word),1000);

