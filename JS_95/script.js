/*
Dati su nizovi
a[0], a[1], ... a[n - 1]
b[0], b[1], ... b[n - 1]
Formirati niz c[0], c[1], ... c[2n - 1]
ciji su elementi a[0], b[0], a[1], b[1], ... a[n - 1], b[n - 1]
*/
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
let c = [];

for (let i = 0; i < arr1.length; i++) {
    let x = arr1[1];
    let y = arr2[i];
    c.push(x);
    c.push(y);
}
console.log(c);

let d = [];

for (let i = 0; i < arr1.length; i++) {
    let x = arr1[i];
    let y = arr2[i];
    let z = x * y;
    d.push(z);
}
console.log(d);