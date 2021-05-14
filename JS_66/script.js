// 14. zadatak
// Promeniti znak svakom elementu celobrojnog niza.
let nizBrojeva = [10, 16, 15, 17, 12, -14];

for (i = 0; i < nizBrojeva.length; i++) {
    nizBrojeva[i] = nizBrojeva[i] * (-1);
}

console.log(nizBrojeva);