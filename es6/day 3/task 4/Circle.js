import Square  from "./Square.js";

export default class Circle extends Square{
    constructor(radius) {
        super(radius)
    }

    area(){
        return Math.PI * (this.height^2)
    }

    parameter(){
        return 2 * Math.PI * this.height
    }

    get name(){
        return "Circle"
    }
}