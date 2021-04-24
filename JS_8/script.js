console.log("Hello Mika");
// 8. Zadatak
// U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar.

let pol = "muski";
let muskipol = "muski";
let zenskipol = "zenski";
let boy = "boy.png";
let girl = "girl.png";

if (pol == muskipol) {
    document.body.innerHTML += `<img src="${boy}">`;
}
else if (pol == zenskipol) {
    document.body.innerHTML += `<img src="${girl}">`;
}