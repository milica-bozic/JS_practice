/*
Preuzeti redni broj meseca sa računara i ispisati koliko taj mesec ima dana. 
Ukoliko je u pitanju mesec februar, preuzeti i godinu sa računara,
ispitati da li je godina prestupna i na osnovu toga ispisati broj dana meseca februara.
*/

date = new Date();
month = date.getMonth();

switch (month) {
    case 0:
        console.log(31);
        break;
    case 1:
        if (date.getFullYear() % 4 == 0) {
            console.log(29);
        }
        else {
            console.log(28);
        }
        break;
    case 2:
        console.log(31);
        break;
    case 3:
        console.log(30);
        break;
    case 4:
        console.log(31);
        break;
    case 5:
        console.log(30);
        break;
    case 6:
        console.log(31);
        break;
    case 7:
        console.log(31);
        break;
    case 8:
        console.log(30);
        break;
    case 9:
        console.log(31);
        break;
    case 10:
        console.log(30);
        break;
    case 11:
        console.log(31)
        break;
    default:
        console.log("Nije unešen validan datum!");
}
