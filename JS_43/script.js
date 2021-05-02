/*
Za uneta dva broja i karakter napraviti kalkulator koji vrši množenje ta 
dva broja ukoliko je uneto slovo ’m’, deljenje ukoliko je uneto slovo ’d’, 
sabiranje ukoliko je uneto slovo ’s’ ili oduzimanje ukoliko je uneto slovo ’o’.
*/
let prviBroj = 4;
let drugiBroj = 5;

let operator = 'm';

switch (operator) {
    case 'm':
        console.log(prviBroj * drugiBroj);
        break;
    case 'd':
        console.log(prviBroj / drugiBroj);
        break;
    case 's':
        console.log(prviBroj + drugiBroj);
        break;
    case 'o':
        console.log(prviBroj - drugiBroj);
        break;
    default:
        console.log("Niste odabrali ispravni operator!");
}