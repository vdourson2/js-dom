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

  
  let li = document.createElement("li");
  li.textContent = `${getElapsedTime()} created a new ${e.target.classList[1]} square`;
  ul.appendChild(li);

}

const changeBgc = (e) => {
  if (e.code == "Space") {
    e.target.style.backgroundColor = `rgba(${randomN(256)},${randomN(256)},${randomN(256)},0.5)`;
    let li = document.createElement("li");
    li.textContent = `${getElapsedTime()} changed color`;
    ul.appendChild(li);
  } else if (e.code == "KeyI") {
    let lis = document.querySelectorAll("li");
    for (let li of lis) {
      ul.removeChild(li);
    }
  }
}

const displayedSquare = document.querySelector(".displayedsquare-wrapper");
const ul = document.querySelector("ul");
const actionSquares = document.querySelectorAll('.actionsquare')

for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
}


// Add an event listener on the document <body>, listening for the keypress event. (hint: have a look at this)
//     When the spacebar is hit randomly change the background color of the whole page
//     Log when the spacebar is used the same way you used for the generated squares.
//     When the l key is pressed the log gets deleted (erases the generated <li>s). Mind you: using a delete in a for loop might cause issues (as the amount of items to loop over changes), so a while loop might be a good choice instead.
//     When the s key is pressed the squares get deleted (erases the generated squares)

document.body.addEventListener('keydown', changeBgc);