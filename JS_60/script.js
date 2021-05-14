// 8. zadatak
// Odrediti indeks minimalnog elementa celobrojnog niza.
let brojevi = [150, 140, 360, 120, 180];

let maksVrednost1 = brojevi[0];
for (let i = 0; i < brojevi.length; i++) {
    if (maksVrednost1 > brojevi[i]) {
        maksVrednost1 = brojevi[i];
    }
}
console.log(maksVrednost1);

let indeks_ = 0;

for (let i = 0; i < brojevi.length; i++) {
    if (maksVrednost1 == brojevi[i]) {
        indeks1 = i;
        break;
    }
}
console.log(indeks1);
