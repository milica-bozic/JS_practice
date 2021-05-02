// Za uneti redni broj dana ispisati koji je to dan u nedelji (1. dan je ponedeljak).

let redniBrojDana = 4;

switch (redniBrojDana) {
    case 1:
        console.log("Sada je ponedeljak!");
        break;
    case 2:
        console.log("Sada je utorak!");
        break;
    case 3:
        console.log("Sada je sreda!");
        break;
    case 4:
        console.log("Sada je četvrtak!");
        break;
    case 5:
        console.log("Sada je petak!");
        break;
    case 6:
        console.log("Sada je subota!");
        break;
    case 7:
        console.log("Sada je nedelja!");
        break;
    default:
        console.log("Nije unešen ispravan redni broj dana!");
}