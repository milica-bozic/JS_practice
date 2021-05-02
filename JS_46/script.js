// Preuzeti redni broj meseca sa računara i ispisati koji je to mesec u godini.

let date = new Date();
let month = date.getMonth();

switch (month) {
    case 0:
        console.log("Januar!");
        break;
    case 1:
        console.log("Februar!");
        break;
    case 2:
        console.log("Mart!");
        break;
    case 3:
        console.log("April!");
        break;
    case 4:
        console.log("Maj!");
        break;
    case 5:
        console.log("Jun!");
        break;
    case 6:
        console.log("Jul!");
        break;
    case 7:
        console.log("Avgust!");
        break;
    case 8:
        console.log("Septembar!");
        break;
    case 9:
        console.log("Oktobar!");
        break;
    case 10:
        console.log("Novembar!");
        break;
    case 11:
        console.log("Decembar!")
        break;
    default:
        console.log("Nije unešen validan datum!");
}
