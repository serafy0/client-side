// let button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", function () {
//     getData()
// })

let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function (e) {
    e.preventDefault()
    getData()
})

let inputWasAdded = false
form.addEventListener("input", function () {
    inputWasAdded = true

})

let welcomePage

setTimeout(function () {
    if (!inputWasAdded) {
        alert("Timeout.")
    }
}, 5000)

function getData() {
    let isValid = true;
    let gender = document.querySelector('input[name="gender"]:checked');
    let errors = document.getElementsByClassName("error")
    // form.get

    if (!gender) {
        isValid = false
        errors[4].innerHTML = "add a gender"
    } else {

        gender = gender.value
        errors[4].innerHTML = ""

    }
    let nameRegex = /^[a-zA-Z].*[\s\.]*$/g
    let name = document.getElementById("username").value
    if (!name || name == "" || !name.match(nameRegex)) {
        isValid = false;
        errors[0].innerHTML = "name not valid"
    } else {
        errors[0].innerHTML = ""

    };

    let emailRegex = /^\S+@\S+\.\S+$/
    let email = document.getElementById("email").value
    if (!email || email == "" || !email.match(emailRegex)) {
        errors[1].innerHTML = "email no valid"
        isValid = false
    }

    let address = document.getElementById("address").value

    if (!address || address == "") {
        isValid = false
        errors[3].innerHTML = "address not valid"

    } else {
        errors[3].innerHTML = ""

    }

    let mobile = document.getElementById("mobile").value

    if (!mobile || mobile == "" || isNaN(mobile)) {
        isValid = false
        errors[2].innerHTML = "mobile not valid"
    } else {
        errors[2].innerHTML = ""

    }


    console.log(gender, name, email, address, mobile)

    if (isValid) {
        welcomePage = window
            .open(`welcome.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&address=${encodeURIComponent(address)}&mobile=${encodeURIComponent(mobile)}&gender=${encodeURIComponent(gender)}`)
    }

}

