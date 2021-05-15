// 15. zadatak
// Promeniti znak svakom neparnom elementu celobrojnog niza
// sa parnim indeksom.

let nizBrojeva = [10, 16, 15, 17, 12, -14];

for (i = 0; i < nizBrojeva.length; i++) {
    if (nizBrojeva[i] % 2 != 0 && i % 2 == 0) {
        nizBrojeva[i] = nizBrojeva[i] * (-1);
    }
}
console.log(nizBrojeva)