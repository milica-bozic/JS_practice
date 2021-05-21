let person = {
    firstName: "Milica",
    lastName: "Bozic",
    age: 23,
    isAdult: function () {
        return this.age >= 18;
    }
};
console.log(person.isAdult());
