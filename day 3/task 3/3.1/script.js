// alert("please add  numbers")
function takeInput() {
    let numberOfnumber
    while (!numberOfnumber || numberOfnumber < 2 || numberOfnumber > 20 || !Number.isInteger(numberOfnumber)) {
        numberOfnumber = Number(prompt("how many numbers do you want to calculate? choose an integer number betwewen 2 and 20"));
        console.log(numberOfnumber)
    }
    let arraySize = numberOfnumber - 1;
    let array = new Array(arraySize);

    for (let i = 0; i <= arraySize; i++) {
        let num;
        while (!num || isNaN(num))
            num = Number(prompt(`please, enter number${i + 1}`));
        console.log(num)

        array[i] = num;

    }
    console.log(array)

    return array

}

function calcualte(array) {

    let sum, multiplyResult, minusResult, divisionnResult
    sum = multiplyResult = minusResult = divisionnResult = array[0]
    let sumString = `${array[0]}`;
    for (let i = 1; i <= array.length-1; i++) {
        console.log(i, sum)
        sum += array[i]
        multiplyResult *= array[i]
        minusResult -= array[i]
        divisionnResult /= array[i]
        console.log(divisionnResult)
        sumString += `+${array[i]}`

    }

    document.write(`${array}`);
    document.write("<br/>")


    document.write(`${sumString}= ${sum}`)
    document.write("<br/>")

    document.write(`${sumString.replaceAll("+", "-")}= ${minusResult}`)
    document.write("<br/>")

    document.write(`${sumString.replaceAll("+", "/")}= ${divisionnResult}`)
    document.write("<br/>")
    document.write(`${sumString.replaceAll("+", "*")}= ${multiplyResult}`)
    document.write("<br/>")
    document.write("<br/>")

}

function test() {
    let input = takeInput();
    calcualte(input);

}

test()