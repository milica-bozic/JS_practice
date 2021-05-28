let grandparent = document.querySelector(".grandparent");
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");

grandparent.addEventListener("click", 
    () => {
    console.log("Grandparent capture");
}, 
    {capture: true}
);

grandparent.addEventListener("click", 
    () => {
    console.log("Grandparent bubble");
});

parent.addEventListener("click", 
    (e) => {
        e.stopPropagation();
    console.log("parent capture");
}, 
    {capture: true}
);

parent.addEventListener("click", 
    () => {
    console.log("parent bubble");
});

child.addEventListener("click", 
    () => {
    console.log("child capture");
}, 
    {capture: true}
);

child.addEventListener("click", 
    () => {
    console.log("child bubble");
});

document.addEventListener("click", 
    () => {
    console.log("Document capture");
}, 
    {capture: true}
);

document.addEventListener("click", () => {
    console.log("Document bubble");
});
