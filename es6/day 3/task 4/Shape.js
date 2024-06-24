export default class Shape {
    // name = Shape;
    area() {
        return 0;
    }

    perimeter() {
        return 0;
    }

    toString() {
        return `the area of this ${this.name} is ${this.area()} and the perimeter is${this.perimeter()}`
    }

    get name() {
        return "Shape"
    }
}