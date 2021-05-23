/*
Formirati objekat dan koji sadrži:
Datum (string u formatu YYYY/MM/DD),
Kiša (true/false),
Sunce (true/false),
Oblačno (true/false),
Vrednosti temperature (Niz temperatura tog dana).

4. zadatak
Prima dva parametra koji predstavljaju dve temperature.
Potrebno je da metoda vrati broj merenja u toku dana
čija je vrednost između ove
dve zadate temperature (ne uključujući te dve vrednosti).
*/

let dan = {
    datum: "2021/05/23",
    kisa: true,
    sunce: true,
    oblacno: false,
    temperature: [12, 45, 23, 13, 19, 30, 35, 30, 28],
    vrednostIzmedjuDveTemperature: function (temp1, temp2) {
        let counter = 0;

        if (temp1 > temp2) {
            let privremena = temp1;
            temp1 = temp2;
            temp2 = privremena;
        }

        this.temperature.forEach(temp => {
            if (temp > temp1 && temp < temp2) {
                counter++;
            }
        });

        return counter;
    }
};

console.log(dan.vrednostIzmedjuDveTemperature(20, 30));
