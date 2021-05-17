// Funkcija koja vraca rezultat svoja dva parametra:
function zbir(a, b) {
    let rezultat = a + b;
    return rezultat;
}

let z = zbir(10, 10);
console.log(z);

console.log(zbir(5, 5) + zbir(10, 10));

console.log(`Zbir brojeva 10 i 10 jednak je: ${z}`);
console.log(`Sum of numbers 10 and 10 is: ${z}`);


if (z >= 10) {
    console.log(`Zbir je nenegativan broj!`);
}
else {
    console.log(`Zbir je negativan broj!`);
}

if (zbir(-6, -5) >= 0) {
    console.log(`Zbir bojeva - 6 i -5 je nenegativan broj!`);
}
else {
    console.log(`Zbir bojeva - 6 i -5 je negativan broj!`);
}

let s = zbir(4,6) + zbir(3, 4);
console.log(s);


