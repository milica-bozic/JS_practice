/*
Formirati objekat dan koji sadrži:
Datum (string u formatu YYYY/MM/DD),
Kiša (true/false),
Sunce (true/false),
Oblačno (true/false),
Vrednosti temperature (Niz temperatura tog dana).
*/
// 5. zadatak
// Vraća true ukoliko je u većini dana temperatura bila iznad proseka.
// U suprotnom vraća false.

let dan = {
    datum: "2021/05/23",
    kisa: true,
    sunce: true,
    oblacno: false,
    temperature: [12, 16, 20, 30, 25, 15, 45],
    prosecnaTemperatura: function () {
        let suma = 0;
        
        this.temperature.forEach(temp => {
            suma += temp;
        });

        return suma / this.temperature.length;
    },
    iznadProseka: function () {
        let prosek = this.prosecnaTemperatura();

        let counter = 0;

        this.temperature.forEach(temp => {
            if (temp > prosek) {
                counter++;
            }
        });

        return counter;
    },
    ispodproseka: function () {
        let prosek = this.prosecnaTemperatura();

        let counter = 0;

        this.temperature.forEach(temp => {

            if (temp < prosek) {
                counter++;
            }
        });

        return counter;
    },
    uVeciniDanaJeBilaIznadProseka: function () {
        let iznadProseka = this.iznadProseka();

        let ispodproseka = this.ispodproseka();

        if (iznadProseka > ispodproseka) {
            return true;
        }
        else {
            return false;
        }
    }
};

console.log(dan.prosecnaTemperatura());
console.log(dan.iznadProseka());
console.log(dan.ispodproseka());
console.log(dan.uVeciniDanaJeBilaIznadProseka());
