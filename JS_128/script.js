/*
Formirati objekat dan koji sadrži:
Datum (string u formatu YYYY/MM/DD),
Kiša (true/false),
Sunce (true/false),
Oblačno (true/false),
Vrednosti temperature (Niz temperatura tog dana).
*/

// 3. Metoda: Prebrojava i vraća koliko merenja 
// je bilo sa maksimalnom temperaturom.

let dan = {
    datum: "2021/05/22",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [14, 19, 26, 30, 30, 20, 13, 30],
    maksimalnaTemperatura: function () {
       let maks = this.temperature[0];
       this.temperature.forEach(temp => {
           if (temp > maks) {
                maks = temp
           }
       });
       return maks;
    },
    merenjaSaMaksimalnomTemperaturom: function () {
        let maxTemp = this.maksimalnaTemperatura();
        let counter = 0;
        this.temperature.forEach(temp => {
            if (temp == maxTemp) {
                counter++;
            }
        });
        return counter;
    }
};

console.log(dan.merenjaSaMaksimalnomTemperaturom());

