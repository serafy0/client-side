
let string

while(!string || string==""){
    string = prompt("enter a string")

}

let countE = new RegExp(/(e|E).*/)

let numberOfmatches = string.match(countE)

document.write(`${string} includes ${numberOfmatches.length} e letters`)