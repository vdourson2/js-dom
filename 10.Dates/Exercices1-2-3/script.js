//Timezones of Anchorage (USA), Reykjavik (Iceland), Saint-Petersburg (Russia)
//Display the date and time of these cities along with the time and date of Brussels.

let now = new Date();
let anchorage = document.querySelector('#anchorage');
anchorage.textContent = "Anchorage : " +  now.toLocaleString("fr-FR",{timeZone:"America/Anchorage"});
let reykjavik = document.querySelector('#reykjavik');
reykjavik.textContent = "Reykjavik : " +  now.toLocaleString("fr-FR",{timeZone:"Iceland"}); 
let stPetersbourg = document.querySelector('#stpetersbourg');
stPetersbourg.textContent = "Saint-Petersbourg : " +  now.toLocaleString("fr-FR",{timeZone:"Europe/Moscow"});
let bruxelles = document.querySelector('#bruxelles');
bruxelles.textContent = "Bruxelles : " +  now.toLocaleString("fr-FR");
 
//Using timestamps, find how many days have passed since the date of your birth.
//Write a function to find how many days have passed since any point in time (after 1970).

//Function that takes a date as argument (after 1970) 
//and return how many days have passed since this date
function giveDaysFrom(date){
    return Math.round(((new Date()).getTime() - date.getTime())/(1000*60*60*24));
}

let birth = new Date('1977-08-11');
document.querySelector('#days').textContent = "I am " + giveDaysFrom(birth) + " days old";

//Using timestamps, find the exact time and date we will be in 80000 hours.
//Write a function to display the time and date for any amount of hours given in the future. 
//Create a number input for the hours and listen for keyup events, 
//dynamically display the date in the number of hours given by the input.
function futurDate() {
    document.querySelector("#hours").addEventListener('keyup', (e) =>
    document.querySelector("#futurDate").textContent = new Date((new Date()).getTime() + e.target.value*60*60*1000)
    )
}
    
futurDate();


