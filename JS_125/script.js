let a = [1, 3, 7, -5, 7, 9];

a.forEach(element => {
    console.log(`Element niza je: ${element}`);
});


function ispis(poruka) {
    console.log(`Element niza je: ${poruka}`);
}

a.forEach(ispis);

let imena = ["Milica", "Nevena", "Ljubica", "Vineta", "Nebojsa", "Ljiljana", "Dobrivoj"];

imena.forEach(ispis);

imena.forEach(element => {
    console.log(`Ovo su svi elementi niza: ${element}`);
});


imena.forEach((element, indeks) => {
    console.log(`Element niza imena ima svoje elemente ${element} i svaki taj element niza imena ima svoj indeks ${indeks}`);
});


// Ispis elemenata nekog niza sa parnim indeksom.
let namirnice = ["jaja", "mleko", "jogurt", "pavlaka"];

namirnice.forEach((element, indeks) => {
    if (indeks % 2 == 0) {
        console.log(`Ovo je namirnica sa parnim indeksom ${element}`);
    }
});
