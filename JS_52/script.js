// 3. zadatak
// Odrediti proizvod elemenata celobrojnog niza.
let brojevi1 = [2, 4, 5, 7, 9];
let proizvod = 1;

for (i = 0; i < brojevi1.length; i++) {
    proizvod *= brojevi1[i];
}
console.log(proizvod);