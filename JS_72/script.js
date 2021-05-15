// 20. zadatak
// Odrediti element u nizu stringova sa najvećom dužinom.
let imena = ['Marko', 'Zarko', 'Milica', 'Milivoje', 'Ljubica'];
let maks = imena[0].length;
let ime = imena[0];
for (let i = 0; i < imena.length; i++) {
    if (imena[i].length > maks) {
        maks = imena[i].length;
        ime = imena[i];
    }
}
console.log(ime);