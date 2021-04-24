console.log("Milica Hello!");

/* Dužina fudbalskog terena je 95 metara, a širina 47 metara. Ana trči po pravougaonoj stazi koja je
   svake strane terena spolja udaljena po 5 metara. 
   Koliko ona pretrči, ako se zna da je optrčala teren 3 puta. */

let duzinaFudbalskogTerena = 95;
let sirinaFudbalskogTerena = 47;
let rastojanje = 5;
let duzinaStaze = duzinaFudbalskogTerena + 2 * rastojanje;
let sirinaStaze = sirinaFudbalskogTerena + 2 * rastojanje;
let obimStaze = duzinaStaze + sirinaStaze;
let anaJePretrcala = obimStaze * 3;

console.log("Ana je pretrcala ukupno:", anaJePretrcala, "m.");