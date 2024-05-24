console.log("it works")

function getInput() {
    let input = document.getElementById("Answer")
    return input
}
var number = 0
var olderNumber = 0
var operator = ""
var result = 0;


function EnterNumber(newNum) {
    console.log(Number(newNum))
    let input = getInput()
    if (!isNaN(input.value)) {
        input.value += newNum
        number += newNum
    } else {
        number = newNum;
        input.value = newNum;

    }





}

function EnterOperator(newOp) {

    if (olderNumber != 0 && number != 0) {
        EnterEqual();
    }
    console.log(newOp)
    let input = getInput()
    input.value = newOp;
    operator = newOp
    olderNumber = number;


}


function EnterClear() {
    number = 0;
    olderNumber = 0;
    let input = getInput()
    input.value = 0
    console.log(input.value)



}


function EnterEqual() {
    let input = getInput()
    let lefthand = Number(olderNumber);
    let rightHang = Number(number)
    let result
    if (operator == "+") {
        result = lefthand + rightHang

    } else if (operator == "-") {
        result = lefthand - rightHang

    }
    else if (operator == "/") {
        result = lefthand / rightHang

    } else if (operator == "*") {
        result = lefthand * rightHang

    } else {
        result = input.value
    }
    input.value = result
    number = result
    operator = ""

}