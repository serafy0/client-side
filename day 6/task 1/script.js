function getTrueRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomColor() {
    let colors = ["red", "blue", "white", "cyan"]
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    return randomColor;
}


var counter=2

// let mainSquare =document.getElementById("1")

function createNewDiv(div) {
    console.log(div)
    // if(div.id=="1"){
    let newDiv = div.cloneNode();
    // newDiv.id = counter++
    // newDiv.onclick = 0;
    newDiv.style.backgroundColor = getTrueRandomColor();
    let container = document.getElementsByClassName("container")[0]
    container.appendChild(newDiv)
    // }


}



//div element with width and heigtt. others should not click