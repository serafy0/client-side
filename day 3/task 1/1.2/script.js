
function takeInput(){

let string

while(!string || string==""){
    string = prompt("enter a string")

}


let numberOfEs = string.toLowerCase().split('e').length -1

document.write(`${string} includes ${numberOfEs} e letters`)
}

takeInput();