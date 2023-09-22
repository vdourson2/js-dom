const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

//This function takes as argument an integer "size",
// and generate a random integer between 0 and "size".
function randomN(size){
  return Math.floor(Math.random()*size);
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  
  // Everytime the user clicks on one of the action squares : 
  //     Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)
  //     Create a new <li> in the log below to state when the action was done 
  
  
  let div = document.createElement("div");
  div.classList.add("displayedsquare", e.target.classList[1]);
  displayedSquare.appendChild(div);

  div.addEventListener('click', (ev) => alert(`${ev.target.classList[1]}`))
  
  let li = document.createElement("li");
  li.textContent = `${getElapsedTime()} created a new ${e.target.classList[1]} square`;
  ul.appendChild(li);


}

const hitOnKey = (e) => {
  if (e.code == "Space") { //When the spacebar is pressed, randomly change the background color of the whole page, and log in the li's
    e.target.style.backgroundColor = `rgba(${randomN(256)},${randomN(256)},${randomN(256)},0.5)`;
    let li = document.createElement("li");
    li.textContent = `${getElapsedTime()} changed color`;
    ul.appendChild(li);
  } else if (e.code == "KeyI") { // When the I key is pressed the the generated <li>s get deleted
      let lis = document.querySelectorAll("li");
      for (let li of lis) {
        ul.removeChild(li);
      }
    } else if(e.code == "KeyS") { //When the s key is pressed the squares get deleted
      let array = displayedSquare.children;
      while (array.length>0) {
        console.log(array);
        console.log(displayedSquare.removeChild(array[array.length-1]));
      }    
    }
}

const displayedSquare = document.querySelector(".displayedsquare-wrapper");
const ul = document.querySelector("ul");
const actionSquares = document.querySelectorAll('.actionsquare')

for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
}


// Add an event listener on the document <body>, listening for the keypress event
document.body.addEventListener('keydown', hitOnKey);