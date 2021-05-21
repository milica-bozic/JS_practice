let person = {
    firstName: "Milica",
    lastName: "Bozic",
    age: 3,
    isAdult: function () {
        if (this.age >= 18) {
            return true;
        }
        return false;
    }
};

console.log(person.isAdult());

console.log(Object.keys(person));

for (let propertyName in person) {
    document.body.innerHTML += propertyName + `</br>`;
}