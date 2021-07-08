import {Chatroom} from "./chat.js";
import {ChatUI} from "./ui.js";

// DOM:

// btn <nav>
let navRooms = document.querySelector("#nav");

// btn
let btnUpdate = document.querySelector("#btnUpdate")

// input
let inputSend = document.querySelector("#inputSend");
let inputUpdate = document.querySelector("#inputUpdate"); // Input za korisnicko ime

// form
let formMessage = document.querySelector("#formMessage");
let formUsername = document.querySelector("#formUsername");

let username = () => {
    if (localStorage.username?.trim()) {
        return localStorage.username;
    }
    else {
        return "anonymus";
    }
}

let room = () => {
    if (localStorage.room) {
        return localStorage.room
    }
    else {
        return "general";
    }
}

let btn = document.querySelector(`#${room()}`);

btn.className += " btn-active";

let chatroom = new Chatroom(room(), username());

// Testiranje ChatUI klase:
let ulChatList = document.querySelector("#ul");

let chatUI = new ChatUI(ulChatList);

console.log(chatUI.list);

chatroom.getChats((data) => {
    chatUI.templateLI(data, chatroom.username == data.username);
});

// Update Message:
formMessage.addEventListener("submit", (event) => {
    event.preventDefault();

    let newMessage = inputSend.value;
    
    chatroom.addChat(newMessage)
        .then(() => formMessage.reset())
        .catch( error => console.log(error))
});

// Update username:
formUsername.addEventListener("submit", (event) => {
    event.preventDefault();

    let newUserName = inputUpdate.value;

    chatroom.updateUsername(newUserName, () => {
        let notificationSpan = document.querySelector("#usernameNotification");

        notificationSpan.textContent = `New username is: ${newUserName}`;

        notificationSpan.style.display = "block";

        setTimeout(() => {
            notificationSpan.style.display = "none";
        }, 3000);
        
        chatUI.clearPage();

        chatroom.getChats((data) => {
            chatUI.templateLI(data, chatroom.username == data.username);
        });

        setTimeout(() => {
            window.scrollTo(0,document.body.scrollHeight);
        }, 1500);
    });

    inputUpdate.value = "";
});

// Dugmad za promenu soba:
navRooms.addEventListener("click", (event) => {
    if(event.target.tagName == "BUTTON") {
        // 1. izbrisati sve poruke sa ekrana
        chatUI.clearPage();

        // 2. pozvati promenu sobe
        chatroom.updateRoom(event.target.id);

        // 3. prikazati chat - ove
        chatroom.getChats((data) => {
            chatUI.templateLI(data, chatroom.username == data.username);
        });

        // 4. Postaviti u localStorage da smo presli u neku drugu sobu
        localStorage.setItem("room", event.target.id);

        // 5. Postaviti klasu btn-active na dugme
        let buttons = document.querySelectorAll(".btn");

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].className = "btn";
        }

        event.target.className += " btn-active";
    }
});

