//Using setInterval display the word Keller one character at a time (one letter per second).
//Once the word is written on the screen clear the interval.

let place = document.createElement('p');
document.body.appendChild(place);
let word = Array.from("Keller");
let i = 0;

let typewriter = setInterval(() => 
    i < word.length ? place.textContent += word[i++] : clearInterval(typewriter)
,1000);

//Write a function that displays every second that has passed on the page since it was opened.
//The display should be refreshed every second.
//If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed", etc.

const _initTime = Date.now()

let displaySeconds = document.createElement('div');
document.body.appendChild(displaySeconds);
let seconds = 0;

let displayMinutes = document.createElement('p');
document.body.appendChild(displayMinutes);
let minutes = 0;

const writeElapsedTime = () => {
    displaySeconds.textContent = ++seconds + ' s';
    if (Math.floor(seconds/60) > minutes) {
        displayMinutes.textContent = ++minutes + ' minutes has elapsed'
    }
}

setInterval(writeElapsedTime, 1000);
