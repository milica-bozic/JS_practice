console.log("Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira");
let i = 1;
let n = 9;
while (i <= n) {
    if (i % 2 == 0) {
        document.body.innerHTML += `<img src="slika1.png" class="slika1">`;
    }
    else if (i % 2 != 0) {
        document.body.innerHTML += `<img src="slika2.png" class="slika2">`;
    }
    i++;
}
