//Odrediti sa koliko brojeva je deljiv uneti broj k
let i = 1;
let k = 21;
let brojDelioca = 0;

while (i <= k) {
    if (k % i == 0) {
        brojDelioca += 1;
        console.log(i);
    }
    i++;
}
console.log(brojDelioca);
