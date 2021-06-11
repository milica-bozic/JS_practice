export class Film {
    constructor(naslov, reziser, godIzdanja, ocene) {
        this.naslov = naslov;
        this.reziser = reziser;
        this.godIzdanja = godIzdanja;
        this.ocene = ocene;
    }
    set naslov(x) {
        this._naslov = x;
    }
    set reziser(x) {
        this._reziser = x;
    }
    set godIzdanja(x) {
        this._godinaIzdanja = x;
    }
    set ocene(x) {
        this._ocene = x;
    }
    get naslov() {
        return this._naslov;
    }
    get reziser() {
        return this._reziser;
    }
    get godIzdanja() {
        return this._godinaIzdanja;
    }
    get ocene() {
        return this._ocene;
    }
    stampaj() {
        console.log(this.naslov);
    }
}