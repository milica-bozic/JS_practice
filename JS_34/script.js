// Napravi if petlju sa (and) logičkim operatorom.
let a = 5;

if (a > 0 && a < 10) {
    console.log("Oba logička izraza su zadovoljena!");
}
else {
    console.log("Bar jedan logički izraz nije zadovoljen!");
}

// Drugi zadatak:
let m = 10;
let l = 100;

if (m < l && l > m) {
    console.log("Oba logička izraza u drugom primeru su zadovoljena!");
}
else {
    console.log("Bar jedan od uslova nije zadovoljen!");
}

// Treći zadatak
let p = 30;
let r = 60;
let e = 50;
let z = 80;
if (p < r && z > e) {
    console.log("Ovaj izraz u trećem primeru je tačan!")
}
else {
    console.log("Ovaj izraz nije tačan!");
}

if (z * e > p + r && e + z < p * e + z) {
    console.log("OVAJ PRIMER JE TAČAN!");
}
else {
    console.log("OVAJ PRIMER NIJE TAČAN!");
}