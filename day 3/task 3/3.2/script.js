// alert("please add  numbers")
function takeInput() {
    let numberOfnumber
    while (!numberOfnumber || numberOfnumber < 2 || numberOfnumber > 20 || !Number.isInteger(numberOfnumber)) {
        numberOfnumber = Number(prompt("how many numbers do you want to add? choose an integer number betwewen 2 and 20"));
        console.log(numberOfnumber)
    }

    return numberOfnumber

}

function run() {

    let arraySize = takeInput() - 1;
    let array = new Array(arraySize);

    for (let i = 0; i <= arraySize; i++) {
        let num;
        while (!num || isNaN(num))
            num = Number(prompt(`please, enter number${i + 1}`));
        console.log(num)

        array[i] = num;

    }



    document.write(`your values: ${array}`);
    document.write("<br/>")
    document.write(`your values in des order: ${array.sort((a, b) => b - a)}`)
    document.write("<br/>")
    document.write(`your values in asc order: ${array.sort((a, b) => a - b)}`)
    document.write("<br/>")
}


function test(){
    let array = [1 ,10 ,2 ,20 , 5]
    console.log(`your values in des order: ${array.sort((a, b) => b - a)}`)
    console.log(`your values in asc order: ${array.sort()}`)
}

test()
run()
