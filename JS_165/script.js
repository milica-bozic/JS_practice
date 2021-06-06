let person = {
    name: "Milica",
    age: 23,
    partTime: false,
    showInfo: function() {
        console.log("Hello", this.name, "!");
    }
};
person.showInfo();


let person2 = {
    name: "Ljubica",
    age: 23,
    partTime: true,
    showInfo: function() {
        console.log(this.name, "is", this.age, "years old.");
    }
};
person2.showInfo();

let person3 = {
    name: "Nevena",
    age: 26,
    partTime: true,
    showInfo: function(realAge) {
        console.log(this.name + " is " + realAge + " years old!");
    }
};
person3.showInfo(34);

let person4 = {
    name: "Milan",
    age: 40,
    partTime: false,
    showInfo: function(realAge, school) {
        console.log(this.name + " is " + realAge + " years old and he is going to " + school);
    }
};
person4.showInfo(25, "Bora Stankovic");

let number = 34.6;

let numbero = Math.round(number);

console.log(numbero);

let s = "Hello!";

console.log(s.charAt(0));

let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    console.log("Kliknuto");
});