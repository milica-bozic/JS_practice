/*
Za uneti paran broj manji od 10 ispitati da 
li je uneti broj nula, dvojka, četvorka, šestica, osmica ili je unos pogrešan.
*/
let unetiBroj = 4;

switch (unetiBroj) {
    case 0:
        console.log("Broj je nula");
        break;
    case 2:
        console.log("Broj je dva");
        break;
    case 4:
        console.log("Broj je 4")
        break;
    case 6:
        console.log("Broj je 6")
        break;
    case 8:
        console.log("Broj je 8")
        break;
    default:
        console.log("Broj je pogresan")
}