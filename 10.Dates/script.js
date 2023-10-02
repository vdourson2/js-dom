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
 