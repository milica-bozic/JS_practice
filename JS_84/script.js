let blog = {
    title: "Moj blog",
    content: "Tekst ovog bloga ...",
    author: "Milica"
};

// Ispis u konzoli:
console.log(blog);

// Provera tipa promenljive:
console.log(typeof blog);

// Ispis osobine u konzoli: 1. nacin:
console.log(blog.title);

// Ispis osobine u konzoli: 2. nacin:
console.log(blog["author"]);

// Promena osobine u objektu: 1. nacin:
blog.author = "Bozic";
console.log(blog);

// Promena osobine u objektu: 2. nacin:
blog["author"] = "Milica";
console.log(blog);
