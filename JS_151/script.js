/*Napraviti dugme + i dugme -. 
Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.
Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.
-tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule,
na ekranu nastaviti prikazivanje broja 0.
*/

let btnMinus = document.getElementById("minus");
let btnPlus = document.getElementById("plus");
let spanIspis = document.getElementById("rez");


let rez = 0;
spanIspis.innerHTML = rez;

btnPlus.addEventListener("click", () => {
    spanIspis.style.color = "black";
    rez++;
    spanIspis.innerHTML = rez;
});

btnMinus.addEventListener("click", () => {
    spanIspis.style.color = "black";
    rez--;
    if (rez < 0) {
        rez = 0;
        spanIspis.style.color = "blue";
    }
    spanIspis.innerHTML = rez;
});