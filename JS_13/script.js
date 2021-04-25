// 13. Zadatak
// Uporediti dva uneta datuma i ispisati koji od njih je raniji. 
let dat1 = "2021-04-03";
let dat2 = "2021-05-01";

if (dat1 < dat2) {
    console.log(`${dat1} je bio pre ${dat2}`);
}
else if(dat1 < dat1) {
    console.log(`${dat2} je bio pre ${dat1}`)
}
else {
    console.log(`${dat1} i ${dat2} su isti`);
}
