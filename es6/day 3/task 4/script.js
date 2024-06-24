import  Square  from "./Square.js";
import  Circle from "./Circle.js";

let square = new Square(5);
console.log(square);
console.log(square+ "")

let circle = new Circle(5);
console.log(circle);
console.log(circle+ "")
console.log(circle.parameter())

console.log(circle.area())