console.log("hello Mika");
//9. Zadatak
//U odnosu na preuzeto trenutno vreme sa računara, ispisati da li je trenutno jutro ili popodne.

let date = new Date();

if (date.getHours() >= 12) {
    console.log("Trenutno je podne.");
}
else {
    console.log("Trenutno je jutro.");
}