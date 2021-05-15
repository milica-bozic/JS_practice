// 18. zadatak
// Dat je niz stringova čiji su članovi putanje do slika.
// Prikazati sve slike u html dokumentu sa putanjama navedenim u nizu.

let slike = ["images/slika1.png", "images/slika2.png", "images/slika3.jpg" ];

for (let i = 0; i < slike.length; i++) {
    document.body.innerHTML += `<img src="${slike[i]}">`;
}