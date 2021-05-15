// 22. zadatak
// Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’.
// 2. način:

let stringovi = ['Milos', 'Milan', 'Goran', 'Aleksandra'];

let brStringovaSaSlovomA2 = 0;

for (let i = 0; i < stringovi.length; i++) {
    let rec = stringovi[i];
    for (let j = 0; j < rec.length; j++) {
        if (rec[j] == "a" || rec[j] == "A") {
            brStringovaSaSlovomA2++;
            break;
        }
    }
}
console.log(brStringovaSaSlovomA2);