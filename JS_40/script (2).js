//Odrediti proizvod brojeva od n do m
let n = 2;
let m = 4;
let proizvod = 1;

while (n <= m) {
    proizvod *= n;
    n++;
}
console.log(proizvod);

//Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m
n = 3;
m = 6;
let sumaKvadrataParnih = 0;
let sumaKubovaNeparnih = 0;

while (n <= m) {
    if (n % 2 == 0) {
        sumaKvadrataParnih += n**2;
    }
    else {
        sumaKubovaNeparnih += n**3;
    }
    n++;
}
console.log(sumaKvadrataParnih);
console.log(sumaKubovaNeparnih);

//Odrediti sa koliko brojeva je deljiv uneti broj k
let k = 2;
let i = 1;
let brojac = 0;

while (i <= k) {
    if (i % k == 0) {
        brojac++;
    }
    i++;
}
console.log(brojac);

//Odrediti da li je dati prirodan broj n prost.
//Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
n = 5;
i = 2;
let prime = true;

while (prime && (i <= n / 2)) {
    if (n % i == 0) {
        prime = false;
    }
    i++;
}
if (prime) {
    console.log(`Broj ${n} je prost!`);
}
else {
    console.log(`Broj ${n} nije prost`);
}
