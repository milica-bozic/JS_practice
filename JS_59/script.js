// 7. zadatak
// Odrediti indeks maksimalnog elementa celobrojnog niza.
// 2. nacin:

let brojevi = [150, 140, 360, 120, 180];

let maksVrednost2 = brojevi[0];

let maksIndeks = 0;

for (let i = 0; i < brojevi.length; i++) {
    if (brojevi[i] > maksVrednost2) { // >= daje poslednj indeks, dok > daje
        maksVrednost2 = brojevi[i];
        maksIndeks = i;
    }
}
console.log(maksIndeks);