// 4. zadatak
// Odrediti srednju vrednost elemenata celobrojnog niza.
// Fukcija:

let aritmeticka = niz => {
    let suma = 0;
    let brojac = 0;
    for (i = 0; i < niz.length; i++) {
        suma += niz[i];
        brojac++;
    }
    return suma / brojac; // Vrati mi tu aritmeticku sredinu
}
console.log(aritmeticka([2, 3, 4, 5]));
console.log(aritmeticka([-4, 10, 3]));
