// Kreirati n paragrafa sa proizvoljnim tekstom
// i naizmenično ih obojiti u tri različite boje.

let i = 0;
let n = 9;

while (i < n) {
    if (i % 3 == 0) {
        document.write(`<p style="color: red;">Paragraf</p>`);
    }
    if (i % 3 == 1) {
        document.write(`<p style="color: green;">Paragraf</p>`);
    }
    if (i % 3 == 2) {
        document.write(`<p style="color: blue;">Paragraf</p>`);
    }
    i++;
}

// 0 - red - 0
// 1 - green - 1
// 2 - blue - 2
// 3 - red - 0
// 4  - green - 1
// 5 - blue - 2
// 6 - red - 0
// 7 - green - 1
// 8 - blue - 2