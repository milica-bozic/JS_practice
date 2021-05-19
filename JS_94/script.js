// 18.
//Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa
//putanjama navedenim u nizu.
let slike = ["1.jpg", "2.jpg", "3.jpg"];

function img (niz) {
    niz.forEach (elem => {
        document.body.innerHTML += `<img src="${elem}">`
    });
}
img(slike);