// 16. zadatak
// Dat je niz stavki za kupovinu (članovi niza su stringovi).
// Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
let namirnice = ['Krema', 'Voće', 'Povrće', 'Mleko', 'Jaja']
namirnice[0] = 'Sok';

let lista = `<ul>`;

for (let i = 0; i < namirnice.length; i++) {
    lista += `<li>${namirnice[i]}</li>`
}
lista += `</ul>`;

document.body.innerHTML += lista;