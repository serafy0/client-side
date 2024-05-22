// function checkFormat(dateString) {
//     console.log(userInput.length)
  

//         let newDate = new Date(dateObject.year, dateObject.month, dateObject.day);
//         if (newDate.getFullYear() == dateObject.year &&
//             newDate.getMonth() == dateObject.month &&
//             newDate.getDate() == dateObject.day) {
//             return newDate;
//         } else {
//             console.log(newDate)
//             return false;
//         }

    

// }



function takeDateAndReturnDay(datString){

    let newDate = new Date(datString)
    console.log(newDate)
    console.log(newDate.getDate())
    console.log(newDate.getMonth())
    console.log(newDate.getUTCDate())

    
    let dayName =  newDate.toLocaleString('en-us', {weekday:'long'})
    console.log(dayName)
    return  dayName

}

let date = promt("enter date ")

takeDateAndReturnDay("1999-10-15")

takeDateAndReturnDay("1999-09-31") //wrong date