// 18. zadatak
// PRVI NACIN
/*Napraviti tabelu sa 6 redova.
Svaki red tabele treba da ima po dve ćelije 
(dve kolone).
Svakom parnom redu dodati klasu „obojen“.
Korišćenjem CSS-a, klasi obojen postaviti 
proizvoljnu boju pozadine. */

let redovi = 6;
let tabela = `<table>`;

for (i = 1; i <= redovi; i++) {
    if (i % 2 == 0) {
        tabela += 
        `
            <tr class="boja1">
                <td>Tekst</td>
                <td>Tekst</td>
                <td>Tekst</td>
                <td>Tekst</td>
            </tr>
        `;
    }
    else {
        tabela += 
        `
            <tr class="boja2">
                <td>Tekst</td>
                <td>Tekst</td>
                <td>Tekst</td>
                <td>Tekst</td>
            </tr>
        `;
    }
}
tabela += `</table>`;
document.body.innerHTML += tabela;