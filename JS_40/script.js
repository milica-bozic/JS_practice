/*
Na osnovu unete boje na engleskom jeziku obojiti tekst 
paragrafa u crveno, zeleno ili plavo. Ukoliko nije uneta 
ni jedna od ove tri boje, tekst paragrafa obojiti u žuto.
*/
let boja = 'orange';

switch (boja) {
    case "red":
        document.body.innerHTML += `<p style="color: red;">Tekst paragrafa obojen u crveno.</p>`;
        break;
    case "green":
        document.body.innerHTML += `<p style="color: green;">Tekst paragrafa obojen u zeleno.</p>`;
        break;
    case "blue":
        document.body.innerHTML += `<p style="color: blue;">Tekst paragrafa obojen u plavo.</p>`;
        break;
    default:
        document.body.innerHTML += `<p style="color: yellow;">Tekst paragrafa obojen u zuto.</p>`;
}