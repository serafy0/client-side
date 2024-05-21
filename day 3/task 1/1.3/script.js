function takeInput(title,regexRules,){
let input
    while(!input||!input.match(regexRules)){
        input = prompt(`please enter your ${title}`)
    }

    console.log(input)
    document.write(`your ${title} is ${input}`)
    document.write("<br/><br/>")
    return input
}


takeInput("name", /^[a-zA-Z]+$/)
takeInput("phone number", /^[0-9]{8}$/)
takeInput("mobile number",/^(010|011|012)[0-9]{8}$/ )
takeInput("email",/^\S+@\S+\.\S+$/)
