// 14. zadatak
// Uporediti dva uneta datuma i ispisati koji od njih je raniji. 
// 2. nacin
let dan1 = 01;
let mes1 = 06;
let god1 = 2020;

let dan2 = 02;
let mes2 = 06;
let god2 = 2021;

if (god1 < god2) {
    console.log("Datum 1 je raniji");
}
else if(god2 < god1) {
    console.log("Datum 2 je raniji");
}
//posto su godine iste proveravamo za mesece
else if (mes1 < mes2) {
    console.log("Datum 1 je raniji");
}
else if(mes2 < mes1) {
    console.log("Datum 2 je raniji");
}
// posto su godine i meseci isti proveravamo za dane
else if(dan1 < dan2) {
    console.log("Datum 1 je raniji");
}
else if(dan2 < dan1) {
    console.log("Datum 2 je raniji");
}
// posto su i godine i meseci i dani isti
else {
    console.log("Datum 1 i datum 2 su isti");
}