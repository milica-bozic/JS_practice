/*
7. zadatak:
Napraviti formu i rezultat računanja ispisati u paragrafu ispod nje.
*/
let dugmeKvadriraj = document.getElementById("btnKvadriraj");
let dugmePrepolovi = document.getElementById("btnPrepolovi");
let dugmePKruga = document.getElementById("btnPKruga");

let inputKvadriraj = document.getElementById("inputKvadriraj");
let inputPrepolovi = document.getElementById("inputPrepolovi");
let inputPKruga = document.getElementById("inputPKruga");

let ispisKvadrata = document.getElementById("ispisKvadriraj");
let ispisPrepolovi = document.getElementById("ispisPrepolovi");
let ispisPKruga = document.getElementById("ispisPKruga");

dugmeKvadriraj.addEventListener("click", (e) => {
    e.preventDefault();
    let upisaniBroj = inputKvadriraj.value;
    ispisKvadrata.innerHTML = upisaniBroj ** 2;
});

dugmePrepolovi.addEventListener("click", (e) => {
    e.preventDefault();
    let upisaniBroj = inputPrepolovi.value;
    ispisPrepolovi.innerHTML = upisaniBroj / 2;
});

dugmePKruga.addEventListener("click", (e) => {
    e.preventDefault();
    let upisaniBroj = inputPKruga.value;
    ispisPKruga.innerHTML = upisaniBroj ** 2 * Math.PI;
});