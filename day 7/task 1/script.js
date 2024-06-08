// let addButton = document.getElementById("")
let inputs = document.getElementsByTagName("input")
let btns = document.getElementsByTagName("button");


btns[0].addEventListener("click", Validation)


function Validation(){


    let isError = false;
    let errors = document.getElementsByClassName("error")
    for(let i=0;i<=2;i++){
        errors[i].innerHTML=""
    }
    let name = inputs[0].value
    let nameRegex = /^[a-zA-Z].*[\s\.]*$/g
    if(!name.match(nameRegex)){
         errors[0].innerHTML = "name not valid"
        isError = true;

    }



    let age = inputs[1].value;
    if(!age || isNaN(age)|| age ==0){
        errors[1].innerHTML = "age not valid";
        isError =true;
    }

    
    let emailRegex = /^\S+@\S+\.\S+$/
    let email = inputs[2].value
    if(!email.match(emailRegex)){
        errors[2].innerHTML = "email not valid";
        isError =true;
    }

    if(!isError){
        pushToTable(name, age, email)
    }
    inputs[0].value = ""
    inputs[1].value = ""
    inputs[2].value = ""



}
var counter = 0;
    
function pushToTable(name, age,email){
    counter++
    let table = document.getElementById("table")
    console.log(table)

        let row = table.insertRow()
        let newName = row.insertCell(0)
        let newAge = row.insertCell(1);
        let newEmail =  row.insertCell(2);

        newName.innerHTML = name
        newAge.innerHTML = age
        newEmail.innerHTML = email
        

}


btns[1].addEventListener("click", function(){
    let table = document.getElementById("table")

    inputs[0].value = ""
    inputs[1].value = ""
    inputs[2].value = ""

    while(counter>0){
        table.deleteRow(counter);
        counter--
    }

    
    


})
