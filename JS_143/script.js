let prviParagraf = document.querySelector("p");

prviParagraf.innerHTML = "Ovo je promenjeni tekst prvog paragrafa na stranici preko JS-a!";

let prviLink = document.querySelector("a");
prviLink.href = "http://www.wikipedia.com";

prviLink.innerHTML = "Wikipedia";

prviLink.setAttribute("target", "_blank"); // ne mozemo da radimo +=
prviLink.target = "_blank";

let drugiParagraf = document.querySelectorAll("p")[1];
console.log(drugiParagraf);

let treciParagraf = document.querySelectorAll("p")[2];
treciParagraf.innerHTML = "promenila sam tekst trecem paragrafu!";
console.log(treciParagraf);

let cetvrtiParagraf = document.querySelectorAll("p")[3];
cetvrtiParagraf.innerHTML += " Dodala sam cetvrtom paragrafu deo teksta!";
console.log(cetvrtiParagraf);

let drugiLink = document.querySelectorAll("a")[1];
drugiLink.setAttribute("target", "_blank");

drugiLink.name = "Linkic";
console.log(drugiLink);

let treciLink = document.querySelectorAll("a")[2];
treciLink.setAttribute("target", "_blank");

let cetvrtiLink = document.querySelectorAll("a")[3];
cetvrtiLink.setAttribute("target", "_blank");
cetvrtiLink.setAttribute("name", "LINK");
console.log(cetvrtiLink);

let petiLink = document.querySelectorAll("a")[4];
petiLink.setAttribute("target", "_blank");

petiLink.setAttribute("name", "LINK");
console.log(petiLink);

petiLink.style.color = "red";

prviLink.style.backgroundColor = "orange";

treciLink.style.textDecoration = "none";

let prvaSlika = document.querySelector("img");
prvaSlika.style.width = "50px";

let drugaSlika = document.querySelectorAll("img")[1];
drugaSlika.style.width = "80px";

let trecaSlika = document.querySelectorAll("img")[2];
trecaSlika.style.width = "100px";


// selektovati sve paragrafe na stranici i u svakom dodati tekst vazno.

let sviParagrafi = document.querySelectorAll("p");

for (let i = 0; i < nastarnci.length; i++) {
    nastarnci[i].innerHTML += "VAZNO!";
}