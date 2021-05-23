/*
Formirati objekat dan koji sadrži:
Datum (string u formatu YYYY/MM/DD),
Kiša (true/false),
Sunce (true/false),
Oblačno (true/false),
Vrednosti temperature (Niz temperatura tog dana).

8. zadatak
Dan je nepovoljan ako je razlika između neka dva uzastopna 
merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio 
nepovoljan, u suprotnom vraća false.
*/

let dan = {
    datum: "2021/05/23",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [-5, -6, -5],
    nepovoljanDan: function (temp1, temp2) {
        let razlika = temp1 - temp2;

        if (razlika > 8) {
            return true;
        }
        else {
            return false;
        }
    }
};

console.log(dan.nepovoljanDan(40, 5));
