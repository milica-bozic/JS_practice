// 11. zadatak
// Odrediti broj parnih elemenata u celobrojnom nizu.
let brojevi = [150, 140, 360, 120, 180, 33];
let brojac = 0;
for (i = 0; i < brojevi.length; i++) {
    if (brojevi[i] % 2 == 0) {
        brojac++;
    }
}
console.log(brojac);