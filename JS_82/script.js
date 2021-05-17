/*
Napisati funkciju zbir koja računa zbir dva realna broja.
Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.
*/
function zbir(a, b) {
    return a + b;
}
console.log(`Zbir brojeva 3 i 6 je:`, zbir(3, 6));

function razlika(a, b) {
    return a - b;
}
console.log(`Razlika brojeva 7 i 4 je:`, razlika(7, 4));

function proizvod(a, b) {
    return a * b;
}
console.log(`Proizvod brojeva 3 i 5 je:`, proizvod(3, 5));

function kolicnik(a, b) {
    if (b == 0) {
        throw `Delilac ne moze biti 0!`;
    }
    return a / b;
}
console.log(`Kolicnik brojeva 50 i 10 je:`, kolicnik(50, 10));
console.log(kolicnik(2, 0));
console.log(kolicnik(0, 5));