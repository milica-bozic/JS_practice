let divs = document.querySelectorAll("div");


document.addEventListener("click", (e) => {
    if (e.target.matches("div")) {
        console.log("Hi!");
    }
});

let newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "purple";

document.body.append(newDiv);
