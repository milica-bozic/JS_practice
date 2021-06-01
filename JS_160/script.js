// Klikom na dugme, prikazati poruku u konzoli nakon 2 sekunde.

let btn = document.querySelector("#btn");


function poruka() {
    console.log("Hello");
}

btn.addEventListener("click", () => {
    let timer = setInterval(() => {
        poruka();

        clearInterval(timer);
    }, 2000);    
});