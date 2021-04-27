// Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje

let i = 1;
let n = 100;

while (i <= n) {
    if (i % 3 == 0) {
        document.body.innerHTML += `<p class="para1">Ovo je tekst ${i}. paragrafa</p>`;
    }
    else if (i % 3 == 1) {
        document.body.innerHTML += `<p class="para2">Ovo je tekst ${i}. paragrafa</p>`;
    }
    else {
        document.body.innerHTML += `<p class="para3">Ovo je tekst ${i}. paragrafa</p>`;
    }
    i += 1;
}