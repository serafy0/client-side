
function CheckIfPali(s) {
    // for (let i = 0; i < s.length; i++) {
    //     console.log(s[i])
    //     if (s[i] != s[s.length - i - 1]) {
    //         return "not palindrome";
    //     }
    // }
    // return "palindrome";


    let newWord = s.split('').reverse().join('');
    console.log(newWord);
    console.log(s);
    if(s===newWord){
        return "palindrome";
    }else{
        return "not palindrome";
    }
}

function takeInput() {

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
}

takeInput()




