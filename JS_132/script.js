/*
Formirati objekat dan koji sadrži:
Datum (string u formatu YYYY/MM/DD),
Kiša (true/false),
Sunce (true/false),
Oblačno (true/false),
Vrednosti temperature (Niz temperatura tog dana).

3. Metoda: Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
*/

let dan = {
    datum: "2021/05/23",
    kisa: true,
    sunce: true,
    oblacno: false,
    temperature: [12, 45, 23, 13, 19, 30, 45, 35, 45, 30, 28],
    maxtemperatura: function () {
        let maxTemp = this.temperature[0];

        this.temperature.forEach(temp => {
            if (temp > maxTemp) {
                maxTemp = temp;
            }
        });

        return maxTemp;
    },
    merenjaSaMaxTemperaturom: function () {
        let counter = 0;

        let maxTemp = this.maxtemperatura();

        this.temperature.forEach(temp => {
            if (temp == maxTemp) {
                counter++;
            }
        });
        
        return counter;
    }
};

console.log(dan.maxtemperatura());
console.log(dan.merenjaSaMaxTemperaturom());
