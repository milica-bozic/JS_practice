let existingListItems = document.getElementsByTagName("li");
let inputDodaj = document.querySelector("#inputDodaj");
let btnDodaj = document.querySelector("#buttonDodaj");
let ulList = document.querySelector("#toDoList");
let radioToTheStart = document.querySelector("#radiobtnStart");
let radioToTheEnd = document.querySelector("#radiobtnEnd");

function dodajListItem () {
    if (inputDodaj.value == "") {
        alert("Uneli ste praznu poruku!");
        
        return;
    }

    let noviLi = document.createElement("li");

    noviLi.textContent = inputDodaj.value;

    noviLi.addEventListener("click", () => {
        ulList.removeChild(noviLi);
    });

    
    if (radioToTheStart.checked) {
        ulList.prepend(noviLi)
    }
    else {
        ulList.append(noviLi);
    }

    inputDodaj.value = "";
}


btnDodaj.addEventListener("click", () => dodajListItem());

inputDodaj.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        dodajListItem();
    }
})

for (let i = 0; i < existingListItems.length; i++) {
    existingListItems[i].addEventListener("click", () => {
        ulList.removeChild(existingListItems[i]);
    });  
}
