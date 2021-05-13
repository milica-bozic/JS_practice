// 3. zadatak
// Odrediti proizvod elemenata celobrojnog niza.
// Funkcija:
let proizvod_ = brojevi1 => {
    let proizvod = 1;
    for (i = 0; i < brojevi1.length; i++) {
        proizvod *= brojevi1[i];
    }
    return proizvod;
}
console.log(proizvod_([2, 4, 3]));