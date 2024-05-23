
function handleKey(value) {
    console.log(value.key)

    let keyString = value.key;

    if (keyString.length > 1) {
        alert(`you clicked on ${keyString}`)
    } else {
        alert(`you click ${keyString} and it's ACII value is:${keyString.charCodeAt(0)} `)
    }

}

document.body.addEventListener("keydown", handleKey)