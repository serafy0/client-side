


let input = -1;
let sum = 0
do {
    numInput = Number(prompt("please add a number"))
    while (isNaN(numInput)) {
        numInput = Number(prompt("you didn't enter a number.. press 0 if you want to stop"))

    }

    sum += numInput

} while (sum < 100 && numInput !== 0)

// alert(sum);
document.write(sum)