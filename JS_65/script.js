// 13. zadatak
//Izračunati sumu elemenata niza sa parnim indeksom.
let nizBrojeva = [10, 16, 15, 17, 12, -14];
let suma = 0;
for (i = 0; i < nizBrojeva.length; i++) {
    if (i % 2 == 0) {
        suma += nizBrojeva[i];
    }
}
console.log(suma);