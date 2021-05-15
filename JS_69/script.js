// 17. zadatak
// Dat je niz imena košarkaškog tima.
// Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima,
// i tabelu ispisati u html dokument.
let imena = ['Igrači:', 'Marko', 'Žarko', 'Milica', 'Nevena', 'Ljubica'];

let tabela = `<table>`;

for (let i = 0; i < imena.length; i++) {
    tabela += `<tr><td>${imena[i]}</td></tr>`;
}
tabela += `</table>`;

document.body.innerHTML += tabela;
