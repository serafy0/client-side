alert("welcome to my site")


let userName;
let alphabeticOnly = /^[a-zA-Z]+$/
// !userName.match(alphabeticOnly)||

while(!userName  ||isNaN(userName)){
 userName = prompt("enter a valid your name")
}


// function isValidColor(strColor) {
//     var s = new Option().style;
//     s.color = strColor;
  
//     // return 'false' if color wasn't assigned
//     return s.color == strColor.toLowerCase();
//   }
let color;
while(!color || !color.match(alphabeticOnly)){
 color =prompt("enter red, green, blue or any valid color string ")
}

document.write(`<h2 style="color:${color}">welcome ${userName} </h2>`)