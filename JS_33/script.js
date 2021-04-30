// 12. Ispisati aritmetičku sredinu brojeva od n do m.
// prvi nacin
let n = 2;
let m = 8;
let suma = 0;
let broj = 0;

for (i = n; i <= m; i++) {
    suma += i;
    broj++;
}
let arsr = suma / broj;
console.log(arsr);

//drugi nacin
n = 2;
m = 5;
let arsr = 0;

for (i = n; i <= m; i++) {
    arsr += i;
}
arsr /= (m = n + 1);
console.log(arsr);