

function checkFormat(userInput) {
    console.log(userInput.length)
    if (userInput.length != 10) {
        console.log(userInput.length);
        return false
    }
    else if (userInput[2] == '-' && userInput[5] == '-') {
        let newArray = userInput.split("-")
        for (let i = 0; i < newArray.length; i++) {
            if (isNaN(newArray[i])) {
                return false;
            }
        }

        let dateObject = { day: Number(newArray[0]), month: Number((newArray[1] - 1)), year: Number(newArray[2]) }

        let newDate = new Date(dateObject.year, dateObject.month, dateObject.day);
        if (newDate.getFullYear() == dateObject.year &&
            newDate.getMonth() == dateObject.month &&
            newDate.getDate() == dateObject.day) {
            return newDate;
        } else {
            console.log(newDate)
            return false;
        }

    }

}
function getDay(date){
    
    let dayName =  date.toLocaleString('en-us', {weekday:'long'})
    console.log("day is: ",dayName)
    return  dayName


}


function test() {
    let birth_date
    while (!birth_date|| birth_date != 0) {
        birth_date   = prompt("enter your birth date in the DD-MM-YYYY format");

        let userCorrect = checkFormat(birth_date);

        if (!userCorrect) {
            alert("your format is wrong")
        } else {
            console.log(userCorrect)
            getDay(userCorrect);
            alert(userCorrect.toString());

        }
    }
}



test()



