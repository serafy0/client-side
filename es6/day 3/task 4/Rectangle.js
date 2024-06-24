import Shape  from "./Shape.js"

export default class Rectangle extends Shape {
    constructor(height = 0, width = 0) {
        super();
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width
    }

    perimeter() {
        return 2 * (this.height * this.width)
    }

    get name() {
        return "Rectangle"
    }


}