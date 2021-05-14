// 10. zadatak
// Izračunati zbir pozitivnih elemenata celobrojnog niza.
// brojevi = [150, 140, 360, 120, 180];
let brojevi = [150, 140, 360, 120, 180, -30];
let zbir = 0;
for (i = 0; i < brojevi.length; i++) {
    if (brojevi[i] > 0) {
        zbir += brojevi[i];
    }
}
console.log(zbir);
