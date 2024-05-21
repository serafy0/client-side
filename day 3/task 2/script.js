
function getAreaFromRadius() {
    let radius;
    while (!radius || isNaN(radius) || radius <= 0) {
        radius = Number(prompt(`please, enter the radius of a circle`));
    }
    alert(`the area is ${Math.PI * (Math.pow(radius, 2))}`)
    document.write(`the area is ${Math.PI * (Math.pow(radius, 2))}`)
    document.write("<br/><br/>")


}


function getSquareroot() {
    let num;
    while (!num || isNaN(num)) {
        num = Number(prompt(`enter any number`));
    }
    let squareRoot = Math.pow(num, 2)
    alert(`the square root of ${num} is ${squareRoot}`)
    document.write(`the square root of ${num} is ${squareRoot}}`)

}


function test() {
    getAreaFromRadius();
    getSquareroot();
}

test();