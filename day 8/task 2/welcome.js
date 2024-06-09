let params = new URLSearchParams(document.location.search);

let newName = params.get("name")
let email = params.get("email")
let address = params.get("address")
let gender = params.get("gender")
let mobile = params.get("mobile")

document.getElementById("wName").innerText += newName
document.getElementById("wEmail").innerText += email

document.getElementById("wAddress").innerText += address

document.getElementById("wGender").innerText += gender

document.getElementById("wMobile").innerText += mobile

