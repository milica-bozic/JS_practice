let request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
        let odgovor = request.responseText;
        let odgovorJS = JSON.parse(odgovor);
        console.log(odgovorJS);
    }
    else if (request.readyState === 4) {
        console.log("Nemoguce dobiti odgovor od servera!");
    }
});
request.open("GET", "https://jsonplaceholder.typicode.com/posts/5");
request.send();

console.log("Nesto posle 1");
console.log("Nesto posle 2");