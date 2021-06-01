/*
Napraviti dva dugmeta i input kao na slici.
Klikom na dugme „Start“, počinje odbrojavanje: 
Ispisuju se redom brojevi 1, 2, 3, ... svake sekunde.
Klikom na dugme „Stop“ pauzira se odbrojavanje.
*/
let btnStart = document.querySelector("#btnStartCount");
let btnStop = document.querySelector("#btnStopCounter");
let input = document.querySelector("#inputField");

let timer = null;

input.value = 1;

btnStart.addEventListener("click", () => {
    if (timer === null) {
        timer = setInterval(() => {
            input.value++;
        }, 1000);
    }
});

btnStop.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
});
