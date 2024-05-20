let message = prompt("please enter a message")

if (message) {
    for (let i = 1; i <= 6; i++) {
        document.write(`<h${i}>${message}</h${i}>`)
    }
}
else {
    alert("you didn't enter a message")
}