/*
Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu
umesto u konzoli.
*/

let button = document.querySelector(".button");
let ispisUParagrafu = document.querySelector(".ispis");

let counter = 0;

button.addEventListener("click", () => {
    counter++;
    ispisUParagrafu.innerHTML = counter;
});

