//9. Zadatak
//U odnosu na preuzeto trenutno vreme sa računara, ispisati da li je trenutno jutro ili popodne.

let d = new Date();

if (d.getHours() <= 11) {
    console.log("prepodne!");  
}
else {
    console.log("poslepodne!");
}

// 10. Zadatak
// Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.


let date = new Date();
let godinaRodjenja = 2020;
let year = date.getFullYear();

if (year - godinaRodjenja >= 18) {
    console.log("Osoba je punoletna!");
}
else {
    console.log("Osoba je maloletna!");
}

//11. Zadatak
// Odrediti najveći od tri uneta broja.
let a1 = 5;
let a2 = 7;
let a3 = 3;

let maks = a1; // Moramo - pretpostavka da je najveci prvi broj
if (a2 > maks) {  // ako je a2 vece od nase pretpostavke maks
    maks = a2;
}
if (a3 > maks) {  //da li je 3 vece od 5?
    maks = a3;
}
console.log(maks);