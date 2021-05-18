/* Dati su nizovi 
a[0], a[1], ...,a[n - 1] i
b[0], b[1], ...,b[n - 1].
formirati niz c[0], c[1], ...,c[2n - 1] ciji su elementi
a[0], b[0], a[1], b[1], ...,a[n - 1], b[n - 1]
*/

let zad24b = (a, b) => {
    let n = a.length;
    let c = [];

    for (let i = 0; i < n; i++) {
        c[2 * i] = a[i];
        c[2 * i +1] = b[i];
    }
    return c;
}

let a = [4, -9, 4, 1];

let b = [8, 8, 1, 0];

let c = zad24b(a, b);

console.log(c);
