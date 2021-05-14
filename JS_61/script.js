// 9. zadatak
// Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
let brojevi2 = [2, 4, 5, 7, 9];

let suma = 0;
for (i = 0; i < brojevi2.length; i++) {
    suma += brojevi2[i];
}
let srednjaVrednost = suma / brojevi2.length;
console.log(srednjaVrednost);

let brojac = 0;
for (i = 0; i < brojevi2.length; i++) {
    if (brojevi2[i] > srednjaVrednost) {
        brojac++;
    }
}
console.log(brojac);
