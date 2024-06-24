

let person = {
  name: "mohamed",
  age: 24,
  address: "portsaid"
}


let iterator = function* () {
  let keys = Object.keys(this);
  let counter = 0;
  while (counter < keys.length) {
    yield { prop: keys[counter], value: this[keys[counter]] }
    counter++
  }

}
person[Symbol.iterator] = iterator


for (ele of person) {
  console.log(ele)
}

let newObj = {
  random: "hello",
  work :"does this?"
}

newObj[Symbol.iterator] = iterator

for (ele of newObj) {
  console.log(ele)
}
