// Na osnovu niza a[0], a[1], ... ,a[2n - 1] formatirati niz b[0], b[1], ...,b[n - 1] po formuli b[i] = a[i]+a[2n - 1 - i] / 2
// 26 zadatak

let zad26 = (a) => {
    let n = a.length;
    let b = [];
    
    for (let i = 0; i < n/2; i++) {
        b[i] = (a[i] + a[n -1 - i]) / 2;
    }
}
