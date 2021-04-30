    // VEZBANJE WHILE PETLJE!!!

// Zadatak 1.
console.log("1. Ispisati brojeve od 1 do 20:Svaki u istom redu");

let i = 1;
let istiRed = "";
while (i <= 20) {
    istiRed += (i + " ");
    i++
}
console.log(istiRed);

// Zadatak 2.
console.log("2. Ispisati brojeve od 1 do 100 u istom redu");

i = 1;
let rezultat = "";
while (i <= 100) {
    rezultat += (i + " ");
    i++
}
console.log(rezultat);

// Zadatak 3.
console.log("3. Ispisati brojeve od 1 do 20: Svaki u novom redu");

i = 1;
while (i <= 20) {
    i++;
    console.log(i);
}

// Zadatak 4.
console.log("Ispisati brojeve od 20 do 1.");
i = 20;

while (i >= 1) {
    console.log(i);
    i--
}

// Zadatak 5.
console.log("Ispisati parne brojeve od 1 do 20.");
i = 1;
while (i <= 20) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++
}

// Zadatak 6.
console.log("Ispisati parne brojeve od 20 do 1.");
i = 20;
while (i >= 1) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i--
}

// Zadatak 7.
console.log("Ispisati neparne brojeve od 1 do 20.");
i = 1;
while (i <= 20) {
    console.log(i);
    i += 2;
}

// Zadatak 8.
console.log("Ispisati neparne brojeve od 20 do 1.");
i = 20;
while (i >= 1) {
    if (i % 2 != 0) {
        console.log(i);
    }
    i--;
}

// Zadatak 9.
console.log("Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje");
i = 1;
let n = 9;
while (i <= n) {
    if (i % 3 == 1) {
        document.body.innerHTML += `<p style="color: red;">Ovo je paragraf br. ${i}</p>`;
    }
    if (i % 3 == 2) {
        document.body.innerHTML += `<p style="color: green;">Ovo je paragraf br. ${i}</p>`;
    }
    if (i % 3 == 0) {
        document.body.innerHTML += `<p style="color: blue;">Ovo je paragraf br. ${i}</p>`;
    }
    i++;
}
