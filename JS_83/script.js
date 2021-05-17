// Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
function neparan(n) {
    if (n % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(neparan(3));

