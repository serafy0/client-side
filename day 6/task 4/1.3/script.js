let buttons = document.getElementsByTagName("button");
// input.add




for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handle)
}

function handle(e) {





    let passwordNumber;

    console.log(e.target.id)
    if (e.target.id == "button1") {
        passwordNumber = "password1"
    } else {
        passwordNumber = "password2"
    }



    let password = document.getElementById(passwordNumber)
    console.log(password)
    if (password.type == "password") {
        password.type = "text"
    }
    else {
        password.type = "password"
    }


}