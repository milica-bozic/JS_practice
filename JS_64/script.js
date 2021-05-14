// 12. zadatak
// Odrediti broj parnih elemenata sa neparnim indexom
let nizBrojeva = [10, 16, 15, 17, 12, -14];
let brElem = 0;
for(let i = 0; i < nizBrojeva.length; i++) {
    // element - nizBrojeva[i]
    // index - i
    if(nizBrojeva[i] % 2 == 0 && i % 2 != 0) {
        brElem++;
    }
}
console.log(brElem);