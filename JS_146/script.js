let img1 = document.getElementsByTagName("img")[0];
let img2 = document.getElementsByTagName("img")[1];
let img3 = document.getElementsByTagName("img")[2];

img1.style.width = "200px";
img2.style.width = "300px";
img3.style.width = "200px";

img1.style.border = "2px dotted blue";
img2.style.border = "2px solid green";
img3.style.border = "3px solid yellow";

let link1 = document.querySelectorAll("a")[0];
let link2 = document.querySelectorAll("a")[1];
let link3 = document.querySelectorAll("a")[2];
let link4 = document.querySelectorAll("a")[3];
let link5 = document.querySelectorAll("a")[4];

link1.style.backgroundColor = "hotPink";
link2.style.backgroundColor = "yellow";
link3.style.backgroundColor = "blue";
link4.style.backgroundColor = "lightBlue";
link5.style.backgroundColor = "lightPink";

let table = document.querySelectorAll("td");

console.log(table);
/*
for(let i = 0; i < table.length; i++) {
    table[i].style.border = "2px solid black";
}
*/

table.forEach(td => {
    td.style.border = "3px dotted blue";
});

let tableTag = document.querySelector("table");

tableTag.style.borderCollapse = "collapse";

let body = document.querySelector("body");
console.log(body);

body.style.backgroundImage = "URL('background.png')";
