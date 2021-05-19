// 17.
//Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima,
//i tabelu ispisati u html dokument.
let imena = ["Nikola", "Marko", "Milica", "Milan"];

function tim (niz) {
    let tabela = `<table>`;
    niz.forEach (elem => {
        tabela += `<tr> <td>${elem}</td> </tr>`;
    });
    tabela += `</table>`;
    return tabela;
}

document.body.innerHTML += tim(imena);
