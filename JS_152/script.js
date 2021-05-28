/*
Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. 
Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme
povećati vrednost brojača za 1.
*/
let dugme = document.querySelector(".button");

let counter = 0;

dugme.addEventListener("click", () => {
    counter++;
    console.log(counter);
});
