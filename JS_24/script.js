// Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira.
let i = 1;
let n = 6;

while (i <= n) {
    if (i % 2 == 0) {
        document.body.innerHTML += `<img src="leaf.png" id="slika1">`;
    }
    else {
        document.body.innerHTML += `<img src="leaf.png" id="slika2">`;
    }
    i++
}