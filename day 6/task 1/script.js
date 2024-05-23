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




function createNewDiv(div) {
    let newDiv = div.cloneNode(true);

    newDiv.style.backgroundColor = randomColor();
    document.body.appendChild(newDiv)

}
