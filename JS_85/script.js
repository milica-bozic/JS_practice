/*
Formirati objekat dan koji sadrži:
Datum (string u formatu YYYY/MM/DD),
Kiša (true/false),
Sunce (true/false),
Oblačno (true/false),
Vrednosti temperature (Niz temperatura tog dana).
*/

let dan = {
    datum: '2021/05/17',
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [10, 15, 17, 21, 18, 13, 11],
    prosecna: function () {
        let suma = 0;
        this.temperature.forEach( temp => {
            suma += temp;
        });
        return suma / this.temperature.length;
    }
};

// 1. metoda: Određuje prosečnu temperaturu izmerenu tog dana.

console.log(`Prosecna temperatura je:`, dan.prosecna());