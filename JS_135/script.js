/*
Formirati objekat dan koji sadrži:
Datum (string u formatu YYYY/MM/DD),
Kiša (true/false),
Sunce (true/false),
Oblačno (true/false),
Vrednosti temperature (Niz temperatura tog dana).

7. zadatak
Za dan se smatra da je tropski ukoliko nijedna temperatura
izmerena tog dana nije iznosila ispod 24 stepena. 
Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
*/

let dan = {
    datum: "2021/05/23",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [25, 30, 34, 34, 35, 36],
    tropskiDan: function () {
        let tropski = true;
        
        for (let i = 0; i < this.temperature.length; i++) {
            if (this.temperature[i] < 24) {
                tropski = false;
                break;
            }
        }
        return tropski;
    }
};

console.log(dan.tropskiDan());
