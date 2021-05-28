let forma = document.getElementById("forma");
let inputJelo = document.getElementById("jelo");
let inputPice = document.getElementById("pice");
let pIspis = document.getElementById("ispisi");

forma.addEventListener("submit", (e) => {
    e.preventDefault();
    pIspis.innerHTML = 
    `<ul>
        <li>Omiljeno jelo: ${inputJelo.value} </li>
        <li>Omiljeno pice: ${inputPice.value} </li>
    </ul>`;
    forma.reset();
});