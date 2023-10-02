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
document.querySelector('.days').textContent = "I am " + giveDaysFrom(birth) + " days old";