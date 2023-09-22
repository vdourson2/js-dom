/*
*/
let students =[
    "Elodie", 
    "Mathias", 
    "Lucas", 
    "Rosalie", 
    "Lidwine", 
    "Stephane", 
    "Tim", 
    "Virginie", 
    "Justine", 
    "Carole", 
    "Thomas", 
    "Antoine", 
    "Kimi", 
    "Valentin", 
    "Elisabeth", 
    "Pierre", 
    "Justin", 
    "Robin", 
    "Layla", 
    "Alexandre Vdw", 
    "Alexandre V", 
    "Bastien",
    "Okly"];

//This function takes as argument an integer "size",
// and generate a random integer between 0 and "size".
function randomN(size){
    return Math.floor(Math.random()*size);
}

//This function takes an array of 3 values between 0 and 256,
//and calculates the lightness of the rgb color
function rgbToLightness(arrayRgb){
    arrayRgb.sort((a,b) => a-b);
    return (arrayRgb[0] + arrayRgb[2])/510;
}

//Creates in article a section node for each student, with random background color 
//and a white text color if background lightness is less than 0.6.
//The order of the student is randomly created
let place = document.querySelector("article");
for (let i = students.length; i>0; i--){
    //Creates new section and attaches it to article
    let newNode = document.createElement("section");
    place.appendChild(newNode);
    //Places a random student in it
    let index = randomN(i);
    newNode.textContent = students[index];
    students.splice(index,1);
    //Random background color :
    let r = randomN(255);
    let g = randomN(255);
    let b = randomN(255);
    newNode.style.backgroundColor = `rgb(${r},${g},${b})`;
    //Calculates lightness and change color if necessary
    let lightness = rgbToLightness([r, g, b]);
    if (lightness < 0.6){
        newNode.style.color= "white";
    }
}


