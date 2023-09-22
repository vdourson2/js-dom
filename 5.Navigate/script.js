//Select the last child of the <ol> tag and put it at the beginning of the list

let ol = document.querySelector("ol");
let olChildren = ol.children;
ol.insertBefore(olChildren[4],olChildren[0]);

// Move the <h2> of the third section in the second one and vice-versa

let sections = document.querySelector("main").children;
let clone2 = sections[1].querySelector("h2");
sections[1].replaceChild(sections[2].querySelector("h2"),sections[1].querySelector("h2"));
sections[2].children[0].insertBefore(clone2,sections[2].querySelector("p"));

//Delete the last section from the DOM, we don't need it anyways
document.querySelector("main").removeChild(sections[2]);
