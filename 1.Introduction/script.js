/*Exercises to manipulate the DOM : introduction
*/

//This function takes as argument an integer "size",
// and generate a random integer between 0 and "size".
function randomN(size){
    return Math.floor(Math.random()*size);
}

document.querySelector("h1").firstChild.textContent= "Modifying the DOM | ";
document.body.style.backgroundColor = `rgb(${randomN(256)}, ${randomN(256)}, ${randomN(256)})`;

for (let child of document.body.children){
    console.log(child);
} 

