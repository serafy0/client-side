let input = document.getElementsByTagName("input");




for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("click", handle)
}

function handle(e) {

    console.log(e.target.className)

    if(e.target.type="password"){


        e.target.className = "eye"
        e.target.type="text"
        e.target.classList.toggle("crossed_eye")
        // e.target.classList.("eye")
    
    }else{
        e.target.classList.remove("eye")
        e.target.classList.add("eye")

        e.target.type="password"

    }
    // console.log(e.target.innerText)
    // if(e.target.innerText === "👁️"){
    //     e.target.innerText = "❎"
    // }else{
    //     e.target.innerText= "👁️"
    // }


    // let passwordNumber;

    // console.log(e.target.id)
    // if (e.target.id == "password1") {
    //     passwordNumber = "password1"
    // } else {
    //     passwordNumber = "password2"
    // }





    // let password = document.getElementById(passwordNumber)
    // console.log(password)
    // if (password.type == "password") {
    //     password.type = "text"
    // }
    // else {
    //     password.type = "password"
    // }


}