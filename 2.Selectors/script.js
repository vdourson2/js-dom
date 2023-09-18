/*
*/

//This function takes as argument an integer "size",
// and generate a random integer between 0 and "size".
function randomN(size){
    return Math.floor(Math.random()*size);
}

console.log(document.querySelectorAll("#important"));

for (let el of document.querySelectorAll(".important")) {
    el.setAttribute("title","This is an important item");
}

for (let im of document.querySelectorAll("img")){
    if (im.classList.contains("important")){
        im.style.display = "none";
        console.log(im);
    }
}

for (let p of document.querySelectorAll("p")){
    p.classList.length !== 0 ? console.log(`${p.textContent} ${p.classList[0]}`) : console.log(p.textContent);
}

for (let p of document.querySelectorAll("p")){
    if (p.classList.length == 0) {
        p.style.backgroundColor = `rgb(${randomN(256)}, ${randomN(256)}, ${randomN(256)})`;
    }
}