export class ChatUI {
    constructor(message) {
        this.list = message
    }

    set list(message) {
        this._list = message;
    }

    get list() {
        return this._list
    }

    formatDate(date) {
        let dayValue = date.getDate();
        let monthValue = date.getMonth() + 1;
        let yearValue = date.getFullYear();
        let hoursValue = date.getHours();
        let minutesValue = date.getMinutes();

        let day = dayValue < 10 ? `0${dayValue}` : dayValue;
        let month = monthValue < 10 ? `0${monthValue}` : monthValue;

        let hours = hoursValue < 10 ? `0${hoursValue}` : hoursValue;
        let minutes = minutesValue < 10 ? `0${minutesValue}` : minutesValue;

        let formattedDate = `${day}.${month}.${yearValue}.`;
        let formattedTime = `${hours}:${minutes}`;

        let midnight = new Date();
        midnight.setHours(0,0,0,0);
        
        let tomorrowMidnight = new Date();
        tomorrowMidnight.setHours(0,0,0,0);
        tomorrowMidnight.setDate(midnight.getDate() + 1);

        return date >= midnight && date < tomorrowMidnight ? formattedTime : `${formattedDate} - ${formattedTime}`;
    }

    // Metod:
    templateLI(data, isCurrentUser) {

        let date = data.created_at.toDate();
        let htmlLI = 
            `<li class="messageCloud">
                <div class="${isCurrentUser ? "sent" : "received"}">
                    <span class="username">${data.username} :</span>
                    <span class="message">${data.message}</span>
                    <div class="time">${this.formatDate(date)}</div>
                </div>
            </li>`;
        this.list.innerHTML += htmlLI;
        this.list.scrollTop = this.list.scrollHeight;
    }

    clearPage() {
        this.list.innerHTML = "";
    }
}

