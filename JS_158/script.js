let btnStop = document.querySelector("#btnStop");

let counter = 0;

function counter2() {
    console.log(++counter);
}

let interval1 = setInterval(() => {
    console.log(`Counter 1: ${++counter}`);
}, 1000);

let interval2 = setInterval(() => {
    console.log(`Counter 2: ${++counter}`);
}, 1000);

btnStop.addEventListener("click", () => {
    clearInterval(interval1);
    clearInterval(interval2);
});
