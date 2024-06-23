let object = {
    name: "mohamed",
    address: "portsaid",
    age: 25
}

function invalidString(s) {
    return `${s} is invalid because: `
}

let handler = {
    set(obj, prop, value) {
        if (prop === 'name') {
            if (typeof value !== 'string' || value.length != 7) {
                console.log(invalidString(value), "name must have 7 letters")
                return;
            }
        }

        if (prop === 'address' && typeof value != 'string') {
            console.log(invalidString(value), "address must be string")
            return;

        }

        if (prop === 'age') {
            if (typeof value != 'number') {
                console.log(invalidString(value), "age must be a number")
                return;
            } else if (value >= 25 || value <= 60) {
                console.log(invalidString(value), "age must be a number between 25 and 60")
                return;

            }
        }

        obj[prop] = value;
        return true;
    }
}

let person = new Proxy(object, handler)

person.age = 100;
person.address = 300;
person.address = "ismalia";
person.age = "old"
person.name = "ali"
person.name = "ibrahim"
person.age = 25

console.log(person)