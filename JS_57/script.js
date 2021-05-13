// 6. zadatak
// Odrediti minimalnu vrednost u celobrojnom nizu.
let brojevi = [150, 140, 360, 120, 180];

let maksVrednost1 = brojevi[0];
for (let i = 0; i < brojevi.length; i++) {
    if (maksVrednost1 > brojevi[i]) {
        maksVrednost1 = brojevi[i];
    }
}
console.log(maksVrednost1);