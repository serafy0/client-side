
function CheckIfPali(s) {
    for (let i = 0; i < s.length; i++) {
        console.log(s[i])
        if (s[i] != s[s.length - i - 1]) {
            return "not palindrome";
        }
    }
    return "palindrome";
}

let string

while (!string) {
    string = prompt("enter string");


}

let considerCase = prompt("enter Y if you want to consider case sensitivity")

let result;
if (considerCase.toLowerCase() == "y") {

    result = CheckIfPali(string)

} else {
    result = CheckIfPali(string.toLowerCase())
}



document.write(`${string} is ${result}`)




