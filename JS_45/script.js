// Za unetu ocenu učenika (ceo broj od 1 do 5) ispisati njegov uspeh te školske godine (nedovoljan, …, odličan).

let ocena = 3;

switch (ocena) {
    case 1:
        console.log("Nedovoljan.");
        break;
    case 2:
        console.log("Dovoljan.");
        break;
    case 3:
        console.log("Dobar.");
        break;
    case 4:
        console.log("Vrlodoabar.");
        break;
    case 5:
        console.log("Odličan!");
        break;
    default:
        console.log("Nije ispravno unešena ocena");
}