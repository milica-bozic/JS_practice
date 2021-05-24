/*
Napraviti objekat sportista koji od polja ima:
○ imePrezime (string - ime i prezime sportiste)
○ visina (decimalni broj koji predstavlja visinu sportiste u metrima)
○ timovi (niz stringova - različiti timovi u kojima je sve ovaj sportista igrao)
*/

let sportista1 = {
    imePrezime: "Nikola Nikolic",
    visina: 1.99,
    timovi: ["tim1", "tim2", "tim3"]
};

let sportista2 = {
    imePrezime: "Marko Markovic",
    visina: 2.20,
    timovi: ["tim1", "tim2"]
};

let sportista3 = {
    imePrezime: "Pera Petrovic",
    visina: 2.10,
    timovi: ["tim1", "tim4", "tim5"]
};

// Napraviti niz od najmanje tri objekta (najmanje tri sportiste)

let sportisti = [sportista1, sportista2, sportista3];

/*
Napisati funkciju prosečnaVisina kojoj se prosleđuje niz sportista, a ona vraća
prosečnu visinu sportista. Pozvati funkciju i rezultat ispisati u konzoli.
*/

function prosecnaVisina (nizSportista) {
    if (nizSportista.length == 0) {
        return 0;
    }

    let suma = 0;

    nizSportista.forEach(clan => {
        suma += clan.visina
    });
    return suma / nizSportista.length;
}

console.log(prosecnaVisina(sportisti));