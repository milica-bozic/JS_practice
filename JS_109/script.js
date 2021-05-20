
//IF - ELSE IF - ELSE
// Ispitati da li je broj manji od 0, veci od 0 ili je broj jednak 0.
let broj = 10;

if(broj < 0) {
    console.log("Broj je manji od nule!");
}
else if(broj == 0) {
    console.log("Broj je jednak nuli!");
}
else {
    console.log("Broj je veci od nule!");
}

console.log("Kraj");

// Ispisati da je ime dugacko ako ima vise od 10 karaktera.
let ime = "Milica";
let brSlova = ime.length;

if(brSlova > 10) {
    console.log("Dugacko ime!");
}
else {
    console.log("Nije dugacko ime!");
}

/* 9. Zadatak
Za vreme preuzeto sa računara ispisati 
dobro jutro za vreme manje od 12 sati ujutru, 
dobar dan za vreme manje od 18 sati popodne i u ostalim slučajevima ispisati dobro veče.*/

let dat = new Date();

if (dat.getHours() <= 12) {
    console.log("Dobro jutro!");
}
else if (dat.getHours() > 12) {
    console.log("Dobar dan!");
}
else {
    console.log("Dobro vece!");
}

// 10. Zadatak
// Uporediti dva uneta datuma i ispisati koji od njih je raniji. 
let dat1 = "2021-04-03";
let dat2 = "2021-05-01";

if (dat1 < dat2) {
    console.log(`${dat1} je bio pre ${dat2}!`);
}
else if(dat1 < dat1) {
    console.log(`${dat2} je bio pre ${dat1}!`)
}
else {
    console.log(`${dat1} i ${dat2} su isti!`);
}

// 2. nacin
let dan1 = 01;
let mes1 = 06;
let god1 = 2020;

let dan2 = 02;
let mes2 = 06;
let god2 = 2021;

if (god1 < god2) {
    console.log("Datum 1 je raniji!");
}
else if(god2 < god1) {
    console.log("Datum 2 je raniji!");
}
//posto su godine iste proveravamo za mesece
else if (mes1 < mes2) {
    console.log("Datum 1 je raniji!");
}
else if(mes2 < mes1) {
    console.log("Datum 2 je raniji!");
}
// posto su godine i meseci isti proveravamo za dane
else if(dan1 < dan2) {
    console.log("Datum 1 je raniji!");
}
else if(dan2 < dan1) {
    console.log("Datum 2 je raniji!");
}
// posto su i godine i meseci i dani isti
else {
    console.log("Datum 1 i datum 2 su isti!");
}

/* 11. Zadatak
Radno vreme jedne programerske firme je od 9h do 17h.
Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.
*/
let vreme = new Date();
let firmaRadiOd = 9;
let firmaSeZatvara = 17;

if (vreme.getHours() <= firmaSeZatvara) {
    console.log("Firma se zatvorila!");
}
else if (vreme.getHours() >= firmaRadiOd) {
    console.log("firma ne radi!");
}
else {
    console.log("Firma radi!");
}

// 12. Zadatak
// Za unet početak i kraj radnog vremena dva lekara ispisati DA ukoliko se 
// njihove smene preklapaju, u suprotnom ispisati NE.Pri cemu klinika nema nocna dezurstva.
let p1 = 14;
let k1 = 20;

let p2 = 12;
let k2 = 19;

if (k1 < p2) {
    console.log("NE!");
}
else if (k2 < p1) {
    console.log("NE!");
}
else {
    console.log("DA!");
}

// Ako zelim da ispitam deljivost. Tada je vrlo bitan ostatak pri deljenju.
let broj1 = 5;
let broj2 = 3;

if (broj1 % broj2 == 0) {
    console.log(`${broj1} je deljiv brojem ${broj2}!`);
}
else {
    console.log(`${broj1} nije delljiv brojem ${broj2}!`);
}

// 13. Zadatak
//Za uneti broj ispitati da li je paran ili nije.
let number = 3;

if (number % 2 == 0) {
    console.log(`Broj ${number} je paran.`);
}
else {
    console.log(`Broj ${number} je neparan.`);
}

// 14. Zadatak
//Za uneti broj ispisati da li je deljiv sa 3 ili ne.

let number1 = 6;

if (number1 % 3 == 0) {
    console.log(`Broj ${number1} je deljiv sa 3.`);
}
else {
    console.log(`Broj ${number1} nije deljiv sa 3.`);
}

// 15. Zadatak
//Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.

let prviBroj = 50;
let drugiBroj = 100;
let razlika1 = prviBroj - drugiBroj;
let razlika2 = drugiBroj - prviBroj;

if (prviBroj < drugiBroj) {
    console.log("Ovaj broj je manji od drugog broja!");
}
else {
    console.log("Ovaj broj je veci od drugog broja!");
    if (razlika2) {
        console.log(`Njihova razlika je ${razlika1}!`);
    }
}

// Ispisati koliko je stepeni.
let stepeni = -10;

if(stepeni < 0) {
    console.log("Ispod 0 stepeni!");
}
if (stepeni < 10) {
    console.log("Ispod 10 stepeni!");
}
if (stepeni < 20) {
    console.log("Ispod 20 stepeni!");
}
else {
    console.log("20 i vise stepeni!");
}

//////////////////
if(stepeni < 0) {
    console.log("Ispod 0 stepeni!");
}
else if (stepeni < 10) {
    console.log("Ispod 10 stepeni!");
}
else if (stepeni < 20) {
    console.log("Ispod 20 stepeni!");
}
else {
    console.log("20 i vise stepeni!");
}

// 7. Zadatak
//Na osnovu unetog broja poena ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit ukoliko ima više od 50 poena, u suprotnom je pao ispit. 
//Za više od 50 poena učenik dobija ocenu 6, 
//za više od 60 poena učenik dobija ocenu 7,
//za više od 70 poena učenik dobija ocenu 8, 
//za više od 80 poena učenik dobija ocenu 9 i 
//za više od 90 poena učenik dobija ocenu 10.

let poeni = 81;

if(poeni > 100) {
    console.log("Poeni ne mogu uzeti vrednost vecu od 100!");
}
else if (poeni >= 91) {
    console.log("Ocena 10!");
}
else if (poeni >= 81) {
    console.log("Ocena je 9!");
}
else if (poeni >= 71) {
    console.log("Ocena 8!");
}
else if (poeni >= 61) {
    console.log("Ocena je 7!");
}
else if (poeni >= 51) {
    console.log("Ocena je 6!");
}
else {
    console.log("Pao je ispit!");
}

// Ispitati kog je pola osoba i njen pravni status.

let pol = "m";
let god = 32;

if (pol == "z") {
    console.log("Osoba zenskog pola!");
    if(god >= 18) {
        console.log("Osoba je punoletna!");
    }
    else {
        console.log("Osoba je maloletna!");
    }
}
else {
    console.log("Osoba muskog pola!");
    if(god>=18) {
        console.log("Osoba je punoletna!");
    }
    else {
        console.log("Osoba je maloletna!");
    }
}
