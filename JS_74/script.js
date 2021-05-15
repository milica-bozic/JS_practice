// 22. zadatak
// Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’.
// rec.includes("a") - vraća true ukoliko rec sadrži slovo a, a u suprotnom vraća false.

let stringovi = ['Milos', 'Milan', 'Goran', 'Aleksandra'];
let brStringovaSaSlovomA = 0;

for (let i = 0; i < stringovi.length; i++) {
    let rec = stringovi[i];
    if (rec.includes("a") || rec.includes("A")) {
        brStringovaSaSlovomA++;
    }
}
console.log(brStringovaSaSlovomA);