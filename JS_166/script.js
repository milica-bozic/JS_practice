import {Film} from "./film.js";

/*
Kreirati klasu Film koja od polja sadrži naslov, reziser i godinaIzdanja, 
kao i metodu stampaj() za prikaz naslova filma.
Kreirati tri objekta klase Film. 
Testirati metode klase.
*/

let film1 = new Film("naslovFilma1", "reziser1", 2001, [3, 9, 9, 7, 9]);
let film2 = new Film("naslovFilma2", "reziser2", 2002, [10, 7, 8, 10, 8]);
let film3 = new Film("naslovFilma3", "reziser3", 2003, [3, 5, 10, 10, 9]);
let film4 = new Film("naslovFilma4", "reziser4", 2004, [8, 7, 6, 9, 7]);


let arrFilmovi = [film1, film2, film3, film4];

arrFilmovi.forEach(film => {
    film.ocene.forEach(ocene => {
        console.log(ocene);
    });
});


film3.stampaj();