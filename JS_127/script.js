/*
Formirati objekat dan koji sadrži:
Datum (string u formatu YYYY/MM/DD),
Kiša (true/false),
Sunce (true/false),
Oblačno (true/false),
Vrednosti temperature (Niz temperatura tog dana).
*/
// 2. Metoda: Prebrojava i vraća koliko merenja 
// je bilo sa natprosečnom temperaturom.
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
    },
    merenjaSaNatprosecnomTemperaturom: function () {
        let counter = 0;
        this.temperature.forEach(temp => {
            if (temp > this.prosecnaTemperatura()) {
                counter++;
            }
        });
        return counter;
    }
};

console.log(dan.prosecnaTemperatura());
console.log(dan.merenjaSaNatprosecnomTemperaturom());
