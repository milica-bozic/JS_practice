// 21. zadatak
// Odrediti broj elemenata u nizu stringova čija je dužina 
// veća od prosečne dužine svih stringova u nizu.
let stringovi = ['Ana', 'Milica', 'Jelena'];
let sumaDuzina = 0;

for (let i = 0; i < stringovi.length; i++) {
    sumaDuzina += stringovi[i].length;
}
let arSrDuzina = sumaDuzina / stringovi.length;
console.log(arSrDuzina);

let brNatprosecnih = 0;
for (let i = 0; i < stringovi.length; i++) {
    if (stringovi[i].length > arSrDuzina) {
        brNatprosecnih++;
    }
}
console.log(brNatprosecnih);