let blog1 ={
    title: "Istorija",
    likes: 200,
    dislikes: 30
};

let blog2 ={
    title: "Programiranje",
    likes: 250,
    dislikes: 10
};

let blog3 ={
    title: "Matematika",
    likes: 150,
    dislikes: 60
};

let blogs = [blog1, blog2, blog3];


blogs.forEach(blog => {
    console.log(`forEach petlja:`, blog.title);
});

for (let i =0; i < blogs.length; i++) {
    console.log(`FOR petlja:`, blogs[i].title);
}

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata,
// a ona vraća ukupan broj lajkova

let sumaLajkova = (nizObject) => {
    let ukupnoLajkova = 0;

    nizObject.forEach(blog => {
        ukupnoLajkova += blog.likes;
    });

    return ukupnoLajkova;
}
console.log(sumaLajkova(blogs));

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata,
// a ona vraća ukupan broj dislajkova

let sumaDislikes = (nizObject) => {
    let ukupanBrojDislikes = 0;

    nizObject.forEach(blog => {
        ukupanBrojDislikes += blog.dislikes;
    });

    return ukupanBrojDislikes;
}

console.log(sumaDislikes(blogs));


