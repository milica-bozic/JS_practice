/*
- Dohvatiti prvi paragraf na stranici.
- Dohvatiti prvi div tag sa klasom „error“.
- Dohvatiti poslednji red u tabeli.
- Dohvatiti sve linkove na stranici.
- Dohvatiti sve slike na stranici.
- Sve elemente ispisati u konzoli.
*/

let prviParagraf = document.querySelector("p");
console.log(prviParagraf);

let prviDivSaKlasomError = document.querySelector(".error");
console.log(prviDivSaKlasomError);

let poslednjiRedUTabeli = document.querySelector("table tr:last-child");
console.log(poslednjiRedUTabeli);

let sviLinkovi = document.querySelectorAll("a");
console.log(sviLinkovi);

let sveSlike = document.querySelectorAll("img");
console.log(sveSlike);