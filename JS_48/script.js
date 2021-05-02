// Za preuzeti dan sa računara ispisati još koliko dana je preostalo do vikenda.
let date = new Date();
let danasnjiDan = date.getDay();

switch (danasnjiDan) {
    case 1:
        console.log(5);
        break;
    case 2:
        console.log(4);
        break;
    case 3:
        console.log(3);
        break;
    case 4:
        console.log(2);
        break;
    case 5:
        console.log(1);
        break;
    case 6:
        console.log("Vikend je!");
        break;
    case 0:
        console.log("Vikend je!");
        break;
    default:
        console.log("Pogrešno unešen datum!");
}