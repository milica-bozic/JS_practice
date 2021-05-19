// 16.
//Dat je niz stavki za kupovinu (članovi niza su stringovi).
//Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
let kupovina = ["Jaja", "Mleko", "Hleb", "Sok", "Kajsije", "Krastavac", "Majonez", "Paprika", "Senf", "Zelena salata", "Rotkvice", "Mladi luk", "Beli luk", "Crni luk"];

function listaZaKupovinu (niz) {
    let lista = `<ul>`;
    niz.forEach (elem => {
        lista += `<li>${elem}</li>`;
    });
    lista += `</ul>`;
    return lista;
}

document.body.innerHTML += listaZaKupovinu(kupovina);
