// 5. zadatak
// Odrediti maksimalnu vrednost u celobrojnom nizu.
let brojevi = [150, 140, 360, 120, 180];
let maksVrednost = brojevi[0];
for (let i = 0; i < brojevi.length; i++) {
    if (maksVrednost < brojevi[i]) {
        maksVrednost = brojevi[i];
    }
}
console.log(maksVrednost);