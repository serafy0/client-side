import Shape  from "./Shape.js";

export default class Circle extends Shape{
    constructor(radius) {
        super()
        this.radius = radius;
    }

    area(){
        return Math.PI * (this.radius^2)
    }

    parameter(){
        return 2 * Math.PI * this.radius
    }

    get name(){
        return "Circle"
    }
}