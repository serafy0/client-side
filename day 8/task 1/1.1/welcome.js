function showMessage() {
    // let text = 

    let welcomeString = "Welcome"

    let counter = 0;

    let i = setInterval(function () {
        document.getElementById("message").innerText += welcomeString[counter]
        counter++
        if (counter == welcomeString.length) {
            clearInterval(i)
        }
    }, 500)

}

showMessage()