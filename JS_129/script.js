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
    datum: '2021/05/22',
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [10, 15, 17, 21, 18, 13, 11, 21, 21],
    brojMerenjaUTokuDana: function (temp1, temp2) {
        if (temp1 > temp2) {
            let tmp = temp1;
            temp1 = temp2;
            temp2 = tmp;
        }    
        let counter = 0;
        this.temperature.forEach(temp => {
            if (temp > temp1 && temp < temp2) {
                counter++;
            }
        });
        return counter;
    }
};

