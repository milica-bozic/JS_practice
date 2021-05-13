// 7. zadatak
// Odrediti indeks maksimalnog elementa celobrojnog niza.
// 1. nacin:

let brojevi = [150, 140, 360, 120, 180];

let maksVrednost = brojevi[0];
for (let i = 0; i < brojevi.length; i++) {
    if (maksVrednost < brojevi[i]) {
        maksVrednost = brojevi[i];
    }
}
console.log(maksVrednost);

let indeks = 0;

for (let i = 0; i < brojevi.length; i++) {
    if (maksVrednost == brojevi[i]) {
        indeks = i;
        break;
    }
}
console.log(indeks);