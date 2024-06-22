// let x = 3; 
// const x = 220;
//----------

// var x = 20;
// var x = "mai";

// var x = 10;

//----------
// for (var i=0;i<3;i++){
//     console.log(i)
// }
// console.log(i +" from outside")



// function test(){
//     var x = "hamada";
//     console.log(x);
// }

// test();
// console.log(x)

//----------
// let x = 10;

// //block scope
// for(let i=0;i<3;i++){
//     console.log(i);
// }
// console.log(i);
//----------

// (function (){
//     var x =10;
//     console.log(x);
// })();
// console.log(x) //undefined
//-----------------

// {
//     let  x = 10;
//     var  y = 10;

// }
// console.log(y) 
// console.log(x) //undefined

//----------
//hoisting
// console.log(x); //undefined
// var x; 

// console.log(y) //error not defined
// debugger;
// console.log(x) //can't access lexical declaration 'x' before initialization
// let x = 10; 

//temporal zone
//-----


// var x =10;

// function test(){
//     console.log(x)
//     let x = 20;
// }

// test()
// console.log(x)
//-------------

// function displayInfo(n){
//     let name;
//     const age =20;
//     if(n){
//          name = n;

//     }
//     console.log("my name is "+n+"my age is "+ age+" years")

// }
// displayInfo("mai")
// console.log(name)
//-------

// function test(x, y) {
//     return x + y
// }

// let test2 = x => x + 10
// console.log(test2(10))
//-------

// const obj = {
//     name:"ham"
// }
// obj.name = "ali"
// console.log(obj)
//---------

// const obj = {
//     name: "hamada",
//     display: ()=>{
//         console.log(this.name)
//     }
// }

// console.log(obj.display())
//

// this with arrow function

// const obj = {
//     name:"hamada",
//     age:20,
//     display: function(){
//         setTimeout(()=>{
//             console.log(this.name,this.age)
//         },2000)
//     }
// }

// console.log(obj.display())

//------
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// let newArr = [...arr1,...arr2];
// console.log(newArr)
// console.log(..."mai");
//------

// function test(...arr){
//     console.log(arguments);
//     //loop -> arr -> methods
// }
// test(10,20,30)
//------

// function test(x=0, y=0, z=0) {
//     let sum =  x + y + z
//     console.log(sum)
//     return sum;
// }
// test(10, 20, 30)
// test(10)

// const {firstName: myName} = {firstName:"lydia"}
// console.log(myName) 

//----
// const {firstName: myName} = {firstName:"lydia"}
// console.log(firstName) //undefined
//----

// const example = ({a,b,c})=>{
//     console.log(a,b,c)
// }
// example(0,1,2);
// example({a:0,c:2,b:1})
//-----

// let arr = [1998,2024,2000,1900];

// arr.filter((...args)=>{
//     console.log(args)
// })

//-----
// let arr = [1998,2024,2000,1900,0];

// let x = arr.filter((value,i,arr)=>{
//     return value>2000
// })

// let x2 = arr.filter((ele)=>(ele<1||ele>2000))
// console.log(x);
// console.log(arr);

// console.log(x2)
//------
// let arr = [1998,2024,2000,1900,0];
// let x = arr.find((ele,i,arr)=>{
//     console.log("hello")
// })
// console.log(x)
//-----
// let arr = [1998,2024,2000,1900,0];

// let x = arr.findIndex((ele,i,arr)=>{
//     return ele>2000
// })
// console.log(x)
//------

// let arr = [1998,2024,2000,1900,0]

// let x = arr.map(function(ele){
//     console.log("hello");
//     let element = `<h1>${ele}</h1>`
//     return element
// })

// console.log(x)
// console.log(arr)
//-----------

// let arr = [1998,2024,2000,1900,0]

// let x = arr.forEach(function(ele){
//     console.log("hello");
//     let element = `<h1>${ele}</h1>`
//     return element
// })

// console.log(x) //forEach returns undefined
// console.log(arr)
//---------

// let newArr = Array.from("mai")
// console.log(newArr)
//---------

let arr1 = [1,3,4];

let newArr = [...arr1];
console.log(newArr);

