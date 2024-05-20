let radius;
while (!radius || isNaN(radius)||radius<=0)
    {
        radius = Number(prompt(`please, enter the radius of a circle`));
    }
alert(`the area is ${Math.PI*(Math.pow(radius,2))}`)



let num;
while (!num || isNaN(num))
    {
    num = Number(prompt(`enter any number`));
    }
alert(`the square root of ${num} is ${Math.pow(num,2)}`)


document.write(`the area is ${Math.PI*(Math.pow(radius,2))}`)
document.write("<br/><br/>")
document.write(`the square root of ${num} is ${Math.pow(num,2)}`)
