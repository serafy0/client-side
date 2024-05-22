
function changeList() {
    let uL = document.getElementById("nav")
    console.log(uL)
    let navigation = document.getElementById("navigation")
    navigation.style.textAlign = "center"
    uL.style.listStyleType = "circle"
    uL.style.display = "inline-block"
    uL.style.textAlign = "left"



}


function changeImage() {
    let header = document.getElementById("header")
    header.style.textAlign = "right"

    let image = header.childNodes[1];
    let secondImage = image.cloneNode()
    // console.log(image)
    let center = document.getElementsByClassName("center")

    let footer = header.cloneNode();
    footer.id = "footer"
    console.log(footer)

    center[0].appendChild(footer)
    footer.appendChild(secondImage)
    footer.style.textAlign = "left"
}

function run() {
    changeList();
    changeImage()
}

run()