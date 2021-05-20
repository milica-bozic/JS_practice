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

// U objektu user, napraviti metod koji ispisuje sve blogove korisnika.
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
