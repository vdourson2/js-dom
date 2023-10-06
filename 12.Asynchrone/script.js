//Create a <button>, when clicked the json's content is loaded with a fetch('array.json'), 
//then dynamically generate a <ul> list containing each rule in a <li>.

let btn = document.querySelector('button');
let ul = document.createElement('ul')
document.body.appendChild(ul);

btn.addEventListener('click',() =>
fetch("array.json")
    .then((response) => response.json())
    .then((obj) => {
        obj.colors.forEach((color) => {
            let li = document.createElement('li');
            li.textContent = color;
            ul.appendChild(li);
        })
    })
    .catch((error) => console.log("Colors file not found"))
)
