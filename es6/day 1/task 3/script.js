let fruits = ["apple",
    "strawberry",
    "banana",
    "orange",
    "mango"];

//a
let isString = fruits.every((ele)=>{
    return typeof ele === 'string'
})
console.log(isString)

//b
let someA = fruits.some((ele)=> ele[0]==='a')
console.log(someA)

//c
let filteredFruits= fruits.filter((ele)=>{
    return (ele[0]=== "b" || ele[0]==="s")
})
console.log(filteredFruits)

//d
let newFruits = fruits.map((ele)=>`I like ${ele}`)
console.log(newFruits);

//e
newFruits.forEach(ele => console.log(ele))