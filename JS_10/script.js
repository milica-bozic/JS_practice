// 10. Zadatak
// Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.

let date = new Date();
let year = date.getFullYear();
let birthYear = 2018;

if (year - birthYear >= 18) {
    console.log("Punoletan/na je.");
}
else {
    console.log("Nije punoletan/na.");
}