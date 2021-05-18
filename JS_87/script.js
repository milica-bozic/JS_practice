// 20.
/* U nizu stringova ispisati sve elemente koji imaju:
   - maksimalnu duzinu
   - minimalnu duzinu
*/

let imena = ["Stefan", "Nikola", "Djordje", "Milijana", "Ana", "Nenad", "Vuk", "Vladimir"]


let maxDuzinaNiza = niz => {
    let maxDuzina = niz[0].length;
    niz.forEach(elem => {
        if (elem.length > maxDuzina) {
            maxDuzina = elem.length
        }
    });
    return maxDuzina;
}

console.log(maxDuzinaNiza(imena));


let ispisStringSvojstvo = (niz, svojstvo) => {
    let maksimalnaDuzina = svojstvo(niz);
    niz.forEach(elem => {
        if (elem.length == maksimalnaDuzina) {
            console.log(elem);
        }
    });
}

let minDuzinaNiza = niz => {
    let minDuzina = niz[0].length;
    niz.forEach(elem => {
        if (elem.length < minDuzina) {
            minDuzina = elem.length;
        }
    });
    return minDuzina;
}

ispisStringSvojstvo(imena, maxDuzinaNiza);
ispisStringSvojstvo(imena, minDuzinaNiza);