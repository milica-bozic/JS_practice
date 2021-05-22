/*
Formirati objekat dan koji sadrži:
Datum (string u formatu YYYY/MM/DD),
Kiša (true/false),
Sunce (true/false),
Oblačno (true/false),
Vrednosti temperature (Niz temperatura tog dana).
*/
// 1. metoda: Određuje prosečnu temperaturu izmerenu tog dana.
let dan = {
    datum: "2021/05/22",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [14, 19, 26, 30, 20, 13],
    prosecnaTemperatura: function () {
        let suma = 0;
        this.temperature.forEach(temp => {
            suma += temp;
        });
        return suma / this.temperature.length;
    }
};

console.log(`Prosecna temperatura izmerena ${dan.datum} je:`, dan.prosecnaTemperatura());





