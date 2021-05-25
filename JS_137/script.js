let brojevi = [1, 2, 3, 4, 2, 2, 2, 2];

function prva (niz) {
    let sum1 = 0;

    let sum2 = 0;

    for (let i = 0; i < niz.length; i++) {
        if (i < Math.ceil(niz.length / 2)) {
            sum1 += niz[i];
        }
        else {
            sum2 += niz[i];
        }
    }

    return {
        prosek1: sum1 / Math.ceil(niz.length / 2),

        prosek2: sum2 / Math.floor(niz.length / 2)
    }
}

console.log(prva(brojevi));

let jela = [
    {
        sastojci: ["jogurt", "mleko", "so", "secer"]
    },
    {
        sastojci: ["jogurt", "mleko", "so"]
    },
    {
        sastojci: ["jogurt", "mleko", "so", "secer", "margarin"]
    }
];

function najviseSastojaka(niz) {
    let max = niz[0].sastojci.length;

    niz.forEach(elem => {
        if (elem.sastojci.length > max) {
            max = elem.sastojci.length;
        }
    });

    return max;
}
console.log(najviseSastojaka(jela));

let kompjuteri = [
    {
        delovi: ["a", "b", "c"]
    },
    {
        delovi: ["a", "b"]
    },
    {
        delovi: ["a", "b", "c", "g"]
    }
]

function najviseDelova (niz) {
    let max = niz[0].delovi.length

    niz.forEach(elem => {
        if (elem.delovi.length > max) {
            max = elem.delovi.length;
        }
    });

    return max;
}

function najviseSastojaka(niz) {
    let max = niz[0].sastojci.length;

    niz.forEach(elem => {
        if (elem.sastojci.length > max) {
            max = elem.sastojci.length;
        }
    });

    return max;
}

function najmanjeTransfera(nizSportista) {
    let minTransfer = nizSportista[0].timovi.length;

    nizSportista.forEach(sportista => {
        if (sportista.timovi.length < minTransfer) {
            minTransfer = sportista.timovi.length;
        }
    });

    return minTransfer;
}
