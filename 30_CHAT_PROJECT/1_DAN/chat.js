export class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection("chats")
        this.unsubscribe;
    }

    //Seteri:
    set room(r) {
        this._room = r;
    }
    set username(u) {
        if (u === "" || u.trim().length === 0 || new RegExp("^[a-zA-Z]{2,10}$").exec(u) === null) {
            alert("Username must have between 2 and 10 letters!");

            return;
        }

        this._username = u;
    }

    //Geteri:
    get room() {
        return this._room;
    }
    get username() {
        return this._username;
    }

    // Metode:
    updateUsername(newUserName, callback) {
        this.username = newUserName;

        if (newUserName === "" || newUserName.trim().length === 0 || new RegExp("^[a-zA-Z]{2,10}$").exec(newUserName) === null) {
            return;
        }

        localStorage.setItem("username", newUserName);

        if (callback) {
            callback();
        }
    }

    updateRoom(nameOfRoom) {
        this.room = nameOfRoom;
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

    async addChat(message) {
        if (!message) {
            alert("Message can not be empty!");

            return;
        }

        let date = new Date();

        let chat = {
            message:message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(date)
        };
        let response = await this.chats.add(chat);
        return response;
    }

    getChats(callback) {
        // Kad god se pravi novi subscribtion, prethodni mora da se obriše, ako postoji
        // Kada se briše subscribtion oslobađa se clousure kao i memorija
        if (this.unsubscribe) {
            this.unsubscribe();
        }

        this.unsubscribe = this.chats
        .where("room", "==", this.room)
        .orderBy("created_at", "asc")
        .onSnapshot((snapshot) => {
            // console.log(snapshot.docChanges()); // Krecemo se nizom promena, i trazimo one promene koje su izazvale dodavanje dokumenta (added)
            snapshot.docChanges().forEach((change) => {
                if (change.type == "added") {
                    //console.log("Promena u bazi");
                    //console.log(change.doc.data()); // Ispis dokumenata koji su dodati u bazu
                    callback(change.doc.data());
                }
            });
        });
    }
}

