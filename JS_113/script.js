let blog1 = {
    title: "HTML",
    likes: 50,
    dislikes: 3
};

let blog2 = {
    title: "CSS",
    likes: 170,
    dislikes: 105
};

let blog3 = {
    title: "Javascript",
    likes: 205,
    dislikes: 110
};

// U objektu user, napraviti metod koji ispisuje sve blogove korisnika 
let user1 = {
    username: "Milica",
    age: 23,
    blogs: [blog1, blog2, blog3],
    logBlogs: function () {
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
};

user1.logBlogs();

// Napraviti niz korisnika gde svaki od korisnika
// sadrži niz blogova.
// Svaki blog u ovom nizu je objekat.
let user2 = {
    username: "Milan",
    age: 26,
    blogs: [blog2, blog3]
};

let user3 = {
    username: "Milena",
    age: 14,
    blogs: [blog1, blog3]
};

let users = [user1, user2, user3];

// Ispisati sve blogove autora čiji je username ’JohnDoe’
users.forEach(user => {
    if (user.username == "Milena") {
        user.blogs.forEach(blog => {
            console.log(blog.title, user.username);
        });
    }
});
