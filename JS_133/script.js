/*
Formirati objekat dan koji sadrži:
Datum (string u formatu YYYY/MM/DD),
Kiša (true/false),
Sunce (true/false),
Oblačno (true/false),
Vrednosti temperature (Niz temperatura tog dana).

6. zadatak
Za dan se smatra da je leden ukoliko nijedna temperatura 
izmerena tog dana nije iznosila iznad 0 stepeni.
Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
*/

let dan = {
    datum: "2021/05/23",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [-5, -6, -5],
    ledenDan: function () {
        let leden = true;

        this.temperature.forEach(temp => {
            if (temp >= 0) {
                leden = false;
            }
        });

        return leden;
    }    
};

console.log(dan.ledenDan());
